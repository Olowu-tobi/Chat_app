export const extractTime = (number) => {
  const date = new Date(number);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
};

const padZero = (number) => {
  return number.toString().padStart(2, "0");
};
