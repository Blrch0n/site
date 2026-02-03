"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { CheckCircle, Copy, Facebook, Phone } from "lucide-react";
import Footer from "@/components/Footer";

interface FormData {
  name: string;
  email: string;
  major: string;
  interest: string;
  message: string;
  agreedToTerms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  major?: string;
  interest?: string;
  agreedToTerms?: boolean;
}

const interestOptions = [
  "Programming",
  "UI/UX Design",
  "Web Development",
  "Competitive Programming",
  "General Exploration",
];

export default function JoinPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    major: "",
    interest: "",
    message: "",
    agreedToTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const facebookLink = "https://www.facebook.com/syscotech";
  const phoneNumber = "+976 9911-1234";

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

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

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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

  return (
    <>
      <main className="relative overflow-x-hidden min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-32">
          
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl" />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
              Join Sys&CoTech
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)]">
              Start your innovation journey with us
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                      >
                        Full Name{" "}
                        <span className="text-[var(--accent-pink)]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border ${
                          errors.name
                            ? "border-[var(--accent-pink)]/40"
                            : "border-[var(--border-line)]"
                        } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                      >
                        Email{" "}
                        <span className="text-[var(--accent-pink)]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border ${
                          errors.email
                            ? "border-[var(--accent-pink)]/40"
                            : "border-[var(--border-line)]"
                        } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="major"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                      >
                        Major{" "}
                        <span className="text-[var(--accent-pink)]">*</span>
                      </label>
                      <input
                        id="major"
                        type="text"
                        value={formData.major}
                        onChange={(e) =>
                          setFormData({ ...formData, major: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border ${
                          errors.major
                            ? "border-[var(--accent-pink)]/40"
                            : "border-[var(--border-line)]"
                        } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all`}
                        placeholder="e.g., Computer Science"
                      />
                      {errors.major && (
                        <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                          {errors.major}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
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
                        className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border ${
                          errors.interest
                            ? "border-[var(--accent-pink)]/40"
                            : "border-[var(--border-line)]"
                        } text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all`}
                      >
                        <option value="" className="bg-[var(--bg-base)]">
                          Select an area
                        </option>
                        {interestOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="bg-[var(--bg-base)]"
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

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all resize-none"
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    <div className="bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                        Terms and Conditions
                      </h3>
                      <div className="text-sm text-[var(--text-secondary)] space-y-2 max-h-48 overflow-y-auto pr-2">
                        <p>By joining Sys&CoTech, you agree to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>
                            Actively participate in club activities and events
                          </li>
                          <li>
                            Respect all members and maintain a collaborative
                            environment
                          </li>
                          <li>
                            Follow the club&apos;s code of conduct and
                            guidelines
                          </li>
                          <li>Contribute positively to the tech community</li>
                          <li>
                            Provide accurate information in your application
                          </li>
                          <li>
                            Allow the club to contact you regarding events and
                            opportunities
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 flex items-start gap-3">
                        <input
                          id="terms"
                          type="checkbox"
                          checked={formData.agreedToTerms}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              agreedToTerms: e.target.checked,
                            })
                          }
                          className="mt-1 w-4 h-4 rounded border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/40"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-[var(--text-secondary)]"
                        >
                          I have read and agree to the terms and conditions{" "}
                          <span className="text-[var(--accent-pink)]">*</span>
                        </label>
                      </div>
                      {errors.agreedToTerms && (
                        <p className="text-xs text-[var(--accent-pink)] mt-2">
                          You must agree to the terms and conditions
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[var(--accent-blue)]/30 bg-[var(--accent-blue)]/10 text-[var(--text-primary)] font-medium hover:border-[var(--accent-blue)]/50 hover:bg-[var(--accent-blue)]/20 hover:shadow-[0_0_24px_var(--panel-glow)] transition-all duration-200 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Submit Application</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)]/20 via-[var(--accent-cyan)]/20 to-[var(--accent-blue)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </form>
                ) : (
                  <div className="space-y-5">
                    <div className="flex justify-center">
                      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30">
                        <CheckCircle className="w-8 h-8 text-[#00D4FF]" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                        Application Received!
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        Thanks for your interest, {formData.name}! Connect with
                        us through Facebook or call to complete your
                        registration.
                      </p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <button
                        onClick={() => handleCopy(facebookLink, "facebook")}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] hover:border-[#5B5FFF]/30 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#5B5FFF]/10 border border-[#5B5FFF]/20 group-hover:border-[#5B5FFF]/40 transition-all">
                            <Facebook className="w-5 h-5 text-[#5B5FFF]" />
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-medium text-[var(--text-primary)]">
                              Visit on Facebook
                            </div>
                            <div className="text-xs text-[var(--text-muted)]">
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
                          <Copy className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors" />
                        </div>
                      </button>

                      <button
                        onClick={() => handleCopy(phoneNumber, "phone")}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] hover:border-[#00D4FF]/30 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-all">
                            <Phone className="w-5 h-5 text-[#00D4FF]" />
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-medium text-[var(--text-primary)]">
                              Call Us
                            </div>
                            <div className="text-xs text-[var(--text-muted)]">
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
                          <Copy className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors" />
                        </div>
                      </button>
                    </div>

                    <Link
                      href="/"
                      className="block w-full mt-4 px-5 py-2.5 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-surface-hover)] transition-all text-center"
                    >
                      Back to Home
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
