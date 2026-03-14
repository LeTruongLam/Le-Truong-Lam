export type Locale = "vi" | "en" | "ja";

export const locales: Locale[] = ["vi", "en", "ja"];

export const defaultLocale: Locale = "vi";

type HeaderMessages = {
  navHome: string;
  navAbout: string;
  navProjects: string;
  languageLabel: string;
};

type BannerMessages = {
  helloPrefix: string;
  helloNameHighlight: string;
  lifeHackPrefix: string;
  mainTitleLine1: string;
  mainTitleHighlight: string;
  mainTitleSuffix: string;
  subTitle: string;
  currentJobIntro: string;
  currentCompanyName: string;
  currentCompanySuffix: string;
  introParagraph: string;
  typingPrefix: string;
  typingRole: string;
};

type AboutMessages = {
  intro: string;
  tabSkills: string;
  tabEducation: string;
  tabLanguage: string;
  skillsTitle: string;
  skillsProgrammingLabel: string;
  programmingLanguages: string;
  frontendTitle: string;
  frontendItems: string[];
  toolsTitle: string;
  toolsItems: string[];
  educationTitle: string;
  educationSchool: string;
  educationMajor: string;
  educationTime: string;
  educationGpa: string;
  languageTitle: string;
  languageItems: string[];
};

type ExperienceCardMessages = {
  id: number;
  company: string;
  description: string;
};

type ExperienceMessages = {
  sectionTitle: string;
  cards: ExperienceCardMessages[];
};

type ProjectCardMessages = {
  id: number;
  title: string;
  role?: string;
  teamSize?: string;
  description?: string;
  achievements?: string[];
};

type ProjectsMessages = {
  featuredLabel: string;
  roleLabel: string;
  techLabel: string;
  teamSizeLabel: string;
  viewAchievements: string;
  cards: ProjectCardMessages[];
};

type FooterMessages = {
  heading: string;
  intro: string;
  copyright: string;
};

type Messages = {
  header: HeaderMessages;
  banner: BannerMessages;
  about: AboutMessages;
  experience: ExperienceMessages;
  projects: ProjectsMessages;
  footer: FooterMessages;
};

export const messages: Record<Locale, Messages> = {
  vi: {
    header: {
      navHome: "Giới thiệu",
      navAbout: "Thông tin",
      navProjects: "Dự án",
      languageLabel: "Ngôn ngữ",
    },
    banner: {
      helloPrefix: "Xin chào! Tôi là",
      helloNameHighlight: "Lê Trường Lam",
      lifeHackPrefix: "Frontend life hack:",
      mainTitleLine1: "Giao diện ấn tượng",
      mainTitleHighlight: "= code nào cũng được tha thứ.",
      mainTitleSuffix: "",
      subTitle: "Vì nếu UI không ấn tượng, còn gì để mà thích nữa?",
      currentJobIntro: "Hiện tại, Tôi là 1 Frontend Developer tại",
      currentCompanyName: "Sotatek",
      currentCompanySuffix: "",
      introParagraph:
        "Với 1.5+ năm kinh nghiệm phát triển sản phẩm cho khách hàng Nhật Bản, sử dụng ReactJS, TypeScript để phát triển sản phẩm. Tôi có khả năng đọc tài liệu thiết kế tiếng Nhật (JLPT N3). Định hướng phát triển BrSE, tập trung vào vai trò cầu nối kỹ thuật – ngôn ngữ – quy trình giữa khách hàng Nhật Bản và team phát triển.",
      typingPrefix: "I'm a",
      typingRole: "Frontend Developer",
    },
    about: {
      intro:
        "Tôi là Frontend Developer với kinh nghiệm phát triển ứng dụng web bằng ReactJS. Tôi đang tìm kiếm cơ hội gia nhập một công ty outsource Nhật Bản, nơi tôi có thể phát triển sản phẩm cho khách hàng Nhật và nâng cao khả năng sử dụng tiếng Nhật.",
      tabSkills: "Kỹ năng",
      tabEducation: "Học vấn",
      tabLanguage: "Ngoại ngữ",
      skillsTitle: "Kỹ năng",
      skillsProgrammingLabel: "Ngôn ngữ lập trình",
      programmingLanguages: "JavaScript, TypeScript",
      frontendTitle: "Frontend",
      frontendItems: [
        "ReactJS, Next.js, Redux Toolkit, TanStack Query",
        "HTML5, CSS3, TailwindCSS, Sass",
        "SEO, Responsive Design",
      ],
      toolsTitle: "Công cụ",
      toolsItems: [
        "Git, GitHub, GitLab",
        "Jira, Backlog, Postman",
        "Figma, VS Code",
      ],
      educationTitle: "Học vấn",
      educationSchool:
        "Đại học Bách Khoa Hà Nội – Trường CNTT & Truyền Thông",
      educationMajor: "Khoa Công nghệ Thông tin Việt Nhật – K65",
      educationTime: "Cử nhân Công nghệ Thông tin (2020 – 2024)",
      educationGpa: "CPA: 3.1 / 4.0",
      languageTitle: "Ngoại ngữ",
      languageItems: [
        "JLPT N3",
        "Đã hoàn thành khóa học N2 tại Dũng Mori",
        "Đọc hiểu tài liệu kỹ thuật tiếng Nhật",
      ],
    },
    experience: {
      sectionTitle: "Kinh nghiệm làm việc",
      cards: [
        {
          id: 1,
          company: "Vị trí: ReactJs Developer",
          description:
            "SotaTek, một công ty con của Sota Holdings, là đối tác đổi mới về Trí tuệ Nhân tạo (AI) và Blockchain. Có trụ sở chính tại Việt Nam...",
        },
        {
          id: 2,
          company: "Vị trí: Frontend Developer",
          description:
            "Công ty Cổ phần HBLAB là thành viên của Tập đoàn HBLAB, một tập đoàn công nghệ có trụ sở tại Việt Nam, cung cấp dịch vụ Phát triển Phần mềm theo mô hình Dịch vụ (SDaaS) và tư vấn CNTT toàn diện cho các doanh nghiệp toàn cầu...",
        },
        {
          id: 3,
          company: "Vị trí: Intern Developer",
          description:
            "Công ty Cổ phần MISA Tên giao dịch: MISA Joint Stock Company, tên viết tắt MISA JSC Công ty Cổ phần MISA là công ty chuyên về phần mềm kế toán, quản trị nguồn nhân lực,...",
        },
      ],
    },
    projects: {
      featuredLabel: "Dự án nổi bật",
      roleLabel: "Vai trò:",
      techLabel: "Công nghệ:",
      teamSizeLabel: "Quy mô dự án:",
      viewAchievements: "Xem thành tựu",
      cards: [
        {
          id: 1,
          title: "GeoQuest",
          role: "Frontend ReactJs Developer",
          teamSize: "10~15 người",
          achievements: [
            "Xây dựng và maintenance chức năng hệ thống",
            "Tích hợp bản đồ và hệ thống nhiệm vụ tương tác",
            "Tham gia tối ưu hóa hiệu suất hiển thị dữ liệu trên bản đồ",
          ],
          description:
            'GeoQuest là một ứng dụng cho phép bạn tích điểm bằng cách chụp ảnh các "nhiệm vụ" quanh thành phố được hiển thị trong ứng dụng. Nhiều địa điểm khác nhau, bao gồm các tòa nhà và bãi đỗ xe trả phí trong thành phố, được hiển thị dưới dạng "nhiệm vụ", và bạn có thể dễ dàng kiếm điểm trong các hoạt động hàng ngày của mình. Số điểm tích lũy được có thể đổi lấy Thẻ quà tặng Amazon, Điểm Rakuten, v.v.',
        },
        {
          id: 2,
          title: "【公式】Honda Cars 埼玉北 - 埼玉県のHondaディーラー",
          role: "Frontend Developer",
          teamSize: "3 người",
          achievements: [
            "Xây dựng giao diện website responsive cho đại lý Honda tại Saitama",
            "Tích hợp animation và tương tác mượt mà với GSAP",
            "Tối ưu tốc độ tải trang và trải nghiệm người dùng trên desktop và mobile",
            "Phối hợp với BE để lấy data từ bên thứ 3 do khách hàng cung cấp",
          ],
          description:
            "Honda Cars 埼玉北 là đại lý chính hãng của Honda tại khu vực Saitama Bắc (Nhật Bản), chuyên cung cấp dịch vụ toàn diện về ô tô Honda.",
        },
        {
          id: 3,
          title: "Suzuki ISA (Intelligent Speed Assistance) MAP Update Portal",
          role: "Frontend Developer",
          teamSize: "3 người",
          achievements: [
            "Xây dựng hệ thống quản lý phiên bản phần mềm và bản đồ cho Suziki",
            "Thiết kế lại trang chủ nhằm cải thiện trải nghiệm người dùng và hiệu suất hiển thị",
            "Hỗ trợ đa ngôn ngữ cho 21 ngước châu Âu",
          ],
          description:
            "Suzuki ISA Map Update Portal là hệ thống web cho phép người dùng kiểm tra và tải về các phiên bản bản đồ và phần mềm mới nhất phục vụ tính năng Intelligent Speed Assistance (ISA) trên xe Suzuki. Hệ thống hỗ trợ nhiều quốc gia châu Âu và cung cấp chức năng quản lý phiên bản, cập nhật dữ liệu và phân phối bản cập nhật.",
        },
      ],
    },
    footer: {
      heading: "Liên hệ",
      intro:
        "Tôi đang tìm kiếm cơ hội làm việc trong các dự án phát triển web cho khách hàng Nhật Bản, nơi tôi có thể đóng góp kỹ năng ReactJS và tiếp tục phát triển khả năng sử dụng tiếng Nhật trong công việc. Nếu bạn có dự án hoặc cơ hội phù hợp, hãy liên hệ với tôi.",
      copyright: "© 2026 Lê Trường Lam. All rights reserved.",
    },
  },
  en: {
    header: {
      navHome: "Overview",
      navAbout: "About",
      navProjects: "Projects",
      languageLabel: "Language",
    },
    banner: {
      helloPrefix: "Hi! I'm",
      helloNameHighlight: "Le Truong Lam",
      lifeHackPrefix: "Frontend life hack:",
      mainTitleLine1: "A stunning interface",
      mainTitleHighlight: "= even messy code is forgiven.",
      mainTitleSuffix: "",
      subTitle: "If the UI isn’t impressive, what’s left to love?",
      currentJobIntro: "Currently, I'm a Frontend Developer at",
      currentCompanyName: "Sotatek",
      currentCompanySuffix: "",
      introParagraph:
        "I have 1.5+ years of experience building products for Japanese clients using ReactJS and TypeScript. I can read Japanese design documents (JLPT N3). I aim to become a BrSE, acting as a bridge between Japanese clients and the development team across technology, language, and process.",
      typingPrefix: "I'm a",
      typingRole: "Frontend Developer",
    },
    about: {
      intro:
        "I'm a Frontend Developer with experience building web applications using ReactJS. I'm looking for opportunities at a Japanese outsource company where I can build products for Japanese clients and improve my Japanese skills.",
      tabSkills: "Skills",
      tabEducation: "Education",
      tabLanguage: "Languages",
      skillsTitle: "Skills",
      skillsProgrammingLabel: "Programming languages",
      programmingLanguages: "JavaScript, TypeScript",
      frontendTitle: "Frontend",
      frontendItems: [
        "ReactJS, Next.js, Redux Toolkit, TanStack Query",
        "HTML5, CSS3, TailwindCSS, Sass",
        "SEO, Responsive Design",
      ],
      toolsTitle: "Tools",
      toolsItems: [
        "Git, GitHub, GitLab",
        "Jira, Backlog, Postman",
        "Figma, VS Code",
      ],
      educationTitle: "Education",
      educationSchool:
        "Hanoi University of Science and Technology – School of Information and Communication Technology",
      educationMajor:
        "Vietnam-Japan Information Technology Program – K65",
      educationTime: "BSc in Information Technology (2020 – 2024)",
      educationGpa: "GPA: 3.1 / 4.0",
      languageTitle: "Languages",
      languageItems: [
        "JLPT N3",
        "Completed N2 course at Dung Mori",
        "Can read technical documents in Japanese",
      ],
    },
    experience: {
      sectionTitle: "Work Experience",
      cards: [
        {
          id: 1,
          company: "Position: ReactJs Developer",
          description:
            "SotaTek, a subsidiary of Sota Holdings, is an innovation partner in Artificial Intelligence (AI) and Blockchain, headquartered in Vietnam...",
        },
        {
          id: 2,
          company: "Position: Frontend Developer",
          description:
            "HBLAB Joint Stock Company is a member of the HBLAB Group, a Vietnam-based technology corporation providing Software Development as a Service (SDaaS) and comprehensive IT consulting for global enterprises...",
        },
        {
          id: 3,
          company: "Position: Intern Developer",
          description:
            "MISA Joint Stock Company (MISA JSC) is a leading software company specializing in accounting, human resource management, and business management solutions...",
        },
      ],
    },
    projects: {
      featuredLabel: "Featured Project",
      roleLabel: "Role:",
      techLabel: "Tech stack:",
      teamSizeLabel: "Team size:",
      viewAchievements: "View achievements",
      cards: [
        {
          id: 1,
          title: "GeoQuest",
          role: "Frontend ReactJs Developer",
          teamSize: "10–15 members",
          achievements: [
            "Implemented and maintained core system features",
            "Integrated interactive missions with map visualization",
            "Helped optimize performance for large map data rendering",
          ],
          description:
            'GeoQuest is an app that lets users earn points by taking photos of "missions" around the city displayed in the app. Various locations, including buildings and paid parking lots, are shown as missions, so users can easily collect points in their daily activities. Accumulated points can be exchanged for Amazon Gift Cards, Rakuten Points, and more.',
        },
        {
          id: 2,
          title: "Honda Cars Saitama North – Official Dealer Website",
          role: "Frontend Developer",
          teamSize: "3 members",
          achievements: [
            "Built a fully responsive website for Honda dealer in Saitama",
            "Integrated smooth animations and interactions using GSAP",
            "Optimized loading speed and UX on both desktop and mobile",
            "Collaborated with backend to integrate third‑party data sources provided by the client",
          ],
          description:
            "Honda Cars Saitama North is an official Honda dealer in the northern Saitama area of Japan, providing comprehensive services for Honda vehicles.",
        },
        {
          id: 3,
          title: "Suzuki ISA (Intelligent Speed Assistance) Map Update Portal",
          role: "Frontend Developer",
          teamSize: "3 members",
          achievements: [
            "Built a system for managing software and map versions for Suzuki",
            "Redesigned the landing page to improve UX and rendering performance",
            "Implemented multilingual support for 21 European countries",
          ],
          description:
            "The Suzuki ISA Map Update Portal is a web system that allows users to check and download the latest map and software versions supporting the Intelligent Speed Assistance (ISA) feature on Suzuki vehicles. It supports multiple European countries and provides version management, data update, and distribution capabilities.",
        },
      ],
    },
    footer: {
      heading: "Contact",
      intro:
        "I'm looking for opportunities to work on web development projects for Japanese clients, where I can contribute my ReactJS skills and continue improving my Japanese in a real-world environment. If you have a suitable project or opportunity, feel free to reach out.",
      copyright: "© 2026 Le Truong Lam. All rights reserved.",
    },
  },
  ja: {
    header: {
      navHome: "自己紹介",
      navAbout: "プロフィール",
      navProjects: "プロジェクト",
      languageLabel: "言語",
    },
    banner: {
      helloPrefix: "はじめまして、",
      helloNameHighlight: "レー・チュオン・ラム",
      lifeHackPrefix: "フロントエンドのライフハック：",
      mainTitleLine1: "印象的なUIがあれば、",
      mainTitleHighlight: "コードは多少汚くても許される。",
      mainTitleSuffix: "",
      subTitle: "UI が魅力的でなければ、好きになる理由は残りません。",
      currentJobIntro: "現在、Sotatek でフロントエンドエンジニアとして働いています。",
      currentCompanyName: "Sotatek",
      currentCompanySuffix: "",
      introParagraph:
        "日本向けプロジェクトのフロントエンド開発を 1.5 年以上担当し、ReactJS と TypeScript を使用してプロダクト開発を行ってきました。日本語設計書の読解が可能（JLPT N3）で、今後は BrSE として、日本のお客様と開発チームの間で技術と言語、プロセスをつなぐ役割を目指しています。",
      typingPrefix: "I'm a",
      typingRole: "フロントエンドエンジニア",
    },
    about: {
      intro:
        "ReactJS を用いた Web アプリケーション開発経験を持つフロントエンドエンジニアです。日本向けアウトソーシング企業で、日本のお客様向けのプロダクト開発と日本語力の向上にチャレンジしたいと考えています。",
      tabSkills: "スキル",
      tabEducation: "学歴",
      tabLanguage: "語学",
      skillsTitle: "スキル",
      skillsProgrammingLabel: "プログラミング言語",
      programmingLanguages: "JavaScript, TypeScript",
      frontendTitle: "フロントエンド",
      frontendItems: [
        "ReactJS, Next.js, Redux Toolkit, TanStack Query",
        "HTML5, CSS3, TailwindCSS, Sass",
        "SEO, レスポンシブデザイン",
      ],
      toolsTitle: "ツール",
      toolsItems: [
        "Git, GitHub, GitLab",
        "Jira, Backlog, Postman",
        "Figma, VS Code",
      ],
      educationTitle: "学歴",
      educationSchool:
        "ハノイ工科大学 – 情報通信技術学部",
      educationMajor: "日越情報技術学科 – K65",
      educationTime: "情報技術学士 (2020 – 2024)",
      educationGpa: "GPA: 3.1 / 4.0",
      languageTitle: "語学",
      languageItems: [
        "JLPT N3",
        "Dũng Mori にて N2 コース修了",
        "日本語の技術資料を読解可能",
      ],
    },
    experience: {
      sectionTitle: "職務経験",
      cards: [
        {
          id: 1,
          company: "ポジション：ReactJs デベロッパー",
          description:
            "SotaTek は Sota Holdings の子会社であり、ベトナムを本拠地とする AI（人工知能）とブロックチェーン分野のイノベーションパートナーです...",
        },
        {
          id: 2,
          company: "ポジション：フロントエンドデベロッパー",
          description:
            "HBLAB 株式会社は、ベトナムを拠点とする HBLAB グループの一員であり、Software Development as a Service（SDaaS）モデルによるソフトウェア開発と包括的な IT コンサルティングサービスをグローバル企業向けに提供しています...",
        },
        {
          id: 3,
          company: "ポジション：インターンデベロッパー",
          description:
            "MISA 株式会社（MISA JSC）は、会計、人事管理、業務管理向けソフトウェアを提供するベトナムの大手ソフトウェア企業です...",
        },
      ],
    },
    projects: {
      featuredLabel: "注目プロジェクト",
      roleLabel: "担当:",
      techLabel: "技術スタック:",
      teamSizeLabel: "チーム人数:",
      viewAchievements: "実績を見る",
      cards: [
        {
          id: 1,
          title: "GeoQuest",
          role: "フロントエンド ReactJs デベロッパー",
          teamSize: "10〜15 名",
          achievements: [
            "システム機能の開発および保守を担当",
            "マップとミッション機能の連携・インタラクションを実装",
            "大量データ表示時のマップ描画パフォーマンス最適化に貢献",
          ],
          description:
            'GeoQuest は、アプリ内に表示される「ミッション」の写真を撮影することでポイントを獲得できるアプリです。市内の建物や有料駐車場など、さまざまな場所がミッションとして表示され、日常生活の中で簡単にポイントを貯めることができます。貯まったポイントは、Amazon ギフト券や楽天ポイントなどと交換できます。',
        },
        {
          id: 2,
          title: "【公式】Honda Cars 埼玉北 - 埼玉県のHondaディーラー",
          role: "フロントエンドデベロッパー",
          teamSize: "3 名",
          achievements: [
            "埼玉北エリアの Honda 正規ディーラー向けレスポンシブ Web サイトを構築",
            "GSAP を用いてスムーズなアニメーションとインタラクションを実装",
            "デスクトップとモバイル双方での表示速度とユーザー体験を最適化",
            "バックエンドと連携し、顧客提供の外部データソースを統合",
          ],
          description:
            "Honda Cars 埼玉北は、日本・埼玉県北部エリアの Honda 正規ディーラーであり、Honda 車に関する総合的なサービスを提供しています。",
        },
        {
          id: 3,
          title: "Suzuki ISA (Intelligent Speed Assistance) MAP Update Portal",
          role: "フロントエンドデベロッパー",
          teamSize: "3 名",
          achievements: [
            "Suzuki 向けソフトウェアおよびマップバージョン管理システムを構築",
            "トップページを再設計し、ユーザー体験と描画パフォーマンスを向上",
            "ヨーロッパ 21 カ国向けの多言語対応を実装",
          ],
          description:
            "Suzuki ISA Map Update Portal は、Suzuki 車の ISA（Intelligent Speed Assistance）機能向けに最新のマップおよびソフトウェアバージョンを確認・ダウンロードできる Web システムです。複数の欧州諸国に対応し、バージョン管理、データ更新、配信機能を提供しています。",
        },
      ],
    },
    footer: {
      heading: "お問い合わせ",
      intro:
        "日本向け Web 開発プロジェクトに携わり、ReactJS のスキルを活かしながら、実務を通じて日本語能力をさらに伸ばせる機会を探しています。もしご興味のあるプロジェクトやポジションがありましたら、ぜひご連絡ください。",
      copyright: "© 2026 レー・チュオン・ラム. All rights reserved.",
    },
  },
};

