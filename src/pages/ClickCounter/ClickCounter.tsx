import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './ClickCounter.css';

const ClickCounter: React.FC = () => {
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
      <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Display the click counter */}
        <div className="click-counter">
          <p>Number of Clicks: {clickCount}</p><br /><br />
          {/* Button to increment the counter */}
          <IonButton onClick={handleClick} expand="block">Click me!</IonButton> <br /><br />
          {/* Button to reset the counter */}
          <IonButton onClick={handleReset} expand="block" color="danger">Reset</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;