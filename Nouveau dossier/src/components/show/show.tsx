import React from 'react';
import { Component } from 'react';
import { table } from 'console';
import {db} from '../../config';
import { tabletLandscape, logoFirebase, timeSharp } from 'ionicons/icons';
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






class Show extends Component{
    state = {
       
      
        fin : [{title:null,main:null,saved:null}]
        
      }



      componentDidMount = () =>{
       
      
        var fin = [{}]
        db.collection("users").get().then((snapshot)=>{
            
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
adddoc = ()=>{

db.collection("users").doc().set({
 title : "work1" , main : "main1" , saved : 144 
})




}
doRefresh = (event: CustomEvent<RefresherEventDetail>)=> {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
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
    <div key={i}>
   

   <IonList>
    <IonItem>
  <IonLabel  className="list">{item.title}</IonLabel>
    </IonItem>
  

  </IonList>



   
    </div>
   
  )
  
 
})


}




    


</div>)

}




    
    }
   

export default Show; 