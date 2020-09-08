<template>
<v-container fluid>
        <v-col cols="12">
          <v-row
            align="start"
            justify="start"
            class="grey lighten-5"
          >
            <v-card max-width="50%" class="mx-auto" 

              tile
              outlined
               :href="'/profilemodel/' + key"
                :key="key" v-for="(model, key) in models">
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="">{{model.name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  ส่วนสูง: {{model.height}} <br>
  นำ้หนัก: {{model.weight}}<br>
    แนะนำตัว: {{model.introduce}}<br>
    <v-row  
    >
      <v-col cols="4" sm :key="key" v-for="(modelimg, key) in model.img">
        <v-img
          :src="modelimg"
          height="70"
          
        ></v-img>
      </v-col>

    </v-row>
  </v-card>
          </v-row>
        </v-col>
    </v-container>


</template>

<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var modelRef = database.ref("/model");

export default {
 

  data: () => {
    return {
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
    modelRef.on("value", snapshot => {
      this.models = snapshot.val();
      console.log(this.models);
           this.users = this.$store.state.keyUser
    });
  }
};
</script>
