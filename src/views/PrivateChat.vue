<template>
<v-app id="app" class="primary">
  <v-content>
    <v-container  >
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12" color="primary lighten-4">
            <v-toolbar dark color="primary darken-1">
              <v-toolbar-title>Chat{{this.kkk}}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
        <v-list ref="chat" height= "400">
          <template v-for="(chatM, key) in chat">
            <v-subheader class="d-flex flex-row-reverse"   :key="key"><div v-if="chatM.id1 == kkk">{{ chatM.Message }}</div ></v-subheader>
          </template>
          
          <template v-for="(chatM, key) in chat">
            <v-subheader class="d-flex flex-row"   :key="key"><div v-if="chatM.id1 == $route.params.key">{{ chatM.Message }}</div ></v-subheader>
          </template>
        </v-list>
            </v-card-text>
            <v-card-actions>
              <v-form @submit.prevent="submit">
              <v-text-field v-model="msg" label="Message" single-line solo-inverted></v-text-field>
              <v-btn fab dark small color="primary" type="submit">
                <v-icon dark>send</v-icon>
              </v-btn>
                </v-form>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import firebase from "./forms/firebaseConfig";

var database = firebase.database();
var userRef = database.ref("/userdata");
var chatMRef = database.ref("/chatMessage");

export default {
 data: () => ({
    logs: [],
    msg: null,
    key2:'',
    kkk:'',
    chat:{},
    chat1:{},
        chat2:{},

  }),
  methods: {
    submit() {

          userRef.on("value", snapshot => {

var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];

var data = snapshot.child(key).val();

      if(data.email == firebase.auth().currentUser.email){
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
    
     var key2 = Object.keys(snapshot.val())[0];
  this.users = snapshot.val()[key2];
  console.log(key2);
  
// ===============================================

  this.logs.push(this.msg);
      
console.log(this.msg);
console.log(key2);
 let data = {
        Message: this.msg,
        id1:  key2,
        id2: this.$route.params.key,
      }
      
      chatMRef.push(data)

this.msg = "";
});
        
      }
      
}
    
    });
      
    }
  },
  watch: {
    logs() {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
      }, 0);
    }
  },

    mounted() {
 chatMRef.on("value", snapshot => {
   this.chat = snapshot.val()
}); 
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
     this.kkk = Object.keys(snapshot.val())[0]

     this.users = snapshot.val()[key2];
  console.log(key2);
// ========================
//    chatMRef.orderByChild("id1").equalTo(key2).on("value", snapshot => {

//       this.chat1 = snapshot.val()
//       console.log('id1'+snapshot.val());
      
//     });
//     chatMRef.orderByChild("id2").equalTo(this.$route.params.key).on("value", snapshot => {
// console.log(this.$route.params.key);
//       this.chat2 = snapshot.val()
//       console.log('id2'+snapshot.val());
      
//     });

});    
      }     
}  
    });

  }
  }
</script>