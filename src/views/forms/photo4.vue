<template>
  <v-container fluid>
    <center>
      <h2>งานแต่งงาน</h2>
    </center>
    <br />

<v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field v-if="this.$store.state.location.locationData==null" label='สถานที่'  filled rounded dense v-model="taskLocation" @click="location('task')" ></v-text-field>
           <v-text-field v-if="this.$store.state.location.locationData!=null" @click="location('task')" :label='this.$store.state.location.locationData.subdistrict+this.$store.state.location.locationData.district+this.$store.state.location.locationData.province+this.$store.state.location.locationData.country' solo ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      รายละเอียดงาน
      <v-textarea solo v-model="taskDetail"></v-textarea>
    </v-col>

    

       <v-col cols="12" sm="6" md="3">
      <v-select
        v-model="selected"
        :items="items"
        label="จำนวนวัน"
        dense
        outlined
      ></v-select>

      <br />
      <div v-if="selected >= 1">
          <label>วัน-เวลาเริ่มงาน: </label><br>
        วันที่ 1 เริ่มเวลา: <input
          cols="6"
          v-model="taskStart1"
          type="datetime-local"
          id="time"
          name="birthdaytime"
        />
        <v-select
        v-model="taskTaotal1"
          cols="6"
          :items="items2"
          label="จำนวนชั่วโมง"
          dense
          outlined
        ></v-select>
      </div>

      <div v-if="selected >= 2">
        วันที่ 2 เริ่มเวลา: <input
          v-model="taskStart2"
          type="datetime-local"
          id="time"
          name="birthdaytime"
        /><v-select
          v-model="taskTaotal2"
          cols="6"
          :items="items2"
          label="จำนวนชั่วโมง"
          dense
          outlined
        ></v-select>
      </div>
      <br />
      <div v-if="selected >= 3">
        วันที่ 3 เริ่มเวลา: <input
          v-model="taskStart3"
          type="datetime-local"
          id="time"
          name="birthdaytime"
        /><v-select
          v-model="taskTaotal3"
          cols="6"
          :items="items2"
          label="จำนวนชั่วโมง"
          dense
          outlined
        ></v-select>
      </div>
      <br />
      <div v-if="selected >= 4">
        วันที่ 4 เริ่มเวลา: <input
          v-model="taskStart4"
          type="datetime-local"
          id="time"
          name="birthdaytime"
        /><v-select
        v-model="taskTaotal4"
          cols="6"
          :items="items2"
          label="จำนวนชั่วโมง"
          dense
          outlined
        ></v-select>
      </div>
      <br />
      
      <!-- <br />
      <label for>วัน-เวลาสิ้นสุดงาน:</label>
      <br />
      <input v-model="taskEnd" type="datetime-local" id="time" name="birthdaytime" /> -->
    </v-col>

    
 <div class="text-center">
<v-btn
@click="insertToTaskphoto(taskDetail, taskLocation,taskStart1,taskStart2,taskStart3,taskStart4,taskTaotal1,taskTaotal2,taskTaotal3,taskTaotal4)"
        rounded
        color="primary"
        dark
      >
        ยืนยัน
      </v-btn></div>
  </v-container>
</template>

<script>
import firebase from '../forms/firebaseConfig'


var database = firebase.database()
var taskPhotoRef = database.ref('/taskphoto')
var mapRef = database.ref('/map')
var photographerRef = database.ref("/photographer");

export default {
  data: () => ({
     items: ["1", "2", "3", "4"],
    items2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    selected: null,
   taskDetail: '', 
   taskLocation: '',
   taskStart: '',
   taskEnd: '',
   price:{},
    priceTotal:'',
     taskStart1: "",taskStart2: "",taskStart3: "",taskStart4: "",taskTaotal1: "",taskTaotal2: "",taskTaotal3: "",taskTaotal4: "",
  }),
 methods: {
    location(lo){
        this.$router.push("/"+lo+"/location.vue");
    },
    insertToTaskphoto (taskDetail, taskLocation,taskStart1,taskStart2,taskStart3,taskStart4,taskTaotal1,taskTaotal2,taskTaotal3,taskTaotal4) {

photographerRef.orderByKey().equalTo(this.$route.params.key).on("value", (snapshot) => {
this.priceTotal = snapshot.val()[this.$route.params.key].typePhoto.price.price4
       let data = {
        taskDetail: taskDetail,
        taskLocation: this.$store.state.location,
        taskStart: {
          taskStart1,
          taskStart2,
          taskStart3,
          taskStart4,    
        },
         ratingTask: {
      rating:5,
      comment:''
    },
           price:{
          price1: this.priceTotal*taskTaotal1,
          price2: this.priceTotal*taskTaotal2,
          price3: this.priceTotal*taskTaotal3,
          price4: this.priceTotal*taskTaotal4,
        },
        taskTotal:{
taskTaotal1,
          taskTaotal2,
          taskTaotal3,
          taskTaotal4,    
        },
        taskType: 'งานแต่งงาน',
                 keyUser: this.$store.state.keyUserF ,
         keyPhoto:  this.$route.params.key,
                  statusTask: 'รอการตอบรับ',
                  notification: false

      }
      
      taskPhotoRef.push(data)
                  mapRef.push(this.$store.state.location)

      .then(() => {
         alert('จ้างช่างภาพเรียบร้อย รอช่างภาพที่คุณเลือก ยืนยันการรับงาน')
               window.history.go(-3)
            console.log(data);
            
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
           });

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