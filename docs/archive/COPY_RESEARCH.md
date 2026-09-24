Researched: 2026-09-23

# Copy research: how web agencies write their sites, and how Bin Mahyub's copy compares

Compared against: `src/content/copy.ts` (ar + en), page order Hero → About → Services → Work → Contact.
Method: each homepage was fetched live with curl on 2026-09-23 and reduced to text. The quotes below are copied from that text. Arabic is quoted as published, including the original spelling.

---

## 1. Summary: the 5 most important findings

1. **Saudi agency sites rely on proof we can't use.** Nearly every Saudi site studied leads with years, project counts or client counts ("+12 سنة خبرة", "500 مشروع ناجح", "+1000 عميل سعيد"), superlatives ("أفضل شركة", "رائدة") or government logos. None of that is available to us, and copying the superlatives without the numbers would read as empty. The good news is that the calm, number-free MSA register already in `copy.ts` stands out from them.
2. **The strongest honest proof is a specific commitment the client can check.** The Saudi sites that feel most trustworthy spell out concrete terms: "سعر ثابت ومكتوب — لا مفاجآت" and "الملفات والكود ملكك 100%" (Art4Muslim), and "لا نرسل رقمًا مجرّدًا في رسالة ونسمّيه عرضًا" (Mrhbaa). Small international studios do the same with principles: "so you're never dependent on us" (Sparkbox), and a "Not our cup of tea" list (Spatie). Our line "ستعرف السعر بوضوح قبل أن نبدأ أي عمل" is already this kind of proof. We should add more lines like it, such as what the client receives at handover.
3. **Small studios can say "we" honestly by describing how they are set up.** Set Studio names a core team plus "The Network: Trusted, talented and verified independents that fit like a glove in the studio". Clearleft says openly "We're always interested in teaming up with talented freelancers". This fits Bin Mahyub's delegation model directly. We can describe the setup (one name, the right specialist for each job, one point of contact) without claiming any headcount.
4. **Almost every agency has a process section, and we have none.** Ethar Web (6 steps), Mrhbaa (6), Art4Muslim (5), Orisys (5), Spatie (3) and Sparkbox (3) all have one. For a client who has never hired an agency, a process is proof that needs no numbers. It is the biggest honest gap in our page.
5. **Tell people what to send in the first WhatsApp message.** Mrhbaa: "أول رسالة لا تحتاج ملف متطلبات. نحتاج ثلاثة أسطر فقط: نوع المشروع، من سيستخدمه، والميزانية التقريبية." Mule: "If we can help, we'll tell you how." Our contact section asks people to "tell us about it" but doesn't say what to send. That is a cheap fix, and it helps our only conversion goal.

**Changes recommended:** tweaks in all 5 page sections plus the meta title. No section needs a full rewrite. We should also add 2 new blocks: a process section and a "what you get at handover and after launch" section.

---

## 2. Agencies studied

### Saudi (Arabic pages)

| Name | Country | URL | Voice in one line |
|---|---|---|---|
| Geexar (جيكسر) | KSA (Riyadh) | https://geexar.com/ar/ | SEO-keyword H1, numbers first (200+ projects, team of 70), then an 8-point "why us" list of promises |
| Internet Solutions (انترنت سوليوشنز) | KSA (Jeddah/Riyadh/Khobar) | https://is.net.sa/ar/ | Superlative, number-heavy ("+1000", "18 عاماً"), government client logos, hosting-led |
| Ethar Web (إيثار ويب) | KSA (Kharj) | https://etharweb.com/ | Discount-led ("خصم 50%"), but good plain, goal-first copy on what you get |
| Art4Muslim (فنون المسلم) | KSA (Riyadh) | https://www.art4muslim.com/ | The most concrete Saudi site: written contract commitments, published prices, a 5-step process, ownership guarantees |
| Mrhbaa (مرحبا) | KSA | https://mrhbaa.com/ | Numbers plus unusually honest contracting detail: a 6-stage path from the first WhatsApp message to the source code |
| Nova Digital (نوفا ديجيتال) | KSA (Jeddah) | https://novadigital.sa/ | Saudi dialect (وش، خلّنا، نشتغل، تبي), brand/growth tone, "starting from" prices |
| Orisys (أورسيس) | KSA | https://orisysa.com/ | Luxury vocabulary (فخامة، فاخرة، إرثك الرقمي), speed promise ("في أيام"), 5-step process, FAQ |
| Creative Digital (كريتيف ديجيتال) | KSA (Riyadh) | https://www.creativeedigital.com/ar | Generic "نصنع تجارب رقمية" voice; reviews section reads "لا توجد مراجعات بعد" |
| Shadow Design (شدو ديزاين) | KSA | https://shadowdesign.sa/ | Branding studio: vision/mission/values blocks, ministry logos, 10-point "why us" |

Not used: Sheba Tec (shebatec.com) has a Yemeni phone number (+967), and Swaed (swaed.sa) is a business incubator, not a web agency. No Gulf agency outside Saudi Arabia was studied; all 9 regional sources are Saudi.

### International small studios

| Name | Country | URL | Voice in one line |
|---|---|---|---|
| Clearleft | UK (Brighton) | https://clearleft.com/ | Calm, partner framing, a named cofounder in the CTA |
| Set Studio | UK (Cheltenham) | https://set.studio/ | Boutique, confident, open about being small, core team plus a "Network" of independents |
| Wholegrain Digital | UK (London) | https://www.wholegraindigital.com/ | WordPress specialist with a values-led mission (sustainability) and measurable goals |
| Spatie | Belgium (Antwerp) | https://spatie.be/ | Plain and technical, "Our approach" in 3 steps, explicit "Not our cup of tea" list |
| Mule Design | USA (San Francisco) | https://muledesign.com/ | Dry, opinionated, self-deprecating, conversation-first CTA |
| Zao | USA (Portland) | https://zao.is/ | WordPress specialist, "trusted technical partner", community-contribution proof |
| Sparkbox | USA | https://sparkbox.com/ | "How We'll Work Together" in 3 steps, the client is left independent |
| Tighten | USA | https://tighten.com/ | Specialist Laravel shop, "we only do a few things"; bigger than the others |
| WP Buffs | USA | https://wpbuffs.com/ | WordPress care plans; reference for maintenance wording only |

Also checked: Paravel (https://paravelinc.com/). It now says it has "embarked on a new journey as Luro", so it is no longer a working agency reference. Only its closing CTA is used below.

---

## 3. Patterns by section

### 3.1 Hero headline

**Saudi pattern:** the headline is usually an SEO keyword phrase ("شركة تصميم مواقع…") or a big promise. A few use an image-led slogan instead.
- "شركة برمجة مواقع وتطبيقات في السعودية | جيكسر" (https://geexar.com/ar/)
- "افضل شركة تصميم مواقع الكترونية و استضافة في السعودية" (https://is.net.sa/ar/)
- "نبني هويتك الرقمية بدقة لا تُنسى" (https://orisysa.com/)

**International pattern:** short. Either a role ("partner") or a plain statement of what they do. No keywords.
- "Your strategic design partner" (https://clearleft.com/)
- "We build and rescue web apps and dev teams" (https://tighten.com/)
- "Designed to work." (https://muledesign.com/)

### 3.2 Subline

**Pattern:** says what they build and who it's for, often with a "from X to Y" range. Saudi sublines usually add a number.
- "نصمم ونطور تطبيقات ومواقع استثنائية تدفع الأعمال للأمام. خبرة +12 سنة في خدمة الشركات بالسعودية والخليج بحلول تقنية مبتكرة." (https://mrhbaa.com/)
- "من الشركات الناشئة إلى المؤسسات الكبرى — نصمم واجهات رقمية تجمع بين فخامة التصميم وقوة الأداء التقني، لتضع علامتك في المقدمة." (https://orisysa.com/)
- "We partner with ambitious organisations to establish design as a strategic capability. We design websites and digital services…" (https://clearleft.com/)

### 3.3 Primary CTA wording

**Saudi pattern:** "free consultation" is the default. Some push a discount or "start your project". WhatsApp usually appears as a secondary channel.
- "استشارة مجانية" / "اطلب استشارة مجانية ←" (https://geexar.com/ar/, https://www.art4muslim.com/)
- "ابدأ مشروعك الآن ←" (https://mrhbaa.com/)
- "تواصل عبر واتساب" (https://mrhbaa.com/); "تواصل عبر WhatsApp" (https://www.art4muslim.com/)

**International pattern:** email or conversation, sometimes to a named person.
- "Email us about your design challenge" / "Email Rich about your design challenge" (https://clearleft.com/)
- "Brief us your project" (https://spatie.be/)
- "Start a project with us" (https://www.wholegraindigital.com/)

### 3.4 Saying "we" credibly without inflating

**Pattern:** be open about being small, say who actually does the work, or turn the attention back to the client.
- "We're small, but we pack a punch." and "The Network — Specific expertise — Trusted, talented and verified independents that fit like a glove in the studio" (https://set.studio/)
- "We're always interested in teaming up with talented freelancers with a range of expertise, so get in touch." (https://clearleft.com/)
- "(Enough about us. We'd rather talk about you.)" (https://muledesign.com/)
- A Saudi example of the opposite approach, inflating "we": "نحن أحد افضل شركات عمل المواقع الإلكترونية" (https://shebatec.com/). This one is Yemeni, not used as a source; shown for contrast only.

### 3.5 About framing

**Saudi pattern:** founding year, company registration, vision/mission/values blocks.
- "تأسست فنون المسلم في الرياض عام 2007… لا نصمم مواقع جميلة فقط — نبني أدوات رقمية تعمل لصالحك على مدار الساعة." (https://www.art4muslim.com/)
- "شدو ديزاين هي وكالة سعودية رائدة في مجال التصميم الإبداعي… نؤمن بأن كل علامة تجارية تحمل قصة فريدة" (https://shadowdesign.sa/)

**International pattern:** a belief or a way of working, not a history.
- "We believe in advancing the practice of design to improve people's lives and transform organisations for the better." (https://clearleft.com/about)
- "We act as advisors and architects, not just developers. We want to be as proud of your project as you are." (https://spatie.be/)
- "We make everything simple — the process, the user experience and the output" (https://set.studio/)

### 3.6 Services naming and descriptions

**Pattern:** plain service names, and a description of one sentence that says what the client gets. Saudi sites list 6–10 services. Specialists name fewer and say what they don't do.
- "[تصميم موقع شركة احترافي] موقع شركة يعكس هويتك التجارية ويبني ثقة عملائك. يتضمن: عن الشركة، الخدمات، الأعمال، نموذج التواصل…" (https://www.art4muslim.com/)
- "[لوحة سهلة للإدارة] تقدر تعدل الخدمات والصور والمحتوى الأساسي بسهولة بدون الدخول في تعقيد تقني." (https://etharweb.com/)
- "Not our cup of tea: WordPress themes / Cutting corners / Free mockups to win a job / 'Just execute the briefing'" (https://spatie.be/)
- "In other words, we only do a few things, but we do them at the highest level." (https://tighten.com/)
- For maintenance, the pattern is to name the tasks: "24/7 website edits / Weekly updates / Ongoing security / … / Website backups / Speed optimization" (https://wpbuffs.com/)

### 3.7 Proof without big numbers

**Pattern:** written commitments, client ownership, stating what's out of scope, and leaving the client independent.
- "[H2] 4 التزامات مكتوبة في عقدنا — لا مجرد شعارات … كل نقطة هنا يمكنك المطالبة بها" and "نوقّع على سعر إجمالي واضح قبل البدء. إذا أخطأنا في تقدير الوقت، الفارق علينا." (https://www.art4muslim.com/)
- "تستلم: ملفات الموقع كاملة + بيانات الاستضافة + صلاحيات المدير. لا ارتباط إجباري بنا بعد التسليم" (https://www.art4muslim.com/)
- "عرض بندًا بندًا: ما يشمله السعر، ما لا يشمله، مدة التسليم… لا نرسل رقمًا مجرّدًا في رسالة ونسمّيه عرضًا." (https://mrhbaa.com/)
- "We transfer knowledge and skills to your team throughout the project, so you're never dependent on us for ongoing success." (https://sparkbox.com/)
- "نحرص على إشراكك في جميع مراحل العمل، مع إبقائك على اطلاع مستمر بالتقدم في العمل" (https://geexar.com/ar/)

### 3.8 Process / "how we work"

**Pattern:** 3–6 named steps. The good ones say what the client receives or approves at each step.
- Art4Muslim: "الاكتشاف … المخرج: خطة موقع واضحة" / "التصميم … موافقتك إلزامية قبل البرمجة" / "البرمجة" / "الاختبار" / "الإطلاق — نشر الموقع + تسليم الملفات + تدريبك على الإدارة + ضمان 12 شهر" (https://www.art4muslim.com/)
- Orisys: "الاستشارة — نفهم احتياجاتك وأهدافك بدقة / التصميم / التطوير / الإطلاق / الدعم — نرافقك باستمرار بعد الإطلاق" (https://orisysa.com/)
- Spatie: "Research & Analysis / Build a Strong Foundation / Flexible Development … We work in short cycles with frequent check-ins." (https://spatie.be/)
- Sparkbox: "Step 1: Onboarding / Step 2: Iteration / Step 3: Offboarding" (https://sparkbox.com/)

### 3.9 Contact and closing CTA

**Pattern:** a question about readiness, a low-commitment first step, and sometimes what to send.
- "أول رسالة لا تحتاج ملف متطلبات. نحتاج ثلاثة أسطر فقط: نوع المشروع، من سيستخدمه، والميزانية التقريبية." (https://mrhbaa.com/)
- "We're happy to have an initial conversation about your situation and your goals. If we can help, we'll tell you how." (https://muledesign.com/)
- "Let's get started! Ready to build something together?" (https://paravelinc.com/)
- "لا تترد في جعل احلامك واقع ملموس..نحن في انتظارك" (https://geexar.com/ar/). A weak pattern, included for contrast.

### 3.10 Arabic register and tone on the Saudi sites

- **MSA is the norm**, written with first-person plural verbs (نصمم، نبني، نطوّر، نقدّم) and addressed to the client in the singular (لك، عملك، علامتك). Examples: Art4Muslim, Geexar, Ethar Web, Orisys.
- **Saudi dialect is used by at least one agency** to sound warm and local: "وش اللي يصنع نتائج حقيقية؟", "خلّنا نبني شيء استثنائي مع بعض", "للعلامات السعودية اللي تبي نتائج فعلية، بدون كلام فاضي" (https://novadigital.sa/). Ethar Web slips into dialect in places: "تقدر تعدل الخدمات" (https://etharweb.com/).
- **Superlatives and SEO keywords are everywhere:** "أفضل شركة", "رائدة", "استثنائية", "لا تُنسى", "فخامة". Because they appear on every site, they no longer mean anything.
- **Vision 2030 references are common:** "نساهم في تحقيق رؤية 2030" (https://orisysa.com/, https://is.net.sa/ar/).
- **Spelling is often careless** on these sites (for example "افضل", "اعلي", "لا تترد", "التجاره"). Clean MSA is a quiet quality signal in this market.

---

## 4. Our copy compared

### 4.0 Meta title (not a visible section, but it is the Google snippet)

- **Ours:** "بن مهيوب — حلول تقنية في السعودية" / "Bin Mahyub — Technology solutions in Saudi Arabia"
- **Pattern:** every Saudi title names the actual service ("شركة تصميم مواقع…"). "حلول تقنية" is vague and nobody searches for it.
- **Verdict:** tweak.
- **Suggested:** AR "بن مهيوب — مواقع ومتاجر ووردبريس في السعودية" / EN "Bin Mahyub — Websites & WordPress stores in Saudi Arabia"
- **Honesty check:** no proof needed.

### 4.1 Hero

**Eyebrow**
- **Ours:** "حلول تقنية · المملكة العربية السعودية" / "Technology solutions · Saudi Arabia"
- **Pattern:** Orisys uses a plain label ("وكالة رقمية سعودية"). International studios either name the craft or leave the eyebrow out.
- **Verdict:** tweak. "حلول تقنية" is the same vagueness as the meta title.
- **Suggested:** AR "وكالة مواقع ومتاجر · المملكة العربية السعودية" / EN "Websites & online stores · Saudi Arabia"
- **Honesty check:** calling ourselves an agency is the founder's chosen framing. It is fine as long as the page never implies a headcount.

**Headline**
- **Ours:** "نبني مواقع تليق بعملك، وتبقى تعمل بعد الإطلاق." / "Websites worthy of your business, built to keep running after launch."
- **Pattern:** the international studios' short-promise style. It also avoids the Saudi keyword-and-superlative habit.
- **Verdict:** keep. It makes a concrete promise (it keeps working after launch) that no Saudi site studied puts in its headline, and it sets up the maintenance service.
- **Honesty check:** fine. It promises care, not results.

**Subline**
- **Ours:** "صفحات هبوط ومتاجر ووردبريس، بتصميم مدروس، وسرعة على كل جوال، ورعاية مستمرة بعد التسليم." / "Landing pages and WordPress stores: carefully designed, fast on every phone, and looked after long after handover."
- **Pattern:** say what you build and who it's for. Ours covers the "what" but not the "who".
- **Verdict:** small tweak. Name the audience, the way Clearleft's "We partner with ambitious organisations…" does.
- **Suggested:** AR "صفحات هبوط ومواقع ومتاجر ووردبريس لأصحاب الأعمال في السعودية: تصميم مدروس، وسرعة على كل جوال، ورعاية مستمرة بعد التسليم." / EN "Landing pages, WordPress sites and stores for Saudi businesses: carefully designed, fast on every phone, and looked after long after handover."
- **Honesty check:** fine.

**CTA**
- **Ours:** "راسلنا على واتساب" / "Message us on WhatsApp"
- **Pattern:** the Saudi default is "استشارة مجانية". Mrhbaa and Art4Muslim use "تواصل عبر واتساب".
- **Verdict:** keep. It names the actual channel, which suits a single-goal page. Don't switch to "free consultation" unless one is actually offered as a defined thing.
- **Honesty check:** fine.

### 4.2 About

- **Ours (lead):** "كل موقع نبنيه يبدأ بسؤال واحد: كيف سيبقى يعمل بعد سنة؟"
- **Ours (body):** "بن مهيوب وكالة تقنية في المملكة العربية السعودية. نبني المواقع للأعمال ونرعاها بعد الإطلاق، ونشرح كل شيء بوضوح وبلا مصطلحات معقدة، لتعرف دائمًا ما الذي تدفع مقابله ولماذا."
- **Pattern:** international studios frame About around a belief or a way of working (Clearleft, Spatie, Set Studio), and credible small studios say plainly how they are staffed (Set Studio's "Network", Clearleft's freelancers). Saudi sites use founding years and vision/mission blocks, which we can't use.
- **Verdict:** tweak. The lead is strong; keep it. The body is missing the one thing the founder wants the client to feel: an agency that brings in the right people under one name. Add one sentence about the setup.
- **Suggested addition (after the first sentence of the body):**
  - AR "نعمل تحت اسم واحد، ونستعين لكل مشروع بالمختص المناسب، ويبقى تواصلك معنا في مكان واحد ومع مسؤول واحد عن مشروعك."
  - EN "We work under one name, bring in the right specialist for each project, and you deal with one point of contact the whole way through."
- **Honesty check:** this is true only if the founder actually uses other professionals, or will before launch. It claims no headcount, names no partners and makes no "team of experts" claim. Do **not** turn it into "فريقنا من الخبراء" (Geexar, Shadow Design); that implies a staff we don't have. If no delegation is happening yet, change "نستعين" to "نستطيع أن نستعين" / "can bring in". That wording is weaker but honest.

### 4.3 Services

**Heading**
- **Ours:** "الخدمات" / "Services"
- **Verdict:** keep.

**Landing pages**
- **Ours:** "صفحة واحدة بهدف واحد: مظهر فاخر، وتحميل سريع على أي جوال، وزوار يتحولون إلى رسائل."
- **Pattern:** "فاخر/فخامة" is used heavily by Orisys ("فخامة التصميم", "هوية بصرية فاخرة") and Mrhbaa ("واجهات مستخدم فاخرة"), and it has stopped meaning anything. The better descriptions name deliverables or the goal. Ethar Web: "نبدأ من هدف الموقع: هل تريد مكالمات؟ طلبات واتساب؟ حجوزات؟"
- **Verdict:** tweak. Swap "مظهر فاخر" for something concrete. "One page, one goal" is good; keep it.
- **Suggested:** AR "صفحة واحدة بهدف واحد: رسالة واضحة، وتحميل سريع على أي جوال، وزر يوصل الزائر إليك مباشرة." / EN "One page, one goal: a clear message, fast loading on any phone, and a button that brings the visitor straight to you."
- **Honesty check:** fine. The original "visitors who turn into messages" hints at conversion results we can't show. The new line promises only what we build.

**WordPress & WooCommerce**
- **Ours:** "مواقع أعمال ومتاجر إلكترونية تستطيع تحديثها بنفسك، مبنية بشكل صحيح من اليوم الأول."
- **Pattern:** it matches Ethar Web's "تقدر تعدل الخدمات والصور والمحتوى الأساسي بسهولة". Stronger versions say what "properly" means.
- **Verdict:** keep. An optional tweak is to replace the vague "بشكل صحيح" with specifics.
- **Optional:** AR "مواقع أعمال ومتاجر إلكترونية تستطيع تحديث محتواها ومنتجاتها بنفسك، بإعداد نظيف وآمن من اليوم الأول." / EN "Business sites and online stores where you can update content and products yourself, set up cleanly and securely from day one."
- **Honesty check:** fine.

**Administration & maintenance**
- **Ours:** "تحديثات ونسخ احتياطية وحماية وإصلاحات، ليبقى موقعك يعمل وأنت منشغل بعملك."
- **Pattern:** name the tasks (WP Buffs). This line already does that and matches the pattern.
- **Verdict:** keep. Only add a frequency such as "شهريًا" or a response time if the service actually commits to one.
- **Honesty check:** don't add "24/7" (WP Buffs, Internet Solutions) unless it is delivered.

### 4.4 Work

- **Ours:** "أعمال مختارة" / "Selected work", with one project marked "عرض حي — قريبًا".
- **Pattern:** Art4Muslim: "لا نعرض تصاميم افتراضية أو نماذج. كل موقع هنا منشور ويخدم عملاء فعليين." Mrhbaa: "مشاريع حقيقية تقدر تزورها". Honest labelling of work is itself a trust signal. The counter-example is Creative Digital, whose empty reviews block shows "لا توجد مراجعات بعد", which hurts it.
- **Verdict:** tweak. "Selected" suggests a choice from a larger portfolio, and there is one project.
- **Suggested:** AR "من أعمالنا" / EN "Our work". Keep the "coming soon" status label; it is honest.
- **Honesty check:** "من أعمالنا" still reads as plural in spirit. The most literal honest heading is AR "أحدث مشاريعنا" / EN "Latest project" (singular in English). Either is defensible; "Selected work" is the one to drop.

### 4.5 Contact

**Heading and subheading**
- **Ours:** "تواصل" / "لديك مشروع في بالك؟"
- **Pattern:** a readiness question is standard (Paravel "Ready to build something together?", Mrhbaa "هل أنت مستعد لتحويل فكرتك لواقع؟").
- **Verdict:** keep.

**Body**
- **Ours:** "أخبرنا عنه على واتساب، وستعرف السعر بوضوح قبل أن نبدأ أي عمل." / "Tell us about it on WhatsApp. You'll get a clear price before any work starts."
- **Pattern:** say exactly what to send in the first message (Mrhbaa's "three lines"), and make it low-commitment ("If we can help, we'll tell you how", Mule).
- **Verdict:** tweak. Keep the price promise, which is our best proof line. Add what to send.
- **Suggested:**
  - AR "أرسل لنا على واتساب ثلاثة أشياء: نشاطك، وما تحتاجه، وميزانيتك التقريبية. سنخبرك إن كنا نستطيع المساعدة، وستعرف السعر بوضوح قبل أن نبدأ أي عمل."
  - EN "Send us three things on WhatsApp: what your business does, what you need, and a rough budget. We'll tell you if we can help, and you'll get a clear price before any work starts."
- **Honesty check:** fine. Upgrade "سعر واضح" to "سعر مكتوب" / "a written price" only if quotes will actually be written.

### 4.6 Register check (whole page)

- **Ours:** calm MSA, "we" voice, no superlatives, no numbers.
- **Verdict:** keep. It differs from the superlative-heavy Saudi norm (3.10) in a way that reads as confident rather than weak. Don't adopt dialect; the Nova Digital style suits a brand/social agency with a younger audience, not owner-operator clients who arrive by referral. Keep the Arabic spelling carefully correct (hamzas, ta marbuta); in this market that is a visible signal.

---

## 5. What's missing and could honestly be added

1. **A short "how we work" section**, placed between Services and Work or before Contact. Every step must match actual practice.
   - AR:
     1. "رسالة على واتساب — تخبرنا عن نشاطك وما تحتاجه."
     2. "سعر ونطاق واضحان — نتفق على ما يشمله العمل وما لا يشمله قبل أن نبدأ."
     3. "التصميم والبناء — تراجع العمل وتوافق عليه قبل الإطلاق."
     4. "الإطلاق والتسليم — نسلّمك الموقع وصلاحياته ونشرح لك كيف تديره."
     5. "الرعاية بعد الإطلاق — إن أردت، نتولى التحديثات والنسخ الاحتياطية والحماية."
   - EN:
     1. "A WhatsApp message: tell us about your business and what you need."
     2. "A clear price and scope: we agree what's included and what isn't before we start."
     3. "Design and build: you review and approve the work before launch."
     4. "Launch and handover: we hand over the site and its access, and show you how to run it."
     5. "Care after launch: if you want, we handle updates, backups and security."
   - Pattern sources: Art4Muslim, Orisys, Spatie, Sparkbox (3.8). "What's included and what isn't" comes from Mrhbaa's "قائمة صريحة بما هو خارج النطاق".
   - Honesty check: no proof needed, but step 4 only works if access really is handed over. Decide that first (see 2).

2. **"What you get at handover".** This is ownership proof, the strongest Saudi pattern that needs no numbers (Art4Muslim "الملفات والكود ملكك 100%", Mrhbaa "ملكية كود 100%", Sparkbox "never dependent on us").
   - AR "الموقع باسمك: النطاق والاستضافة وصلاحيات المدير لك، ولا تحتاج إلينا لتبقى تملكه."
   - EN "The site is yours: domain, hosting and admin access in your name, and you don't need us to keep it."
   - Honesty check: this is a **business decision, not a copy decision**. Publish it only if the agency actually registers domain and hosting in the client's name. If not, don't add it.

3. **"What we do / what we don't" (fit filter).** This comes from Spatie's "Not our cup of tea" and Tighten's "we only do a few things". It sets expectations for referral clients and makes three services look like focus rather than a thin offering.
   - AR "نركّز على ما نتقنه: صفحات الهبوط، ومواقع ووردبريس ومتاجر ووكومرس، ورعايتها. لا نعمل على تطبيقات الجوال ولا الحملات الإعلانية."
   - EN "We focus on what we do well: landing pages, WordPress sites and WooCommerce stores, and looking after them. We don't build mobile apps or run ad campaigns."
   - Honesty check: confirm the "don't" list with the founder. Delegation may cover some of those services.

4. **A small FAQ (3–4 questions).** Orisys and Mrhbaa both have one. Honest questions we can answer without proof: "كم يستغرق بناء الموقع؟" (give a range only if one is known), "هل أستطيع تعديل الموقع بنفسي؟", "ماذا يحدث بعد الإطلاق؟", "هل الأسعار ثابتة؟"
   - Honesty check: any timeline must be real. Orisys's "من 3 إلى 7 أيام عمل" is the kind of claim to avoid unless it has been delivered.

5. **Response expectation on the WhatsApp CTA.** Mrhbaa: "نردّ داخل ساعات العمل المعلنة".
   - AR "نرد خلال ساعات العمل." / EN "We reply during working hours."
   - Honesty check: add it only if working hours are stated somewhere and kept.

**Not usable (need proof we don't have):** years/projects/clients counters (Geexar, Mrhbaa, Internet Solutions); "12-month guarantee" (Art4Muslim), unless it is actually offered in writing; client-logo walls (Shadow Design, Internet Solutions); testimonials (Zao, WP Buffs); "team of experts / 50 years combined experience" (Set Studio, Geexar); Vision 2030 contribution claims (Orisys, Internet Solutions); "أفضل/رائدة" superlatives.

---

## 6. Sources

All fetched 2026-09-23 (homepage unless noted).

Saudi:
- https://geexar.com/ar/
- https://is.net.sa/ar/ (also https://is.net.sa/ar/about-us/, read with WebFetch, which returned a translated summary; no quotes taken from it)
- https://etharweb.com/. The H1 is JS-assembled; only the fragment "في السعودية ترفع مبيعاتك" appeared in the raw HTML. The full H1 "تصميم مواقع الكترونية في السعودية ترفع مبيعاتك" is taken from the page `<title>`/WebFetch summary. **UNVERIFIED as the exact rendered H1.**
- https://www.art4muslim.com/
- https://mrhbaa.com/
- https://novadigital.sa/. Its stat counters render as "0" without JS, so its numeric claims are **UNVERIFIED** and not quoted.
- https://orisysa.com/. Same issue: its counters render as "0+" in the raw HTML; **UNVERIFIED**, not quoted.
- https://www.creativeedigital.com/ar
- https://shadowdesign.sa/
- Excluded: https://shebatec.com/ (Yemeni phone number; one line quoted only as a contrast example), https://www.ezdig.me/ (read, not quoted), https://swaed.sa/ (incubator)

International:
- https://clearleft.com/ and https://clearleft.com/about
- https://set.studio/
- https://www.wholegraindigital.com/ and https://www.wholegraindigital.com/about-us/
- https://spatie.be/
- https://muledesign.com/
- https://zao.is/ (https://zao.is/how-we-work/ returned 404)
- https://sparkbox.com/
- https://tighten.com/
- https://wpbuffs.com/. The page still shows a Black Friday banner that ended December 3, 2025, so the content may be stale.
- https://paravelinc.com/ (studio has pivoted to a product; only the closing CTA is quoted)
