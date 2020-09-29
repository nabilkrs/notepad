import React from 'react';
import { Component } from 'react';
import {IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonTextarea, IonItem, IonButton, IonFabList } from '@ionic/react';
import { IonFab, IonFabButton, IonFooter, IonIcon, IonPage} from '@ionic/react';
import { arrowBack, flash,bookmark,copy, help, personCircle, ellipse, ellipsisVerticalCircle, ellipsisVertical} from 'ionicons/icons';

import {db} from '../config';
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
relo=()=>{
  return window.location.reload(true);
}
changetitle=(key:string)=>{
var newtitle="";
const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'Title Update';
  alert.cssClass='primary';
  alert.inputs = [

    {placeholder: 'New Title',
  name:"new"}




  
  ]
  alert.buttons = [{
    text: 'Cancel',
    role: 'cancel',
    cssClass: 'secondary',
   

  },{
    text: 'Update',
 
    handler: (alertData) => {
      
      

  this.updatenote(this.state.id,alertData.new,this.state.main,this.state.saved,this.state.date,this.state.lvl)

     
      window.location.reload(true);
      


    }




  }];
  
  //buttons={['OK']}
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
        <IonButtons slot="primary">
        <IonButton onClick={(e)=>this.changetitle(this.state.id)}>
        <IonIcon slot="icon-only" icon={ellipsisVertical} />
      </IonButton>
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