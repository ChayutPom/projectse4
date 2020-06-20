<template>
<v-container fluid pa-0>
        <form >
          <v-layout row wrap>
            <v-layout column align-center justify-center pa-3 mt-2>
              <v-flex xs12 mb-3 >
                <div class="login-wrapper text-xs-center">
                  <div class="display-1 font-weight-black">ข้อมูลส่วนตัว</div>
                </div>
              </v-flex>

              <v-flex xs12 class="form-wrapper">
                <v-text-field
                  full-width
                  single-line
                  :label="users.firstname"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  name="firstname"
                  type="firstname"
                  id="firstname"
                  v-model="updataFirstname"
                  editable
                ></v-text-field>

                <v-text-field
                  full-width
                  single-line
                  :label="users.lastname"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  name="lastname"
                  type="lastname"
                  id="lastname"
                  v-model="updateLastname"
                  editable
                ></v-text-field>

                <v-text-field
                  full-width
                  single-line
                  :label="users.phone"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  name="phone"
                  type="phone"
                  id="phone"
                  v-model="updatePhone"
                  editable
                ></v-text-field>

              </v-flex>

              <br />

              <v-btn primary   @click="updateUser(updataFirstname,updateLastname,updatePhone)">แก้ไขข้อมูล </v-btn>
            </v-layout>
          </v-layout>
        </form>
      </v-container>

</template> 

<script>
import firebase from "../forms/firebaseConfig";

// const db = firebase.firestore();
var database = firebase.database();
var userRef = database.ref("/userdata");
export default {
  data: () => {
    return {

      updataFirstname: '',
      updateLastname: '',
      updatePhone: '',
      users:{},

      items: [
        { title: "ข้อมูลส่วนตัว", icon: " fa-id-badge" ,route:"/Personal.vue"},
        { title: "สร้างProfileช่างภาพ", icon: "fa-address-card",route:"/addphotograf.vue" },
        { title: "สร้างProfile นางแบบ/นายแบบ", icon: "fa-address-card",route:"/addmodel.vue" },
        { title: "คะแนน", icon: " fa-coins",route:"/Point.vue" },
        { title: "ลงขายสินค้า", icon: "fa-cart-plus",route:"/addproduct.vue" },
        { title: "ลงรีวิว", icon: " fa-star",route:"/addreview.vue" },
        { title: "ตั้งค่า", icon: " fa-cog" ,route:"/"}
      ],
    };
    
  },
  methods: {

      updateUser(updataFirstname,updateLastname,updatePhone){
          
          firebase.database().ref(userRef).once('value', function(snapshot) {
    // var data = snapshot.val()
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];
var data = snapshot.child(key).val();
 if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
  // console.log(snapshot.val().firstname);
    
     var key2 = Object.keys(snapshot.val())[0];
console.log(snapshot.val()[key2].email);


  // this.users = snapshot.val()[key2];
  // console.log(this.users);

  if(updataFirstname==''){
              updataFirstname = snapshot.val()[key2].firstname;          
          }
           if(updateLastname == ''){
updateLastname = snapshot.val()[key2].lastname;        
          }
           if(updatePhone == ''){
updatePhone = snapshot.val()[key2].phone ;        
          }
  
    userRef.child(key2).update({
    firstname: updataFirstname,
       lastname: updateLastname,
    phone: updatePhone
  })
});
        
      }

}

})

        
      },



    },
 mounted() {

userRef.on("value", snapshot => {

var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];

var data = snapshot.child(key).val();
      // console.log(data.email);

      if(data.email == firebase.auth().currentUser.email){
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
  // console.log(snapshot.val().firstname);
    
     var key2 = Object.keys(snapshot.val())[0];
  this.users = snapshot.val()[key2];

  // console.log(this.users);
  
  
});
        
      }
      
}
      
    
    });
    
  }
};
</script>



