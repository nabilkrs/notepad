import React from 'react';
import Show from '../components/show/show';
import { Component } from 'react';
import {IonToast,IonBackButton, IonButtons, IonContent, IonInput,IonHeader, IonTitle, IonToolbar, IonTextarea, IonItem, IonLabel, IonItemDivider, IonList, IonRouterLink, IonButton, IonFabList } from '@ionic/react';
import { IonFab, IonFabButton, IonFooter, IonIcon, IonPage} from '@ionic/react';
import { calendar, personCircle,arrowBack, map,addCircle,flash,checkmark,bookmark,settings, informationCircle, pencil, copy } from 'ionicons/icons';

import firebaseConfig from '../config';
import {db} from '../config';
import firebase from 'firebase';
import firestore from 'firebase'
import { database } from 'firebase';
import { create } from 'domain';
import './shownote.css';
class Shownote extends Component{


state = {
    id:window.location.pathname.substring(10, window.location.pathname.length),
    title:null,
    main:""



}
componentDidMount = ()=>{
    var fin = [{}]
    db.collection("notes").get().then((snapshot)=>{
            
        snapshot.forEach((item)=>{
            if (item.id==this.state.id)
         
           {

            {this.setState({title:item.data().title,main:item.data().main})}

           }
            
         
           
            })
           
           
            
    })
        



    
}
copy = (text:string)=>{
 
  navigator.clipboard.writeText(text);
 
  const toast = document.createElement('ion-toast');
  toast.message = 'Note copied!';
  toast.duration = 2000;
  toast.color="nabeel";
  
  
  document.body.appendChild(toast);
toast.present();





}


render(){





    return (
        <IonPage>
<IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
         <IonButton href="/"> <IonIcon icon={arrowBack}></IonIcon>  </IonButton>
          <IonTitle id="head">{this.state.title}</IonTitle>
        </IonButtons>
        
      </IonToolbar>
    </IonHeader>

            <IonContent>

    
          <IonItem>
         
          <IonTextarea value={this.state.main} className="wr" disabled rows={90} name="main" id="txarea"></IonTextarea>

          </IonItem>
                  
                  
                 
               
                  </IonContent>
                  
                  <IonFooter id="foott">
                  <IonFab id="fb" vertical="center" horizontal="end">
      <IonFabButton  color="white"><IonIcon icon={flash} /></IonFabButton>
      <IonFabList side="top">
        <IonFabButton>
          <IonIcon icon={pencil} />
        </IonFabButton>
        <IonFabButton onClick={()=>this.copy(this.state.main)}>
          <IonIcon icon={copy} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={bookmark} />
        </IonFabButton>
      </IonFabList>
      </IonFab>
        
        
                  </IonFooter>
        
        </IonPage>
    )
}





}
export default Shownote;