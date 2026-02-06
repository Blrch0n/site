"use client";

import Link from "next/link";
import { useState, FormEvent, useCallback } from "react";
import {
  CheckCircle,
  Copy,
  Facebook,
  Phone,
  ArrowRight,
  Plus,
  Trash2,
} from "lucide-react";
import Footer from "@/components/Footer";

type SkillLevel = "Маш сайн" | "Сайн" | "Дунд" | "Анхан шат";
type PersonalSkillValue = 1 | 2 | 3 | 4 | "";

interface EducationSchool {
  schoolName: string;
  startYear: string;
  transferYear: string;
  graduationYear: string;
  gpa: string;
}

interface Language {
  languageName: string;
  listening: SkillLevel | "";
  speaking: SkillLevel | "";
  reading: SkillLevel | "";
  writing: SkillLevel | "";
  overallLevel: string;
}

interface ComputerSkill {
  programName: string;
  learnedHow: string;
  level: SkillLevel | "";
}

interface Talent {
  type: string;
  years: string;
  rankOrTitle: string;
}

interface Award {
  organization: string;
  awardName: string;
  awardDate: string;
}

interface MembershipFormData {
  personal: {
    lastName: string;
    firstName: string;
    phone: string;
    emergencyPhone: string;
    course: string;
    gpa: string;
    birthDate: string;
    email: string;
    address: string;
    gender: "Эрэгтэй" | "Эмэгтэй" | "Бусад" | "";
    family: string;
    major: string;
    studentCode: string;
  };
  educationSchools: EducationSchool[];
  languages: Language[];
  computerSkills: ComputerSkill[];
  personalSkills: {
    professional: PersonalSkillValue;
    workExecution: PersonalSkillValue;
    verbalExpression: PersonalSkillValue;
    writtenExpression: PersonalSkillValue;
    leadership: PersonalSkillValue;
    decisionMaking: PersonalSkillValue;
    innovation: PersonalSkillValue;
    creativity: PersonalSkillValue;
    independentWork: PersonalSkillValue;
    teamwork: PersonalSkillValue;
    responsibility: PersonalSkillValue;
    interpersonal: PersonalSkillValue;
  };
  talents: Talent[];
  awards: Award[];
  signatureName: string;
  truthConfirm: boolean;
  agreedToTerms: boolean;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const FACEBOOK_LINK = "https://www.facebook.com/syscotech";
const PHONE_NUMBER = "+976 9911-1234";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SKILL_LEVELS: SkillLevel[] = ["Маш сайн", "Сайн", "Дунд", "Анхан шат"];

const PERSONAL_SKILLS_CONFIG = [
  { id: "professional", label: "Мэргэжлийн" },
  { id: "workExecution", label: "Ажил гүйцэтгэх" },
  { id: "verbalExpression", label: "Санал бодлоо амаар илэрхийлэх" },
  { id: "writtenExpression", label: "Санал бодлоо бичгээр илэрхийлэх" },
  { id: "leadership", label: "Удирдан зохион байгуулах" },
  { id: "decisionMaking", label: "Оновчтой шийдвэр гаргах" },
  { id: "innovation", label: "Өөрчлөлт шинэчлэл хийх" },
  { id: "creativity", label: "Бүтээлч санал дэвшүүлэх" },
  { id: "independentWork", label: "Бие дааж ажиллах" },
  { id: "teamwork", label: "Хамтарч ажиллах" },
  { id: "responsibility", label: "Хариуцлага хүлээх" },
  { id: "interpersonal", label: "Хүнтэй харьцах" },
] as const;

export default function JoinPage() {
  const [formData, setFormData] = useState<MembershipFormData>({
    personal: {
      lastName: "",
      firstName: "",
      phone: "",
      emergencyPhone: "",
      course: "",
      gpa: "",
      birthDate: "",
      email: "",
      address: "",
      gender: "",
      family: "",
      major: "",
      studentCode: "",
    },
    educationSchools: [
      {
        schoolName: "",
        startYear: "",
        transferYear: "",
        graduationYear: "",
        gpa: "",
      },
      {
        schoolName: "",
        startYear: "",
        transferYear: "",
        graduationYear: "",
        gpa: "",
      },
      {
        schoolName: "",
        startYear: "",
        transferYear: "",
        graduationYear: "",
        gpa: "",
      },
    ],
    languages: [
      {
        languageName: "",
        listening: "",
        speaking: "",
        reading: "",
        writing: "",
        overallLevel: "",
      },
      {
        languageName: "",
        listening: "",
        speaking: "",
        reading: "",
        writing: "",
        overallLevel: "",
      },
      {
        languageName: "",
        listening: "",
        speaking: "",
        reading: "",
        writing: "",
        overallLevel: "",
      },
    ],
    computerSkills: [
      { programName: "", learnedHow: "", level: "" },
      { programName: "", learnedHow: "", level: "" },
      { programName: "", learnedHow: "", level: "" },
    ],
    personalSkills: {
      professional: "",
      workExecution: "",
      verbalExpression: "",
      writtenExpression: "",
      leadership: "",
      decisionMaking: "",
      innovation: "",
      creativity: "",
      independentWork: "",
      teamwork: "",
      responsibility: "",
      interpersonal: "",
    },
    talents: [
      { type: "", years: "", rankOrTitle: "" },
      { type: "", years: "", rankOrTitle: "" },
      { type: "", years: "", rankOrTitle: "" },
    ],
    awards: [
      { organization: "", awardName: "", awardDate: "" },
      { organization: "", awardName: "", awardDate: "" },
      { organization: "", awardName: "", awardDate: "" },
    ],
    signatureName: "",
    truthConfirm: false,
    agreedToTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    const p = formData.personal;

    // Required personal fields
    if (!p.lastName.trim())
      newErrors["personal.lastName"] = "Овог шаардлагатай";
    if (!p.firstName.trim())
      newErrors["personal.firstName"] = "Нэр шаардлагатай";
    if (!p.phone.trim()) newErrors["personal.phone"] = "Гар утас шаардлагатай";
    if (!p.emergencyPhone.trim())
      newErrors["personal.emergencyPhone"] =
        "Яаралтай үед холбогдох утас шаардлагатай";
    if (!p.course.trim()) newErrors["personal.course"] = "Курс шаардлагатай";
    if (!p.gpa.trim()) newErrors["personal.gpa"] = "Голч дүн шаардлагатай";
    if (!p.birthDate.trim())
      newErrors["personal.birthDate"] = "Төрсөн огноо шаардлагатай";
    if (!p.address.trim())
      newErrors["personal.address"] = "Гэрийн хаяг шаардлагатай";
    if (!p.gender) newErrors["personal.gender"] = "Хүйс шаардлагатай";
    if (!p.major.trim()) newErrors["personal.major"] = "Мэргэжил шаардлагатай";
    if (!p.studentCode.trim())
      newErrors["personal.studentCode"] = "Оюутны код шаардлагатай";

    if (!p.email.trim()) {
      newErrors["personal.email"] = "E-mail хаяг шаардлагатай";
    } else if (!EMAIL_REGEX.test(p.email)) {
      newErrors["personal.email"] = "E-mail хаяг буруу байна";
    }

    if (!formData.signatureName.trim()) {
      newErrors.signatureName = "Гарын үсэг шаардлагатай";
    }

    if (!formData.truthConfirm) {
      newErrors.truthConfirm =
        "Мэдээлэл үнэн зөв бөглөсөн гэдгийг баталгаажуулна уу";
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "Нөхцөлтэй танилцаж зөвшөөрөх шаардлагатай";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

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

  // Add row handlers
  const addEducationSchool = () => {
    setFormData((prev) => ({
      ...prev,
      educationSchools: [
        ...prev.educationSchools,
        {
          schoolName: "",
          startYear: "",
          transferYear: "",
          graduationYear: "",
          gpa: "",
        },
      ],
    }));
  };

  const removeEducationSchool = (index: number) => {
    if (formData.educationSchools.length > 1) {
      setFormData((prev) => ({
        ...prev,
        educationSchools: prev.educationSchools.filter((_, i) => i !== index),
      }));
    }
  };

  const addLanguage = () => {
    setFormData((prev) => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          languageName: "",
          listening: "",
          speaking: "",
          reading: "",
          writing: "",
          overallLevel: "",
        },
      ],
    }));
  };

  const removeLanguage = (index: number) => {
    if (formData.languages.length > 1) {
      setFormData((prev) => ({
        ...prev,
        languages: prev.languages.filter((_, i) => i !== index),
      }));
    }
  };

  const addComputerSkill = () => {
    setFormData((prev) => ({
      ...prev,
      computerSkills: [
        ...prev.computerSkills,
        { programName: "", learnedHow: "", level: "" },
      ],
    }));
  };

  const removeComputerSkill = (index: number) => {
    if (formData.computerSkills.length > 1) {
      setFormData((prev) => ({
        ...prev,
        computerSkills: prev.computerSkills.filter((_, i) => i !== index),
      }));
    }
  };

  const addTalent = () => {
    setFormData((prev) => ({
      ...prev,
      talents: [...prev.talents, { type: "", years: "", rankOrTitle: "" }],
    }));
  };

  const removeTalent = (index: number) => {
    if (formData.talents.length > 1) {
      setFormData((prev) => ({
        ...prev,
        talents: prev.talents.filter((_, i) => i !== index),
      }));
    }
  };

  const addAward = () => {
    setFormData((prev) => ({
      ...prev,
      awards: [
        ...prev.awards,
        { organization: "", awardName: "", awardDate: "" },
      ],
    }));
  };

  const removeAward = (index: number) => {
    if (formData.awards.length > 1) {
      setFormData((prev) => ({
        ...prev,
        awards: prev.awards.filter((_, i) => i !== index),
      }));
    }
  };

  return (
    <>
      <main className="relative overflow-x-hidden min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-32">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl" />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
              ИДЭВХТЭН ГИШҮҮНИЙ АНКЕТ
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)]">
              Анкетыг гаргацтай, үг товчлохгүйгээр бөглөнө үү
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    {/* SECTION 1: Personal Information */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-line)] pb-2">
                        1. Хувийн мэдээлэл
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Овог{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            value={formData.personal.lastName}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  lastName: e.target.value,
                                },
                              }));
                              if (errors["personal.lastName"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.lastName": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.lastName"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                            placeholder="Овог"
                          />
                          {errors["personal.lastName"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.lastName"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Нэр{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            value={formData.personal.firstName}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  firstName: e.target.value,
                                },
                              }));
                              if (errors["personal.firstName"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.firstName": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.firstName"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                            placeholder="Нэр"
                          />
                          {errors["personal.firstName"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.firstName"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Гар утас{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.personal.phone}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  phone: e.target.value,
                                },
                              }));
                              if (errors["personal.phone"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.phone": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.phone"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                            placeholder="+976 ..."
                          />
                          {errors["personal.phone"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.phone"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="emergencyPhone"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Яаралтай үед холбогдох утас{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="emergencyPhone"
                            type="tel"
                            value={formData.personal.emergencyPhone}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  emergencyPhone: e.target.value,
                                },
                              }));
                              if (errors["personal.emergencyPhone"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.emergencyPhone": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.emergencyPhone"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                            placeholder="+976 ..."
                          />
                          {errors["personal.emergencyPhone"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.emergencyPhone"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="course"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Курс{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="course"
                            type="text"
                            value={formData.personal.course}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  course: e.target.value,
                                },
                              }));
                              if (errors["personal.course"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.course": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.course"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                            placeholder="1, 2, 3..."
                          />
                          {errors["personal.course"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.course"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="gpa"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Голч дүн{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="gpa"
                            type="number"
                            step="0.1"
                            value={formData.personal.gpa}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  gpa: e.target.value,
                                },
                              }));
                              if (errors["personal.gpa"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.gpa": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.gpa"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                            placeholder="3.5"
                          />
                          {errors["personal.gpa"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.gpa"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="birthDate"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Төрсөн огноо{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="birthDate"
                            type="date"
                            value={formData.personal.birthDate}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  birthDate: e.target.value,
                                },
                              }));
                              if (errors["personal.birthDate"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.birthDate": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.birthDate"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                          />
                          {errors["personal.birthDate"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.birthDate"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            E-mail хаяг{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.personal.email}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  email: e.target.value,
                                },
                              }));
                              if (errors["personal.email"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.email": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.email"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                            placeholder="email@example.com"
                          />
                          {errors["personal.email"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.email"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                        >
                          Гэрийн хаяг{" "}
                          <span className="text-[var(--accent-pink)]">*</span>
                        </label>
                        <textarea
                          id="address"
                          value={formData.personal.address}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              personal: {
                                ...prev.personal,
                                address: e.target.value,
                              },
                            }));
                            if (errors["personal.address"])
                              setErrors((prev) => ({
                                ...prev,
                                "personal.address": undefined,
                              }));
                          }}
                          rows={2}
                          className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                            errors["personal.address"]
                              ? "border-[var(--accent-pink)]/40"
                              : "border-[var(--border-line)]"
                          } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all resize-none`}
                          placeholder="Гэрийн хаяг"
                        />
                        {errors["personal.address"] && (
                          <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                            {errors["personal.address"]}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Хүйс{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <select
                            id="gender"
                            value={formData.personal.gender}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  gender: e.target.value as "Эрэгтэй" | "Эмэгтэй" | "Бусад" | "",
                                },
                              }));
                              if (errors["personal.gender"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.gender": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.gender"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                          >
                            <option value="">Сонгох</option>
                            <option value="Эрэгтэй">Эрэгтэй</option>
                            <option value="Эмэгтэй">Эмэгтэй</option>
                            <option value="Бусад">Бусад</option>
                          </select>
                          {errors["personal.gender"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.gender"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="family"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Ам бүл
                          </label>
                          <input
                            id="family"
                            type="text"
                            value={formData.personal.family}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  family: e.target.value,
                                },
                              }))
                            }
                            className="w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                            placeholder="Ам бүл"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="studentCode"
                            className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                          >
                            Оюутны код{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                          <input
                            id="studentCode"
                            type="text"
                            value={formData.personal.studentCode}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                personal: {
                                  ...prev.personal,
                                  studentCode: e.target.value,
                                },
                              }));
                              if (errors["personal.studentCode"])
                                setErrors((prev) => ({
                                  ...prev,
                                  "personal.studentCode": undefined,
                                }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                              errors["personal.studentCode"]
                                ? "border-[var(--accent-pink)]/40"
                                : "border-[var(--border-line)]"
                            } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                            placeholder="B200000"
                          />
                          {errors["personal.studentCode"] && (
                            <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                              {errors["personal.studentCode"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="major"
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                        >
                          Суралцаж буй мэргэжил{" "}
                          <span className="text-[var(--accent-pink)]">*</span>
                        </label>
                        <input
                          id="major"
                          type="text"
                          value={formData.personal.major}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              personal: {
                                ...prev.personal,
                                major: e.target.value,
                              },
                            }));
                            if (errors["personal.major"])
                              setErrors((prev) => ({
                                ...prev,
                                "personal.major": undefined,
                              }));
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                            errors["personal.major"]
                              ? "border-[var(--accent-pink)]/40"
                              : "border-[var(--border-line)]"
                          } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                          placeholder="Компьютерийн инженер"
                        />
                        {errors["personal.major"] && (
                          <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                            {errors["personal.major"]}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* SECTION 2: Education */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-line)] pb-2">
                        2. Боловсролын байдал
                      </h2>

                      {/* 2.1 General Education */}
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                          2.1 Ерөнхий боловсрол
                        </h3>
                        <div className="space-y-3">
                          {formData.educationSchools.map((school, index) => (
                            <div
                              key={index}
                              className="bg-[var(--bg-base)] border border-[var(--border-line)] rounded-xl p-4"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-[var(--text-secondary)]">
                                  Сургууль {index + 1}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeEducationSchool(index)}
                                  disabled={
                                    formData.educationSchools.length === 1
                                  }
                                  className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-pink)] hover:bg-[var(--accent-pink)]/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                  aria-label="Устгах"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                <input
                                  type="text"
                                  value={school.schoolName}
                                  onChange={(e) => {
                                    const newSchools = [
                                      ...formData.educationSchools,
                                    ];
                                    newSchools[index].schoolName =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      educationSchools: newSchools,
                                    }));
                                  }}
                                  placeholder="Сургуулийн нэр"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                                <input
                                  type="text"
                                  value={school.startYear}
                                  onChange={(e) => {
                                    const newSchools = [
                                      ...formData.educationSchools,
                                    ];
                                    newSchools[index].startYear =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      educationSchools: newSchools,
                                    }));
                                  }}
                                  placeholder="Элссэн огноо"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                                <input
                                  type="text"
                                  value={school.transferYear}
                                  onChange={(e) => {
                                    const newSchools = [
                                      ...formData.educationSchools,
                                    ];
                                    newSchools[index].transferYear =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      educationSchools: newSchools,
                                    }));
                                  }}
                                  placeholder="Шилжсэн огноо"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                                <input
                                  type="text"
                                  value={school.graduationYear}
                                  onChange={(e) => {
                                    const newSchools = [
                                      ...formData.educationSchools,
                                    ];
                                    newSchools[index].graduationYear =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      educationSchools: newSchools,
                                    }));
                                  }}
                                  placeholder="Төгссөн огноо"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                                <input
                                  type="text"
                                  value={school.gpa}
                                  onChange={(e) => {
                                    const newSchools = [
                                      ...formData.educationSchools,
                                    ];
                                    newSchools[index].gpa = e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      educationSchools: newSchools,
                                    }));
                                  }}
                                  placeholder="Голч оноо"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                              </div>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={addEducationSchool}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)]/40 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Мөр нэмэх
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* 2.2 Languages */}
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                          2.2 Гадаад хэлний мэдлэгийн түвшин
                        </h3>
                        <div className="space-y-3">
                          {formData.languages.map((lang, index) => (
                            <div
                              key={index}
                              className="bg-[var(--bg-base)] border border-[var(--border-line)] rounded-xl p-4"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-[var(--text-secondary)]">
                                  Хэл {index + 1}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeLanguage(index)}
                                  disabled={formData.languages.length === 1}
                                  className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-pink)] hover:bg-[var(--accent-pink)]/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                  aria-label="Устгах"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                <input
                                  type="text"
                                  value={lang.languageName}
                                  onChange={(e) => {
                                    const newLanguages = [
                                      ...formData.languages,
                                    ];
                                    newLanguages[index].languageName =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      languages: newLanguages,
                                    }));
                                  }}
                                  placeholder="Гадаад хэлний нэр"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all md:col-span-2 lg:col-span-3"
                                />
                                <select
                                  value={lang.listening}
                                  onChange={(e) => {
                                    const newLanguages = [
                                      ...formData.languages,
                                    ];
                                    newLanguages[index].listening = e.target
                                      .value as SkillLevel | "";
                                    setFormData((prev) => ({
                                      ...prev,
                                      languages: newLanguages,
                                    }));
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                >
                                  <option value="">Ярьсныг ойлгох</option>
                                  {SKILL_LEVELS.map((level) => (
                                    <option key={level} value={level}>
                                      {level}
                                    </option>
                                  ))}
                                </select>
                                <select
                                  value={lang.speaking}
                                  onChange={(e) => {
                                    const newLanguages = [
                                      ...formData.languages,
                                    ];
                                    newLanguages[index].speaking = e.target
                                      .value as SkillLevel | "";
                                    setFormData((prev) => ({
                                      ...prev,
                                      languages: newLanguages,
                                    }));
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                >
                                  <option value="">Өөрөө ярих</option>
                                  {SKILL_LEVELS.map((level) => (
                                    <option key={level} value={level}>
                                      {level}
                                    </option>
                                  ))}
                                </select>
                                <select
                                  value={lang.reading}
                                  onChange={(e) => {
                                    const newLanguages = [
                                      ...formData.languages,
                                    ];
                                    newLanguages[index].reading = e.target
                                      .value as SkillLevel | "";
                                    setFormData((prev) => ({
                                      ...prev,
                                      languages: newLanguages,
                                    }));
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                >
                                  <option value="">Уншиж ойлгох</option>
                                  {SKILL_LEVELS.map((level) => (
                                    <option key={level} value={level}>
                                      {level}
                                    </option>
                                  ))}
                                </select>
                                <select
                                  value={lang.writing}
                                  onChange={(e) => {
                                    const newLanguages = [
                                      ...formData.languages,
                                    ];
                                    newLanguages[index].writing = e.target
                                      .value as SkillLevel | "";
                                    setFormData((prev) => ({
                                      ...prev,
                                      languages: newLanguages,
                                    }));
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                >
                                  <option value="">Бичиж орчуулах</option>
                                  {SKILL_LEVELS.map((level) => (
                                    <option key={level} value={level}>
                                      {level}
                                    </option>
                                  ))}
                                </select>
                                <input
                                  type="text"
                                  value={lang.overallLevel}
                                  onChange={(e) => {
                                    const newLanguages = [
                                      ...formData.languages,
                                    ];
                                    newLanguages[index].overallLevel =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      languages: newLanguages,
                                    }));
                                  }}
                                  placeholder="Түвшин"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                              </div>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={addLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)]/40 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Мөр нэмэх
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* 2.3 Computer Skills */}
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                          2.3 Компьютерийн мэдлэгийн түвшин
                        </h3>
                        <p className="text-sm text-[var(--text-muted)] mb-3">
                          Хэрэглээний програмуудаас бусад
                        </p>
                        <div className="space-y-3">
                          {formData.computerSkills.map((skill, index) => (
                            <div
                              key={index}
                              className="bg-[var(--bg-base)] border border-[var(--border-line)] rounded-xl p-4"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-[var(--text-secondary)]">
                                  Программ {index + 1}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeComputerSkill(index)}
                                  disabled={
                                    formData.computerSkills.length === 1
                                  }
                                  className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-pink)] hover:bg-[var(--accent-pink)]/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                  aria-label="Устгах"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <input
                                  type="text"
                                  value={skill.programName}
                                  onChange={(e) => {
                                    const newSkills = [
                                      ...formData.computerSkills,
                                    ];
                                    newSkills[index].programName =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      computerSkills: newSkills,
                                    }));
                                  }}
                                  placeholder="Ажиллаж чадах программын нэр"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                                <input
                                  type="text"
                                  value={skill.learnedHow}
                                  onChange={(e) => {
                                    const newSkills = [
                                      ...formData.computerSkills,
                                    ];
                                    newSkills[index].learnedHow =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      computerSkills: newSkills,
                                    }));
                                  }}
                                  placeholder="Хэрхэн, яаж сурсан талаар"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                                <select
                                  value={skill.level}
                                  onChange={(e) => {
                                    const newSkills = [
                                      ...formData.computerSkills,
                                    ];
                                    newSkills[index].level = e.target
                                      .value as SkillLevel | "";
                                    setFormData((prev) => ({
                                      ...prev,
                                      computerSkills: newSkills,
                                    }));
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all md:col-span-2"
                                >
                                  <option value="">Түвшин</option>
                                  {SKILL_LEVELS.map((level) => (
                                    <option key={level} value={level}>
                                      {level}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={addComputerSkill}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)]/40 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Мөр нэмэх
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: Personal Skills and Talents */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-line)] pb-2">
                        3. Хувь хүний чадвар, авьяас
                      </h2>

                      {/* 3.1 Personal Skills */}
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                          3.1 Хувь хүний чадвар
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">
                          Түвшинг тэмдэглэнэ үү: Маш сайн (4), Сайн (3), Дунд
                          (2), Анхан шат (1)
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {PERSONAL_SKILLS_CONFIG.map((skill) => (
                            <div key={skill.id}>
                              <label
                                htmlFor={skill.id}
                                className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                              >
                                {skill.label}
                              </label>
                              <select
                                id={skill.id}
                                value={
                                  formData.personalSkills[
                                    skill.id as keyof typeof formData.personalSkills
                                  ]
                                }
                                onChange={(e) => {
                                  const value =
                                    e.target.value === ""
                                      ? ""
                                      : (parseInt(
                                          e.target.value,
                                        ) as PersonalSkillValue);
                                  setFormData((prev) => ({
                                    ...prev,
                                    personalSkills: {
                                      ...prev.personalSkills,
                                      [skill.id]: value,
                                    },
                                  }));
                                }}
                                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                              >
                                <option value="">Сонгох</option>
                                <option value="4">Маш сайн (4)</option>
                                <option value="3">Сайн (3)</option>
                                <option value="2">Дунд (2)</option>
                                <option value="1">Анхан шат (1)</option>
                              </select>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 3.2 Talents */}
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                          3.2 Авьяас чадвар, сонирхол
                        </h3>
                        <div className="space-y-3">
                          {formData.talents.map((talent, index) => (
                            <div
                              key={index}
                              className="bg-[var(--bg-base)] border border-[var(--border-line)] rounded-xl p-4"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-[var(--text-secondary)]">
                                  Авьяас {index + 1}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => removeTalent(index)}
                                  disabled={formData.talents.length === 1}
                                  className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-pink)] hover:bg-[var(--accent-pink)]/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                  aria-label="Устгах"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <input
                                  type="text"
                                  value={talent.type}
                                  onChange={(e) => {
                                    const newTalents = [...formData.talents];
                                    newTalents[index].type = e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      talents: newTalents,
                                    }));
                                  }}
                                  placeholder="Төрөл"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                                <input
                                  type="text"
                                  value={talent.years}
                                  onChange={(e) => {
                                    const newTalents = [...formData.talents];
                                    newTalents[index].years = e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      talents: newTalents,
                                    }));
                                  }}
                                  placeholder="Хичээллэсэн жил"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                                <input
                                  type="text"
                                  value={talent.rankOrTitle}
                                  onChange={(e) => {
                                    const newTalents = [...formData.talents];
                                    newTalents[index].rankOrTitle =
                                      e.target.value;
                                    setFormData((prev) => ({
                                      ...prev,
                                      talents: newTalents,
                                    }));
                                  }}
                                  placeholder="Зэрэг, цол"
                                  className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                                />
                              </div>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={addTalent}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)]/40 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Мөр нэмэх
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 4: Awards */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] border-b border-[var(--border-line)] pb-2">
                        4. Шагнал урамшуулал
                      </h2>
                      <div className="space-y-3">
                        {formData.awards.map((award, index) => (
                          <div
                            key={index}
                            className="bg-[var(--bg-base)] border border-[var(--border-line)] rounded-xl p-4"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-[var(--text-secondary)]">
                                Шагнал {index + 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeAward(index)}
                                disabled={formData.awards.length === 1}
                                className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent-pink)] hover:bg-[var(--accent-pink)]/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Устгах"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <input
                                type="text"
                                value={award.organization}
                                onChange={(e) => {
                                  const newAwards = [...formData.awards];
                                  newAwards[index].organization =
                                    e.target.value;
                                  setFormData((prev) => ({
                                    ...prev,
                                    awards: newAwards,
                                  }));
                                }}
                                placeholder="Шагнасан байгууллага"
                                className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                              />
                              <input
                                type="text"
                                value={award.awardName}
                                onChange={(e) => {
                                  const newAwards = [...formData.awards];
                                  newAwards[index].awardName = e.target.value;
                                  setFormData((prev) => ({
                                    ...prev,
                                    awards: newAwards,
                                  }));
                                }}
                                placeholder="Шагналын нэр"
                                className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                              />
                              <input
                                type="date"
                                value={award.awardDate}
                                onChange={(e) => {
                                  const newAwards = [...formData.awards];
                                  newAwards[index].awardDate = e.target.value;
                                  setFormData((prev) => ({
                                    ...prev,
                                    awards: newAwards,
                                  }));
                                }}
                                placeholder="Шагнагдсан огноо"
                                className="w-full px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all"
                              />
                            </div>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={addAward}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)]/40 transition-all"
                        >
                          <Plus className="w-4 h-4" />
                          <span className="text-sm font-medium">Мөр нэмэх</span>
                        </button>
                      </div>
                    </div>

                    {/* Signature and Confirmation */}
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="signatureName"
                          className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                        >
                          Гарын үсэг (нэрээ бичнэ үү){" "}
                          <span className="text-[var(--accent-pink)]">*</span>
                        </label>
                        <input
                          id="signatureName"
                          type="text"
                          value={formData.signatureName}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              signatureName: e.target.value,
                            }));
                            if (errors.signatureName)
                              setErrors((prev) => ({
                                ...prev,
                                signatureName: undefined,
                              }));
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border ${
                            errors.signatureName
                              ? "border-[var(--accent-pink)]/40"
                              : "border-[var(--border-line)]"
                          } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 transition-all`}
                          placeholder="Бүтэн нэрээ бичнэ үү"
                        />
                        {errors.signatureName && (
                          <p className="text-xs text-[var(--accent-pink)] mt-1.5">
                            {errors.signatureName}
                          </p>
                        )}
                      </div>

                      <div className="bg-[var(--bg-base)] border border-[var(--border-line)] rounded-xl p-6 space-y-4">
                        <div className="flex items-start gap-3">
                          <input
                            id="truthConfirm"
                            type="checkbox"
                            checked={formData.truthConfirm}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                truthConfirm: e.target.checked,
                              }));
                              if (errors.truthConfirm)
                                setErrors((prev) => ({
                                  ...prev,
                                  truthConfirm: undefined,
                                }));
                            }}
                            className="mt-1 w-4 h-4 rounded border-[var(--border-line)] bg-[var(--bg-base)] text-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/40"
                          />
                          <label
                            htmlFor="truthConfirm"
                            className="text-sm text-[var(--text-secondary)]"
                          >
                            Мэдээлэл үнэн зөв бөглөсөн{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                        </div>
                        {errors.truthConfirm && (
                          <p className="text-xs text-[var(--accent-pink)]">
                            {errors.truthConfirm}
                          </p>
                        )}

                        <div className="flex items-start gap-3">
                          <input
                            id="terms"
                            type="checkbox"
                            checked={formData.agreedToTerms}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                agreedToTerms: e.target.checked,
                              }));
                              if (errors.agreedToTerms)
                                setErrors((prev) => ({
                                  ...prev,
                                  agreedToTerms: undefined,
                                }));
                            }}
                            className="mt-1 w-4 h-4 rounded border-[var(--border-line)] bg-[var(--bg-base)] text-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/40"
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm text-[var(--text-secondary)]"
                          >
                            Би клубын нөхцөлтэй танилцаж зөвшөөрч байна{" "}
                            <span className="text-[var(--accent-pink)]">*</span>
                          </label>
                        </div>
                        {errors.agreedToTerms && (
                          <p className="text-xs text-[var(--accent-pink)]">
                            {errors.agreedToTerms}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] text-white font-medium hover:opacity-90 transition-all group"
                    >
                      <span>Илгээх</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                        Анкет хүлээн авлаа!
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        Баярлалаа, {formData.personal.firstName}! Бүртгэлээ
                        дуусгахын тулд Facebook эсвэл утсаар холбогдоно уу.
                      </p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <button
                        onClick={() => handleCopy(FACEBOOK_LINK, "facebook")}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-[var(--border-line)] bg-[var(--bg-base)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-blue)]/30 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 group-hover:border-[var(--accent-blue)]/40 transition-all">
                            <Facebook className="w-5 h-5 text-[var(--accent-blue)]" />
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
                            <span className="text-xs text-[var(--accent-cyan)]">
                              Copied!
                            </span>
                          )}
                          <Copy className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors" />
                        </div>
                      </button>

                      <button
                        onClick={() => handleCopy(PHONE_NUMBER, "phone")}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-[var(--border-line)] bg-[var(--bg-base)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-cyan)]/30 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 group-hover:border-[var(--accent-cyan)]/40 transition-all">
                            <Phone className="w-5 h-5 text-[var(--accent-cyan)]" />
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-medium text-[var(--text-primary)]">
                              Call Us
                            </div>
                            <div className="text-xs text-[var(--text-muted)]">
                              {PHONE_NUMBER}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {copiedItem === "phone" && (
                            <span className="text-xs text-[var(--accent-cyan)]">
                              Copied!
                            </span>
                          )}
                          <Copy className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors" />
                        </div>
                      </button>
                    </div>

                    <Link
                      href="/"
                      className="block w-full mt-4 px-5 py-2.5 rounded-xl border border-[var(--border-line)] bg-transparent text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-surface-hover)] transition-all text-center"
                    >
                      Нүүр хуудас руу буцах
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
