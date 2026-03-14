 "use client";

import Image, { StaticImageData } from "next/image";
import { useI18n } from "../i18n/LocaleProvider";
import Image1 from "../../public/cards/sota_tek_logo.jpg";
import Image2 from "../../public/cards/hblab_joint_stock_company_logo.jpg";
import Image3 from "../../public/cards/misa_jsc_logo.jpg";

interface ExperienceCardBase {
  id: number;
  title: string;
  icon: StaticImageData | string;
  start: string; // mm/yyyy
  end: string; // mm/yyyy hoặc "Hiện tại"
}

const experienceCards: ExperienceCardBase[] = [
  {
    id: 1,
    title: "SOTATEK JSC",
    icon: Image1,
    start: "12/2024",
    end: "Hiện tại",
  },
  {
    id: 2,
    title: "HBLAB JSC",
    icon: Image2,
    start: "04/2024",
    end: "12/2024",
  },
  {
    id: 3,
    title: "MISA JSC",
    icon: Image3,
    start: "04/2023",
    end: "7/2023",
  },
];

export default function Experience(): React.JSX.Element {
  const { t } = useI18n();
  const experience = t("experience");

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          {experience.sectionTitle}
        </h2>

        <div className="relative border-l-2 border-purple-700">
          {experienceCards.map((card) => {
            const localized =
              experience.cards.find((c) => c.id === card.id) ??
              experience.cards[0];

            return (
            <div key={card.id} className="mb-10 ml-6 relative flex items-start">
              {/* Circle on timeline */}
              <span className="absolute -left-8 top-[50%] transform -translate-y-1/2  w-4 h-4 rounded-full bg-white"></span>

              {/* Content */}
              <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex flex-col md:flex-row gap-4 w-full">
                <div className="flex-shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <span className="text-white/60 text-sm">
                      {card.start} - {card.end}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-2">
                    <span className="font-medium">{localized.company}</span>
                  </p>
                  <p className="text-white/70 text-sm mb-4">
                    {localized.description}
                  </p>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
