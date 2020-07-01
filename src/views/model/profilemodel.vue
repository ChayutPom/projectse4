<template>
    <v-card
      class="mx-auto"
      max-width="500"
    >

      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="170px"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
 <v-container fluid>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Name model</v-list-item-title>
          <v-list-item-subtitle>รูปร่าง ส่วนสูง</v-list-item-subtitle>
          <v-list-item-subtitle>รายละเอียด</v-list-item-subtitle>
          <v-list-item-subtitle>ราคา</v-list-item-subtitle>
        </v-list-item-content>
  
      
      </v-list-item>
  
     <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn color="primary" :href="'/profilemodel/' + this.$route.params.key + '/formmodel'" >ติดต่อ</v-btn>
        </div></v-col>
      </v-container>
    </v-card>
</template>
<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var modelRef = database.ref("/model");
export default {
  data: () => ({
   cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
       { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
    ],
  }),

mounted() {
    modelRef.orderByKey().equalTo(this.$route.params.key).on("value", snapshot => {
      this.models = snapshot.val();
      console.log(this.models);
      // this.phototype = snapshot.child(this.$route.params.key+"/typePhoto/type").val();
      // this.photoprice = snapshot.child(this.$route.params.key+"/typePhoto/price").val();

      // console.log(snapshot.child(this.$route.params.key+"/typePhoto/type").val());
      
    });
    
  }
};
</script>