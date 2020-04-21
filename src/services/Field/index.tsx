const calculateVacationDays = (days: number, pf: number, rol: number) => {
  const nOfHoursInDay = 8;
  const daysPf = Math.floor(pf / nOfHoursInDay);
  const daysRol = Math.floor(rol / nOfHoursInDay);
  return days + daysPf + daysRol;
};

// eslint-disable-next-line import/prefer-default-export
export { calculateVacationDays };
