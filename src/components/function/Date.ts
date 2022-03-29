//"yyyy-mm-dd"か"yyy-mm-dd hh:mm:ss"の形で当日を取得
export const getToday = (createdAt: string) => {
  const today = new Date(createdAt);
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const date = ("0" + today.getDate()).slice(-2);
  const hour = ("0" + today.getHours()).slice(-2);
  const min = ("0" + today.getMinutes()).slice(-2);
  const YMD = `${year}-${month}-${date}`;
  const YMDhms = `${year}-${month}-${date} ${hour}:${min}`;
  return { yearToDate: YMD, yearToMin: YMDhms };
};
