<template>
  <v-container fluid>
    <center>
      <h2>สินค้า/อาหาร</h2>
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
      จำนวนสินค้า
      <v-select solo :items="items" :menu-props="{ top: true, offsetY: true }" label="Label" v-model="taskNum"></v-select>
    </v-col>

    

    
    <button @click="insertToTaskphoto(taskDetail,taskStart,taskEnd, taskLocation,taskNum)"> Add</button>

  </v-container>
</template>

<script>
import firebase from '../forms/firebaseConfig'

var database = firebase.database()
var taskPhotoRef = database.ref('/taskphoto')
export default {
  data: () => ({
     items: ["1", "2", "3", "4", "5"],
   taskDetail: '', 
   taskStart: '',
   taskEnd: '',
   taskLocation: '',
   taskNum: '',
   
  }),
 methods: {
    
    insertToTaskphoto (taskDetail,taskStart,taskEnd,taskLocation,taskNum) {

       let data = {
        taskDetail: taskDetail,
         taskStart: taskStart,
         taskEnd: taskEnd,
         taskLocation: taskLocation,
         taskNum: taskNum,
         taskType: 'photo6'
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
    })
  },
  

};
</script>