<template>
  <v-card>
<sctab/>

    <v-card class="mx-auto" max-width="auto" outlined
         :key="keystatus" v-for="(tasks, keystatus) in task"
>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="font-weight-bold mb-2">{{tasks.taskType}}</div>
          <div v-if="tasks.taskType != 'model'" ><v-list-item-title  class="mb-1" >ช่างภาพที่คุณเลือก : {{photographer[tasks.keyPhoto].name}}</v-list-item-title></div>
          <div v-if="tasks.taskType == 'model'"><v-list-item-title class="mb-1" >Modelที่เลือก : {{tasks.keyModel}}</v-list-item-title></div>
<!-- :href="'/schedule/PrivateChat/' + tasks.keyUser" -->
          <v-list-item-subtitle>สถานะงาน : {{tasks.statusTask}}</v-list-item-subtitle>
          <!-- <v-btn     @click="chat(tasks.keyPhoto,tasks.keyModel)"    >chat</v-btn> -->


<div class="text-center">
      <v-btn
        color="blue"
        dark
        @click="sheet = !sheet"
      >
        ชำระเงิน
      </v-btn>
      <v-bottom-sheet v-model="sheet">
        <v-sheet
          class="text-center"
          height="300px"
        >
          <v-btn
            class="mt-6"
            text
            color="red"
            @click="sheet = !sheet"
          >
            close
          </v-btn>
          <div class="py-3">
{{tasks.price.price1}}    

<v-btn
        color="blue"
        dark
        @click="pay(keystatus)"
      >
        ชำระเงิน
      </v-btn>

  </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>


        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

       <v-stepper  vertical>
      <v-stepper-step step="1"  :complete="tasks.statusTask == 'ช่างภาพรับงาน'">
        รอช่างภาพตกลง
      </v-stepper-step>
  
      <!-- <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content> -->
  
      <v-stepper-step step="2" :complete="tasks.statusTask == 'ช่างภาพรับงาน'"> ชำระเงิน</v-stepper-step>
         
      <v-stepper-content step="2" >
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>

      </v-stepper-content>
  
      <!-- <v-stepper-step :rules="[() => false]" step="3">
        Ad templates
        <small>Alert message</small>
      </v-stepper-step> -->
  
     
  
      <v-stepper-step step="3" :complete="tasks.statusTask == '3'">ดำเนินการ</v-stepper-step>
  
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      </v-stepper-content>


      <v-stepper-step step="4" :complete="tasks.statusTask == '4'">เสร็จสิ้น</v-stepper-step>
  
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      </v-stepper-content>
    </v-stepper>
    </v-card>

   
<br>
    <!-- <v-card class="mx-auto" max-width="auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="font-weight-bold mb-2">หา Model</div>
          <v-list-item-title class="mb-1">Model ที่คุณเลือก : 24Pixel</v-list-item-title>
          <v-list-item-subtitle>สถานะงาน : รอการตอบกลับของModel</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
    </v-card> -->
  </v-card>
</template>



<script>
import sctab from './sctab.vue';
import firebase from "./forms/firebaseConfig";
var database = firebase.database();
var userRef = database.ref("/userdata");
var taskRef = database.ref("/taskphoto");
var modelRef = database.ref("/model");
var photographerRef = database.ref("/photographer");
var chatRoomRef = database.ref("/chatRoom");
export default {
    components: {
    sctab,
   
  },
  data() {
    return {
      photographer:{},
      name:"",
          sheet: false,

      task:{},
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };

  },
methods: {
  pay(keystatus){
    console.log(keystatus);
     taskRef.child(keystatus).update({
    statusTask: 'ช่างภาพรับงาน',

   }); 
//       firebase.database().ref(userRef).once('value', function(snapshot) {
// var i=0
// for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
// var key = Object.keys(snapshot.val())[i];
// var data = snapshot.child(key).val();
//  if(data.email == firebase.auth().currentUser.email){
//         console.log(data.email);
//         userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {

//      var key2 = Object.keys(snapshot.val())[0];
// console.log(snapshot.val()[key2].email);
//     photographerRef.orderByChild("keyUser").equalTo(key2).on("value", snapshot => {
//      var key3 =Object.keys(snapshot.val())[0]
//      console.log(key3);
     
// taskRef.orderByKey().equalTo(keystatus).on("value", snapshot => {
//  var key4 =Object.keys(snapshot.val())[0]


//               taskRef.child(key4).update({
//     statusTask: 'ช่างภาพรับงาน',

//    }); 
//         });

//   })
// });
        
//       }

// }

// })
  },
chat(keyPhoto,keyModel){
  console.log(keyPhoto);
  console.log(keyModel);
  // =======================================================================
  if(keyPhoto==null){
    console.log('a');
    modelRef.orderByKey().equalTo(keyModel).on("value", snapshot => {
      var keyM =Object.keys(snapshot.val())
      console.log(snapshot.val()[keyM].keyUser);
      var key123 = snapshot.val()[keyM].keyUser;
          // this.$router.push('/schedule/PrivateChat/' + snapshot.val()[keyM].keyUser)
        userRef.on("value", snapshot => {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
      if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
     var key2 = Object.keys(snapshot.val())[0];
    chatRoomRef.on("value", snapshot => {
var i=0
var id;
console.log(snapshot.val());
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
      console.log(data.id1);
      console.log(key2);
      if(data.id1 == key2){
 id = 1    
      }     else { 
 id =2    
}
}  
if(id == 1 ){
console.log('5555555');
}else if(id == 2 ){
 userRef.on("value", snapshot => {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
      if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
     var key2 = Object.keys(snapshot.val())[0];
    chatRoomRef.on("value", snapshot => {
var i=0
var id;
console.log(snapshot.val());
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
      console.log(data.id1);
      console.log(key2);
      if(data.id1 == key2){
 id = 1    
      }     else { 
 id =2    
}
}  
if(id == 1 ){
console.log('5555555');
}else {
let data = {
        id1:  key2,
        id2: key123,
      }
      chatRoomRef.push(data)
}
    });
});    
      }     
}  
    });
}
    });
});    
      }     
}  
    });
         }); 
  }else{
    console.log('b');
    photographerRef.orderByKey().equalTo(keyPhoto).on("value", snapshot => {
           var keyP =Object.keys(snapshot.val())
      console.log(snapshot.val()[keyP].keyUser);
    this.$router.push('/schedule/PrivateChat/' + snapshot.val()[keyP].keyUser)
    /////////////สร้างห้องแชท
     let data = {
        id1:  snapshot.val()[keyP].keyUser,
        id2: 'asdasd',
      }
      
      chatRoomRef.push(data)
         }); 
  }
}
},
  mounted() {
console.log(this.$store.state.keyUser);
console.log(this.$store.state.keyUserF);

taskRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
      
        this.task = snapshot.val();
          console.log(this.task);  
          this.users =this.$store.state.keyUserF
    
      photographerRef.on("value", snapshot => {
  this.photographer = snapshot.val()
    });
   }); 

   

  }
};
</script>