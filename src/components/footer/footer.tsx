import { Component } from 'react';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet, IonContent } from '@ionic/react';
import { calendar, personCircle, map,addCircle,bookmark,settings, informationCircle } from 'ionicons/icons';
import { Route } from 'react-router';

import './footer.css'
import Home from '../../pages/Home';


class Footer extends Component{
render(){
return (
<IonContent>

<IonTabs className="tabs">
<IonRouterOutlet>
          <Route path="tabs" component={Footer}  />
         
        </IonRouterOutlet>

    <IonTabBar slot="bottom">
       
      <IonTabButton tab="add">
        <IonIcon icon={addCircle} />
        <IonLabel>Add</IonLabel>
        
      </IonTabButton>
      <IonTabButton tab="speakers">
        <IonIcon icon={bookmark} />
        <IonLabel>Saved</IonLabel>
      </IonTabButton>
      
      <IonTabButton tab="map">
        <IonIcon icon={settings} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
     
      </IonTabBar>
      </IonTabs>


    </IonContent>
)

}





}
export default Footer;