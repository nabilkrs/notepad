import {  IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import {IonFab,IonFabList, IonFabButton,IonIcon, IonRefresher, IonRefresherContent  } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import Header from '../components/header/header';
import Show from '../components/show/show';
import { apps,addCircle,bookmark,settings } from 'ionicons/icons';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {

event.preventDefault()
 
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
        
  
  <IonRefresher slot="fixed"  onIonRefresh={(e)=> doRefresh(e)}>
  <IonRefresherContent></IonRefresherContent>
</IonRefresher>
<Header />
 <Show/>


 
      </IonContent>
    <IonFooter  id="foot" className="ion-no-border">
      
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
