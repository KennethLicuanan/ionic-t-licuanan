import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  // State to track the number of clicks
  const [clickCount, setClickCount] = useState(0);

  // Function to handle click events and increment the counter
  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  // Function to reset the click counter
  const handleReset = () => {
    setClickCount(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='click'>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Display the click counter */}
        <div className="click-counter">
          <p>Number of Clicks: {clickCount}</p>
          {/* Button to increment the counter */}
          <button onClick={handleClick}>Click me!</button> <br /><br />
          {/* Button to reset the counter */}
          <button onClick={handleReset}>Reset</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
