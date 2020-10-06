<template>
  <div id="app">
    <v-app id="inspire">
      <v-carousel cycle height="200" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <!-- <ul>
        <li v-for="user_data in users" :key="user_data.uid_user = uid" >
          <h1 >{{user_data.email}}</h1>

        </li>
      </ul>-->

      <v-container fluid>
        <v-row>
          <v-col cols="4"  class="text-center">
            <v-btn class="ma-6" fab color="#90CAF9" href="photo.vue">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fhome%2F32officeicons-6_89731.png?alt=media&token=901526d1-2284-45b6-bb52-b3baf64ec249"
                aspect-ratio="1"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-btn>
            <p>Photo</p>
          </v-col>

          <v-col cols="4"  class="text-center">
            <v-btn class="ma-6" medium fab color="#B39DDB" href="model.vue">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fhome%2Favatar_people_person_profile_user_woman_icon_123358.png?alt=media&token=32945597-98a6-4428-8568-37a191cf5427"
                aspect-ratio="1"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-btn>
            <p class="text-center">model</p>
          </v-col>

          <v-col cols="4"  class="text-center">
            <v-btn class="ma-6" medium fab color="#BBDEFB" href="review.vue">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fhome%2F1-61_icon-icons.com_68882.png?alt=media&token=ffd1e780-6430-4e50-aec9-a86392be8fc7"
                aspect-ratio="1"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-btn>
            <p class="text-center">review</p>
          </v-col>

          <v-col cols="4"  class="text-center">
            <v-btn class="ma-6" medium fab color="indigo" href="shop.vue">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fhome%2Fshop-icon_34368.png?alt=media&token=cc72c297-6897-422f-a546-11d854d09714"
                aspect-ratio="1"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-btn>
            <p class="text-center">shop</p>
          </v-col>

          <v-col cols="4"  class="text-center" v-if="users.status_photogra == true" >
            <v-badge :content="noti" :value="noti >0" color="red" overlap>
              <v-btn class="ma-6" medium fab color="#80CBC4" href="tab1.vue" >
                <v-img
                  src="https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fhome%2Fphotographermale_101118.png?alt=media&token=5f5279f9-feb3-46ad-89a0-03047d2c2f23"
                  aspect-ratio="1"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-btn>
            </v-badge>

            <p class="text-center">photographer</p>
          </v-col>

          <v-col cols="4"  class="text-center" v-if="users.status_model == true">
            <v-btn class="ma-6" medium fab color="#FFAB91" href="/tabmodel1">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Fhome%2Fperson_target_user_icon_127193.png?alt=media&token=f7e308b6-45fd-4476-82b0-e08829ba23ab"
                aspect-ratio="1"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-btn>
            <p class="text-center">Modeling</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <h2 BOLD>ช่างภาพแนะนำ</h2>
      </v-container>
      <v-sheet class="mx-2" max-width="auto">
        <v-slide-group>
          <v-slide-item :key="key" v-for="(photogra, key) in photographers">
            <v-card class="mx-1 my-2" max-width="200">
              <v-img height="155" max-width="100%" :src="photogra.img[0]"></v-img>

              <v-card>
                {{photogra.name}}
                <v-row align="center" class="mx-2">
                  <v-rating :value="5" dense half-increments readonly size="10"></v-rating>
                  <!-- <div class="grey--text ml-4">{{photos.star}} ({{photos.num}})</div> -->
                </v-row>
              </v-card>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <v-container>
        <h2 BOLD>แบบแนะนำ</h2>
      </v-container>
      <v-sheet class="mx-1 my-2" max-width="auto">
        <v-slide-group>
          <v-slide-item :key="key" v-for="(model, key) in models">
            <v-card class="mx-1 my-auto" max-width="200">
              <v-img height="155" max-width="100%" :src="model.img[0]"></v-img>

              <v-card>
                {{model.name}}
                <v-row align="center" class="mx-1">
                  <v-rating :value="4.5" color="amber" dense half-increments readonly size="10"></v-rating>
                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>
              </v-card>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <!-- <v-container>
        <h2 BOLD>รีวิวแนะนำ</h2>
      </v-container>
      <v-sheet class="mx-1 my-2" max-width="auto">
        <v-slide-group>
          <v-slide-item :key="key" v-for="(review, key) in reviews">
            <v-card class="mx-1 my-auto" max-width="200">
              <v-img height="155" max-width="auto" :src="review.img[0]"></v-img>

              <v-card>
                {{review.titel}}
                <v-row align="center" class="mx-1">
                  <v-rating :value="4.5" color="amber" dense half-increments readonly size="10"></v-rating>
                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>
              </v-card>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet> -->
    </v-app>
  </div>
</template>

<script>
import firebase from "./forms/firebaseConfig";
var database = firebase.database();
var photographerRef = database.ref("/photographer");
var modelRef = database.ref("/model");
var reviewRef = database.ref("/review");
var taskPhotoRef = database.ref('/taskphoto')

// var userRef = database.ref("/userdata");
// const db = firebase.firestore();

export default {
  data: () => {
    return {
      photographers: {},
      models: {},
      reviews: {},
      users: {},
      name: "",
      realname: "",
      email: "",
      phone: "",
      introduce: "",
      address: "",
      img: "",
      uid_user: "",
      uid: "",
      messages: 0,
      show: false,
      notification:0,

      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      iconmenu: [
        "mdi-camera",
        "mdi-star-circle",
        "mdi-star-circle",
        "mdi-star-circle",
      ],
      photos: [
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "ABC",
          star: 5.0,
          num: "243",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "asd",
          star: 5.0,
          num: "212",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "Photossss",
          star: 4.5,
          num: "234",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "tooos",
          star: 4.5,
          num: "123",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "sdfsdf",
          star: 4,
          num: "222",
        },
      ],

      items: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/slid%2Fphotographer-th.jpg?alt=media&token=b2854541-9549-4810-b597-22170bdccbac",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/slid%2Fph-th.jpg?alt=media&token=bd107ace-afa2-4686-93f8-70a65a762607",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/slid%2Fcv-2-1024x533.jpg?alt=media&token=07710db7-b6e8-4e43-8323-729d99589be4",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/slid%2F1578380945550012550.jpg?alt=media&token=ebeca62f-8927-45d1-92c2-6a79d608885d",
        },
      ],
    };
  },
  method:{
// noticlear(){
//   console.log('sasa');
//   taskPhotoRef.orderByChild("keyPhoto").equalTo(this.photographer).on("value", (snapshot) => {
//    taskPhotoRef.orderByKey(Object.keys(snapshot.val())[0]).update({
// notification: true,
//   })
//    });

// //   userRef.child(this.$store.state.keyUserF).update({
// // status_model: true,
// //   })
// }
  },
   computed: {
    noti: function () {
         photographerRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", (snapshot) => {
      this.photographer = Object.keys(snapshot.val())[0]
console.log(this.photographer);

taskPhotoRef.orderByChild("keyPhoto").equalTo(this.photographer).on("value", (snapshot) => {
console.log(snapshot.val());
  taskPhotoRef.orderByChild("notification").equalTo(false).on("value", (snapshot) => {
    this.notification = snapshot.numChildren()
    console.log(this.notification);
     });
   });
    });

return this.notification
      // if (this.searchQuery) {
        
      //   return this.dataF.filter((item) => {
      //     return this.searchQuery
      //       .toLowerCase()
      //       .split(" ")
      //       .every((v) => item.email.toLowerCase().includes(v));
      //   });
      // } else {
      //   // console.log(this.photographers);
      //   return this.dataF;
      // }
    },

  },
  mounted() {
    console.log(this.$store.state.keyUser);
    console.log(this.$store.state.keyUserF);
    photographerRef.on("value", (snapshot) => {
      this.photographers = snapshot.val();
      this.users = this.$store.state.keyUser;

    });
    modelRef.on("value", (snapshot) => {
      this.models = snapshot.val();
      this.users = this.$store.state.keyUser;
    });
    reviewRef.on("value", (snapshot) => {
      this.reviews = snapshot.val();
      this.users = this.$store.state.keyUser;
    });

       
  },
};
</script>
