import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
   IonAlert, IonButton, IonCol, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Profile.css';
import rizzCard from '../../assets/img/rizzCard.json';

const Profile: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [randomIndex, setRandomIndex] =  useState<number | null>(null); // State to store random index

  // Function to generate a random index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * rizzCard.length);
  };

  // Function to generate a random message
  const renderRandomMessage = () => {
    if (randomIndex !== null) {
      return rizzCard[randomIndex].message;
    } else {
      return ''; // Return empty string if randomIndex is null
    }
  };

  // Function to handle opening of the alert
  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  // Function to handle closing of the alert
  const handleAlertDismiss = () => {
    setRandomIndex(0); // Reset the index to 0
    setShowAlert(false); // Hide the alert
  };

  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
          <IonTitle class='profile'>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard >
      <img alt="Silhouette of mountains" src="https://raw.githubusercontent.com/KennethLicuanan/ionic-t-licuanan/main/src/assets/img/ME.jpg" />
        <IonCardHeader>
           <IonCardTitle className='card'>Kenneth LLoyd C. Licuanan</IonCardTitle>
           <IonCardSubtitle>This is my Handsome Self</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Honor once bound me above all else.</IonCardContent>
          
          <IonCol size="" push="">

                <IonButton id="present-alert" color={"danger"} expand="full" onClick={handleOpenAlert}>Click me</IonButton> 
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
                  header="Rizz"
                  subHeader=""
                  message={renderRandomMessage()}
                  buttons={['Close']}
                />
                </IonCol>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
