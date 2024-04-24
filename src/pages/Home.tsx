import {
  //Initial Components
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonButton
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

    <IonCard color={'dark'}>
      <IonHeader className='click-header'>Applet's of Kenn</IonHeader>
      </IonCard>
    <IonCard color={'warning'} href='/ClickCounter'>
      <IonCardHeader>
        <IonCardTitle className='click-title'>Click Counter</IonCardTitle>
          <IonCardSubtitle className='click-title'>Applet #1</IonCardSubtitle><br />
        <div className='img-click-container'>
          <img src="../src/assets/img/click.png" alt="Click logo" className='img-click'/>
            </div>
      </IonCardHeader>  
    </IonCard>

    <IonCard color={'tertiary'} href='/Calculator'>
      <IonCardHeader>
        <IonCardTitle className='click-title'>Calculator</IonCardTitle>
          <IonCardSubtitle className='click-title'>Applet #2</IonCardSubtitle><br />
        <div className='img-click-container'>
          <img src="../src/assets/img/calculator.png" alt="Click logo" className='img-click'/>
            </div>
      </IonCardHeader>  
    </IonCard>

    <IonCard color={'danger'} href='/TodoList'>
      <IonCardHeader>
        <IonCardTitle className='click-title'>Todo List</IonCardTitle>
          <IonCardSubtitle className='click-title'>Applet #3</IonCardSubtitle><br />
        <div className='img-click-container'>
          <img src="../src/assets/img/TodoList.PNG" alt="Click logo" className='img-click'/>
            </div>
      </IonCardHeader>  
    </IonCard>

      </IonContent>
    </IonPage>
  );
};



export default Home;
