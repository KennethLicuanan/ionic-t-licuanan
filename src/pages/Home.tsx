import React, { useState } from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from '@ionic/react';

//Custom CSS
import './Home.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil, logoIonic, bookmark, book, clipboard, clipboardOutline, calculatorOutline, bookmarkOutline, bookOutline} from 'ionicons/icons';

const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/ClickCounter',

  },
  {
    title: 'Calculator',
    icon: calculatorOutline,
    subtitle: 'Applet #2',
    link: '/Calculator',
  },
  {
    title: 'To Do List',
    icon: clipboardOutline,
    subtitle: 'Applet #3',
    link: '/TodoList',
  },
  
  {
    title: 'Quote Generator',
    icon: bookmarkOutline,
    subtitle: 'Applet #4',
    link: '/QuoteGenerator',
  },
  
  {
    title: 'Notes',
    icon: bookOutline,
    subtitle: 'Applet #5',
    link: '/Notes',
  },
];

  const Home: React.FC = () => {

    {/*Dynamic Search*/}
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
        {/*Dynamic Search*/}
        <>
          <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />
          
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} href={card.link}>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>

                        <IonCol size="2">
                          <IonIcon className="home-card-icon" icon={card.icon} color='warning' />
                        </IonCol>
                        <IonCol size="auto">
                            <div className="home-card-title">{card.title}</div>
                            <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                            <IonIcon/>
                          </IonCol>
                      </IonRow>
                     
                    </IonGrid>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
          ))}
        </>
          </IonContent>
        </IonPage>
    );
  };
  
  //
  export default Home;
  