import { StatCard } from "./StatCard";
import { Section } from "./Section";

export function Stats() {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Бидний амжилт</h2>
        <p className="text-xl text-muted">
          Тоогоор илэрхийлсэн манай клубийн өсөлт
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard value={90} label="Идэвхтэй гишүүд" suffix="+" />
        <StatCard value={15} label="Жил" suffix="+" />
        <StatCard value={50} label="Төсөл" suffix="+" />
        <StatCard value={20} label="Сургалтууд" suffix="+" />
      </div>
    </Section>
  );
}
