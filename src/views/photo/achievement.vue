<template>

    <v-card
      class="mx-auto"
      max-width="500"
    >

<v-container  :key="key2" v-for="(photogra, key2) in photographers2">
 
     <v-row class="" >
       <v-col cols="4"  >
      <v-img
        :src="photogra.image[key2]"
      ></v-img></v-col >
      </v-row>
</v-container>
    </v-card>
</template>
<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var photographerRef = database.ref("/photographer");
export default {
 

data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
       { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
    photographers2:{},
  }),

  mounted() {
   photographerRef.orderByKey().equalTo(this.$route.params.key).on("value", snapshot => {
      this.photographers2 = snapshot.val()[this.$route.params.key].img;
      console.log(this.photographers2);

      
    });
  }
};

</script>