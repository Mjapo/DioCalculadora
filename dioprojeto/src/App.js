import React, { useState } from "react";
import { StyledContainer, Content, Row} from "./styles";
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleClear = () => {
    setCurrentNumber('0');
    setOperator('');
    setFirstNumber('0');
  };

  const handleNumberClick = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
  };

  const handleSumNumber = () => {
    if (operator === '' || firstNumber === '0') {
      return;
    }

    if (operator === '/' && currentNumber === '0') {
      alert("Não é possível dividir por zero!");
      handleClear();
      return;
    }

    const result = performOperation(Number(firstNumber), Number(currentNumber), operator);
    setCurrentNumber(String(result));
    setOperator('');
    setFirstNumber('0');
  };

  const performOperation = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 0;
    }
  };

  return (
      <StyledContainer>      
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperatorClick('x')} />
          <Button label="/" onClick={() => handleOperatorClick('/')} />
          <Button label="C" onClick={handleClear} />
          <Button label="=" onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleNumberClick('7')} />
          <Button label="8" onClick={() => handleNumberClick('8')} />
          <Button label="9" onClick={() => handleNumberClick('9')} />
          <Button label="-" onClick={() => handleOperatorClick('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleNumberClick('4')} />
          <Button label="5" onClick={() => handleNumberClick('5')} />
          <Button label="6" onClick={() => handleNumberClick('6')} />
          <Button label="+" onClick={() => handleOperatorClick('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleNumberClick('1')} />
          <Button label="2" onClick={() => handleNumberClick('2')} />
          <Button label="3" onClick={() => handleNumberClick('3')} />
          <Button label="0" onClick={() => handleNumberClick('0')} />
        </Row>
        <Row></Row>
      </Content>
    </StyledContainer>
  );
};

export default App;


// app.js central de home  
// index.js  arquivo que centralizador 
// styles 
// pastas compontes   
// pasta pages  
