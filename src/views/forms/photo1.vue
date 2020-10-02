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

    <v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field v-if="this.$store.state.location.locationData==null" label='สถานที่'  filled rounded dense v-model="taskLocation" @click="location('task')" ></v-text-field>
      <v-text-field v-if="this.$store.state.location.locationData!=null" :label='this.$store.state.location.locationData.subdistrict+this.$store.state.location.locationData.district+this.$store.state.location.locationData.province+this.$store.state.location.locationData.country+this.$store.state.location.locationData.postcode' solo ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      จำนวนคนในเฟรม
      <v-select solo :items="items" :menu-props="{ top: true, offsetY: true }" label="Label" v-model="taskNum"></v-select>
    </v-col>
    <button @click="insertToTaskphoto(taskDetail,taskLocation,taskNum,taskStart1,taskStart2,taskStart3,taskStart4,taskTaotal1,taskTaotal2,taskTaotal3,taskTaotal4)">Add</button>

  </v-container>
</template>

<script>
import firebase from './firebaseConfig'

var database = firebase.database()
var taskPhotoRef = database.ref('/taskphoto')
var photographerRef = database.ref("/photographer");

export default {
  data: () => ({
     items: ["1", "2", "3", "4"],
    items2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    selected: null,
   taskDetail: '', 
   taskStart: '',
   taskEnd: '',
   taskLocation: '',
      price:{},
    priceTotal:'',
   taskNum: '',
   subdistrict:'',
     taskStart1: "",taskStart2: "",taskStart3: "",taskStart4: "",taskTaotal1: "",taskTaotal2: "",taskTaotal3: "",taskTaotal4: "",
  }),
 methods: {
    location(lo){
        this.$router.push("/"+lo+"/location.vue");
    },
    insertToTaskphoto (taskDetail,taskLocation,taskNum,taskStart1,taskStart2,taskStart3,taskStart4,taskTaotal1,taskTaotal2,taskTaotal3,taskTaotal4) {



photographerRef.orderByKey().equalTo(this.$route.params.key).on("value", (snapshot) => {
this.priceTotal = snapshot.val()[this.$route.params.key].typePhoto.price.price3
   let data = {
        taskDetail: taskDetail,
         taskStart: {
          taskStart1,
          taskStart2,
          taskStart3,
          taskStart4,    
        },
        taskTotal:{
taskTaotal1,
          taskTaotal2,
          taskTaotal3,
          taskTaotal4,    
        },   price:{
          price1: this.priceTotal*taskTaotal1,
          price2: this.priceTotal*taskTaotal2,
          price3: this.priceTotal*taskTaotal3,
          price4: this.priceTotal*taskTaotal4,
        },

         taskLocation: this.$store.state.location,
         taskNum: taskNum,
         taskType: 'ภาพถ่ายบุคคล',
         keyUser: this.$store.state.keyUserF ,
         keyPhoto:  this.$route.params.key,
         statusTask: 'รอการตอบรับ',
         notification: false
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
 
    },
  
    
  },
  
  mounted () {
    taskPhotoRef.on('value', (snapshot) => {
      this.taskphoto = snapshot.val()
    })



  },
  

};
</script>