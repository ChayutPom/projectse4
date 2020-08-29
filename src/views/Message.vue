<template>


        <v-col cols="12" sm="12" md="12">
          <v-card
      max-width="344"
      class="mx-auto"
      :key="key" v-for="(item, key) in chatRoom "
    >
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline"> <v-btn @click="chat(item.id1,item.id2)" >{{item.id2}}</v-btn>
</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
       1
      </v-card-text>
  
     
    </v-card>


            <v-card
      max-width="344"
      class="mx-auto"
      :key="key" v-for="(item, key) in chatRoom2 "
    >
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline"> <v-btn @click="chat(item.id1,item.id1)" >{{item.id1}}</v-btn>
</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        2
      </v-card-text>
  
     
    </v-card>
      </v-col>


</template>



<script>
import firebase from "./forms/firebaseConfig";
var database = firebase.database();
// var userRef = database.ref("/userdata");
var chatRoomRef = database.ref("/chatRoom");


  export default {

   data () {
     return {
   chatRoom: {},
   chatRoom2: {},
     }
  },


methods: {


chat(id1,id2){
console.log(id1+id2);

this.$router.push('/schedule/PrivateChat/' +id2)

},
},


 mounted() {
console.log(this.$store.state.keyUser);
console.log(this.$store.state.keyUserF);


     
chatRoomRef.orderByChild("id1").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
        this.chatRoom = snapshot.val();
          console.log(this.chatRoom);  

   }); 
  chatRoomRef.orderByChild("id2").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
        this.chatRoom2 = snapshot.val();
          console.log(this.chatRoom2);  

   }); 


    

  }

  }


</script>
