<template>

 <v-card>
      <v-toolbar
      >
        <v-text-field

          prepend-icon="fa-search"
          single-line
        ></v-text-field>
  
        <v-btn icon>
          <v-icon>fa-map-marker</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- ------------------------ -->
<v-container  fluid>

        <v-row>    
      <v-col cols="3" sm ="4" ><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fas fa-street-view</v-icon>
        
      </v-btn><p class="text-center">ภาพถ่ายบุคคล</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-user-graduate</v-icon>
        
      </v-btn><p class="text-center">รับปริญญา</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-heart</v-icon>
        
      </v-btn><p class="text-center">พรีเวดดิ้ง</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon > fa-venus-mars</v-icon>
        
      </v-btn><p class="text-center">งานแต่งงาน</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-business-time</v-icon>
        
      </v-btn><p class="text-center">งานอีเวนต์</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-hamburger</v-icon>
        
      </v-btn><p class="text-center">สินค้า/อาหาร</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-building</v-icon>
        
      </v-btn><p class="text-center">สถาปัตยกรรม</p></v-col>
</v-row>
    


<!-- ------------------------- -->
     <v-card
      max-width="auto"
      class="mx-auto"
      href="profile.vue"
     :key="key" v-for="(photographer, key) in photographers"
              tile
              outlined
              
    >
      <v-list-item >
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content >
      <v-list-item-title class="headline">{{photographer.name}}</v-list-item-title>
          <v-list-item-subtitle><i class="fas fa-star-half-alt"></i>5.0<br><i class="fas fa-money-bill-wave"></i>2500-3000</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
<v-chip
        class="ma-2"
        x-small
           v-for="n in 3"
              :key="n"
      >
        งานแต่งงาน
      </v-chip>

      <v-row class="">
       <v-col cols="3" sm><v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="90" max-width=""
      ></v-img></v-col>
    <v-col cols="3" sm><v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="90" max-width=""
      ></v-img> </v-col>
       <v-col cols="3" sm><v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="90" max-width=""
      ></v-img></v-col>
       <v-col cols="3" sm> <v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="90" max-width=""
      ></v-img></v-col>
      </v-row>
  
    </v-card></v-container>
 </v-card>

</template>

<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var photographerRef = database.ref("/photographer");
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
      

    
    };
  },

  mounted() {
    photographerRef.on("value", snapshot => {
      this.photographers = snapshot.val();
      console.log(this.photographers.name);
      
    });
  }
};
</script>
