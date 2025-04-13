export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

export const percentage = (a) => a / 100;

export const square = (a) => a * a;

export const squareRoot = (a) => Math.sqrt(a);

export const inverse = (a) => 1 / a;

export const clearAll = () => 0; // Reset function for display

export const clearEntry = (currentValue) => 0; // Clear current entry

export const clearLastDigit = (currentValue) => {
  return currentValue.toString().slice(0, -1) || '0';
};

export const toggleSign = (a) => -a;

export const addDigitToDisplay = (currentValue, digit) => {
  return currentValue === 0 ? digit : currentValue.toString() + digit;
};

export const addDecimal = (currentValue) => {
  if (!currentValue.toString().includes('.')) {
    return currentValue.toString() + '.';
  }
  return currentValue;
};