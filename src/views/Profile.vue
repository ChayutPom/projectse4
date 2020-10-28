<template>
  <v-list>
    <v-container >
      <v-row align="center"
            justify="center">
            <v-col col="3" class=" ml-6">
      <v-avatar  color="indigo" height="90" width="90">
   <v-img   max-width="90px" max-height="90px" :src="imgPro"></v-img>

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
        
        </v-col > 
          <!-- <v-col col="3"><v-btn class="ma-3 sm-12 center" outlined color="indigo">ถอนเครดิต</v-btn> </v-col >  -->

          <v-col col="3"><v-btn class="ma-3 sm-12 center" outlined color="indigo" @click="userSignOut()">ออกจากระบบ</v-btn></v-col > 

      </v-row>
    </v-container>
    
 <v-list rounded>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
             v-for="(item, i) in items" :key="i"
             :href="item.route"
          >
              <v-list-item-icon >
             <v-img   max-width="40px" max-height="40px" :src="item.icon"></v-img>

            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title  v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    

  </v-list>

</template> 

<script>
import firebase from "./forms/firebaseConfig";
var database = firebase.database();

var userRef = database.ref("/userdata");
// const db = firebase.firestore();

export default {
  data: () => {
    return {
      imgPro:'',
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
        { title: "ตั้งค่า", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Fcogs_gear_setting_icon_127225.png?alt=media&token=c12dce00-752a-46f0-ad38-e380c03ac2a3" ,route:""},
        // { title: "ออกจากระบบ", icon: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fprofile%2Farrow_entrance_exit_internet_log_out_security_icon_127059.png?alt=media&token=57d5f868-98ee-4c87-8137-ff9f9c28f64c" ,click: "userSignOut()"}

      ],
    };
    
  },
  methods: {
userSignOut() {
    this.$store.dispatch("userSignOut");
  }


    },
  mounted() {

console.log(this.$store.state.keyUser);
console.log(this.$store.state.keyUserF);
    this.users = this.$store.state.keyUser
    // this.imgPro   = this.users.profileImg[0]
    console.log(this.users);
    userRef.orderByKey().equalTo(this.$store.state.keyUserF).on("value", snapshot => { 
this.imgPro =snapshot.val()[this.$store.state.keyUserF].profileImg[0]

    }); 
  }
};
</script>



