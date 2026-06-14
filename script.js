//I'm at foundations, that's why code is super messy.
// I'll clean it later.

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

function addNumber(input, output) {
  if (input === ".") {
    if (!output.includes(".")) {
      return output + ".";
    }
    return output;
  } else if (input === "⌫") {
    if (output !== "") {
      return output.slice(0, -1);
    }
    return output;
  }

  output += input;
  return output;
}

function addOperator(input, output) {
  if (input === "⌫") {
    if (output !== "") {
      return output.slice(0, -1);
    }
    return output;
  }

  output = input;
  return output;
}

function operate(a, o, b) {
  let result = 0;

  if (o === "+") return +add(a, b).toFixed(10);
  if (o === "-") return +subtract(a, b).toFixed(10);
  if (o === "x") return +multiply(a, b).toFixed(10);
  if (o === "/") return +divide(a, b).toFixed(10);
}

function keyText(key) {
  if (
    key === "0" ||
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9" ||
    key === "."
  ) {
    return key;
  }

  if (key === "+") return "+";
  if (key === "-") return "-";
  if (key === "*" || key === "x" || key === "X") return "x"; // accept both * and x
  if (key === "/") return "/";

  if (key === "Backspace") return "⌫";
  if (key === "Enter" || key === "=") return "=";
  if (key === "Escape" || key === "c" || key === "C") return "C";

  return null;
}

function calculator(buttonTap) {
  console.log("..........Pressed:", buttonTap, "..........");
  console.log("State before:", {
    number,
    operator,
    anotherNumber,
    check,
    checkSo,
    checkSan,
    operatorCheck,
  });

  if (operatorCheck === true && /^[\+\-x\/]$/.test(buttonTap)) {
    operatorCheck = false;
    console.log(`i ran`);
  }

  if (checkSan && /⌫/.test(buttonTap) && anotherNumber === "") {
    checkSan = false;
    callSo = true;
    console.log(`callSo is true`);
    temp = addOperator(buttonTap, temp);
  }

  if (callSo === true && operator === "" && anotherNumber === "") {
    check = false;

    console.log(`tempValue was ${tempValue}`);
    tempDisplay = addNumber(buttonTap, tempValue);
    console.log(`tempDisplay at if is becoming`, tempDisplay);
  }

  if (buttonTap === "C") {
    number = "";
    operator = "";
    anotherNumber = "";
    buttonTap = "";
    check = false;
    checkSo = false;
    callSo = false;
    checkSan = false;
    runSo = false;
    operatorCheck = false;
    tempValue = "";
    temp = "";
    mainDisplay.textContent = "0";
    miniDisplay.textContent = "0";
  } else if (buttonTap === "=" && operator !== "" && anotherNumber !== "") {
    miniDisplay.textContent = "Your answer is:";
    mainDisplay.textContent = operate(+number, operator, +anotherNumber);

    number = mainDisplay.textContent;
    operator = "";
    anotherNumber = "";
    buttonTap = "";
    check = false;
    checkSo = false;
    callSo = false;
    checkSan = false;
    runSo = false;
    operatorCheck = false;
    tempValue = "";
    temp = "";
  } else if (
    callSo === false &&
    operator === "" &&
    /^[0-9\.\⌫]+$/.test(buttonTap)
  ) {
    // number - beginning
    number = addNumber(buttonTap, number);

    mainDisplay.textContent = number;

    console.log("Branch: number", {
      buttonTap,
      number,
      operator,
      anotherNumber,
      operatorCheck,
    });
  } else if (
    // second operator
    operator !== "" &&
    /^[\+\-x\/\⌫]$/.test(buttonTap) &&
    operatorCheck === false &&
    (anotherNumber !== "" || callSo === true)
  ) {
    number = String(operate(+number, operator, +anotherNumber));

    anotherNumber = "";
    operator = addOperator(buttonTap, operator);
    check = true;
    checkSan = true;

    temp !== "" ? (tempValue = temp) : (temp = "");

    console.log("Inside second operator branch", { temp, tempValue, operator });
    mainDisplay.textContent = `${tempValue}${operator}`;

    console.log("Branch: second operator", {
      buttonTap,
      number,
      operator,
      anotherNumber,
      operatorCheck,
    });
  } else if (
    // first operator
    number !== "" &&
    /^[\+\-x\/\⌫]$/.test(buttonTap) &&
    checkSo === false &&
    callSo === false
  ) {
    operatorCheck = true;

    operator = addOperator(buttonTap, operator);

    mainDisplay.textContent = `${number}${operator}`;
    tempDisplay = `${number}${operator}`;

    console.log("Branch: first operator", {
      buttonTap,
      number,
      operator,
      anotherNumber,
      operatorCheck,
    });
  } else if (
    // first anotherNumber assignment
    number !== "" &&
    (operator !== "" || callSo === true) &&
    check === false &&
    /^[0-9\.\⌫]+$/.test(buttonTap)
  ) {
    console.log("Inside first anotherNumber branch", {
      temp,
      tempValue,
      tempDisplay,
      operator,
    });

    anotherNumber = addNumber(buttonTap, anotherNumber);

    anotherNumber === "" ? (operatorCheck = false) : (operatorCheck = true);
    anotherNumber === "" ? (checkSo = false) : (checkSo = true);

    tempValue = `${tempDisplay}${anotherNumber}`;

    mainDisplay.textContent = `${tempValue}`;

    console.log("Branch: first anotherNumber assignment", {
      buttonTap,
      number,
      operator,
      anotherNumber,
      operatorCheck,
    });
  } else if (checkSan && /^[0-9\.\⌫]+$/.test(buttonTap)) {
    //second anotherNumber assignment
    anotherNumber = addNumber(buttonTap, anotherNumber);

    anotherNumber === "" ? (operatorCheck = false) : (operatorCheck = true);
    anotherNumber === "" ? (checkSo = false) : (checkSo = true);

    mainDisplay.textContent = `${tempValue}${operator}${anotherNumber}`;
    temp = `${tempValue}${operator}${anotherNumber}`;
    console.log(`temp is `, temp);

    console.log("Branch: second anotherNumber assignment", {
      buttonTap,
      number,
      operator,
      anotherNumber,
      operatorCheck,
    });
  }

  if (operator === "/" && anotherNumber === "0") {
    mainDisplay.textContent =
      "Learn some math fool 🤡 (SORRY, TOP made me do this.), Now refresh the page to continue.";
    container.textContent =
      "Learn some math fool 🤡 (SORRY, TOP made me do this.), Now refresh the page to continue.";
  } else if (
    Number.isFinite(operate(+number, operator, +anotherNumber)) &&
    number !== "" &&
    operator !== "" &&
    anotherNumber !== ""
  ) {
    miniDisplay.textContent = operate(+number, operator, +anotherNumber);
  } else if (number !== "" && operator !== "" && anotherNumber === "") {
    miniDisplay.textContent = "Enter next Value!";
  }

  if (mainDisplay.textContent === "") {
    miniDisplay.textContent = "😄";
    mainDisplay.textContent = "Enter the number!";
  }
}

let number = "";
let operator = "";
let anotherNumber = "";
let buttonTap = "";
let check = false;
let checkSo = false;
let callSo = false;
let checkSan = false;
let runSo = false;
let operatorCheck = false;
let tempValue = "";
let temp = "";
let tempDisplay;

const calculatorBody = document.querySelector(".calculator-body");
const allBtn = document.querySelectorAll("button");
const container = document.querySelector(".container");
const mainDisplay = document.querySelector(".main-display");
const miniDisplay = document.querySelector(".mini-display");

document.addEventListener("keydown", (e) => {
  const buttonText = keyText(e.key);

  if (buttonText) {
    e.preventDefault();

    calculator(buttonText);
  }
});

calculatorBody.addEventListener("click", (e) => {
  calculator(e.target.textContent);
});
