<template >
<div>
<photographer/>

งานใหม่
           <v-card
      class="mx-auto"
      max-width="auto"
      outlined
     :key="keystatus" v-for="(tasks, keystatus) in taskwait"
    >
    <div  >
      <v-list-item three-line :href="'/detailTask.vue/' + keystatus">
        <v-list-item-content>
          <div class=" mb-4">{{user.firstname}} {{user.lastname}}</div>
          <v-list-item-title class="headline mb-1"> ประเภทงาน{{tasks.taskType}}</v-list-item-title>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
    
   
    </div>
    <v-btn
        rounded
        color="primary"
        dark
        @click="cancelTask(keystatus)"
      >
        ยกเลิก
      </v-btn>
       <v-btn
        rounded
        color="primary"
        dark
       @click="confirmTask(keystatus)"
      >
        รับงาน
      </v-btn>
    </v-card>

รอลูกค้าชำระเงิน
   
           <v-card
      class="mx-auto"
      max-width="auto"
      outlined
     :key="key" v-for="(tasks, key) in taskpay"
     :href="'/detailTask.vue/' + key"
    >
    <div >
      <v-list-item three-line>
        <v-list-item-content>
          <div class=" mb-4">{{user.firstname}} {{user.lastname}}</div>
          <v-list-item-title class="headline mb-1"> ประเภทงาน{{tasks.taskType}}</v-list-item-title>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>

    </div>
    </v-card>
    
         <v-footer padless fixed > <v-col cols="12" > <div class="text-center">
      <v-btn rounded color="primary" dark>ค้นหางาน</v-btn>
    </div></v-col></v-footer>

    </div>
</template>

<script>
import photographer from '../function/photographer.vue';
import firebase from "../forms/firebaseConfig";
var database = firebase.database();
var userRef = database.ref("/userdata");
var taskRef = database.ref("/taskphoto");
var photograRef = database.ref("/photographer");
var taskPhotoRef = database.ref("/taskphoto");

  export default {
  components: {
    photographer,
   
  },

  data: () => {
    return {
task:{},
taskpay:{},
taskwait:{},
keystatus:'',
 dialog: false,
 keyUser: '',
 user: ''
    
    };
  },
   methods: {
confirmTask(keystatus){
            console.log(keystatus);

      firebase.database().ref(userRef).once('value', function(snapshot) {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
 if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {

     var key2 = Object.keys(snapshot.val())[0];
console.log(snapshot.val()[key2].email);
    photograRef.orderByChild("keyUser").equalTo(key2).on("value", snapshot => {
     var key3 =Object.keys(snapshot.val())[0]
     console.log(key3);
     
taskRef.orderByKey().equalTo(keystatus).on("value", snapshot => {
 var key4 =Object.keys(snapshot.val())[0]


              taskRef.child(key4).update({
    statusTask: 'รอชำระเงิน',

   }); 
        });

  })
});
        
      }

}

})
},
cancelTask(keystatus){
            console.log(keystatus);

      firebase.database().ref(userRef).once('value', function(snapshot) {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
 if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {

     var key2 = Object.keys(snapshot.val())[0];
console.log(snapshot.val()[key2].email);
    photograRef.orderByChild("keyUser").equalTo(key2).on("value", snapshot => {
     var key3 =Object.keys(snapshot.val())[0]
     console.log(key3);
     
taskRef.orderByKey().equalTo(keystatus).on("value", snapshot => {
 var key4 =Object.keys(snapshot.val())[0]


              taskRef.child(key4).update({
    statusTask: 'ยกเลิกงาน',

   }); 
        });

  })
});
        
      }

}

})
},
detailTask(){
console.log('sd');
},

selectJob(){
this.$router.push('/selectJob')

}
   },

    mounted() {

    photograRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
     var keyPhoto =Object.keys(snapshot.val())[0]
     console.log(keyPhoto);
     
taskRef.orderByChild("keyPhoto").equalTo(keyPhoto).on("value", snapshot => {
    // var key4 = Object.keys(snapshot.val())[0];
    this.task = snapshot.val()
    
taskRef.orderByChild("statusTask").equalTo('รอชำระเงิน').on("value", snapshot => {
  this.taskpay = snapshot.val()
console.log(snapshot.val());
}); 
taskRef.orderByChild("statusTask").equalTo('รอการตอบรับ').on("value", snapshot => {
    this.taskwait = snapshot.val()

console.log(snapshot.val());

}); 
              var i=0
            for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
              var key = Object.keys(snapshot.val())[i];
var keyU = snapshot.val()[key].keyUser
                         taskPhotoRef.child(Object.keys(snapshot.val())[i]).update({
notification: true,
  })

           userRef.orderByKey().equalTo(snapshot.val()[key].keyUser).on("value", snapshot => {
             this.user = snapshot.val()[keyU]
             console.log(snapshot.val()[keyU].firstname);
                          console.log(snapshot.val()[keyU].lastname);
})
    
            }
   }); 

        });
    

    

  }
  }
</script>