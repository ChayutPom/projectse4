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

<v-flex xs12 class="form-wrapper"><v-col col="6" >
      <v-avatar  color="indigo" height="90" width="90">
   <v-img v-if="product.images == ''"  max-width="90px" max-height="90px" :src="imgPro" >
</v-img>
     <img v-if="product.images != ''" :src="product.images[0]" alt width="90px" />   
      </v-avatar></v-col >
      </v-flex>
      <input type="file"       accept="image/png, image/jpeg, image/bmp"
 @change="uploadImage" class="form-control" />

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

              <v-btn primary   @click="updateUser(updataFirstname,updateLastname,updatePhone,product.images)">แก้ไขข้อมูล </v-btn>
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
ii: 0,
imgPro:'',
      updataFirstname: '',
      updateLastname: '',
      updatePhone: '',
      users:{},
products: [],
imageData: null,
    uploadValue: 0,
    img: {},
product: {
      images: [],
    },
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
    
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = firebase
          .storage()
          .ref("products/" + Math.random() + "_" + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            console.log(snapshot);
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
              console.log(this.product.images);
            });
          }
        );
      }
    },
      updateUser(updataFirstname,updateLastname,updatePhone,image){
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
  console.log(image);
    userRef.child(key2).update({
    firstname: updataFirstname,
       lastname: updateLastname,
    phone: updatePhone,
    profileImg:image
  })
 
});
        
      }
}
})
 this.$store.dispatch("editUser", {
firstname: updataFirstname,
       lastname: updateLastname,
    phone: updatePhone,
      profileImg:image
    });
        
      },
    },
 mounted() {
userRef.on("value", snapshot => {
     this.users = this.$store.state.keyUser
      console.log(snapshot.val());
 this.imgPro   = this.users.profileImg[0]
      console.log(this.users);
    });
    
  }
};
</script>
