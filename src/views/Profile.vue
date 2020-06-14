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

      <p class=" title center " > {{users.firstname}}  {{users.lastname}}</p></v-col >
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row 
            centered
        grow
        padless>
        <v-col col="4" class=" mt-5">

    <v-icon  >mdi-currency-btc</v-icon>15000  
        </v-col > 

          <v-col col="4"><v-btn class="ma-3 sm-12 center" outlined color="indigo">เติมเครดิต</v-btn></v-col > 

          <v-col col="4"><v-btn class="ma-3 sm-12 center" outlined color="indigo">ถอนเครดิต</v-btn> </v-col > 
      </v-row>
    </v-container>

    <v-list-item-group color="primary" v-for="(item, i) in items" :key="i">
      <a  :href="item.route">  <v-list-item  >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
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
      users: [],
      userdata: "",
      firstname: "",
            email: "",
 name: "",

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
var key = Object.keys(snapshot.val())[0];
console.log(key);


      var data = snapshot.child(key).val();
      this.users = data;
      
      // if (snapshot.val() == "test1@gmail.com") {
      //     var email = snapshot.val().email;
      //     console.log('username:', email)
      //   }
     
    //  let employeesData = [];
    //   db.collection("userdata")
    //   .where('email','==',this.email)
    //     .get()
    //     .then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //        employeesData.push({
    //           email: doc.data().email,
    //       firstname: doc.data().firstname
    //         });
    //         console.log(doc.id, " => ", doc.data());

    //           console.log(doc.data().firstname);
    //       });

    //       console.log(employeesData[0].email);
    //       return employeesData
    //     })
    //     .catch((error) => {
    //       console.log("Error getting documents: ", error);
    //     });
    
    });
    
  }
};
</script>



