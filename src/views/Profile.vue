<template>
  <v-list>
    <v-container >
      <v-row align="center"
            justify="center">
            <v-col col="3" class=" ml-6">
      <v-avatar  color="indigo" height="90" width="90">
        <v-icon size="85" dark>mdi-account-circle</v-icon>
        
      </v-avatar></v-col >
      
      <v-col col="9" class=" mr-12">

      <p class=" title center " >{{users.firstname}} {{users.lastname}}</p></v-col >
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row 
            centered
        grow
        padless>
        <v-col col="6" class=" mt-2 ">
   <v-img   max-width="30px" max-height="30px" src="https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Fcash_icon-icons.com_51090.png?alt=media&token=ca110726-6584-4521-9fdd-a4b1a964fe71"></v-img>
        12312
        </v-col > 

          <v-col col="3"><v-btn class="ma-3 sm-12 center" outlined color="indigo">เติมเครดิต</v-btn></v-col > 

          <v-col col="3"><v-btn class="ma-3 sm-12 center" outlined color="indigo">ถอนเครดิต</v-btn> </v-col > 
      </v-row>
    </v-container>

    <v-list-item-group color="primary" v-for="(item, i) in items" :key="i">
      <a  :href="item.route">  <v-list-item  >
        <v-list-item-icon>
<v-img   max-width="40px" max-height="40px" :src="item.icon">
  <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate ></v-progress-circular>
                      </v-row>
                    </template>
</v-img>
          <!-- <v-icon v-text="item.icon"></v-icon> -->
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item></a>
    </v-list-item-group>
  </v-list>

</template> 

<script>
import firebase from "./forms/firebaseConfig";

// const db = firebase.firestore();
var database = firebase.database();
var userRef = database.ref("/userdata");
export default {
  data: () => {
    return {
      userdata: "",
      usersdata: {},
      firstname: "",
            email: "",
 name: "",
       users:{},


      items: [
        { title: "ข้อมูลส่วนตัว", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2F4288584andbusinessfinancepersonalportfolioprofileresume-115772_115741.png?alt=media&token=a4f382c1-5dfb-48b4-8a64-87e136ad6790" ,route:"/Personal.vue"},
        { title: "สร้างProfileช่างภาพ", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Fidcard_119573.png?alt=media&token=a32407f0-a535-4e92-9eaa-1a25a1cfb79a",route:"/addphotograf.vue" },
        { title: "สร้างProfile นางแบบ/นายแบบ", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Fuserrating-115845_115824.png?alt=media&token=626f93cc-7217-4ee6-a951-43262f53ba3d",route:"/addmodel.vue" },
        { title: "คะแนน", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Fawward-reward-medal-winner-win-badge_108516.png?alt=media&token=1eec7b7b-ba2d-4fdb-860b-490c83855367",route:"/Point.vue" },
        { title: "ลงขายสินค้า", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Fshopping-action-basket-shop-buy-add_108644.png?alt=media&token=fac2fb29-ebb6-44db-bfb8-c8b0200140c6",route:"/addproduct.vue" },
        { title: "ลงรีวิว", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Fstar_86960.png?alt=media&token=6c41839b-e875-47ed-ad43-9acd7ef53653",route:"/addreview.vue" },
        { title: "ตั้งค่า", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Fcogs_gear_setting_icon_127225.png?alt=media&token=c12dce00-752a-46f0-ad38-e380c03ac2a3" ,route:"/"}
      ],
    };
    
  },
  methods: {
// readEmployees(){
//   let employeesData = [];
//       db.collection("userdata")
//       .where('email','==',this.email)
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//            employeesData.push({
//               email: doc.data().email,
//           firstname: doc.data().firstname
//             });
//             console.log(doc.id, " => ", doc.data());

//               console.log(doc.data().firstname);
//           });

//           console.log(employeesData[0].email);
//           return employeesData
//         })
//         .catch((error) => {
//           console.log("Error getting documents: ", error);
//         });
// }


    },
  mounted() {


    userRef.on("value", snapshot => {

var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];

var data = snapshot.child(key).val();
      // console.log(data.email);

      if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
  // console.log(snapshot.val().firstname);
    
     var key2 = Object.keys(snapshot.val())[0];
console.log(key2);
  this.users = snapshot.val()[key2];
  console.log(this.users.email);
  
});
        
      }
      
}
      
    
    });
    
  }
};
</script>



