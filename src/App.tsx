import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { IonApp, IonFooter, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import {Route} from "react-router-dom";
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
import Footer from './components/footer/footer';
import { IonContent,IonItem, IonLabel,IonList,  IonRefresher, IonRefresherContent ,IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './pages/Home.css'
import Show from './components/show/show';
import Header from './components/header/header';

import { database } from 'firebase';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';
import './Front.css'
import { IonTabs, IonTabBar, IonTabButton, IonIcon,  IonBadge } from '@ionic/react';
import { calendar, personCircle, map,addCircle,bookmark,settings, informationCircle } from 'ionicons/icons';


import firebase from 'firebase';
import firestore from 'firebase'
import { reduceEachLeadingCommentRange } from 'typescript';
import Add from './pages/add';
import Shownote from './pages/shownote';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');
  event.preventDefault();
  setTimeout(() => {
    event.preventDefault();
    window.location.reload(false);
    event.preventDefault();
    event.detail.complete();
  }, 2000);
}

const App: React.FC = () => (
  <IonApp>
   
 <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/shownote/:id" component={Shownote} />

 

        </IonRouterOutlet>
    

  </IonReactRouter>

  

  

  </IonApp>
 
);

export default App;
