<template>
<div>
    <!-- <h1>{{    this.$route.params.key}}</h1> -->

<div>
            
              <div class="form-group d-flex">
                <!-- <div class="img-wrapp p-1" v-for="(image, index) in product.images" :key="index"> -->
         
<v-card
      class="mx-auto"
      max-width="400"
    >
        <v-row dense>
          <v-col
           v-for="(image, index) in task" :key="index"
            :cols="6"
          >
          {{image.images}}
            <v-card>

              <v-img
                :src="image"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <!-- <v-card-title v-text="card.title"></v-card-title> -->
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
                 <!-- <span class="delete-img" @click="deleteImage(image,index)">X</span>  -->
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-card>
         
                  <!-- <img :src="image" alt width="80px" />
                  <span class="delete-img" @click="deleteImage(image,index)">X</span> -->
   
              </div>
            </div>
</div>
</template>

<script>
import firebase from "./forms/firebaseConfig";
var database = firebase.database();
var taskRef = database.ref("/taskphoto");
export default {
      data: () => {
    return {
task:{},
 images: {},
 imageData: null,
    uploadValue: 0,

    };
  },

      mounted() {
    

     

    taskRef.orderByKey().equalTo(this.$route.params.key).on("value", snapshot => {
        this.task = snapshot.val()[this.$route.params.key].images;
        console.log(this.task);
        }); 



    

  }
}
</script>