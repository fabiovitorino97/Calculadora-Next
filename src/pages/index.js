import React, { useState } from 'react';
import Button from '../components/Button';
import * as calculatorController from '../utils/calculatorFunctions';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value) => {
    if (typeof value === 'number') {
      setDisplay((prev) => calculatorController.addDigitToDisplay(prev, value));
    } else if (value === '.') {
      setDisplay((prev) => calculatorController.addDecimal(prev));
    } else if (value === 'C') {
      setDisplay('0');
      setCurrentValue(0);
      setOperator(null);
    } else if (value === 'CE') {
      setDisplay(calculatorController.clearEntry(display));
    } else if (value === '←') {
      setDisplay(calculatorController.clearLastDigit(display));
    } else if (value === '+/-') {
      setDisplay(calculatorController.toggleSign(parseFloat(display)));
    } else if (value === '%') {
      setDisplay(calculatorController.percentage(parseFloat(display)));
    } else if (value === '1/x') {
      setDisplay(calculatorController.inverse(parseFloat(display)));
    } else if (value === 'X²') {
      setDisplay(calculatorController.square(parseFloat(display)));
    } else if (value === '√') {
      setDisplay(calculatorController.squareRoot(parseFloat(display)));
    } else if (['+', '-', '*', '/'].includes(value)) {
      setCurrentValue(parseFloat(display));
      setOperator(value);
      setDisplay('0');
    } else if (value === '=') {
      if (operator && currentValue !== null) {
        const result = calculatorController[operator === '+' ? 'add' :
          operator === '-' ? 'subtract' :
          operator === '*' ? 'multiply' :
          'divide'](currentValue, parseFloat(display));
        setDisplay(result.toString());
        setCurrentValue(0);
        setOperator(null);
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{display}</div>
      <div className={styles.buttons}>
        <Button label="%" onClick={() => handleButtonClick('%')} className="function" />
        <Button label="CE" onClick={() => handleButtonClick('CE')} className="function" />
        <Button label="C" onClick={() => handleButtonClick('C')} className="function" />
        <Button label="←" onClick={() => handleButtonClick('←')} className="function" />
        <Button label="1/x" onClick={() => handleButtonClick('1/x')} className="function" />
        <Button label="X²" onClick={() => handleButtonClick('X²')} className="function" />
        <Button label="√" onClick={() => handleButtonClick('√')} className="function" />
        <Button label="/" onClick={() => handleButtonClick('/')} className="operator" />
        {/* Number Buttons */}
        {[7, 8, 9,].map((num) => (
          <Button key={num} label={num.toString()} onClick={() => handleButtonClick(num)} className="number" />
        ))}
        <Button label="*" onClick={() => handleButtonClick('*')} className="operator" />
        {[4, 5, 6,].map((num) => (
          <Button key={num} label={num.toString()} onClick={() => handleButtonClick(num)} className="number" />
        ))}
        <Button label="-" onClick={() => handleButtonClick('-')} className="operator" />
        {[1, 2, 3,].map((num) => (
          <Button key={num} label={num.toString()} onClick={() => handleButtonClick(num)} className="number" />
        ))}
        <Button label="+" onClick={() => handleButtonClick('+')} className="operator" />
        <Button label="+/-" onClick={() => handleButtonClick('+/-')} className="function" />
        {[0].map((num) => (
          <Button key={num} label={num.toString()} onClick={() => handleButtonClick(num)} className="number" />
        ))}
        <Button label="." onClick={() => handleButtonClick('.')} className="sign" />
        <Button label="=" onClick={() => handleButtonClick('=')} className="equal" />
      </div>
    </div>
  );
};

export default Home;