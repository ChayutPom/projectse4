<template>
  <div id="app">
    <v-app id="inspire">
      <v-carousel cycle height="170" hide-delimiter-background show-arrows-on-hover>
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
      </ul> -->
      

      <v-container fluid>
        <v-row>
          <v-col>
            <v-btn class="ma-6" outlined medium fab color="indigo" href="photo.vue">
              <v-icon>mdi-camera</v-icon>
            </v-btn>
            <p class="text-center">Photo</p>
          </v-col>

          <v-col>
            <v-btn class="ma-6" outlined medium fab color="indigo" href="model.vue">
              <v-icon>fa-female</v-icon>
            </v-btn>
            <p class="text-center">model</p>
          </v-col>

          <v-col>
            <v-btn class="ma-6" outlined medium fab color="indigo" href="review.vue">
              <v-icon>fa-star</v-icon>
            </v-btn>
            <p class="text-center">review</p>
          </v-col>

          <v-col>
            <v-btn class="ma-6" outlined medium fab color="indigo" href="shop.vue">
              <v-icon>fa-store</v-icon>
            </v-btn>
            <p class="text-center">shop</p>
          </v-col>

          <v-col>
            <v-btn class="ma-6" outlined medium fab color="indigo" href="photographer.vue">
              <v-icon>fa-images</v-icon>
            </v-btn>
            <p class="text-center">photographer</p>
          </v-col>

          <v-col>
            <v-btn class="ma-6" outlined medium fab color="indigo" href="Modeling.vue">
              <v-icon>fa-image</v-icon>
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
          <v-slide-item :key="key" v-for="(photographer, key) in photographers">
            <v-card class="mx-1 my-2" max-width="200">
              <v-img height="155" max-width="100%" :src="photographer.img"></v-img>

              <v-card>
                {{photographer.name}}
                <v-row align="center" class="mx-2">
                  <v-rating :value="5" dense half-increments readonly size="10"></v-rating>
                  <div class="grey--text ml-4">{{photos.star}} ({{photos.num}})</div>
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
              <v-img height="155" max-width="100%" :src="model.img"></v-img>

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

      <v-container >
        <h2 BOLD>รีวิวแนะนำ</h2>
      </v-container>
      <v-sheet class="mx-1 my-2" max-width="auto">
        <v-slide-group>
          <v-slide-item :key="key" v-for="(review, key) in reviews">
            <v-card class="mx-1 my-auto" max-width="200">
              <v-img  height="155" max-width="auto" :src="review.img"></v-img>

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
      </v-sheet>
    </v-app>
  </div>
</template>

<script>
import firebase from "./forms/firebaseConfig";

var database = firebase.database();
var photographerRef = database.ref("/photographer");
var modelRef = database.ref("/model");
var reviewRef = database.ref("/review");
var userRef = database.ref("/user_data");
// const db = firebase.firestore();



export default {
 
  data: () => {
    return {
      photographers: {},
      models: {},
      reviews: {},
      users:{},
      name: "",
      realname: "",
      email: "",
      phone: "",
      introduce: "",
      address: "",
      img: "",
      uid_user: "",
      uid: "",
      


      lists: [
        { iconmenu: "mdi-home", menu: "Photo" },
        { iconmenu: "mdi-clipboard-text", menu: "Model" },
        { iconmenu: "mdi-message-text-outline", menu: "Review" },
        { iconmenu: "mdi-account-box", menu: "Shop" }
      ],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      iconmenu: [
        "mdi-camera",
        "mdi-star-circle",
        "mdi-star-circle",
        "mdi-star-circle"
      ],
      photos: [
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "ABC",
          star: 5.0,
          num: "243"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "asd",
          star: 5.0,
          num: "212"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "Photossss",
          star: 4.5,
          num: "234"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "tooos",
          star: 4.5,
          num: "123"
        },
        {
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          name: "sdfsdf",
          star: 4,
          num: "222"
        }
      ],

      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  },
  mounted() {
    photographerRef.on("value", snapshot => {
      this.photographers = snapshot.val();
    });
    modelRef.on("value", snapshot => {
      this.models = snapshot.val();
    });
    reviewRef.on("value", snapshot => {
      this.reviews = snapshot.val();
      
    });
    userRef.on("value", snapshot => {
      this.users = snapshot.val();
      this.email = firebase.auth().currentUser.email;
      this.uid = firebase.auth().currentUser.uid;
      console.log('uid' + this.uid);
      
    });

  }
};
</script>
