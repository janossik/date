export type TypeLang = 'en' | 'de' | 'pl';

export type TypeGetName = (index: number, lang: TypeLang) => string;

export type TypeMakeMonth = (
  year?: number,
  month?: number,
  day?: number,
  lang?: TypeLang,
) => {
  name: string;
  days: { id: string; day: number; visible: boolean }[];
};
