"use strict";
let total = 0;
const numbers = [];
do {
  let input = prompt("введите число");
  if (input === null) {
    break;
  }
  input = Number(input);
  numbers.push(input);
} while (true);

const add = function (numbers) {
  if (numbers.length === 0) {
    alert("Вы не ввели число");
    return;
  }
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
};
add(numbers);
