"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  AdaptiveDpr,
  PerformanceMonitor,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

// Premium geometric model with animated "energy core" shader effect
function GeometricModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
      // Pulsing emissive intensity
      const material = coreRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity =
        0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <>
      {/* Main geometric shape */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#5B5FFF"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
          emissive="#5B5FFF"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Animated energy core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#00D4FF"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
          emissive="#00D4FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#E94FFF"
          metalness={1}
          roughness={0}
          emissive="#E94FFF"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Accent particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2.2;
        const colors = ["#00D4FF", "#5B5FFF", "#9B4FFF"];
        const color = colors[i % colors.length];
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 0.2,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={1.2}
            />
          </mesh>
        );
      })}
    </>
  );
}

function Model() {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("hero");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotation.current = {
        x: y * 0.1,
        y: x * 0.15,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Smooth lerp for mouse parallax
    currentRotation.current.x +=
      (targetRotation.current.x - currentRotation.current.x) * 0.05;
    currentRotation.current.y +=
      (targetRotation.current.y - currentRotation.current.y) * 0.05;

    groupRef.current.rotation.x = currentRotation.current.x;
    groupRef.current.rotation.y =
      currentRotation.current.y + state.clock.elapsedTime * 0.08;

    // Idle float animation (breathing)
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <GeometricModel />
    </group>
  );
}

function Scene({ onDprChange }: { onDprChange: (dpr: number) => void }) {
  const { camera } = useThree();

  useEffect(() => {
    // Minimal scroll interaction
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const progress = Math.min(scrollY / heroHeight, 1);

      if (camera && progress < 0.3) {
        camera.position.y = progress * 0.2;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

      {/* Lighting setup optimized for rim lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#E94FFF" />

      {/* Rim/back light for neon edge effect */}
      <pointLight position={[0, 0, -5]} intensity={2} color="#5B5FFF" />
      <spotLight
        position={[0, 5, 0]}
        intensity={1}
        color="#5B5FFF"
        angle={0.6}
        penumbra={1}
      />

      <Model />
      <Environment preset="city" />

      {/* Postprocessing effects */}
      <EffectComposer>
        <Bloom
          intensity={0.6}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>

      {/* Performance monitoring - unified DPR state */}
      <PerformanceMonitor
        onIncline={() => onDprChange(2)}
        onDecline={() => onDprChange(1)}
      />
      <AdaptiveDpr pixelated />
    </>
  );
}

export default function Scene3D() {
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    // Cap DPR based on device
    const maxDpr = Math.min(2, window.devicePixelRatio);
    setDpr(window.innerWidth < 768 ? 1 : maxDpr);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        dpr={dpr}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows={false}
        frameloop="always" // Changed to always for continuous animation
      >
        <Scene onDprChange={setDpr} />
      </Canvas>
    </div>
  );
}
