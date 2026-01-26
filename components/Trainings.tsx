import { Card } from "./Card";
import { Badge } from "./Badge";
import { Section } from "./Section";

const trainings = [
  {
    title: "Web Development",
    level: "Анхан",
    duration: "8 долоо хоног",
    topics: ["HTML/CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "UI/UX Design",
    level: "Анхан",
    duration: "6 долоо хоног",
    topics: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
  {
    title: "Backend Development",
    level: "Дунд",
    duration: "10 долоо хоног",
    topics: ["Node.js", "Databases", "API Design", "Authentication"],
  },
  {
    title: "Mobile Development",
    level: "Дунд",
    duration: "8 долоо хоног",
    topics: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    title: "Data Science",
    level: "Ахисан",
    duration: "12 долоо хоног",
    topics: ["Python", "Pandas", "ML", "Visualization"],
  },
  {
    title: "DevOps & Cloud",
    level: "Ахисан",
    duration: "10 долоо хоног",
    topics: ["Docker", "Kubernetes", "AWS", "CI/CD"],
  },
];

export function Trainings() {
  return (
    <Section id="trainings" className="surface">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Сургалтууд</h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Анхнаас эхлээд ахисан түвшин хүртэл олон төрлийн сургалт зохион
          байгуулдаг
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainings.map((training, index) => (
          <Card key={index} hover>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{training.title}</h3>
              <Badge
                variant={training.level === "Анхан" ? "accent" : "default"}
              >
                {training.level}
              </Badge>
            </div>

            <div className="text-muted mb-4">⏱️ {training.duration}</div>

            <div className="flex flex-wrap gap-2">
              {training.topics.map((topic, i) => (
                <Badge key={i}>{topic}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
