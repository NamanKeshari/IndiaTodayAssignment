export const capitalize = (str) => {
  const f = str[0];
  return f.toUpperCase() + str.substr(1);
};
export const joinByComma = (arr) => {
  const str = arr.reduce((prev, cur) => prev + cur + ", ", "");
  return str.substr(0, str.length - 2);
};
