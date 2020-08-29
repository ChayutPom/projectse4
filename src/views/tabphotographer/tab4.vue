<template >
<div>
<photographer/>
    <v-card
      class="mx-auto"
      max-width="auto"
      outlined
     :key="keystatus" v-for="(tasks, keystatus) in task"
    >
    <div      v-if="tasks.statusTask == 'เสร็จสิ้น'">
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

    </div>
    </v-card>
    </div>
</template>

<script>
import photographer from '../function/photographer.vue';
import firebase from "../forms/firebaseConfig";
var database = firebase.database();
var taskRef = database.ref("/taskphoto");
var photograRef = database.ref("/photographer");
  export default {
  components: {
    photographer,
   
  },

  data: () => {
    return {
task:{},
keystatus:''
    
    };
  },
   methods: {
confirmTask(keystatus){


    photograRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
     var keyPhoto =Object.keys(snapshot.val())[0]
     console.log(keyPhoto);
     
taskRef.orderByKey().equalTo(keystatus).on("value", snapshot => {
 var keyTask =Object.keys(snapshot.val())[0]


              taskRef.child(keyTask).update({
    statusTask: 'ช่างภาพรับงาน',

   }); 
        });

  })

  


},
cancelTask(keystatus){





    photograRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
     var keyPhoto =Object.keys(snapshot.val())[0]
     console.log(keyPhoto);
     
taskRef.orderByKey().equalTo(keystatus).on("value", snapshot => {
 var keyTask =Object.keys(snapshot.val())[0]


              taskRef.child(keyTask).update({
    statusTask: 'ยกเลิกงาน',

   }); 
        });

  })

        
      

}
   },

    mounted() {

    photograRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
     var keyPhoto =Object.keys(snapshot.val())[0]
     console.log(keyPhoto);
     
taskRef.orderByChild("keyPhoto").equalTo(keyPhoto).on("value", snapshot => {
    // var key4 = Object.keys(snapshot.val())[0];
        this.task = snapshot.val();
          console.log(this.task);  
        
   }); 
        });

        
    
   

      

  }
  }
</script>