import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons,
  IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent
} from '@ionic/react';
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
        <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle class='click'>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <div className="click-counter">
        <IonCard>

          <IonCardHeader>
            <IonCardTitle>
              <p>Number of Clicks: {clickCount}</p>
              </IonCardTitle>
            <IonCardSubtitle>
              
              <IonButton className='button' onClick={handleClick} expand="block" color={'warning'}>Click me!</IonButton>
              </IonCardSubtitle>
            </IonCardHeader>

              <IonCardContent>
                <IonButton className='button' onClick={handleReset} expand="block" color={'danger'}>Reset</IonButton>
                </IonCardContent>

          </IonCard>
        </div>


       
      </IonContent>
    </IonPage>
    
  );
};

export default ClickCounter;
