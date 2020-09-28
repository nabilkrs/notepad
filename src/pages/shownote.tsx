import React from 'react';
import Show from '../components/show/show';
import { Component } from 'react';
import {IonToast,IonBackButton, IonButtons, IonContent, IonInput,IonHeader, IonTitle, IonToolbar, IonTextarea, IonItem, IonLabel, IonItemDivider, IonList, IonRouterLink, IonButton, IonFabList, IonAlert } from '@ionic/react';
import { IonFab, IonFabButton, IonFooter, IonIcon, IonPage} from '@ionic/react';
import { calendar, personCircle,arrowBack, map,addCircle,flash,checkmark,bookmark,settings, informationCircle, pencil, copy, helpCircle, helpCircleOutline, helpCircleSharp, help } from 'ionicons/icons';

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
    title:"",
    main:"",
    saved:"",
    date:"",
    lvl:0



}
componentDidMount = ()=>{
    
    db.collection("notes").get().then((snapshot)=>{
            
        snapshot.forEach((item)=>{
            if (item.id==this.state.id)
         
           {
             
            {this.setState({lvl:item.data().lvl,title:item.data().title,main:item.data().main,date:item.data().createAt,id:item.id,saved:item.data().saved})}

           }
            
         
           
            })
           
           
            
    })
        



    
}
copy = (text:string)=>{
 
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
 
  const toast = document.createElement('ion-toast');
  toast.message = 'Note copied!';
  toast.duration = 2000;
  toast.color="nabeel";
  
  
  document.body.appendChild(toast);
toast.present();




}
updatenote = (key:string,title:string,main:string,saved:string,date:string,lvl:number)=>{

 db.collection("notes").doc(key).set({
   main:main,title:title,id:key,saved:saved,createAt:date,lvl:lvl


 })

 


}
myChangeHandler = (event:any)=>{
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({[nam]: val});
  this.updatenote(this.state.id,this.state.title,this.state.main,this.state.saved,this.state.date,this.state.lvl)

} 

presentAlert = ()=> {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Details';

  alert.message ='Date : '+ this.state.date;
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  return alert.present();
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
         
          <IonTextarea value={this.state.main} onIonChange={this.myChangeHandler} className="wr" rows={90} name="main" id="txarea"></IonTextarea>

          </IonItem>
                  
          
           
               
                  </IonContent>
                  
                  <IonFooter id="foott">
                  <IonFab id="fb" vertical="center" horizontal="end">
      <IonFabButton  color="white"><IonIcon icon={flash} /></IonFabButton>
      <IonFabList side="top">
        <IonFabButton onClick={()=>this.copy(this.state.main)}>
          <IonIcon icon={copy} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={bookmark} />
        </IonFabButton>
        <IonFabButton onClick={this.presentAlert}>
          <IonIcon icon={help} />
        </IonFabButton>
      </IonFabList>
      </IonFab>
        
        
                  </IonFooter>
        
        </IonPage>
    )
}





}
export default Shownote;