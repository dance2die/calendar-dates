const pad = (number, padCharacter = "0") =>
  number < 10 ? padCharacter + number : number;

const iso8601 = ({ year, month, monthOffset, date }) => {
  const offset = {
    current: 0,
    previous: -1,
    next: 1
  };

  return `${year}-${pad(month + 1 + offset[monthOffset])}-${pad(date)}`;
};

export { iso8601 };
