import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonInput
} from '@ionic/react';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value: string) => {
    setInput(prevInput => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='calc'>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="calculator-container">
          <IonInput
            className="calc-input"
            value={input}
            readonly
          ></IonInput>
          <div className="button-row">
            <IonButton className="button" onClick={() => handleInput('7')}>7</IonButton>
            <IonButton className="button" onClick={() => handleInput('8')}>8</IonButton>
            <IonButton className="button" onClick={() => handleInput('9')}>9</IonButton>
            <IonButton className="button" onClick={handleClear}>C</IonButton>
          </div>
          <div className="button-row">
            <IonButton className="button" onClick={() => handleInput('4')}>4</IonButton>
            <IonButton className="button" onClick={() => handleInput('5')}>5</IonButton>
            <IonButton className="button" onClick={() => handleInput('6')}>6</IonButton>
            <IonButton className="button" onClick={() => handleInput('+')}>+</IonButton>
          </div>
          <div className="button-row">
            <IonButton className="button" onClick={() => handleInput('1')}>1</IonButton>
            <IonButton className="button" onClick={() => handleInput('2')}>2</IonButton>
            <IonButton className="button" onClick={() => handleInput('3')}>3</IonButton>
            <IonButton className="button" onClick={() => handleInput('-')}>-</IonButton>
          </div>
          <div className="button-row">
            <IonButton className="button" onClick={() => handleInput('0')}>0</IonButton>
            <IonButton className="button" onClick={() => handleInput('*')}>*</IonButton>
            <IonButton className="button" onClick={() => handleInput('/')}>/</IonButton>
            <IonButton className="button" onClick={handleCalculate}>=</IonButton>
          </div>
          <IonInput
            className="result"
            value={result}
            readonly
          ></IonInput>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;
