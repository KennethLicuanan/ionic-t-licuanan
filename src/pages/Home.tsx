import {
  //Initial Components
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
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
        <h1 className='welcome'>WELCOME TO MY IONIC APP</h1>
      </IonContent>
    </IonPage>
  );
};



export default Home;
