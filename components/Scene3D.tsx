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

// Section-based color schemes
const sectionColors: Record<
  string,
  { core: string; outer: string; ring: string; bloom: number }
> = {
  hero: { core: "#00D4FF", outer: "#5B5FFF", ring: "#E94FFF", bloom: 0.55 },
  about: { core: "#00D4FF", outer: "#5B5FFF", ring: "#9B4FFF", bloom: 0.5 },
  pillars: { core: "#5B5FFF", outer: "#9B4FFF", ring: "#E94FFF", bloom: 0.6 },
  programs: { core: "#9B4FFF", outer: "#E94FFF", ring: "#00D4FF", bloom: 0.58 },
  events: { core: "#E94FFF", outer: "#FFAA00", ring: "#5B5FFF", bloom: 0.65 },
  faq: { core: "#00D4FF", outer: "#9B4FFF", ring: "#5B5FFF", bloom: 0.52 },
  contact: { core: "#5B5FFF", outer: "#00D4FF", ring: "#E94FFF", bloom: 0.55 },
};

function GeometricModel({ activeSection }: { activeSection: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const colors = sectionColors[activeSection] || sectionColors.hero;
  const speedMultiplier =
    activeSection === "events" ? 1.5 : activeSection === "faq" ? 0.7 : 1;

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08 * speedMultiplier;
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.12;

      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.color.set(colors.outer);
      material.emissive.set(colors.outer);
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.15 * speedMultiplier;
      const material = coreRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.45 + Math.sin(t * 2) * 0.18;
      material.color.set(colors.core);
      material.emissive.set(colors.core);
    }

    if (ringRef.current) {
      const material = ringRef.current.material as THREE.MeshStandardMaterial;
      material.color.set(colors.ring);
      material.emissive.set(colors.ring);
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color={colors.outer}
          metalness={0.95}
          roughness={0.06}
          envMapIntensity={2}
          emissive={colors.outer}
          emissiveIntensity={0.25}
        />
      </mesh>

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color={colors.core}
          metalness={0.9}
          roughness={0.12}
          transparent
          opacity={0.9}
          emissive={colors.core}
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.05, 16, 100]} />
        <meshStandardMaterial
          color={colors.ring}
          metalness={1}
          roughness={0}
          emissive={colors.ring}
          emissiveIntensity={0.55}
        />
      </mesh>

      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2.2;
        const colorOptions = [colors.core, colors.outer, colors.ring];
        const color = colorOptions[i % colorOptions.length];

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
              emissiveIntensity={1.1}
            />
          </mesh>
        );
      })}
    </>
  );
}

function Model({
  activeSection,
  mousePosition,
}: {
  activeSection: string;
  mousePosition: { x: number; y: number };
}) {
  const groupRef = useRef<THREE.Group>(null);
  const current = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!groupRef.current) return;

    // Smooth lerp towards mouse position
    current.current.x += (mousePosition.x - current.current.x) * 0.05;
    current.current.y += (mousePosition.y - current.current.y) * 0.05;

    groupRef.current.rotation.x = current.current.x;
    groupRef.current.rotation.y = current.current.y + t * 0.08;
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <GeometricModel activeSection={activeSection} />
    </group>
  );
}

function Scene({
  activeSection,
  mousePosition,
}: {
  activeSection: string;
  mousePosition: { x: number; y: number };
}) {
  const { camera } = useThree();
  const colors = sectionColors[activeSection] || sectionColors.hero;

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      if (progress < 0.3) camera.position.y = progress * 0.2;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color={colors.core} />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.8}
        color={colors.ring}
      />
      <pointLight position={[0, 0, -5]} intensity={2} color={colors.outer} />
      <spotLight
        position={[0, 5, 0]}
        intensity={1}
        color={colors.outer}
        angle={0.6}
        penumbra={1}
      />

      <Model activeSection={activeSection} mousePosition={mousePosition} />
      <Environment preset="city" />

      <EffectComposer>
        <Bloom
          intensity={colors.bloom}
          luminanceThreshold={0.32}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.12} darkness={0.5} />
      </EffectComposer>

      <PerformanceMonitor onIncline={() => {}} onDecline={() => {}} />
      <AdaptiveDpr pixelated />
    </>
  );
}

export default function Scene3D({
  activeSection = "hero",
}: {
  activeSection?: string;
}) {
  const maxDpr =
    typeof window !== "undefined"
      ? Math.min(2, window.devicePixelRatio || 1)
      : 1.5;
  const initialDpr =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : maxDpr;
  const [dpr] = useState(initialDpr);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      setMousePosition({ x: y * 0.1, y: x * 0.15 });
    };

    container.addEventListener("pointermove", onMove);
    return () => container.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        dpr={dpr}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows={false}
        frameloop="always"
      >
        <Scene activeSection={activeSection} mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
