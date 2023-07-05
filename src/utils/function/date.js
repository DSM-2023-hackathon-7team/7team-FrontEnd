export const convertDateFormat = (dateString) => {
  const [date, time] = dateString.split(" ");
  const [year, month, day] = date.split(".");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
