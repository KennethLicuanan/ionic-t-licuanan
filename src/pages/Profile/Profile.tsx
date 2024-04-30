import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
   IonAlert, IonButton,
   IonActionSheet } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Profile.css';

const Profile: React.FC = () => {
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
      <img alt="Silhouette of mountains" src="../src/assets/img/ME.jpg" />
        <IonCardHeader>
           <IonCardTitle className='card'>Kenneth LLoyd C. Licuanan</IonCardTitle>
           <IonCardSubtitle>This is my Handsome Self</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Honor once bound me above all else.</IonCardContent>


          <IonButton id="present-alert" size="small" expand="block">Click Me</IonButton>
          <IonAlert
            trigger="present-alert"
            header="Gwapo Ko?"
            className="custom-alert"
            buttons={[
              {
                text: 'Of Course',
                cssClass: 'alert-button-cancel',
              },
              {
                text: 'Yes',
                cssClass: 'alert-button-confirm',
              },
            ]}
          ></IonAlert>

            <IonButton id="open-action-sheet" expand="block" size='small'>Open</IonButton>
              <IonActionSheet
                trigger="open-action-sheet"
                header="Actions"
                buttons={[
                  {
                    text: 'Delete',
                    role: 'destructive',
                    data: {
                      action: 'delete',
                    },
                  },
                  {
                    text: 'Share',
                    data: {
                      action: 'share',
                    },
                  },
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    data: {
                      action: 'cancel',
                    },
                  },
                ]}
              ></IonActionSheet>

        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
