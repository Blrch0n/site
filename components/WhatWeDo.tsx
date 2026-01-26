import { Card } from "./Card";
import { Section } from "./Section";

const missions = [
  {
    icon: "📚",
    title: "Суралцах",
    description:
      "Шинэ технологи, хэл, framework-ийг эзэмших, семинар, workshop-д оролцох",
  },
  {
    icon: "🎨",
    title: "Дизайн",
    description: "UI/UX дизайн, брэнд, график дизайныг судлах, бүтээмж гаргах",
  },
  {
    icon: "⚙️",
    title: "Инженерчлэл",
    description: "Систем зохиох, программ бичих, бодит асуудлыг шийдвэрлэх",
  },
  {
    icon: "🤝",
    title: "Хамтын ажиллагаа",
    description: "Баг байгуулж, төсөл хөтөлж, туршлага солилцох",
  },
  {
    icon: "🏆",
    title: "Уралдаан",
    description: "Hackathon, олимпиад, тэмцээнд оролцож, шагнал хүртэх",
  },
  {
    icon: "🌱",
    title: "Хөгжил",
    description: "Мэргэжлийн болон хувийн ур чадвараа өргөжүүлэх",
  },
];

export function WhatWeDo() {
  return (
    <Section id="about" className="surface">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Бид юу хийдэг вэ?
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Клубийн гол зорилго бол технологийн чиглэлээр сурч, бүтээж, хөгжих
          орчин бүрдүүлэх явдал юм
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission, index) => (
          <Card key={index} hover>
            <div className="text-4xl mb-4">{mission.icon}</div>
            <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
            <p className="text-muted">{mission.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
