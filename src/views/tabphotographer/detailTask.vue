<template>
  <v-container fluid >
    <center>
      <h2>รายละเอียดงาน</h2>
    </center>
    <br />

    <v-col cols="12" >
      รายละเอียดงาน
      <v-textarea solo   :label="this.task.taskDetail"
></v-textarea>
    </v-col>

    <!-- <v-col cols="12" >
      <label for>วัน-เวลาเริ่มงาน:</label>

       <v-text-field solo  :label="this.task.taskStart"></v-text-field>
      <br />
      <label for>วัน-เวลาสิ้นสุดงาน:</label>
      <br />
      <v-text-field solo  :label="this.task.taskEnd"></v-text-field>
    </v-col> -->

    <v-col cols="12" >
      สถานที่
      <v-text-field solo  :label="this.task.taskLocation.locationData.subdistrict+' '+ this.task.taskLocation.locationData.district+' '+ this.task.taskLocation.locationData.province"></v-text-field>

      <longdo-map 
   @load="test" 
   :zoom="10" 
   :lastViw="false"> 
  <longdo-map-marker             
            :location="this.task.taskLocation.locations"
      
        />    
</longdo-map>

    </v-col>

    <v-col v-if="this.task.taskType=='ภาพถ่ายบุคคล'" cols="12" >
      จำนวนคนในเฟรม
      <v-text-field solo  :label="this.task.taskNum"></v-text-field>
    </v-col>

<v-col v-if="this.task.taskType=='รับปริญญา'" cols="12" >
      ชื่อมหาวิทยาลัย
      <v-text-field solo  :label="this.task.taskLocationName"></v-text-field>
    </v-col>

    <v-col v-if="this.task.taskType=='รับปริญญา'" cols="12" >
      จำนวนบัณฑิตในเฟรม
      <v-text-field solo  :label="this.task.taskNum"></v-text-field>
    </v-col>

    <v-col v-if="this.task.taskType=='สินค้า/อาหาร'" cols="12" >
      จำนวนสินค้า
      <v-text-field solo  :label="this.task.taskNum"></v-text-field>
    </v-col>

<!-- <v-row>
  <v-col cols="12" >
    <div class="text-center">
      <v-btn rounded color="primary" dark>Rounded Button</v-btn>
    </div></v-col>
   <v-col cols="12" > <div class="text-center">
      <v-btn rounded color="primary" dark>Rounded Button</v-btn>
    </div></v-col>
</v-row> -->
  </v-container>

  

</template>
<script>
import firebase from "../forms/firebaseConfig";
import { LongdoMap ,LongdoMapMarker } from 'longdo-map-vue'
LongdoMap.init('19d834440f9ee5958b68123c8a4c6d6b')
var database = firebase.database();
var taskRef = database.ref("/taskphoto");


export default {
  components: {    
       LongdoMap,
     LongdoMapMarker 
    },
      data: () => {
    return { 
         info: null,
      map:{},
 markers: [
      ],
task:{},
  dialog: false,
     };
  },
  methods:{
test(map) {
  this.map2 = map
       var result = map.location();
       console.log(result);
// map.Event.bind('location', function() {
//   var location = map.location();
// console.log(location);
// });
// map.Event.bind('click', function() {
 
// });
map.Event.bind('overlayClick', function(overlay) {
    console.log(overlay)
    
});
     },
  },
  mounted() {
      taskRef.orderByKey().equalTo(this.$route.params.keytask).on("value", snapshot => {
          this.task = snapshot.val()[this.$route.params.keytask]
          
 }); 


  },
  
}
</script>