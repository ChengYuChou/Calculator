import React, { useState } from 'react';
import './Button.css'


const maxLength = 20;

const Buttons = ({ setDisplay, display} ) => {
  

    const handleClick = (value) => {
        if (display === 'error') {
          setDisplay(value);
        } else {
          const lastChar = display.slice(-1);
          
          if (value === '+' && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
            return;
          } 

          if (value === '-' && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
            return;
          } 

          if (value === '*' && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
            return;
          } 

          if (value === '/' && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
            return;
          } 
          if (value === '.' && (lastChar === '.')) {
            return;
          } else {
            if (display.length >= maxLength) {
                return;
            }

            setDisplay(display + value);
          }
        }
      };

      

  const handleClear = () => {
    setDisplay('');
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString()); 
    } catch(error) {
      setDisplay('error');
     
    }
  };

  const backspace = () => {
    if (display.length > 0) {
        setDisplay(display.slice(0, -1));
      }
  };

  return (
    <div className="buttons">

      <button onClick={handleClear}>AC</button>
      <button onClick={backspace}>⭢</button>    
      <button ></button>
      <button onClick={() => handleClick('+')}>+</button>      
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('*')}>x</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('/')}>%</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('00')}>00</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={handleEqual}>=</button>
      

    </div>
  );
}

export default Buttons