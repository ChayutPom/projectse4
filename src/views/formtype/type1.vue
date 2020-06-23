<template>
  <v-container fluid>
    <center>
      <h2>ภาพถ่ายบุคคล</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      รายละเอียดงาน
      <v-textarea solo v-model="taskDetail"></v-textarea>
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

    <v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field solo v-model="taskLocation" ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      จำนวนคนในเฟรม
      <v-select solo :items="items" :menu-props="{ top: true, offsetY: true }" label="Label" v-model="taskNum"></v-select>
    </v-col>
    <button @click="insertToTaskphoto(taskDetail, taskStart,taskEnd,taskLocation,taskNum)">Add</button>

  </v-container>
</template>

<script>
import firebase from '../forms/firebaseConfig'

var database = firebase.database()
var taskPhotoRef = database.ref('/taskphoto')
var userRef = database.ref("/userdata");

export default {
  data: () => ({
     items: ["1", "2", "3", "4", "5"],
   taskDetail: '', 
   taskStart: '',
   taskEnd: '',
   taskLocation: '',
   taskNum: ''
  }),
 methods: {
    
    insertToTaskphoto (taskDetail, taskStart,taskEnd,taskLocation,taskNum) {

       let data = {
        taskDetail: taskDetail,
         taskStart: taskStart,
         taskEnd: taskEnd,
         taskLocation: taskLocation,
         taskNum: taskNum,
         taskType: 'photo1',
         keyUser:'' ,
         keyPhoto:'' ,

      }
      
      taskPhotoRef.push(data)
      .then(() => {
            console.log("Document successfully written!");
            console.log(data);
            
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
 
    },
  
    
  },
  
  mounted () {
    taskPhotoRef.on('value', (snapshot) => {
      this.taskphoto = snapshot.val()
    }),
       userRef.on("value", snapshot => {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];

var data = snapshot.child(key).val();
      // console.log(data.email);

      if(data.email == firebase.auth().currentUser.email){
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
  // console.log(snapshot.val().firstname);
    
     var key2 = Object.keys(snapshot.val())[0];
  this.users = snapshot.val()[key2];
  console.log(this.users);  
  console.log(key2);
  
});       
      }      
}   
    });
  },
  

};
</script>