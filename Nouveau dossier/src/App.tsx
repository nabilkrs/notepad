import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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


import firebase from 'firebase';
import firestore from 'firebase'
import { reduceEachLeadingCommentRange } from 'typescript';
function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    
    window.location.reload(false);
    event.detail.complete();
  }, 2000);
}

const App: React.FC = () => (
  <IonApp>
 
    

      <IonToolbar className="ct">
          <IonTitle size="large">Notepad</IonTitle>
          </IonToolbar>

    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
       
      </IonRouterOutlet>
      
    </IonReactRouter>
    <IonReactRouter>
    
  
    <IonContent fullscreen className="content">
    <Header />
    <IonRefresher slot="fixed"  onIonRefresh={doRefresh}>
    <IonRefresherContent></IonRefresherContent>
  </IonRefresher>
 <Show />


  </IonContent>

  <Footer />
 

  
  
  

 
  
    </IonReactRouter>
  
  
    
 
   
  </IonApp>
);

export default App;
