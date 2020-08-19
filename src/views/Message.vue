<template>


        <v-col cols="12" sm="12" md="12">
          <v-card
      max-width="344"
      class="mx-auto"
      :key="key" v-for="(item, key) in chatRoom"
    >
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{item.id1}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
 
  
      <v-card-text>
        Visit ten places on our planet that are undergoing the biggest changes today.
      </v-card-text>
  
     
    </v-card>
      </v-col>


</template>



<script>
import firebase from "./forms/firebaseConfig";
var database = firebase.database();
var userRef = database.ref("/userdata");
var chatRoomRef = database.ref("/chatRoom");


  export default {

   data () {
     return {
   chatRoom: {},
     }
  },

 mounted() {
 
    userRef.on("value", snapshot => {

var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];

var data = snapshot.child(key).val();
      // console.log(data.email);

      if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
  // console.log(snapshot.val().firstname);
    
     var key2 = Object.keys(snapshot.val())[0];
     this.users = snapshot.val()[key2];
  console.log(this.users.email);
console.log(key2);
     
chatRoomRef.orderByChild("id1").equalTo(key2).on("value", snapshot => {
        this.chatRoom = snapshot.val();
          console.log(this.chatRoom);  

   }); 

});    
      }     
}  
    });
    

  }

  }


</script>
