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
import './Tab3.css';

const Tab3: React.FC = () => {
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
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonInput
                value={input}
                readonly
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3"><IonButton onClick={() => handleInput('7')}>7</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('8')}>8</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('9')}>9</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={handleClear}>C</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3"><IonButton onClick={() => handleInput('4')}>4</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('5')}>5</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('6')}>6</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('+')}>+</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3"><IonButton onClick={() => handleInput('1')}>1</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('2')}>2</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('3')}>3</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('-')}>-</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3"><IonButton onClick={() => handleInput('0')}>0</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('*')}>*</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={() => handleInput('/')}>/</IonButton></IonCol>
            <IonCol size="3"><IonButton onClick={handleCalculate}>=</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonInput
                value={result}
                readonly
              ></IonInput>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
