"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "../i18n/LocaleProvider";

export default function About(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<"skills" | "education" | "language">("skills");
  const { t } = useI18n();
  const about = t("about");

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-2xl max-w-4xl mx-auto">{about.intro}</p>
        </div>

        <Image
          src="/assets/illustration.png"
          alt="Skills"
          width={600}
          height={600}
          className="mx-auto mb-12"
        />

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-2 rounded-lg ${
              activeTab === "skills"
                ? "text-purple-400 border border-purple-400"
                : "border border-white"
            }`}
          >
            {about.tabSkills}
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-lg ${
              activeTab === "education"
                ? "text-purple-400 border border-purple-400"
                : "border border-white"
            }`}
          >
            {about.tabEducation}
          </button>

          <button
            onClick={() => setActiveTab("language")}
            className={`px-6 py-2 rounded-lg ${
              activeTab === "language"
                ? "text-purple-400 border border-purple-400"
                : "border border-white"
            }`}
          >
            {about.tabLanguage}
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto text-lg">
          {activeTab === "skills" && (
            <div>
              <h3 className="text-xl font-bold mb-4">{about.skillsTitle}</h3>

              <p className="font-semibold">
                🔠 {about.skillsProgrammingLabel}
              </p>
              <p>{about.programmingLanguages}</p>

              <p className="font-semibold mt-4">💻 {about.frontendTitle}</p>
              <ul className="list-disc ml-6">
                {about.frontendItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="font-semibold mt-4">🔨 {about.toolsTitle}</p>
              <ul className="list-disc ml-6">
                {about.toolsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div>
              <h3 className="text-xl font-bold mb-4">
                {about.educationTitle}
              </h3>
              <p className="font-semibold">
                {about.educationSchool}
              </p>
              <p>{about.educationMajor}</p>
              <p>{about.educationTime}</p>
              <p>{about.educationGpa}</p>
            </div>
          )}

          {activeTab === "language" && (
            <div>
              <h3 className="text-xl font-bold mb-4">{about.languageTitle}</h3>
              <ul className="list-disc ml-6">
                {about.languageItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
