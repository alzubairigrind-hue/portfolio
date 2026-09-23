export type Lang = 'ar' | 'en';

export type SiteCopy = {
  meta: { title: string; description: string };
  hero: {
    name: string;
    eyebrow: string;
    headline: string;
    sub: string;
    cta: string;
    secondaryLink: string;
  };
  about: { heading: string; lead: string; body: string };
  services: {
    heading: string;
    items: { title: string; body: string }[];
  };
  work: { heading: string };
  contact: {
    heading: string;
    subheading: string;
    body: string;
    cta: string;
    emailLead: string;
    email: string;
  };
  footer: { copyright: string; switchLabel: string };
};

export const copy: Record<Lang, SiteCopy> = {
  ar: {
    meta: {
      title: 'ادريس الزبيري — مطوّر مواقع في السعودية',
      description:
        'صفحات هبوط ومواقع ووردبريس ومتاجر ووكومرس بتصميم فاخر وسرعة عالية، مع إدارة وصيانة مستمرة بعد الإطلاق.',
    },
    hero: {
      name: 'ادريس الزبيري',
      eyebrow: 'مطوّر مواقع · المملكة العربية السعودية',
      headline: 'نبني مواقع تليق بعملك، وتبقى تعمل بعد الإطلاق.',
      sub: 'صفحات هبوط ومتاجر ووردبريس، بتصميم مدروس، وسرعة على كل جوال، ورعاية مستمرة بعد التسليم.',
      cta: 'راسلنا على واتساب',
      secondaryLink: 'ماذا نبني',
    },
    about: {
      heading: 'من نحن',
      lead: 'كل موقع نبنيه يبدأ بسؤال واحد: كيف سيبقى يعمل بعد سنة؟',
      body: 'ادريس الزبيري، خريج نظم المعلومات الإدارية والأول على دفعته عام 2023، يبني للويب منذ 2022. وسنوات من تدريس أكثر من 50 طالبًا رسّخت عادة لا نتخلى عنها: أن نشرح كل شيء بوضوح، بلا مصطلحات معقدة.',
    },
    services: {
      heading: 'الخدمات',
      items: [
        {
          title: 'صفحات الهبوط',
          body: 'صفحة واحدة بهدف واحد: مظهر فاخر، وتحميل سريع على أي جوال، وزوار يتحولون إلى رسائل.',
        },
        {
          title: 'مواقع ووردبريس ومتاجر ووكومرس',
          body: 'مواقع أعمال ومتاجر إلكترونية تستطيع تحديثها بنفسك، مبنية بشكل صحيح من اليوم الأول.',
        },
        {
          title: 'الإدارة والصيانة',
          body: 'تحديثات ونسخ احتياطية وحماية وإصلاحات، ليبقى موقعك يعمل وأنت منشغل بعملك.',
        },
      ],
    },
    work: { heading: 'أعمال مختارة' },
    contact: {
      heading: 'تواصل',
      subheading: 'لديك مشروع في بالك؟',
      body: 'أخبرنا عنه على واتساب، وستعرف السعر بوضوح قبل أن نبدأ أي عمل.',
      cta: 'راسلنا على واتساب',
      emailLead: 'أو عبر البريد:',
      email: 'alzubairi.idris@gmail.com',
    },
    footer: {
      copyright: '© 2026 ادريس الزبيري',
      switchLabel: 'English',
    },
  },
  en: {
    meta: {
      title: 'Edres Al-Zubairi — Web developer, Saudi Arabia',
      description:
        'Premium, fast landing pages, WordPress sites and WooCommerce stores, with ongoing administration and maintenance after launch.',
    },
    hero: {
      name: 'Edres Al-Zubairi',
      eyebrow: 'Web developer · Saudi Arabia',
      headline: 'Websites worthy of your business, built to keep running after launch.',
      sub: 'Landing pages and WordPress stores: carefully designed, fast on every phone, and looked after long after handover.',
      cta: 'Message us on WhatsApp',
      secondaryLink: 'What we build',
    },
    about: {
      heading: 'About',
      lead: 'Every site we build starts with one question: how will it still be running a year from now?',
      body: 'Edres Al-Zubairi graduated first in class in Management Information Systems (2023) and has been building for the web since 2022. Years of teaching more than 50 students left a habit we keep: explain everything plainly, without jargon.',
    },
    services: {
      heading: 'Services',
      items: [
        {
          title: 'Landing pages',
          body: 'One page, one goal: a premium look, fast loading on any phone, and visitors who turn into messages.',
        },
        {
          title: 'WordPress sites & WooCommerce stores',
          body: 'Business sites and online stores you can update yourself, set up properly from day one.',
        },
        {
          title: 'Administration & maintenance',
          body: 'Updates, backups, security and fixes, so your site keeps running while you run your business.',
        },
      ],
    },
    work: { heading: 'Selected work' },
    contact: {
      heading: 'Contact',
      subheading: 'Have a project in mind?',
      body: "Tell us about it on WhatsApp. You'll get a clear price before any work starts.",
      cta: 'Message us on WhatsApp',
      emailLead: 'or by email:',
      email: 'alzubairi.idris@gmail.com',
    },
    footer: {
      copyright: '© 2026 Edres Al-Zubairi',
      switchLabel: 'العربية',
    },
  },
};

export type Project = {
  slug: string;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  status: 'coming-soon' | 'live';
  statusLabel: Record<Lang, string>;
  repoUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: 'adab-al-furusia',
    name: { ar: 'أدب الفروسية', en: 'Adab Al-Furusia' },
    description: {
      ar: 'موقع عربي لأكاديمية فروسية، يعرّف بالأكاديمية وبرامجها بأسلوب يليق بعراقة الفروسية.',
      en: 'An Arabic website for an equestrian academy, presenting the academy and its programs with the dignity the sport carries.',
    },
    status: 'coming-soon',
    statusLabel: { ar: 'عرض حي — قريبًا', en: 'Live demo — coming soon' },
    repoUrl: null,
  },
];

export const links = {
  whatsapp: 'https://wa.me/966501374100',
  email: 'alzubairi.idris@gmail.com',
};