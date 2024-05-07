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
import { home, personCircleOutline, } from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile/Profile';
import ClickCounter from './pages/ClickCounter/ClickCounter';
import Calculator from './pages/calculator/Calculator';
import TodoList from './pages/TodoList/TodoList';
import QuoteGenerator from './pages/QuoteGenerator/QuoteGenerator';
import Notes from './pages/notes/notes';

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
        <Route exact path="/ionic-t-licuanan/Home">
            <Home />
          </Route>
          <Route exact path="/ionic-t-licuanan/Home/Profile">
            <Profile />
          </Route>
          <Route exact path="/ionic-t-licuanan/Home/ClickCounter">
            <ClickCounter />
          </Route>
          <Route path="/ionic-t-licuanan/Home/Calculator">
            <Calculator />
          </Route>
          <Route path="/ionic-t-licuanan/Home/TodoList">
            <TodoList />
          </Route>
          <Route path="/ionic-t-licuanan/Home/QuoteGenerator">
            <QuoteGenerator />
          </Route>
          <Route path="/ionic-t-licuanan/Home/Notes">
            <Notes />
          </Route>
          <Route exact path="/">
            <Redirect to="/ionic-t-licuanan/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton  tab="Home" href="/ionic-t-licuanan/Home">
            <IonIcon aria-hidden="true" color='warning' icon={home} />
            <IonLabel color='dark'>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/ionic-t-licuanan/Home/Profile">
            <IonIcon aria-hidden="true" color='warning' icon={personCircleOutline} />
            <IonLabel color='dark'>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
