import { IonButton, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {IonItem,IonFab,IonFabList, IonFabButton,IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonList,  IonRefresher, IonRefresherContent  } from '@ionic/react';
import { Route } from 'react-router';
import { RefresherEventDetail } from '@ionic/core';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Show from '../components/show/show';
import { calendar, apps,flash,logoFacebook, logoTwitter, logoYoutube ,personCircle, map,addCircle,bookmark,settings, informationCircle } from 'ionicons/icons';
import { Link } from 'react-router-dom';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {

  console.log('Begin async operation');
 
  setTimeout(() => {
  
    window.location.href=("/")
    event.detail.complete();
  }, 2000);
  
}
const Home: React.FC = () => {
  return (
    <IonPage>
     
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ct">Notapad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonTitle size="large">Notepad</IonTitle>
          </IonToolbar>
        </IonHeader>
        
  
  <IonRefresher slot="fixed"  onIonRefresh={ doRefresh}>
  <IonRefresherContent></IonRefresherContent>
</IonRefresher>
<Header />
 <Show/>


 
      </IonContent>
    <IonFooter  id="foot">
      
    <IonFab id="fb" vertical="center" horizontal="end">
      <IonFabButton  color="white"><IonIcon icon={apps} /></IonFabButton>
      <IonFabList side="top">
        <IonFabButton href="/add">
          <IonIcon icon={addCircle} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={bookmark} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={settings} />
        </IonFabButton>
      </IonFabList>
      </IonFab>
      
    </IonFooter>
    </IonPage>
    
  );
};

export default Home;
