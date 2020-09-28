<template>
  <v-container fluid>
    <center>
      <h2>พรีเวดดิ้ง</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      รายละเอียดงาน
      <v-textarea solo v-model="taskDetail"></v-textarea>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field :label='this.$store.state.location.locationData.subdistrict+this.$store.state.location.locationData.district+this.$store.state.location.locationData.province+this.$store.state.location.locationData.country+this.$store.state.location.locationData.postcode' solo v-model="taskLocation" @click="location('task')"></v-text-field>
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

    
    <button @click="insertToTaskphoto(taskDetail, taskLocation,taskStart,taskEnd)"> Add</button>

  </v-container>
</template>

<script>
import firebase from '../forms/firebaseConfig'


var database = firebase.database()
var taskPhotoRef = database.ref('/taskphoto')
var mapRef = database.ref('/map')
export default {
  data: () => ({
     items: ["1", "2", "3", "4"],
   taskDetail: '', 
   taskLocation: '',
   taskStart: '',
   taskEnd: ''
  }),
 methods: {
    location(lo){
        this.$router.push("/"+lo+"/location.vue");
    },
    insertToTaskphoto (taskDetail,taskLocation,taskStart,taskEnd) {

  console.log(this.users);
       let data = {
        taskDetail: taskDetail,
        taskLocation: this.$store.state.location,
        taskStart: taskStart,
        taskEnd: taskEnd,
        taskType: 'พรีเวดดิ้ง',
                 keyUser: this.$store.state.keyUserF ,
         keyPhoto:  this.$route.params.key,
                  statusTask: 'รอการตอบรับ',
                  notification: false

      }
      
      taskPhotoRef.push(data)
                  mapRef.push(this.$store.state.location)

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
           this.users = this.$store.state.keyUser
    })
  },
  

};
</script>