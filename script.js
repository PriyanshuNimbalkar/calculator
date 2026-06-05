function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

console.log(add(5, 5));
console.log(subtract(5, 5));
console.log(multiply(5, 5));
console.log(divide(5, 5));

let number;
let operator;
let anotherNumber;

function operate(a, o, b) {
  if (o === "+") return add(a, c);
  if (o === "-") return subtract(a, c);
  if (o === "*") return multiply(a, c);
  if (o === "/") return divide(a, c);
}
