 "use client";

import Link from "next/link";
import { useI18n } from "../i18n/LocaleProvider";
import type { Locale } from "../i18n/locales";

const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
  ja: "日本語",
};

export default function Header(): React.JSX.Element {
  const { t, locale, setLocale } = useI18n();
  const header = t("header");

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
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <li className="m-0 p-0">
                <Link
                  href="#home"
                  className="text-white hover:text-purple-400 transition-colors text-base font-normal"
                >
                  {header.navHome}
                </Link>
              </li>
              <li className="m-0 p-0">
                <Link
                  href="#about"
                  className="text-white hover:text-purple-400 transition-colors text-base font-normal"
                >
                  {header.navAbout}
                </Link>
              </li>
              <li className="m-0 p-0">
                <Link
                  href="#lab"
                  className="text-white hover:text-purple-400 transition-colors text-base font-normal"
                >
                  {header.navProjects}
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline text-sm text-white/60">
                {header.languageLabel}:
              </span>
              <div className="flex gap-1 rounded-full bg-white/5 p-1">
                {(["vi", "en", "ja"] as Locale[]).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    className={`px-2 py-1 text-xs rounded-full border transition-colors cursor-pointer ${
                      locale === code
                        ? "border-purple-400 text-purple-300 bg-purple-500/10"
                        : "border-transparent text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {localeLabels[code]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
