<template>
  <v-card>
<sctab/>

    <v-card class="mx-auto" max-width="auto" outlined
         :key="keystatus" v-for="(tasks, keystatus) in task"
>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="font-weight-bold mb-2">{{tasks.taskType}}</div>
          <div v-if="tasks.taskType != 'model'" ><v-list-item-title  class="mb-1" >ช่างภาพที่คุณเลือก : {{photographer[tasks.keyPhoto].name}}</v-list-item-title></div>
          <!-- <div v-if="tasks.taskType == 'model'"><v-list-item-title class="mb-1" >Modelที่เลือก : {{tasks.keyModel}}</v-list-item-title></div> -->

<!-- :href="'/schedule/PrivateChat/' + tasks.keyUser" -->
              
          <v-list-item-subtitle>สถานะงาน : {{tasks.statusTask}}</v-list-item-subtitle>
          <v-btn     @click="chat(tasks.keyPhoto,tasks.keyModel,tasks)"    >chat</v-btn>

        </v-list-item-content>
        
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>




       <v-stepper  vertical>
      <v-stepper-step step="1"  :complete="tasks.statusTask == 'รอการตอบรับ'">
        รอช่างภาพตกลง
        
      </v-stepper-step>
  
      <!-- <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content> -->
  
      <v-stepper-step step="2" :complete="tasks.statusTask == 'ช่างภาพรับงาน'">
        
         <!-- <v-btn
        tile
        color="success"
      >
        <v-icon left>
          mdi-pencil
        </v-icon>
ชำระเงิน      </v-btn> -->

 <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
        :retain-focus="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            @click="asd(keystatus)"
          >
            ชำระเงิน
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="headline grey lighten-2">
          จำนวนเงินที่ต้องชำระ


          
          </v-card-title>
  
          <v-card-text>
            {{price1}}
            {{price2}}
            {{price3}}
            {{price4}}
         </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              ยกเลิก
            </v-btn>
             <v-btn
              color="primary"
              text
              @click="dialog = false,pay(keystatus)"
            >
              จ่ายเงิน
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>



</v-stepper-step>
         
      <v-stepper-content step="2" >
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>



      </v-stepper-content>
  
      <!-- <v-stepper-step :rules="[() => false]" step="3">
        Ad templates
        <small>Alert message</small>
      </v-stepper-step> -->
  
     
  
      <v-stepper-step  step="3" :complete="tasks.statusTask == '3'"><v-btn
        tile
        color="success"
      >
        <v-icon left>
          mdi-pencil
        </v-icon>
ดำเนินการ      </v-btn></v-stepper-step>
  
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      </v-stepper-content>











      <v-stepper-step step="4" :complete="tasks.statusTask == '4'"> <div class="text-center">
      <v-bottom-sheet
        v-model="sheet"
        persistent
        :retain-focus="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
            @click="end(keystatus,tasks.keyPhoto)"
          >
            เสร็จสิ้น
          </v-btn>
        </template>
        <v-sheet
          class="text-center"
          height="400px"
        >
          <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheet = !sheet"
          >
            close
          </v-btn>
          <div class="py-3">
ให้คะแนนช่างภาพ
   <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
          ></v-rating>
            


                  <v-textarea
                
            label= "แสดงความคิดเห็น"
            auto-grow
            outlined
            rows="3"
            row-height="25"
            shaped
            v-model="comment"
            editable
          > </v-textarea>
ความคิดเห็นของคุณ 
          <!-- <v-textarea
          v-if="taskRate!=null"
          :label=  taskRate
            auto-grow
            outlined
            rows="3"
            row-height="25"
            shaped
            v-model="comment"
          > </v-textarea> -->
             </div>
              <v-btn
            class="mt-6"
            text
            color="error"
            @click="confrim(comment,rating,endTask,keyPhoto)"
    >
            ส่ง
          </v-btn>

             <v-btn
            class="mt-6"
            text
            color="error"
  :href="'/imageTask/'+endTask"          >
            ดูรูป
          </v-btn>
        </v-sheet>
      </v-bottom-sheet>
    </div></v-stepper-step>
  
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      </v-stepper-content>
    </v-stepper>
    </v-card>

   
<br>

  
  </v-card>
</template>



<script>
import sctab from './sctab.vue';
import firebase from "./forms/firebaseConfig";
var database = firebase.database();

var userRef = database.ref("/userdata");
var taskRef = database.ref("/taskphoto");
var modelRef = database.ref("/model");
var photographerRef = database.ref("/photographer");
var chatRoomRef = database.ref("/chatRoom");
export default {
    components: {
    sctab,
   
  },
  data() {
    return {
      total:0,
      ratePhoto: 0,
      taskRate: null,
      // taskStar: 5,
      comment:null,
      price1:'',
      price2:'',
      price3:'',
      price4:'',
      rating: 5,
      keyclick:'',
      dialog: false,
      photographer:{name: '',},
     endTask   : '',
    
                sheet: false,
tasks:{},
      task:{},
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };

  },



  
methods: {



  asd(a){
console.log(a);
 taskRef.child(a).update({
    statusTask: 'ช่างภาพรับงาน',

   }); 
console.log(this.task[a]);
console.log(this.task[a].price.price1);
this.price1 =this.task[a].price.price1
this.price2 =this.task[a].price.price2
this.price3 =this.task[a].price.price3
this.price4 =this.task[a].price.price4

this.taskStart1 = this.task[a].taskStart.taskStart1
this.taskStart2 = this.task[a].taskStart.taskStart2
this.taskStart3 = this.task[a].taskStart.taskStart3
this.taskStart4 = this.task[a].taskStart.taskStart4

 
  },
end(keystatus,photo){
console.log(photo);
  console.log(keystatus);
  this.keyPhoto = photo
  this.endTask = keystatus

   taskRef.orderByKey().equalTo(this.endTask).on("value", snapshot => {
      
        this.taskRate = snapshot.val()[this.endTask].ratingTask.comment;
this.rating = snapshot.val()[this.endTask].ratingTask.rating;
   }); 
}, 
  pay(keystatus){
    console.log(keystatus);
     taskRef.child(keystatus).update({
    statusTask: 'ช่างภาพรับงาน',

   }); 
  },
  confrim(comment,rating,endTask,keyPhoto){
console.log(keyPhoto);
console.log(endTask);
taskRef.orderByChild("keyPhoto").equalTo(keyPhoto).on("value", snapshot => {
  this.commentF = snapshot.val()
  console.log(this.commentF[endTask].ratingTask.comment);
  console.log(snapshot.numChildren());
this.num = snapshot.numChildren()
var i =0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
  var key = Object.keys(snapshot.val())[i];
  this.total = this.total + snapshot.val()[key].ratingTask.rating 
}
console.log(this.total);
// taskRef.orderByKey().equalTo(endTask).on("value", snapshot => {

// console.log(snapshot.val());

console.log(this.total);
this.ratePhoto = this.total /this.num
console.log(this.ratePhoto);

photographerRef.child(keyPhoto).update({
    ratingPhoto: {
      ratePhoto:this.ratePhoto,
      num:this.num
    }
  })
  this.total = 0
  // }); 
}); 


taskRef.child(endTask).update({
    ratingTask: {
      rating:rating,
      comment:comment
    }
  })

  },

chat(keyPhoto,keyModel,tasks){
  console.log(tasks);
  console.log(keyPhoto);
  console.log(keyModel);
  // =======================================================================
  if(keyPhoto==null){
    console.log('a');
    modelRef.orderByKey().equalTo(keyModel).on("value", snapshot => {
      var keyM =Object.keys(snapshot.val())
      console.log(snapshot.val()[keyM].keyUser);
      var key123 = snapshot.val()[keyM].keyUser;
          // this.$router.push('/schedule/PrivateChat/' + snapshot.val()[keyM].keyUser)
        userRef.on("value", snapshot => {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
      if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
     var key2 = Object.keys(snapshot.val())[0];
    chatRoomRef.on("value", snapshot => {
var i=0
var id;
console.log(snapshot.val());
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
      console.log(data.id1);
      console.log(key2);
      if(data.id1 == key2){
 id = 1    
      }     else { 
 id =2    
}
}  
if(id == 1 ){
console.log('5555555');
}else if(id == 2 ){
 userRef.on("value", snapshot => {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
      if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
     var key2 = Object.keys(snapshot.val())[0];
    chatRoomRef.on("value", snapshot => {
var i=0
var id;
console.log(snapshot.val());
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
      console.log(data.id1);
      console.log(key2);
      if(data.id1 == key2){
 id = 1    
      }     else { 
 id =2    
}
}  

if(id == 1 ){
console.log('5555555');
}else {
let data = {
        id1:  key2,
        id2: key123,
      }
      chatRoomRef.push(data)
}
    });
});    
      }     
}  
    });
}
    });
});    
      }     
}  
    });
         }); 
  }else{ 
    console.log('b');
    photographerRef.orderByKey().equalTo(keyPhoto).on("value", snapshot => {
      console.log(snapshot.val());
      var keyP =Object.keys(snapshot.val())
      var keyUser = snapshot.val()[keyP].keyUser
//       let data = {
//         id1:  keyUser,
//         id2: tasks.keyUser,
//       }
// chatRoomRef.push(data)

chatRoomRef.on("value", snapshot => {

 var i=0
 var check
            for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
            var key = Object.keys(snapshot.val())[i];
            
            var data = snapshot.child(key).val();
            
                  if((data.id1 == keyUser && data.id2 == tasks.keyUser) || (data.id1 ==  tasks.keyUser && data.id2 ==  keyUser)){
     check = 1
              
                  }else{
                    check = 2
                    
                    // this.createChatroom(keyP,keyUser,tasks);
    /////////////สร้างห้องแชท
 
  
                  }
           

            }

            if(check == 1){
console.log('sds');
            }else{
   this.$router.push('/schedule/PrivateChat/' + keyUser)
     let data = {
        id1:  keyUser,
        id2: tasks.keyUser,
      }
chatRoomRef.push(data)
            }
            });
            

  //  var keyP =Object.keys(snapshot.val())
  //     console.log(snapshot.val()[keyP].keyUser);
  //   this.$router.push('/schedule/PrivateChat/' + snapshot.val()[keyP].keyUser)
  //   /////////////สร้างห้องแชท
  //    let data = {
  //       id1:  snapshot.val()[keyP].keyUser,
  //       id2: tasks.keyUser,
  //     }
      
  //     chatRoomRef.push(data)


 
 


      }); 
       
         
  }
},
//  createChatroom(keyP,keyUser,tasks){
//    console.log('sd');
//         let data = {
//         id1:  keyUser,
//         id2: tasks.keyUser,
//       }
// chatRoomRef.push(data)
//  }
},
  mounted() {
console.log(this.$store.state.keyUser);
console.log(this.$store.state.keyUserF);

taskRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
      
        this.task = snapshot.val();
          console.log(this.task);  
          this.users =this.$store.state.keyUserF
    
      photographerRef.on("value", snapshot => {
  this.photographer= snapshot.val()
console.log(this.photographer);
    });
   }); 


  }
};
</script>