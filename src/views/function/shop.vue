<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex" style="margin-top: -12px;" >
          <v-select label="ประเภทสินค้า" dense solo></v-select>
        </v-col>
        <v-col class="d-flex"  style="margin-top: -12px;">
          <v-select label="ราคา" dense solo></v-select>
        </v-col>

        <v-btn icon >
          <v-icon>fas fa-search</v-icon>
        </v-btn>
     </v-row>

      <v-col cols="12">
        <v-row align="start" justify="start" class="grey lighten-5">
          <v-card
            max-width="49%"
            class="mx-auto"
            :key="key" v-for="(shop, key) in shops"
            tile
            outlined
            :href="'detailshop/'  + key"
          >
            <v-row>
              <v-col>
                <!-- <v-img :src="card.src" height="150px" max-width="auto"></v-img> -->
              </v-col>

              <v-card-title>{{shop.name}}</v-card-title>
              <v-card-text>{{shop.detailProduct}}</v-card-text>
              <v-card-title > {{shop.price}}</v-card-title>

              
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>

import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var shopRef = database.ref("/shop");

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
    shopRef.on("value", snapshot => {
      this.shops = snapshot.val();
      console.log(this.shops);
           this.users = this.$store.state.keyUser
    });
  }
};
</script>
