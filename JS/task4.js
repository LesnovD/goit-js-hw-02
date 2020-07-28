"use strict";
const formatString = function (string) {
  if (string.length > 40) {
    let shortString = string.split("");
    shortString.length = 40;
    shortString = shortString.join(" ");
    const rezult = shortString + "...";
    return rezult;
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
