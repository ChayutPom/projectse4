<template >
<div>
<photographer/>

   <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
             <!-- <v-btn
   
            v-on="on"
            v-bind="attrs"
          ></v-btn> -->
            
            <v-card
      class="mx-auto"
      max-width="auto"
      outlined
     :key="keystatus" v-for="(tasks, keystatus) in task"
  
    >
    
    <div @click="select(keystatus)"  v-on="on"
            v-bind="attrs"   v-if="tasks.statusTask == 'ช่างภาพรับงาน'">
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
        <v-card :key="keylo" v-for="(tasks, keylo) in taskLo">
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                dark
                text
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
<v-card height="190" >
<v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
ประเภทงาน {{taskLo.taskType}}
สถานที่ {{taskLo[keylo].taskLocation.locationData.subdistrict}} {{taskLo[keylo].taskLocation.locationData.district}} {{taskLo[keylo].taskLocation.locationData.province}} {{taskLo[keylo].taskLocation.locationData.country}}

</v-card>





          <v-card      height="500"   >
<longdo-map 
   @load="test" 
   :lastViw="false"
> 
<longdo-map-marker             
            :icon= "{
    url: 'https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2F120454669_368181401020961_2346759943865085724_n.png?alt=media&token=aa8a5bba-ec33-41ef-9407-7af821e70c17',
  }"
            :location=" tasks.taskLocation.locations"
  />  
</longdo-map>

<v-footer padless fixed >
  เวลาเริ่มงาน: <br>
  จำนวน ชั่วโมง
            <v-spacer></v-spacer>
            
<v-btn class="ma-2"
        outlined
        color="indigo"
        @click="start(keylo)"
      >
      <div >  เริ่มงาน</div>
     
      </v-btn>  
  
    </v-footer>
    </v-card >   
  

         

        </v-card>

      </v-dialog>
    </v-row>
    </div>

</template>

<script>
import photographer from '../function/photographer.vue';
import firebase from "../forms/firebaseConfig";

import { LongdoMap , LongdoMapMarker  } from 'longdo-map-vue'
LongdoMap.init('19d834440f9ee5958b68123c8a4c6d6b')

var database = firebase.database();
var taskRef = database.ref("/taskphoto");
var photograRef = database.ref("/photographer");
var userRef = database.ref("/userdata");

  export default {
  components: {
    photographer,


    LongdoMap,
     LongdoMapMarker 
  },

  data: () => {
    return {
      btn:null,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      locationData:{},
task:{},
taskS:{},
taskLo:{},
keystatus:'',
    info: null,
      map:{},
    
    };
  },
  
  methods:{
  
     test(map) {
  this.map2 = map

       var result = map.location();

       console.log(result);

map.Event.bind('overlayClick', function(overlay) {
    console.log(overlay)
    
});




     },
     select(keystatus){
taskRef.orderByKey().equalTo(keystatus).on("value", snapshot => {
        this.taskLo = snapshot.val();
         
   }); 
   taskRef.orderByKey().equalTo(keystatus).on("value", snapshot => {
        this.taskS = snapshot.val();
         
   }); 

     },

     start(key){
       this.btn == "stop"
       var today = new Date();
       var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + 
            today.getSeconds();
            var dateTime = date+' '+time;

            console.log(dateTime);
            let data = {
              startTime:dateTime

      };
          taskRef.child(key).update({
data,
statusTask:'งานที่รอส่ง'
  })

   
     }


 },
    mounted() {

console.log(this.$store.state.keyUserF);
    photograRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
     var keyPhoto =Object.keys(snapshot.val())[0]
     console.log(keyPhoto);
taskRef.orderByChild("keyPhoto").equalTo(keyPhoto).on("value", snapshot => {
    // var key4 = Object.keys(snapshot.val())[0];
        this.task = snapshot.val();
        console.log(this.task);

        userRef.on("value", snapshot => {
        console.log(snapshot.val());
   });  
   }); 
        });   


  }
  }
</script>