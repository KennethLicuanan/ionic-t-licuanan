import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/ME.jpg" />
        <IonCardHeader>
           <IonCardTitle>Kenneth LLoyd C. Licuanan</IonCardTitle>
           <IonCardSubtitle>This is my Handsome Self</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Honor once bound me above all else.</IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
