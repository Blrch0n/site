import { Button } from "./Button";
import { Section } from "./Section";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="pt-32 lg:pt-40">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="surface px-4 py-2 rounded-full text-sm font-medium border border-custom">
              🎓 2009 оноос хойш
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Технологийн
            <span className="accent block">Хүчирхэг</span>
            Нийгэмлэг
          </h1>

          <p className="text-xl text-muted max-w-xl">
            Sys&CoTech нь технологи, инженерчлэл, дизайныг судалж, хөгжүүлэх
            оюутны клуб юм. Бид хамтдаа суралцаж, бүтээж, өсөж томордог.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-lg px-8 py-4">
              Элсэх
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              Холбогдох
            </Button>
          </div>

          {/* Mini proof */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div>
              <div className="font-bold text-2xl accent">90+</div>
              <div className="text-sm text-muted">Гишүүд</div>
            </div>
            <div>
              <div className="font-bold text-2xl accent">15+</div>
              <div className="text-sm text-muted">Жил</div>
            </div>
            <div>
              <div className="font-bold text-2xl accent">50+</div>
              <div className="text-sm text-muted">Төсөл</div>
            </div>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div className="relative">
          <div className="frame overflow-hidden aspect-square relative group">
            <div className="absolute inset-0 accent-bg opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="flex items-center justify-center h-full">
              <svg
                className="w-2/3 h-2/3 opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.86-1.12-6.5-4.75-6.5-8.5V8.3l6.5-3.55 6.5 3.55v3.7c0 3.75-2.64 7.38-6.5 8.5z" />
                <path d="M12 6L6.5 9v4c0 3.25 2.17 6.3 5.5 7.25 3.33-.95 5.5-4 5.5-7.25V9L12 6z" />
              </svg>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 frame p-4 animate-bounce">
            <div className="text-2xl">💻</div>
          </div>
          <div
            className="absolute -bottom-4 -left-4 frame p-4 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-2xl">🚀</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
