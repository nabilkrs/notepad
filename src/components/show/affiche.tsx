import React, { Children } from 'react';
import { Component } from 'react';
import { AngularFireModule, FirebaseApp, FIREBASE_OPTIONS } from '@angular/fire';
import { database } from 'firebase';

import firebaseConfig from '../../config';
import firebase from 'firebase';
import { construct } from 'ionicons/icons';
import { isConstructorDeclaration } from 'typescript';
class Affich extends Component{
 
state = {



  
  tab : [
    {id:52,title:null,main:null,saved:null},
    {id:74,title:null,main:null,saved:null},

 
  
  
  
  ]



}


  render()
  {
    var d = this.state.tab;
    var obj="";
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
    var x = firebase.database();
    var y = firebase.database().ref("notes");

     var i=0;
     var childxo:Element;
   y.once('value').then((snapshot) =>{
      var id
       snapshot.forEach((childxo) => {
          
       var childKey = childxo.key;
        var childData = childxo.val();
        id=childData.id;
        var title=childData.title;
        var main=childData.main;
        var saved=childData.save;
        d.push(childData);
        
  });
   
 const bb =  console.log(d);     
}) ;
    

var yt = this.state.tab;
const g = yt.map(  (item,i) =>{
  
  return (
    <div key={i}>
      <p>{item.id}</p>
    </div>
  )

})

return (
<div>
 


<h1>Affich section</h1>
  
  
</div>
  );



  }

}
export default Affich