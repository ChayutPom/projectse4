<template>
  <div>
    <!-- <h1>{{    this.$route.params.key}}</h1> -->

    <div>
      <div class="form-group d-flex">
        <!-- <div class="img-wrapp p-1" v-for="(image, index) in product.images" :key="index"> -->

        <v-card class="mx-auto" max-width="400">
          <v-row dense>
            <v-col v-for="(image, index) in visiblePages" :key="index" :cols="6">
              <v-card>
                <v-img
                  :src="image"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
<v-btn icon @click="dowloadImg(image)">
                  <v-icon>mdi-download</v-icon>
                </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

          </v-row>


          <div class="text-xs-center">
            <v-pagination
              v-model="page"
              :length="Math.ceil(task.length / perPage)"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination>
          </div>

        </v-card>

        <!-- <img :src="image" alt width="80px" />
                  <span class="delete-img" @click="deleteImage(image,index)">X</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "./forms/firebaseConfig";
import Axios from 'axios';

var database = firebase.database();
var taskRef = database.ref("/taskphoto");
export default {
  data: () => {
    return {
      task: [],
      images: {},
      imageData: null,
      uploadValue: 0,
      page: 1,
      perPage: 10,
      pages: [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
    };
  },
  computed: {
    visiblePages () {
      return this.task.slice((this.page - 1)* this.perPage, this.page* this.perPage)
    }
  },
methods: {
  dowloadImg(image) {
  console.log(image);

  Axios({
    url: image,
    method:"GET",
    responseType:'blob'
  }).then((response) => {
    var fileUrl = window.URL.createObjectURL(new Blob([response.data]))
    var fileLink =document.createElement('a')
    fileLink.href = fileUrl

    fileLink.setAttribute('download',"image.jpg")
    document.body.appendChild(fileLink)

    fileLink.click()
  })
}
},

  mounted() {
    taskRef
      .orderByKey()
      .equalTo(this.$route.params.key)
      .on("value", (snapshot) => {
        this.task = snapshot.val()[this.$route.params.key].images;
        console.log(this.task);
      });

  },

};
</script>



