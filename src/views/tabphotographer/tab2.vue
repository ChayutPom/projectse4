<template >
<div>
<photographer/>


    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">  
              <v-card
      class="mx-auto"
      max-width="auto"
      outlined
     :key="keystatus" v-for="(tasks, keystatus) in task"

            
            v-bind="attrs"
            v-on="on"
    >
    <div      v-if="tasks.statusTask == 'ช่างภาพรับงาน'">
      <v-list-item three-line>
        <v-list-item-content>
          <div class=" mb-4">ชื่อ{{keystatus}}</div>
          <v-list-item-title class="headline mb-1">{{tasks.taskType}}</v-list-item-title>
          <v-list-item-subtitle>{{tasks.taskDetail}}</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>

      </v-card-actions>
    </div>
    </v-card>

        </template>

        <!-- -------------------modal------------------------- -->

        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Photo</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
         
         
        </v-card>
      </v-dialog>
    </v-row>
    </div>

</template>

<script>
import photographer from '../function/photographer.vue';
import firebase from "../forms/firebaseConfig";
var database = firebase.database();
var userRef = database.ref("/userdata");
var taskRef = database.ref("/taskphoto");
var photograRef = database.ref("/photographer");
  export default {
  components: {
    photographer,
   
  },

  data: () => {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
task:{},
keystatus:''
    
    };
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
    photograRef.orderByChild("keyUser").equalTo(key2).on("value", snapshot => {
     var key3 =Object.keys(snapshot.val())[0]
     console.log(key3);
     
taskRef.orderByChild("keyPhoto").equalTo(key3).on("value", snapshot => {
    // var key4 = Object.keys(snapshot.val())[0];
        this.task = snapshot.val();
          console.log(this.task);  
        
   }); 
        });
});
        
      }
      
}
      
    
    });
    

  }
  }
</script>