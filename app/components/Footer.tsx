"use client";

import { useI18n } from "../i18n/LocaleProvider";

export default function Footer(): React.JSX.Element {
  const { t } = useI18n();
  const footer = t("footer");

  return (
    <footer id="contact" className="py-10  px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {footer.heading}
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            {footer.intro}
          </p>
          <a
            href="mailto:truonglam962002@gmail.com"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
            truonglam962002@gmail.com
          </a>
          <div>
            <span className="text-md text-purple-400 hover:text-purple-300 transition-colors">
              0373358367
            </span>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
