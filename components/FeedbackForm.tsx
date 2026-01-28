"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "contact@syscotech.club";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset errors
    const newErrors = {
      email: "",
      subject: "",
      message: "",
    };

    // Validate required fields
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Check if there are any errors
    if (newErrors.email || newErrors.subject || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    // Clear errors
    setErrors(newErrors);
    setIsSubmitting(true);

    // Construct mailto link
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name || "Not provided"}\nReply-to: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a brief delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      <h4 className="text-lg font-semibold text-white/90">Send Feedback</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field (Optional) */}
        <div>
          <label
            htmlFor="name"
            className="hud-label block text-xs font-medium text-white/60 mb-2"
          >
            Name <span className="text-white/40">(optional)</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-white/2 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/40 focus:border-[var(--accent-blue)]/40 transition-all"
            placeholder="Your name"
          />
        </div>

        {/* Email Field (Required) */}
        <div>
          <label
            htmlFor="email"
            className="hud-label block text-xs font-medium text-white/60 mb-2"
          >
            Reply-to Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            className={`w-full px-4 py-2.5 rounded-xl bg-white/2 border ${
              errors.email
                ? "border-red-400/60 focus:ring-red-400/40"
                : "border-white/10 focus:ring-[var(--accent-blue)]/40 focus:border-[var(--accent-blue)]/40"
            } text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all`}
            placeholder="your.email@example.com"
            required
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Subject Field (Required) */}
        <div>
          <label
            htmlFor="subject"
            className="hud-label block text-xs font-medium text-white/60 mb-2"
          >
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: "" });
            }}
            className={`w-full px-4 py-2.5 rounded-xl bg-white/2 border ${
              errors.subject
                ? "border-red-400/60 focus:ring-red-400/40"
                : "border-white/10 focus:ring-[var(--accent-blue)]/40 focus:border-[var(--accent-blue)]/40"
            } text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all`}
            placeholder="What's this about?"
            required
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
          )}
        </div>

        {/* Message Field (Required) */}
        <div>
          <label
            htmlFor="message"
            className="hud-label block text-xs font-medium text-white/60 mb-2"
          >
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: "" });
            }}
            rows={4}
            className={`w-full px-4 py-2.5 rounded-xl bg-white/2 border ${
              errors.message
                ? "border-red-400/60 focus:ring-red-400/40"
                : "border-white/10 focus:ring-[var(--accent-blue)]/40 focus:border-[var(--accent-blue)]/40"
            } text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all resize-none`}
            placeholder="Tell us what you think..."
            required
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/2 text-white font-medium text-sm hover:border-[var(--accent-blue)]/40 hover:bg-white/4 hover:shadow-[0_0_20px_var(--panel-glow)] transition-all duration-200 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Send size={16} />
            {isSubmitting ? "Opening email client…" : "Send Feedback"}
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-[var(--accent-cyan)]/10 via-[var(--accent-blue)]/10 to-[var(--accent-violet)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </form>
    </motion.div>
  );
}
