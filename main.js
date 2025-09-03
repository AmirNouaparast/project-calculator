const display = document.getElementById("output");
const buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    const key = button.textContent;

    switch (key) {
      case "C":
        return clear();
      case "p":
        return pi();
      case "sqrt":
        return squareRoot();
      case "sq":
        return square();
      case "%":
        return percent();
      case "<=":
        return backspace();
      case "log":
        return log();
      case "sin":
        return sin();
      case "exp":
        return exp();
      case "^":
        return exponent();
      case "+/-":
        return plusMinus();
      case "÷":
        return divide();
      case "ln":
        return ln();
      case "cos":
        return cos();
      case "x":
        return multiply();
      case "n!":
        return factorial();
      case "tan":
        return tan();
      case "radians":
        return radians();
      case "degrees":
        return degrees();
      case "=":
        return equals();
      default:
        updateDisplay(display.value + key);
    }
  });
});

function updateDisplay(value) {
  display.value = value.toString();
  if (display.value.length >= 23) {
    display.value = "Overload Error";
  }
}

function equals() {
  try {
    if (display.value.includes("^")) {
      const [base, exponent] = display.value.split("^");
      updateDisplay(Math.pow(Number(base), Number(exponent)));
    } else {
      updateDisplay(eval(display.value));
    }
  } catch (e) {
    display.value = "Syntax Error";
  }
}

function clear() {
  updateDisplay("");
}

function pi() {
  if (display.value === "") {
    updateDisplay(Math.PI);
  } else {
    updateDisplay(Number(display.value) * Math.PI);
  }
}

function squareRoot() {
  updateDisplay(Math.sqrt(Number(display.value)));
}

function square() {
  const num = Number(display.value);
  updateDisplay(num * num);
}

function percent() {
  updateDisplay(Number(display.value) / 100);
}

function backspace() {
  updateDisplay(display.value.slice(0, -1));
}

function log() {
  updateDisplay(Math.log10(Number(display.value)));
}

function sin() {
  const radians = Number(display.value) * (Math.PI / 180);
  updateDisplay(Math.sin(radians));
}

function exp() {
  updateDisplay(Math.exp(Number(display.value)));
}

function exponent() {
  updateDisplay(display.value + "^");
}

function plusMinus() {
  if (display.value.startsWith("-")) {
    updateDisplay(display.value.slice(1));
  } else {
    updateDisplay("-" + display.value);
  }
}

function divide() {
  updateDisplay(display.value + "/");
}

function ln() {
  updateDisplay(Math.log(Number(display.value)));
}

function cos() {
  const radians = Number(display.value) * (Math.PI / 180);
  updateDisplay(Math.cos(radians));
}

function multiply() {
  updateDisplay(display.value + "*");
}

function factorial() {
  const num = Number(display.value);
  if (num === 0) return updateDisplay("1");
  if (num < 0 || !Number.isInteger(num)) return updateDisplay("undefined");

  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  updateDisplay(result);
}

function tan() {
  const radians = Number(display.value) * (Math.PI / 180);
  updateDisplay(Math.tan(radians));
}
4;
function radians() {
  updateDisplay(Number(display.value) * (Math.PI / 180));
}

function degrees() {
  updateDisplay(Number(display.value) * (180 / Math.PI));
}
