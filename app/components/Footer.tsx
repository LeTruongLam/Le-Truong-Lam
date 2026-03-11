import Link from "next/link";
import Image from "next/image";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-10  px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Liên hệ
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            Tôi đang tìm kiếm cơ hội làm việc trong các dự án phát triển web cho
            khách hàng Nhật Bản, nơi tôi có thể đóng góp kỹ năng ReactJS và tiếp
            tục phát triển khả năng sử dụng tiếng Nhật trong công việc. Nếu bạn
            có dự án hoặc cơ hội phù hợp, hãy liên hệ với tôi.
          </p>
          <a
            href="mailto:truonglam962002@gmail.com"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
            truonglam962002@gmail.com
          </a>
          <div>
            <span className="text-md text-purple-400 hover:text-purple-300 transition-colors">
              0373358369
            </span>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Lê Trường Lam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
