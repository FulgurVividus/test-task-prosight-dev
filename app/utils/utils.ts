import dayjs from "dayjs";

export function dateDifferenceInDays(date1: string, date2: string): number {
  const date_1 = dayjs(date1);
  const date_2 = dayjs(date2);
  const difference = date_2.diff(date_1, "days");

  return difference;
}
