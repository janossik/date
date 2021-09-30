import { TypeGetName, TypeMakeMonth, TypeLang } from './types/type';
import { shortDayLang, dayLang, monthLang, shortMonthLang } from './utils/lang';

const createId = () => Math.round(Math.random() * Math.pow(10, 12)).toString(16);

export const getDay = (date: Date) => {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day - 1;
};

export const getNameMonth: TypeGetName = (index, lang = 'en') => {
  if (index > 11 || index < 0) {
    throw Error('You must give index between 0-11');
  }
  return monthLang[lang][index];
};

export const getNameShortMonth: TypeGetName = (index, lang = 'en') => {
  if (index > 11 || index < 0) {
    throw Error('You must give index between 0-11');
  }
  return shortMonthLang[lang][index];
};

export const getNameDay: TypeGetName = (index, lang = 'en') => {
  if (index > 6 || index < 0) {
    throw Error('You must give index between 0-6');
  }
  return dayLang[lang][index];
};

export const getShortNameDay: TypeGetName = (index, lang = 'en') => {
  if (index > 6 || index < 0) {
    throw Error('You must give index between 0-6');
  }
  return shortDayLang[lang][index];
};

export const getDate = (year?: number, month?: number, day?: number) => {
  let date: Date;
  if (year !== undefined && month !== undefined && day !== undefined) {
    date = new Date(year, month, day);
  } else {
    date = new Date();
  }
  return date;
};

export const getMonthDays: TypeMakeMonth = (year, month, day, lang = 'en') => {
  const date = getDate(year, month, day);

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const firstDay = getDate(currentYear, currentMonth, 1);
  const lastDay = getDate(currentYear, currentMonth + 1, 0);
  const lastDayPerMonth = getDate(currentYear, currentMonth, 0);

  const days = [];

  for (let i = lastDayPerMonth.getDate() - getDay(firstDay); i < lastDayPerMonth.getDate(); i++) {
    days.push({ id: createId(), day: i, visible: false });
  }
  for (let i = 0; i < lastDay.getDate(); i++) {
    days.push({ id: createId(), day: i + 1, visible: true });
  }

  return {
    name: getNameMonth(date.getMonth(), lang),
    days,
  };
};

export const addLeadingZero = (int: number): string => (int < 10 ? `0${int}` : `${int}`);

export const printDate = (format = '', lang: TypeLang = 'en', date: Date = new Date()) => {
  const year = date.getFullYear().toString();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatLowerCase = format.toLowerCase();

  let stringDate = '';

  if (formatLowerCase.includes('dddd')) {
    stringDate += `${getNameDay(getDay(date), lang)}, ${addLeadingZero(day)} `;
  } else if (formatLowerCase.includes('ddd')) {
    stringDate += `${getShortNameDay(getDay(date), lang)}, ${addLeadingZero(day)} `;
  } else if (formatLowerCase.includes('dd')) {
    stringDate += `${addLeadingZero(day)}.`;
  } else {
    stringDate += `${day}.`;
  }

  if (formatLowerCase.includes('mmmm')) {
    stringDate += `${getNameMonth(month, lang)} `;
  } else if (formatLowerCase.includes('mmm')) {
    stringDate += `${getNameShortMonth(month, lang)} `;
  } else if (formatLowerCase.includes('mm')) {
    stringDate += `${addLeadingZero(month)}.`;
  } else {
    stringDate += `${month}.`;
  }

  if (formatLowerCase.includes('yyyy')) {
    stringDate += `${year}`;
  } else {
    stringDate += year.slice(2, 4);
  }

  return stringDate;
};
