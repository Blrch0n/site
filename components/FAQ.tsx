"use client";

import { useState } from "react";
import { Section } from "./Section";

const faqs = [
  {
    question: "Хэн элсэх боломжтой вэ?",
    answer:
      "Технологид сонирхолтой бүх оюутан элсэх боломжтой. Өмнөх туршлага шаардлагагүй, зөвхөн суралцах хүсэл л хангалттай.",
  },
  {
    question: "Гишүүнчлэлийн хураамж байдаг уу?",
    answer:
      "Үгүй, бидний клуб үнэгүй. Зарим арга хэмжээ, сургалт бага хэмжээний хураамжтай байж болох боловч ихэнх үйл ажиллагаа үнэгүй.",
  },
  {
    question: "Сургалтууд хэзээ явагддаг вэ?",
    answer:
      "Сургалтууд улирал бүр нээгддэг. Ихэвчлэн долоо хоног бүрийн амралтын өдрүүдэд 2-3 цагийн хичээлтэй байдаг.",
  },
  {
    question: "Яаж элсэх вэ?",
    answer:
      "Манай Facebook хуудас эсвэл вэбсайтаар дамжуулан бүртгүүлнэ. Улирал бүрийн эхэнд элсэлт нээгддэг.",
  },
  {
    question: "Ямар төсөл дээр ажиллах вэ?",
    answer:
      "Та өөрийн сонирхсон төсөл дээр ажиллах эсвэл клубийн төслүүдэд нэгдэх боломжтой. Бид вэб, мобайл апп, AI, IoT гэх мэт олон төрлийн төсөл хийдэг.",
  },
  {
    question: "Англи хэлний мэдлэг шаардлагатай юу?",
    answer:
      "Англи хэл мэдэх нь давуу тал боловч албан ёсны шаардлага биш. Ихэнх сургалт, материал монгол хэл дээр байдаг.",
  },
  {
    question: "Компьютер байх ёстой юу?",
    answer:
      "Тийм, хувийн зөөврийн компьютертэй байх хэрэгтэй. Хэрэв танд компьютер байхгүй бол клуб танд туслах арга замыг олохыг хичээнэ.",
  },
  {
    question: "Хэдэн удаа уулзалт хийдэг вэ?",
    answer:
      "Долоо хоног бүр нийтлэг уулзалт хийдэг. Үүнээс гадна сургалт, workshop, hackathon зэрэг тусгай арга хэмжээ байнга зохион байгуулагддаг.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="frame overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center gap-4 text-left hover:bg-[var(--border)] transition-colors"
      >
        <span className="font-semibold">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 text-muted">{answer}</div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <Section id="faq" className="surface">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Түгээмэл асуултууд
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Клубийн талаар танд байж болох асуултууд болон хариултууд
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  );
}
