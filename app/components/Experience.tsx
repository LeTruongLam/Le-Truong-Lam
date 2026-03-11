import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Image1 from "../../public/cards/sota_tek_logo.jpg";
import Image2 from "../../public/cards/hblab_joint_stock_company_logo.jpg";
import Image3 from "../../public/cards/misa_jsc_logo.jpg";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData | string;
  company: string;
  start: string; // mm/yyyy
  end: string; // mm/yyyy hoặc "Hiện tại"
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "SOTATEK JSC",
    description:
      "SotaTek, một công ty con của Sota Holdings, là đối tác đổi mới về Trí tuệ Nhân tạo (AI) và Blockchain. Có trụ sở chính tại Việt Nam...",
    icon: Image1,
    company: "Vị trí: ReactJs Developer",
    start: "12/2024",
    end: "Hiện tại",
  },
  {
    id: 2,
    title: "HBLAB JSC",
    description:
      "Công ty Cổ phần HBLAB là thành viên của Tập đoàn HBLAB, một tập đoàn công nghệ có trụ sở tại Việt Nam, cung cấp dịch vụ Phát triển Phần mềm theo mô hình Dịch vụ (SDaaS) và tư vấn CNTT toàn diện cho các doanh nghiệp toàn cầu...",
    icon: Image2,
    company: "Vị trí: Frontend Developer",
    start: "04/2024",
    end: "12/2024",
  },
  {
    id: 3,
    title: "MISA JSC",
    description:
      "Công ty Cổ phần MISA Tên giao dịch: MISA Joint Stock Company, tên viết tắt MISA JSC Công ty Cổ phần MISA là công ty chuyên về phần mềm kế toán, quản trị nguồn nhân lực,...",
    icon: Image3,
    company: "Vị trí: Intern Developer",
    start: "04/2023",
    end: "7/2023",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Kinh nghiệm làm việc
        </h2>

        <div className="relative border-l-2 border-purple-700">
          {experienceCards.map((card, index) => (
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
                    <span className="font-medium">{card.company}</span>
                  </p>
                  <p className="text-white/70 text-sm mb-4">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
