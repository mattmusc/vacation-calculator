// eslint-disable-next-line no-unused-vars
import { ChangeEvent } from 'react';

const toNumber = (event: ChangeEvent<HTMLInputElement>) => parseFloat(event.target.value) || 0.0;

const calculateVacationDays = (days: number, pf: number, rol: number) => {
  const nOfHoursInDay = 8;
  const daysPf = Math.floor(pf / nOfHoursInDay);
  const daysRol = Math.floor(rol / nOfHoursInDay);
  return days + daysPf + daysRol;
};

export { calculateVacationDays, toNumber };
