import { Section } from "./Section";

const images = [
  { emoji: "💻", label: "Hackathon 2025" },
  { emoji: "🎓", label: "Workshop" },
  { emoji: "🏆", label: "Шагнал" },
  { emoji: "👥", label: "Team Building" },
  { emoji: "🚀", label: "Төсөл хамгаалалт" },
  { emoji: "📸", label: "Tech Talk" },
  { emoji: "🎉", label: "Celebration" },
  { emoji: "🌟", label: "Demo Day" },
  { emoji: "💡", label: "Innovation" },
];

export function Community() {
  return (
    <Section id="community">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Манай нийгэмлэг</h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Эелдэг, туслалцаа үзэх, бүтээлч орчинд хамт суралцаж, хөгжиж байгаа
          бидний зургууд
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="frame aspect-square flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all cursor-pointer group"
          >
            <div className="text-5xl group-hover:scale-110 transition-transform">
              {item.emoji}
            </div>
            <div className="text-sm font-medium text-muted">{item.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
