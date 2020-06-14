<template>
  <v-container fluid>
    <center>
      <h2>ภาพถ่ายบุคคล</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      รายละเอียดงาน
      <v-textarea solo></v-textarea>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <label for>วัน-เวลาเริ่มงาน:</label>
      <br />
      <input type="datetime-local" id="time" name="birthdaytime" />
      <br />
      <br />
      <label for>วัน-เวลาสิ้นสุดงาน:</label>
      <br />
      <input type="datetime-local" id="time" name="birthdaytime" />
    </v-col>

    <v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field solo></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      จำนวนคนในเฟรม
      <v-select solo :items="items" :menu-props="{ top: true, offsetY: true }" label="Label"></v-select>
    </v-col>
  </v-container>
</template>

<script>
import firebase from './firebaseConfig'

var database = firebase.database()
var taskPhotoRef = database.ref('/taskphoto')
export default {
  data: () => ({
  
  }),
 methods: {
    
    insertToTaskphoto () {

       let data = {
        
      }
      
      taskPhotoRef.push(data)
      .then(() => {
            console.log("Document successfully written!");
            console.log(data);
            
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      // this.name = ''
      // this.realname = ''
      // this.email = ''
      // this.phone = ''
      // this.introduce = ''
      // this.address = ''
    },
  
    
  },
  
  mounted () {
    taskPhotoRef.on('value', (snapshot) => {
      this.taskphoto = snapshot.val()
    })
  },
  

};
</script>