import { useEffect } from 'react';
import React, {useState} from "react";
import './App.css'
import Buttons from './Components/Button'
import Display from "./Components/Display";

const App = () => {

  const [display, setDisplay] = useState('');

  
  const handleKeyPress = (event) => {
    const key = event.key;
    
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
      setDisplay(prevDisplay => prevDisplay + key);
    }
    
    if (key === 'Enter') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('error');
      }
    }

    if (key === 'Backspace') {
      setDisplay(prevDisplay => prevDisplay.slice(0, -1));
    }

    if (key === 'Escape') {
      setDisplay('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [display]); 

  

  return (
      <div className="calculator">
        <Display value={display} />
        <Buttons setDisplay={setDisplay} display={display} />
      </div>
    

    
  );
};


export default App
