import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="https://www.facebook.com/nhobe.cau.1"
            className="text-2xl font-bold  transition-colors"
          >
            <span className="text-purple-400">
              <span className="hidden md:inline">Lê Trường </span>Lam
            </span>
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link
                href="#home"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Giới thiệu
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#about"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Thông tin
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#lab"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Dự án
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
