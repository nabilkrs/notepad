import { IonContent,  IonRefresher, IonRefresherContent ,IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';
class Refresh {
   doRefresh = (event: CustomEvent<RefresherEventDetail>)=> {
        console.log('Begin async operation');
      
        setTimeout(() => {
          console.log('Async operation has ended');
          event.detail.complete();
        }, 2000);
      }




}
