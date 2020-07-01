<template>
  <v-container fluid>
    <center>
      <h2>Model</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      รายละเอียดงาน
      <v-textarea solo v-model="taskDetail"></v-textarea>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field solo v-model="taskLocation" ></v-text-field>
    </v-col>

<v-col cols="12" sm="6" md="3">
      จำนวนเงิน
      <v-text-field solo v-model="taskMoney" ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <label for>วัน-เวลาเริ่มงาน:</label>
      <br />
      <input v-model="taskStart" type="datetime-local" id="time" name="birthdaytime" />
      <br />
      <br />
      <label for>วัน-เวลาสิ้นสุดงาน:</label>
      <br />
      <input v-model="taskEnd" type="datetime-local" id="time" name="birthdaytime" />
    </v-col>

    
    <button @click="insertToTaskmodel(taskDetail, taskLocation,taskMoney,taskStart,taskEnd)"> Add</button>

  </v-container>
</template>

<script>
import firebase from '../forms/firebaseConfig'

var database = firebase.database()
var taskPhotoRef = database.ref('/taskphoto')
var userRef = database.ref("/userdata");

export default {
  data: () => ({
     items: ["1", "2", "3", "4", "5","6"],
   taskDetail: '', 
   taskLocation: '',
   taskMoney: '',
   taskNum: '',
   taskStart: '',
   taskEnd: '',
  }),
 methods: {
    
    insertToTaskmodel (taskDetail, taskLocation,taskMoney,taskStart,taskEnd) {
      userRef.on("value", snapshot => {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];

var data = snapshot.child(key).val();

      if(data.email == firebase.auth().currentUser.email){
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
    
     var key2 = Object.keys(snapshot.val())[0];
  this.users = snapshot.val()[key2];
  console.log(this.users);
       let data = {
        taskDetail: taskDetail,
         taskLocation: taskLocation,

         taskStart: taskStart,
         taskEnd: taskEnd,
         taskType: 'model',
                  keyUser: key2 ,
         keyModel:  this.$route.params.key,
                  statusTask: 'รอการตอบรับ'

      }
      
      taskPhotoRef.push(data)
      .then(() => {
            console.log("Document successfully written!");
            console.log(data);
            
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
             });
});
        
      }
      
}
    
    });
      
 
    },
  
    
  },
  
  mounted () {
    taskPhotoRef.on('value', (snapshot) => {
      this.taskphoto = snapshot.val()
    })
  },
  

};
</script>