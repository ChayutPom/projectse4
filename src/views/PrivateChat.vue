<template>
<v-app id="app" class="primary">
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12" color="primary lighten-4">
            <v-toolbar dark color="primary darken-1">
              <v-toolbar-title>Chat</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
        <v-list ref="chat" id="logs">
              <template v-for="(chat, key) in chatM">
            <v-subheader class="flex-row-reverse"   :key="key"><div v-if="chat.id ==ii1">{{ chat.Message }}</div ></v-subheader>
             <v-subheader class=" flex-row"   :key="key"><div v-if="chat.id == ii2">{{ chat.Message }}</div ></v-subheader>
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
// var userRef = database.ref("/userdata");
// var chatMRef = database.ref("/chatMessage");
var chatRoomRef = database.ref("/chatRoom");

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

  
// ===============================================
  this.logs.push(this.msg);
      
console.log(this.msg);
console.log(this.keyroom );
 let data = {
        Message: this.msg,
        id: this.$store.state.keyUserF,
      }
      chatRoomRef.child(this.keyroom).push(data)

//      chatRoomRef.child(this.keyroom).update({
// data
// });
this.msg = "";
      
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
      chatRoomRef.on("value", snapshot => {


   this.chat = snapshot.val()
   console.log(this.chat);
  //  console.log(this.chat["-MLl_aMZvrlI9CbQDpL4"]["-MLlevzeKWvMj-zEAwOm"].Message);

   console.log(this.$route.params.key);
   console.log(this.$store.state.keyUserF);
this.ii1 = this.$store.state.keyUserF
this.ii2 = this.$route.params.key

   var i =0
            for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
            var key = Object.keys(snapshot.val())[i];
            
            var data = snapshot.child(key).val();

    if((data.id1 == this.$route.params.key && data.id2 == this.$store.state.keyUserF) || (data.id1 ==  this.$store.state.keyUserF && data.id2 ==  this.$route.params.key)){
     this.keyroom = key
     console.log( this.chat[this.keyroom]);

     this.chatM = this.chat[this.keyroom]
                  }else{
                  console.log('sdf');
                    

 
  
                  }
            }
});  




  }
  }
</script>
<style >
#logs {
  height: 500px;
  overflow: auto;
}
</style>