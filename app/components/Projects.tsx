"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import GEOQUEST from "../../public/assets/geoquest.png";
import HONDA from "../../public/assets/hondacars.png";
import SUZUKI from "../../public/assets/suzuki.png";
import CUP from "../../public/assets/lam-sota.jpg";
import UGC from "../../public/assets/ugc.png";

interface Project {
  id: number;
  title: string;
  description?: string;
  role?: string; // Vai trò
  technologies?: string[]; // Công nghệ sử dụng
  achievements?: string[]; // Mô tả thành tựu
  achievementImages?: (string | StaticImageData)[]; // Ảnh minh họa thành tựu
  image: string | StaticImageData;
  link?: string;
  teamSize?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "GeoQuest",
    role: "Frontend ReactJs Developer",
    technologies: [
      "ReactJS",
      "Redux Toolkit",
      "React Query",
      "TypeScript",
      "Antd",
      "Leaflet",
      "...",
    ],
    achievements: [
      "Xây dựng và maintenance chức năng hệ thống",
      "Tích hợp bản đồ và hệ thống nhiệm vụ tương tác",
      "Tham gia tối ưu hóa hiệu suất hiển thị dữ liệu trên bản đồ",
    ],
    achievementImages: [CUP, UGC],
    description:
      'GeoQuest là một ứng dụng cho phép bạn tích điểm bằng cách chụp ảnh các "nhiệm vụ" quanh thành phố được hiển thị trong ứng dụng. Nhiều địa điểm khác nhau, bao gồm các tòa nhà và bãi đỗ xe trả phí trong thành phố, được hiển thị dưới dạng "nhiệm vụ", và bạn có thể dễ dàng kiếm điểm trong các hoạt động hàng ngày của mình. Số điểm tích lũy được có thể đổi lấy Thẻ quà tặng Amazon, Điểm Rakuten, v.v.',
    link: "https://www.geo-quest.jp/",
    image: GEOQUEST,
    teamSize: "10~15 người",
  },
  {
    id: 2,
    title: "【公式】Honda Cars 埼玉北 - 埼玉県のHondaディーラー",
    role: "Frontend Developer",
    technologies: [
      "Javascript",
      "HTML5",
      "Css",
      "Gsap Animation",
      "PHP",
      "...",
    ],
    achievements: [
      "Xây dựng giao diện website responsive cho đại lý Honda tại Saitama",
      "Tích hợp animation và tương tác mượt mà với GSAP",
      "Tối ưu tốc độ tải trang và trải nghiệm người dùng trên desktop và mobile",
      "Phối hợp với BE để lấy data từ bên thứ 3 do khách hàng cung cấp",
    ],
    teamSize: "3 người",
    description:
      "Honda Cars 埼玉北 là đại lý chính hãng của Honda tại khu vực Saitama Bắc (Nhật Bản), chuyên cung cấp dịch vụ toàn diện về ô tô Honda.",
    link: "https://www.hondacars-saitamakita.co.jp/",
    image: HONDA,
  },
  {
    id: 3,
    title: "Suzuki ISA (Intelligent Speed Assistance) MAP Update Portal",
    role: "Frontend Developer",
    technologies: [
      "ReactJs",
      "Ant Design",
      "Redux Toolkit",
      "React Query",
      "Đa ngôn ngữ i18n",
      "...",
    ],
    achievements: [
      "Xây dựng hệ thống quản lý phiên bản phần mềm và bản đồ cho Suziki",
      "Thiết kế lại trang chủ nhằm cải thiện trải nghiệm người dùng và hiệu suất hiển thị ",
      "Hỗ trợ đa ngôn ngữ cho 21 ngước châu Âu",
    ],
    teamSize: "3 người",
    description:
      "Suzuki ISA Map Update Portal là hệ thống web cho phép người dùng kiểm tra và tải về các phiên bản bản đồ và phần mềm mới nhất phục vụ tính năng Intelligent Speed Assistance (ISA) trên xe Suzuki. Hệ thống hỗ trợ nhiều quốc gia châu Âu và cung cấp chức năng quản lý phiên bản, cập nhật dữ liệu và phân phối bản cập nhật.",
    link: "https://www.globalsuzuki.com/automobile/technology/isa/index.html",
    image: SUZUKI,
  },
];

export default function Projects(): React.JSX.Element {
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
                      Dự án nổi bật
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    {project.role && (
                      <p className="text-white/70 text-sm mb-2">
                        <span className="font-medium">Vai trò: </span>
                        {project.role}
                      </p>
                    )}

                    {project.technologies && (
                      <p className="text-white/70 text-sm mb-2">
                        <span className="font-medium">Công nghệ: </span>
                        {project.technologies.join(", ")}
                      </p>
                    )}
                    {project.teamSize && (
                      <p className="text-white/70 text-sm mb-2">
                        <span className="font-medium">Quy mô dự án: </span>
                        {project.teamSize}
                      </p>
                    )}

                    {project.achievements &&
                      project.achievements.length > 0 && (
                        <ul className="text-white/60 text-sm mb-4 list-disc list-inside">
                          {project.achievements.map((item, idx) => (
                            <li key={idx}>{item}</li>
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
                          Xem thành tựu
                        </button>
                      )}

                    {/* Description Card */}
                    {project.description && (
                      <div className="relative z-10 mb-6">
                        <div
                          className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                            isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                          }`}
                        >
                          <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                            {project.description}
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
                        alt={project.title}
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
