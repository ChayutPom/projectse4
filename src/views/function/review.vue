<template>
    <v-container fluid>
      <v-col cols="12">
        <v-row align="start" justify="start" class="grey lighten-5">
          <v-card
            max-width="49%"
            class="mx-auto"
            :key="key" v-for="(review, key) in reviews"
            tile
            outlined
            :href="'detailreview/' + key"
          >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class>
                  <!-- <v-card-title v-text="card.title"></v-card-title> -->
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-row>
              <v-col cols="4" sm>
                <v-img :src="review.img" height="50" max-width="100"></v-img>
              </v-col>

</v-row>
              <v-card-text>{{review.detailReview}}</v-card-text>

         
             <v-row><v-col cols="6"> <v-btn class=""  icons-and-text color="lighten-12">
                <v-icon small>mdi-thumb-up</v-icon>1234 
              </v-btn></v-col>
              <v-col cols="6" ><v-btn class="" icons-and-text  color="lighten-12">
                <v-icon small>mdi-comment</v-icon>50  
              </v-btn></v-col></v-row>
              
            
          </v-card>
        </v-row>
      </v-col>
    </v-container>
</template>


<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var reviewRef = database.ref("/review");

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
    reviewRef.on("value", snapshot => {
      this.reviews = snapshot.val();
      console.log(this.reviews);
      
    });
  }
};
</script>

