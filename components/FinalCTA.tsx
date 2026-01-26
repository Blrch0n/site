import { Button } from "./Button";
import { Section } from "./Section";

export function FinalCTA() {
  return (
    <Section>
      <div className="frame p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 accent-bg opacity-5" />

        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Бидэнтэй нэгдэхэд бэлэн үү?
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
            Технологийн салбарт ирээдүйгээ тогтоож, хамтдаа суралцаж, бүтээхэд
            бэлэн бол манайтай нэгдээрэй!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4">
              Одоо элсэх
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              Дэлгэрэнгүй мэдээлэл
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
