export type Locale = "en" | "ja";

export const translations = {
  en: {
    brand: "DMD SILVERLINE",
    nav: {
      home: "Home",
      about: "About",
      partnership: "Asia–Africa",
      sectors: "Sectors",
      leadership: "Leadership",
      contact: "Contact",
    },
    cta: {
      explore: "Explore Investment Opportunities",
      partner: "Partner With Us",
      learnMore: "Learn more",
    },
    common: {
      headquarters: "Headquarters",
      representation: "International representation",
    },
  },
  ja: {
    brand: "DMD SILVERLINE",
    nav: {
      home: "ホーム",
      about: "会社概要",
      partnership: "アジア・アフリカ",
      sectors: "セクター",
      leadership: "リーダーシップ",
      contact: "お問い合わせ",
    },
    cta: {
      explore: "投資機会を探る",
      partner: "パートナーになる",
      learnMore: "詳しく見る",
    },
    common: {
      headquarters: "本社",
      representation: "国際拠点",
    },
  },
} as const;

export type Messages = (typeof translations)[Locale];
