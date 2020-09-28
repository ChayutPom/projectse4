<template >
<div>
<photographer/>


    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">  
              <v-card
      class="mx-auto"
      max-width="auto"
      outlined
     :key="keystatus" v-for="(tasks, keystatus) in task"

            
            v-bind="attrs"
            v-on="on"
    >
    <div      v-if="tasks.statusTask == 'ช่างภาพรับงาน'">
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

        <!-- -------------------modal------------------------- -->

        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Photo</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
         
              <!-- <longdo-map 
   @load="test" 
   :zoom="10" 
   :lastViw="false"> 
  <longdo-map-marker             

            :location="this.task.taskLocation.locations"
      
        />    
</longdo-map> -->
        </v-card>
      </v-dialog>
    </v-row>
    </div>

</template>

<script>
import photographer from '../function/photographer.vue';
// import firebase from "../forms/firebaseConfig";
// import { LongdoMap ,LongdoMapMarker } from 'longdo-map-vue'
// LongdoMap.init('19d834440f9ee5958b68123c8a4c6d6b')

// var database = firebase.database();
// var taskRef = database.ref("/taskphoto");
// var photograRef = database.ref("/photographer");
  export default {
  components: {
    photographer,
    // LongdoMap,
    //  LongdoMapMarker 
  },

  data: () => {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
task:{},
keystatus:''
    
    };
  },
  methods:{
// test(map) {
//   this.map2 = map
//        var result = map.location();
//        console.log(result);
// // map.Event.bind('location', function() {
// //   var location = map.location();
// // console.log(location);
// // });
// // map.Event.bind('click', function() {
 
// // });
// map.Event.bind('overlayClick', function(overlay) {
//     console.log(overlay)
    
// });
//      },
  },
    mounted() {


//     photograRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
//      var keyPhoto =Object.keys(snapshot.val())[0]
//      console.log(keyPhoto);
     
// taskRef.orderByChild("keyPhoto").equalTo(keyPhoto).on("value", snapshot => {
//     // var key4 = Object.keys(snapshot.val())[0];
//         this.task = snapshot.val();
//           console.log(this.task);  
        
//    }); 
//         });   


  }
  }
</script>