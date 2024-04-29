import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apertureOutline, calculatorOutline, home, ellipse, personCircleOutline, square, triangle, closeOutline, alertCircleOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ClickCounter from './pages/ClickCounter';
import Calculator from './pages/Calculator';
import TodoList from './pages/TodoList';
import QuoteGenerator from './pages/QuoteGenerator';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/ClickCounter">
            <ClickCounter />
          </Route>
          <Route path="/Calculator">
            <Calculator />
          </Route>
          <Route path="/TodoList">
            <TodoList />
          </Route>
          <Route path="/QuoteGenerator">
            <QuoteGenerator />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon aria-hidden="true" icon={alertCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
