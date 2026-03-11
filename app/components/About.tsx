"use client";

import { useState } from "react";
import Image from "next/image";

export default function About(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-2xl max-w-4xl mx-auto">
            Tôi là Frontend Developer với kinh nghiệm phát triển ứng dụng web
            bằng ReactJS. Tôi đang tìm kiếm cơ hội gia nhập một{" "}
            <span className="text-purple-400">công ty outsource Nhật Bản</span>,
            nơi tôi có thể phát triển sản phẩm cho khách hàng Nhật và nâng cao
            khả năng <span className="text-purple-400">sử dụng tiếng Nhật</span>
            .
          </p>
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
            Kỹ năng
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-lg ${
              activeTab === "education"
                ? "text-purple-400 border border-purple-400"
                : "border border-white"
            }`}
          >
            Học vấn
          </button>

          <button
            onClick={() => setActiveTab("language")}
            className={`px-6 py-2 rounded-lg ${
              activeTab === "language"
                ? "text-purple-400 border border-purple-400"
                : "border border-white"
            }`}
          >
            Ngoại ngữ
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto text-lg">
          {activeTab === "skills" && (
            <div>
              <h3 className="text-xl font-bold mb-4">Kỹ năng</h3>

              <p className="font-semibold">🔠 Ngôn ngữ lập trình</p>
              <p>JavaScript, TypeScript</p>

              <p className="font-semibold mt-4">💻 Frontend</p>
              <ul className="list-disc ml-6">
                <li>ReactJS, Next.js, Redux Toolkit, TanStack Query</li>
                <li>HTML5, CSS3, TailwindCSS, Sass</li>
                <li>SEO, Responsive Design</li>
              </ul>

              {/* <p className="font-semibold mt-4">💻 Backend / Other</p>
              <p>NestJS (basic – REST API, authentication cơ bản)</p> */}

              <p className="font-semibold mt-4">🔨 Công cụ</p>
              <p>Git, GitHub, GitLab, Jira, Backlog, Postman, Figma, VS Code</p>
            </div>
          )}

          {activeTab === "education" && (
            <div>
              <h3 className="text-xl font-bold mb-4">Học vấn</h3>
              <p className="font-semibold">
                Đại học Bách Khoa Hà Nội – Trường CNTT & Truyền Thông
              </p>
              <p>Khoa Công nghệ Thông tin Việt Nhật – K65</p>
              <p>Cử nhân Công nghệ Thông tin (2020 – 2024)</p>
              <p>CPA: 3.1 / 4.0</p>
            </div>
          )}

          {activeTab === "language" && (
            <div>
              <h3 className="text-xl font-bold mb-4">Ngoại ngữ</h3>
              <ul className="list-disc ml-6">
                <li>JLPT N3</li>
                <li>Đã hoàn thành khóa học N2 tại Dũng Mori</li>
                <li>Đọc hiểu tài liệu kỹ thuật tiếng Nhật</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
