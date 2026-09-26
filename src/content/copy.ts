import type { Lang } from '../shared/i18n';

export type { Lang };

export type SiteCopy = {
  meta: { title: string; description: string };
  hero: {
    name: string;
    mark: string;
    eyebrow: string;
    headline: string;
    sub: string;
    cta: string;
    prefill: string;
    secondaryLink: string;
  };
  about: { lead: string; body: string; since: string };
  services: {
    heading: string;
    items: { title: string; body: string }[];
  };
  work: { heading: string; demoLabel: string };
  contact: {
    heading: string;
    subheading: string;
    body: string;
    cta: string;
    prefill: string;
    emailLead: string;
    email: string;
  };
  footer: { copyright: string; switchLabel: string };
  howWeWork: {
    heading: string;
    steps: { title: string; body: string }[];
    commitmentsHeading: string;
    commitments: { title: string; body: string }[];
  };
  heroDemo: {
    contact: string;
    status: string;
    label: string;
    messages: { from: 'me' | 'them'; text: string; chip?: string; chipLtr?: boolean }[];
    site: { url: string; title: string; button: string };
  };
};

export const copy: Record<Lang, SiteCopy> = {
  ar: {
    meta: {
      title: 'ادريس الزبيري — مطوّر مواقع في السعودية',
      description:
        'صفحات هبوط ومواقع ووردبريس ومتاجر ووكومرس بتصميم مدروس وسرعة عالية، مع إدارة وصيانة مستمرة بعد الإطلاق.',
    },
    hero: {
      name: 'ادريس الزبيري',
      mark: 'ب',
      eyebrow: 'مطوّر مواقع · المملكة العربية السعودية',
      headline: 'نبني مواقع تليق بعملك، وتبقى تعمل بعد الإطلاق.',
      sub: 'صفحات هبوط ومواقع ووردبريس ومتاجر ووكومرس، بتصميم مدروس، وسرعة على كل جوال، ورعاية مستمرة بعد التسليم.',
      cta: 'راسلنا على واتساب',
      prefill: 'مرحبًا، أرغب في التحدث عن موقع لنشاطي',
      secondaryLink: 'ماذا نبني',
    },
    about: {
      lead: 'كل موقع نبنيه يبدأ بسؤال واحد: كيف سيكبر معك ويسهل الاعتناء به؟',
      since: 'منذ 2022',
      body: 'ونحن نضع لكل موقع أساسًا متينًا يسهل البناء عليه لاحقًا والاعتناء به، من صفحة واحدة إلى متجر متكامل. نستعين بمختصين إذا استدعى المشروع ذلك، ونشرح كل شيء بوضوح، بلا مصطلحات معقدة، يهمنا أن تعرف ما الذي تدفع مقابله ولماذا.',
    },
    services: {
      heading: 'الخدمات',
      items: [
        {
          title: 'صفحات الهبوط',
          body: 'صفحة واحدة بهدف واحد: رسالة واضحة، وتحميل سريع على أي جوال، وزوار يتحولون إلى رسائل.',
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
    work: { heading: 'من أعمالنا', demoLabel: 'عرض حي' },
    // Approved 2026-09-24 (from copy v2 rev 2): How we work, commitments, hero demo.
    howWeWork: {
      heading: 'كيف يتم العمل',
      steps: [
        { title: 'رسالة على واتساب', body: 'تخبرنا عن نشاطك وما تحتاجه.' },
        { title: 'سعر مكتوب ونطاق واضح', body: 'نتفق على ما يشمله العمل وما لا يشمله قبل أن نبدأ.' },
        { title: 'التصميم والبناء', body: 'تراجع العمل وتوافق عليه قبل الإطلاق.' },
        { title: 'الإطلاق والتسليم', body: 'نسلّمك الموقع وصلاحياته ونشرح لك كيف تديره.' },
        { title: 'الرعاية بعد الإطلاق', body: 'إن أردت، نتولى التحديثات والنسخ الاحتياطية والحماية.' },
      ],
      commitmentsHeading: 'التزامات مكتوبة',
      commitments: [
        { title: 'سعر مكتوب قبل أن نبدأ', body: 'السعر وما يشمله وما لا يشمله، مكتوبًا، قبل أي عمل.' },
        { title: 'موافقتك قبل الإطلاق', body: 'لا يُنشر شيء قبل أن تراجعه وتوافق عليه.' },
        { title: 'الموقع باسمك', body: 'النطاق والاستضافة وصلاحيات المدير لك، ولا تحتاج إلينا لتبقى تملكه.' },
      ],
    },
    heroDemo: {
      contact: 'بن مهيوب',
      status: 'متصل الآن',
      label: 'مثال توضيحي',
      messages: [
        { from: 'me', text: 'مرحبًا، نشاطي مقهى، وأحتاج موقعًا فيه قائمة المشروبات، وميزانيتي تقريبية.' },
        { from: 'them', text: 'أهلًا بك! أرسلنا لك السعر مكتوبًا مع كل ما يشمله العمل.', chip: 'عرض السعر' },
        { from: 'me', text: 'تم، لنبدأ.' },
        { from: 'them', text: 'موقعك أصبح مباشرًا، والنطاق والاستضافة باسمك.', chip: 'yourcafe.sa', chipLtr: true },
      ],
      site: { url: 'yourcafe.sa', title: 'موقعك هنا', button: 'تواصل معنا' },
    },
    contact: {
      heading: 'تواصل',
      subheading: 'عندك فكرة مشروع؟',
      body: 'اطلب استشارتك المجانية على واتساب، لنتعرّف أكثر على فكرتك ونقترح عليك أنسب طريقة لتنفيذها. وقبل أي عمل، ستستلم سعرًا مكتوبًا.',
      cta: 'اطلب استشارتك المجانية',
      prefill: 'مرحبًا، أرغب في استشارة مجانية لمشروعي',
      emailLead: 'أو راسل بن مهيوب عبر البريد:',
      email: 'info@binmahyub.uk',
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
        'Carefully designed, fast landing pages, WordPress sites and WooCommerce stores, with ongoing administration and maintenance after launch.',
    },
    hero: {
      name: 'Edres Al-Zubairi',
      mark: 'B',
      eyebrow: 'Web developer · Saudi Arabia',
      headline: 'Websites worthy of your business, built to keep running after launch.',
      sub: 'Landing pages, WordPress sites and WooCommerce stores: carefully designed, fast on every phone, and supported after handover.',
      cta: 'Message us on WhatsApp',
      prefill: "Hi, I'd like to talk about a website for my business",
      secondaryLink: 'What we build',
    },
    about: {
      lead: 'Every site we build starts with one question: how will it grow with you and stay easy to look after?',
      since: 'Since 2022',
      body: "we've been giving every site a solid base that's easy to build on later and easy to look after, from a single page to a complete store. We bring in specialists when a project calls for it, and explain everything plainly, without jargon: it matters to us that you know what you're paying for and why.",
    },
    services: {
      heading: 'Services',
      items: [
        {
          title: 'Landing pages',
          body: 'One page, one goal: a clear message, fast loading on any phone, and visitors who turn into messages.',
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
    work: { heading: 'Selected work', demoLabel: 'Live demo' },
    // Approved 2026-09-24 (from copy v2 rev 2): How we work, commitments, hero demo.
    howWeWork: {
      heading: 'From message to launch',
      steps: [
        { title: 'A WhatsApp message', body: 'Tell us about your business and what you need.' },
        { title: 'A written price and a clear scope', body: "We agree what's included and what isn't before we start." },
        { title: 'Design and build', body: 'You review and approve the work before launch.' },
        { title: 'Launch and handover', body: 'We hand over the site and its access, and show you how to run it.' },
        { title: 'Care after launch', body: 'If you want, we handle updates, backups and security.' },
      ],
      commitmentsHeading: 'Commitments in writing',
      commitments: [
        { title: 'A written price before we start', body: "The price, what it includes and what it doesn't, in writing, before any work." },
        { title: 'Your approval before launch', body: "Nothing goes live until you've reviewed and approved it." },
        { title: 'The site is yours', body: "Domain, hosting and admin access in your name, and you don't need us to keep it." },
      ],
    },
    heroDemo: {
      contact: 'Bin Mahyub',
      status: 'Online now',
      label: 'Illustrative example',
      messages: [
        { from: 'me', text: 'Hi, I run a café, I need a site with our drinks menu, and I have a rough budget.' },
        { from: 'them', text: "Welcome! We've sent you the written price, with everything it includes.", chip: 'Quote' },
        { from: 'me', text: "Great, let's start." },
        { from: 'them', text: 'Your site is live, and the domain and hosting are in your name.', chip: 'yourcafe.sa', chipLtr: true },
      ],
      site: { url: 'yourcafe.sa', title: 'Your site here', button: 'Contact us' },
    },
    contact: {
      heading: 'Contact',
      subheading: 'Have a project idea?',
      body: "Request your free consultation on WhatsApp: let's get to know your idea, and we'll suggest the best way to build it. Before any work starts, you'll get a written price.",
      cta: 'Get your free consultation',
      prefill: "Hi, I'd like a free consultation for my project",
      emailLead: 'or email Bin Mahyub:',
      email: 'info@binmahyub.uk',
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
  statusLabel?: Record<Lang, string>;
  repoUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: 'adab-al-furusia',
    name: { ar: 'أدب الفروسية', en: 'Adab Al-Furusia' },
    description: {
      ar: 'موقع عربي لأكاديمية فروسية، يعرّف بالأكاديمية وبرامجها بأسلوب يليق بعراقة الفروسية. يعرض الرابط التصميم المقترح للموقع.',
      en: 'An Arabic website for an equestrian academy, presenting the academy and its programs with the dignity the sport carries. The demo shows the design concept.',
    },
    status: 'live',
    statusLabel: { ar: 'عرض حي — قريبًا', en: 'Live demo — coming soon' },
    repoUrl: null,
  },
  {
    slug: 'wethaq',
    name: { ar: 'جمعية وثاق الأسرية', en: 'Wethaq Family Association' },
    description: {
      ar: 'موقع جمعية سعودية غير ربحية في الإصلاح الأسري، يعرّف بالجمعية وبرامجها ودوراتها. يعرض الرابط الصفحة الرئيسية بمحتوى تجريبي.',
      en: 'The website of a Saudi non-profit in family reconciliation, presenting the association, its programs and courses. The demo shows the main page with sample content.',
    },
    status: 'live',
    repoUrl: null,
  },
  {
    slug: 'madarij',
    name: { ar: 'جمعية مدارج', en: 'Madarij Association' },
    description: {
      ar: 'تصميم مقترح لموقع جمعية في تبوك تطوّر العمل التنموي والتميز المؤسسي، يعرض عملها وسجلّها للزوار والمتطوعين.',
      en: 'A proposed website design for a Tabuk association that develops non-profit work and institutional excellence, putting its record on show for visitors and volunteers.',
    },
    status: 'live',
    repoUrl: null,
  },
];

export const links = {
  whatsapp: 'https://wa.me/966501374100',
  email: 'info@binmahyub.uk',
};