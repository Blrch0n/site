"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionFrame from "./SectionFrame";
import { SectionHeader } from "./FAQ";
import FeedbackForm from "./FeedbackForm";

export default function Feedback() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="feedback" className="relative overflow-hidden">
      <SectionFrame index="07" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-(--accent-blue) opacity-3 blur-[180px] rounded-full" />
        </div>

        <div className="relative">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Send Us Your Feedback"
            subtitle="Have questions, suggestions, or just want to say hello? We'd love to hear from you."
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto"
          >
            <FeedbackForm />
          </motion.div>
        </div>
      </SectionFrame>
    </section>
  );
}
