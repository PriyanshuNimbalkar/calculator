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

let number;
let operator;
let anotherNumber;

function operate(a, o, b) {
  if (o === "+") return add(a, b);
  if (o === "-") return subtract(a, b);
  if (o === "*") return multiply(a, b);
  if (o === "/") return divide(a, b);
}
