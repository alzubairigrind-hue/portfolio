export type Lang = 'ar' | 'en';

export function dirFor(lang: Lang): 'rtl' | 'ltr' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function pathFor(lang: Lang): string {
  return lang === 'ar' ? '/' : '/en/';
}

export function otherLang(lang: Lang): Lang {
  return lang === 'ar' ? 'en' : 'ar';
}

export function localizeDigits(value: number | string, lang: Lang): string {
  const text = String(value);
  if (lang === 'en') return text;
  return text.replace(/[0-9]/g, (digit) => '٠١٢٣٤٥٦٧٨٩'[Number(digit)]);
}
