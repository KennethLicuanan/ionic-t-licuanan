import {
  //Initial Components
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='home'>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt="Yone" src="src\assets\img\1307480.jpg" />
      <IonCardHeader>
        <IonCardTitle>This is my Favorite Champion</IonCardTitle>
        <IonCardSubtitle>League of Legends Wildrift</IonCardSubtitle>
           </IonCardHeader>
        </IonCard>
        <IonCard>
      <img alt="Yone" src="src\assets\img\images (8).jpeg" />
      <IonCardHeader>
        <IonCardTitle>This is also my Favorite Hero</IonCardTitle>
        <IonCardSubtitle>Mobile Legends Bang Bang</IonCardSubtitle>
           </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};



export default Home;
