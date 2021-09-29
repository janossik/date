export const month_PL = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
];
export const month_DE = [
  "januar",
  "februar",
  "märz",
  "april",
  "kann",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "dezember",
];

export const createId = () =>
  Math.round(Math.random() * Math.pow(10, 12)).toString(16);

export const getDay = (date: Date) => {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day - 1;
};

export const numberMonthToNameMonth = (month: number, lang?: string[]) => {
  let name = "";
  switch (month) {
    case 0:
      name = lang ? lang[0] : "January";
      break;
    case 1:
      name = lang ? lang[1] : "February";
      break;
    case 2:
      name = lang ? lang[2] : "March";
      break;
    case 3:
      name = lang ? lang[3] : "April";
      break;
    case 4:
      name = lang ? lang[4] : "May";
      break;
    case 5:
      name = lang ? lang[5] : "June";
      break;
    case 6:
      name = lang ? lang[6] : "July";
      break;
    case 7:
      name = lang ? lang[7] : "August";
      break;
    case 8:
      name = lang ? lang[8] : "September";
      break;
    case 9:
      name = lang ? lang[9] : "October";
      break;
    case 10:
      name = lang ? lang[10] : "November";
      break;
    case 11:
      name = lang ? lang[11] : "December";
      break;
    default:
      throw Error("You must enter a number from 1 to 12");
  }
  return name;
};

type TypeMakeMonth = (
  year?: number,
  month?: number,
  day?: number,
  lang?: string[]
) => {
  name: string;
  days: any[];
};

export const getMonthArray: TypeMakeMonth = (year, month, day, lang) => {
  let date: Date;
  if (year !== undefined && month !== undefined && day !== undefined) {
    date = new Date(year, month, day);
  } else {
    date = new Date();
  }

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayPerMonth = new Date(currentYear, currentMonth, 0);

  const days = [];

  for (
    let i = lastDayPerMonth.getDate() - getDay(firstDay);
    i < lastDayPerMonth.getDate();
    i++
  ) {
    days.push({ id: createId(), day: i, visible: false });
  }
  for (let i = 0; i < lastDay.getDate(); i++) {
    days.push({ id: createId(), day: i + 1, visible: true });
  }

  return {
    name: numberMonthToNameMonth(date.getMonth(), lang),
    days,
  };
};
