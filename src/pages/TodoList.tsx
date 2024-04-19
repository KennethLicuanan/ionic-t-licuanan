import {
  //Initial Components
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';
import './TodoList.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='home'>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo List</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};



export default Home;
