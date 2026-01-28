"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Copy, Facebook, Phone } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  major: string;
  interest: string;
  message: string;
}

const interestOptions = [
  "Programming",
  "UI/UX Design",
  "Web Development",
  "Competitive Programming",
  "General Exploration",
];

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    major: "",
    interest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const facebookLink = "https://www.facebook.com/syscotech";
  const phoneNumber = "+976 9911-1234"; // Placeholder

  useEffect(() => {
    if (isOpen && !isSubmitted) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isSubmitted]);

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          major: "",
          interest: "",
          message: "",
        });
        setErrors({});
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.major.trim()) {
      newErrors.major = "Major is required";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select an interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Save to localStorage
    const submissions = JSON.parse(
      localStorage.getItem("joinSubmissions") || "[]",
    );
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("joinSubmissions", JSON.stringify(submissions));

    setIsSubmitted(true);
  };

  const handleCopy = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-[250] flex items-center justify-center px-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-lg" />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Corner brackets */}
          <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-l-2 border-t-2 border-[#5B5FFF]/40" />
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-r-2 border-t-2 border-[#5B5FFF]/40" />
          <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-l-2 border-b-2 border-[#5B5FFF]/40" />
          <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-r-2 border-b-2 border-[#5B5FFF]/40" />

          <div className="bg-[rgba(7,8,11,0.98)] backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="relative flex items-center justify-between px-6 py-5 border-b border-white/8">
              <div>
                <h2 className="text-2xl font-bold">
                  {isSubmitted ? "Welcome!" : "Join Sys&CoTech"}
                </h2>
                <p className="text-sm text-white/50 mt-1">
                  {isSubmitted
                    ? "Application received successfully"
                    : "Start your innovation journey"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Full Name{" "}
                      <span className="text-[var(--accent-pink)]">*</span>
                    </label>
                    <input
                      ref={inputRef}
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/[0.02] border ${
                        errors.name
                          ? "border-[var(--accent-pink)]/40"
                          : "border-white/10"
                      } text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-white/[0.04] transition-all`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Email <span className="text-[var(--accent-pink)]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/[0.02] border ${
                        errors.email
                          ? "border-[var(--accent-pink)]/40"
                          : "border-white/10"
                      } text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-white/[0.04] transition-all`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Major */}
                  <div>
                    <label
                      htmlFor="major"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Major <span className="text-[var(--accent-pink)]">*</span>
                    </label>
                    <input
                      id="major"
                      type="text"
                      value={formData.major}
                      onChange={(e) =>
                        setFormData({ ...formData, major: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/[0.02] border ${
                        errors.major
                          ? "border-[var(--accent-pink)]/40"
                          : "border-white/10"
                      } text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-white/[0.04] transition-all`}
                      placeholder="e.g., Computer Science"
                    />
                    {errors.major && (
                      <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                        {errors.major}
                      </p>
                    )}
                  </div>

                  {/* Interest */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Primary Interest{" "}
                      <span className="text-[var(--accent-pink)]">*</span>
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/[0.02] border ${
                        errors.interest
                          ? "border-[var(--accent-pink)]/40"
                          : "border-white/10"
                      } text-white focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-white/[0.04] transition-all`}
                    >
                      <option value="" className="bg-[#07080B]">
                        Select an area
                      </option>
                      {interestOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-[#07080B]"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-white/[0.04] transition-all resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[var(--accent-blue)]/30 bg-[var(--accent-blue)]/10 text-white font-medium hover:border-[var(--accent-blue)]/50 hover:bg-[var(--accent-blue)]/20 hover:shadow-[0_0_24px_var(--panel-glow)] transition-all duration-200 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Submit Application</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)]/20 via-[var(--accent-cyan)]/20 to-[var(--accent-blue)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </form>
              ) : (
                <div className="space-y-5">
                  {/* Success Icon */}
                  <div className="flex justify-center">
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30">
                      <CheckCircle className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                  </div>

                  {/* Success Message */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      Application Received!
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Thanks for your interest, {formData.name}! Connect with us
                      through Facebook or call to complete your registration.
                    </p>
                  </div>

                  {/* Contact Actions */}
                  <div className="space-y-3 pt-4">
                    <button
                      onClick={() => handleCopy(facebookLink, "facebook")}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#5B5FFF]/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#5B5FFF]/10 border border-[#5B5FFF]/20 group-hover:border-[#5B5FFF]/40 transition-all">
                          <Facebook className="w-5 h-5 text-[#5B5FFF]" />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium">
                            Visit on Facebook
                          </div>
                          <div className="text-xs text-white/40">
                            @syscotech
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {copiedItem === "facebook" && (
                          <span className="text-xs text-[#00D4FF]">
                            Copied!
                          </span>
                        )}
                        <Copy className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
                      </div>
                    </button>

                    <button
                      onClick={() => handleCopy(phoneNumber, "phone")}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#00D4FF]/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-all">
                          <Phone className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium">Call Us</div>
                          <div className="text-xs text-white/40">
                            {phoneNumber}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {copiedItem === "phone" && (
                          <span className="text-xs text-[#00D4FF]">
                            Copied!
                          </span>
                        )}
                        <Copy className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
                      </div>
                    </button>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="w-full mt-4 px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.02] text-white/70 font-medium hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
