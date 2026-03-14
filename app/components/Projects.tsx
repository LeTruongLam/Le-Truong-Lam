"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useI18n } from "../i18n/LocaleProvider";
import GEOQUEST from "../../public/assets/geoquest.png";
import HONDA from "../../public/assets/hondacars.png";
import SUZUKI from "../../public/assets/suzuki.png";
import CUP from "../../public/assets/lam-sota.jpg";
import UGC from "../../public/assets/ugc.png";

interface ProjectBase {
  id: number;
  image: string | StaticImageData;
  technologies?: string[];
  achievementImages?: (string | StaticImageData)[];
  link?: string;
}

const featuredProjects: ProjectBase[] = [
  {
    id: 1,
    technologies: [
      "ReactJS",
      "Redux Toolkit",
      "React Query",
      "TypeScript",
      "Antd",
      "Leaflet",
      "...",
    ],
    achievementImages: [CUP, UGC],
    link: "https://www.geo-quest.jp/",
    image: GEOQUEST,
  },
  {
    id: 2,
    technologies: [
      "Javascript",
      "HTML5",
      "Css",
      "Gsap Animation",
      "PHP",
      "...",
    ],
    link: "https://www.hondacars-saitamakita.co.jp/",
    image: HONDA,
  },
  {
    id: 3,
    technologies: [
      "ReactJs",
      "Ant Design",
      "Redux Toolkit",
      "React Query",
      "Đa ngôn ngữ i18n",
      "...",
    ],
    link: "https://www.globalsuzuki.com/automobile/technology/isa/index.html",
    image: SUZUKI,
  },
];

export default function Projects(): React.JSX.Element {
  const { t } = useI18n();
  const projectsText = t("projects");
  const [selectedImages, setSelectedImages] = useState<
    (string | StaticImageData)[] | null
  >(null);

  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className="flex">
                  <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                    <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                      {projectsText.featuredLabel}
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {
                        (projectsText.cards.find(
                          (c) => c.id === project.id
                        ) ?? projectsText.cards[0]).title
                      }
                    </h3>

                    {projectsText.cards.find((c) => c.id === project.id)
                      ?.role && (
                      <p className="text-white/70 text-sm mb-2">
                        <span className="font-medium">
                          {projectsText.roleLabel}{" "}
                        </span>
                        {
                          (projectsText.cards.find(
                            (c) => c.id === project.id
                          ) ?? projectsText.cards[0]).role
                        }
                      </p>
                    )}

                    {project.technologies && (
                      <p className="text-white/70 text-sm mb-2">
                        <span className="font-medium">
                          {projectsText.techLabel}{" "}
                        </span>
                        {project.technologies.join(", ")}
                      </p>
                    )}
                    {projectsText.cards.find((c) => c.id === project.id)
                      ?.teamSize && (
                      <p className="text-white/70 text-sm mb-2">
                        <span className="font-medium">
                          {projectsText.teamSizeLabel}{" "}
                        </span>
                        {
                          (projectsText.cards.find(
                            (c) => c.id === project.id
                          ) ?? projectsText.cards[0]).teamSize
                        }
                      </p>
                    )}

                    {projectsText.cards.find((c) => c.id === project.id)
                      ?.achievements &&
                      (projectsText.cards.find((c) => c.id === project.id)
                        ?.achievements?.length ?? 0) > 0 && (
                        <ul className="text-white/60 text-sm mb-4 list-disc list-inside">
                          {(
                            projectsText.cards.find(
                              (c) => c.id === project.id
                            ) ?? projectsText.cards[0]
                          ).achievements?.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}

                    {/* Nút xem ảnh thành tựu */}
                    {project.achievementImages &&
                      project.achievementImages.length > 0 && (
                        <button
                          onClick={() =>
                            setSelectedImages(project.achievementImages || null)
                          }
                          className="mb-4 px-4 py-2  text-white rounded-lg transition border border-white hover:bg-white/10 cursor-pointer"
                        >
                          {projectsText.viewAchievements}
                        </button>
                      )}

                    {/* Description Card */}
                    {projectsText.cards.find((c) => c.id === project.id)
                      ?.description && (
                      <div className="relative z-10 mb-6">
                        <div
                          className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                            isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                          }`}
                        >
                          <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                            {
                              (projectsText.cards.find(
                                (c) => c.id === project.id
                              ) ?? projectsText.cards[0]).description
                            }
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Image Content */}
                <div
                  className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={
                          (projectsText.cards.find(
                            (c) => c.id === project.id
                          ) ?? projectsText.cards[0]).title
                        }
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Modal hiển thị ảnh thành tựu */}
        {selectedImages && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="bg-slate-900 rounded-xl p-6 max-w-[1500px] w-full relative">
              <button
                onClick={() => setSelectedImages(null)}
                className="absolute top-4 right-4 text-white text-xl font-bold hover:text-purple-400"
              >
                &times;
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {selectedImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-[8/5] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Achievement ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
