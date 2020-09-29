import React from 'react';
import { Component } from 'react';
import {db} from '../../config';
import { trash } from 'ionicons/icons';
import { IonList,  IonItem, IonLabel,IonIcon, IonItemSliding, IonItemOption, IonItemOptions} from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import './show.css';

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