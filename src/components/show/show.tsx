import React from 'react';
import { Component } from 'react';
import { table } from 'console';
import {db} from '../../config';
import { tabletLandscape, logoFirebase, timeSharp, trash } from 'ionicons/icons';
import { IonRippleEffect,IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import { h as h } from 'ionicons/dist/types/stencil-public-runtime';
import { AngularFireModule, FirebaseApp, FIREBASE_OPTIONS } from '@angular/fire';
import { database } from 'firebase';
import { IonList, IonRefresher, IonRefresherContent , IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

import firebaseConfig from '../../config';
import firebase from 'firebase';
import firestore from 'firebase'
import { isTemplateExpression } from 'typescript';
import { title } from 'process';
import Affich from './affiche';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';
import './show.css';
import { Link } from 'react-router-dom';
import Shownote from '../../pages/shownote';






class Show extends Component{
    state = {
       
      
        fin : [{title:null,main:null,saved:null,id:""}]
        
      }



      componentDidMount = () =>{
       
      
        var fin = [{}]
        db.collection("notes").orderBy("lvl").get().then((snapshot)=>{
            
             snapshot.forEach((item)=>{
            
               /*  const c = {
                   title:item.data().title,
                   main:item.data().main,
                   saved:item.data().saved,
                 };*/
                fin.push(item.data())
                 
                
                
                 })
                
                 {this.setState({fin:fin})}
                 
         })
     
        
        
          

         

}

doRefresh = (event: CustomEvent<RefresherEventDetail>)=> {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

delete = (key:string)=>{
  db.collection("notes").doc(key).delete().then(function() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Note deleted successfully!';
    toast.duration = 2000;
    toast.color="medium";

  
    document.body.appendChild(toast);
 toast.present();  
 setTimeout(() => {
  window.location.reload(false);
}, 2000);
})
}
redir = (id:string)=>{

alert("hello");

}




render()
{
//    <IonButton color="dark" size="large" onClick={this.adddoc}>Add to Firebase</IonButton>

  let myData = this.state.fin || {}
  {this.state.fin.shift()}

return (<div>
    {
 myData.map((item,i) =>{
  return (
    <div key={item.id}>
   

   <IonList>
     <IonItemSliding>
     <IonItem routerLink={"/shownote/"+item.id}>
  <IonLabel  className="list">{item.title}</IonLabel>
    </IonItem>
  <IonItemOptions side="end"onIonSwipe={()=>this.delete(item.id)} >
    <IonItemOption color="danger" expandable onClick={()=>this.delete(item.id)}><IonIcon icon={trash}></IonIcon></IonItemOption>

  </IonItemOptions>
    </IonItemSliding>
  </IonList>

   
    </div>
   
  )
  
 
})


}




    


</div>)

}




    
    }
   

export default Show; 