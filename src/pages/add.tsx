import { IonFab, IonFabButton, IonFooter, IonIcon, IonPage} from '@ionic/react';
import React, { EventHandler, FormEvent, useState } from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { database } from 'firebase';

import {IonToast,IonBackButton, IonButtons, IonContent, IonInput,IonHeader, IonTitle, IonToolbar, IonTextarea, IonItem, IonLabel, IonItemDivider, IonList } from '@ionic/react';
import './add.css';
import { calendar, personCircle,arrowBack, map,addCircle,checkmark,bookmark,settings, informationCircle } from 'ionicons/icons';
import { title } from 'process';
import App from '../App';
import {db} from '../config';
import firebaseConfig from '../config';
import firebase from 'firebase';
import firestore from 'firebase'
import { Toast } from '@ionic-native/toast/ngx';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Add extends Component{
  

    state = {
        title:"",
        main:"",
        id:"",
        lvl:0


    }
 UpdateNotes = ()=> {
  var x = new Date();
    
  var d = new Date(x.getFullYear(), x.getMonth(), x.getDate(), x.getHours()-1, x.getMinutes(), x.getSeconds(), 0);
 
  db.collection("notes").get().then((snapshot)=>{
            
    snapshot.forEach((item)=>{

     /*  db.collection("notes").doc().set({
         title : tit , main : ma , saved : 0,id : ""
        }) */
        var  w= d.toString();
        db.collection("notes").doc(item.id).set({
         title:item.data().title,main:item.data().main, saved:item.data().saved,id:item.id,createAt:w,lvl:item.data().lvl
        })
       
        })
       
    
        
})





 } 

    
    addnote = (tit:string,ma:string)=>{

      var x = new Date();
      
      var d = new Date(x.getFullYear(), x.getMonth(), x.getDate(), x.getHours()-1, x.getMinutes(), x.getSeconds(), 0);
     
     db.collection("counter").get().then((snapshot)=>{
    
    snapshot.forEach((item)=>{

     
      this.setState({lvl:item.data().NumberOfNotes})
      

    })
    this.setState({lvl:this.state.lvl-1})
    console.log(this.state.lvl)



    db.collection("counter").doc("007").set({

      NumberOfNotes:this.state.lvl
      
      
      })

      var  w= d.toString();

      db.collection("notes").doc().set({




          
      

        title : tit , main : ma , saved : 0,id : "w",createAt:w,lvl:this.state.lvl
        
       }) 

       db.collection("notes").get().then((snapshot)=>{
            
        snapshot.forEach((item)=>{
    
         
            var  w= d.toString();
            db.collection("notes").doc(item.id).set({
             title:item.data().title,main:item.data().main, saved:item.data().saved,id:item.id,createAt:w,lvl:item.data().lvl
            })
           
            })
           
        
            
    })
     })
   

   
     


    }
    myChangeHandler = (event:any)=>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  
} 

  submit = async ()=>{
     if (this.state.title=="")
     {
      
       
            const toast = document.createElement('ion-toast');
            toast.message = 'Title cannot be empty!';
            toast.duration = 2000;
            toast.color="danger";
            
            
            document.body.appendChild(toast);
         toast.present();

  }
else if (this.state.main=="")
{
    const toast = document.createElement('ion-toast');
    toast.message = 'Note cannot be empty!';
    toast.duration = 2000;
    toast.color="danger";
    document.body.appendChild(toast);
 toast.present();

}
else
{

this.addnote(this.state.title,this.state.main);
this.UpdateNotes();


    const toast = document.createElement('ion-toast');
    toast.message = 'Note added successfully!';
    toast.duration = 2000;
    toast.color="success";

  
    document.body.appendChild(toast);
 toast.present();  
 setTimeout(() => {
    window.open('/', "_self");
}, 2000);
 
}



}

render()

{

    return (
<IonPage>


<IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle id="head">Add Note</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
<form name="f">
<IonItem>
            <IonLabel className="wr" position="floating">Write the title</IonLabel>
            <IonInput className="wr" id="tit" type="text" onIonChange={this.myChangeHandler} name="title" ></IonInput>
            
          </IonItem>
          <IonItem>
            <IonLabel className="wr" position="floating">Write your note</IonLabel>
            <IonTextarea className="wr" onIonChange={this.myChangeHandler} rows={31} name="main" id="txarea"></IonTextarea>
          </IonItem>
          
         
          </form>
          </IonContent>
          
          <IonFooter id="foott">
          <IonFab id="fb" vertical="center" horizontal="end">
            
          <IonFabButton onClick={this.submit} id="btnnn" color="black"><IonIcon id="icon" icon= {checkmark} /></IonFabButton>



            </IonFab>



          </IonFooter>

</IonPage>

)


}

}

export default Add