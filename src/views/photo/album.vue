<template>
  <div>
    <!-- <h1>{{    this.$route.params.key}}</h1> -->
<div>
              
              เพิ่มรูปภาพ
              <div class="form-group">
                <!-- <label for="product_image">Product Images</label> -->
                
                <input type="file"   multiple    accept="image/png, image/jpeg, image/bmp"
 @change="uploadImage" class="form-control" /><v-btn rounded color="primary" @click="sendTask(product.images)" dark>เพิ่ม</v-btn>
              </div>

              <div class="form-group d-flex">
                <!-- <div class="img-wrapp p-1" v-for="(image, index) in product.images" :key="index"> -->
         
<v-card
      class="mx-auto"
      max-width="400"
    >
        <v-row dense>
          <v-col
           v-for="(image, index) in product.images" :key="index"
            :cols="6"
          >
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
  
             
                 <span class="delete-img" @click="deleteImage(image,index)">X</span> 
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-card>
         
                  <!-- <img :src="image" alt width="80px" />
                  <span class="delete-img" @click="deleteImage(image,index)">X</span> -->
   
              </div>
                    

            </div>
    <div>

     
      <div class="form-group d-flex">
        <!-- <div class="img-wrapp p-1" v-for="(image, index) in product.images" :key="index"> -->

        <v-card class="mx-auto" max-width="400">
          <v-row dense>
            <v-col v-for="(img, key) in photographers2" :key="key" :cols="6">
              <v-card>
                <v-img
                  :src="img.image[key]"
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
import firebase from "../forms/firebaseConfig";
import Axios from 'axios';

var database = firebase.database();
var photographerRef = database.ref("/photographer");
export default {
  data: () => {
    return {
       product: {
      images: [],
    }, 
       products: [],

      task: [],
      images: {},
      imageData: null,
      uploadValue: 0,
      page: 1,
      perPage: 10,
      pages: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
      img:'',
      image:'',
      photographers2:{}
    };
  },
  computed: {
    visiblePages () {
      return this.task.slice((this.page - 1)* this.perPage, this.page* this.perPage)
    }
  },
methods: {
  deleteImage(img, index) {
      let image = firebase.storage().refFromURL(img);
      this.product.images.splice(index, 1);
      image
        .delete()
        .then(function () {
          console.log("image deleted");
        })
        .catch(function (error) {
          console.log(error);

          // Uh-oh, an error occurred!
          console.log("an error occurred");
        });
    },

    uploadImage(e) {
         var i =0 
      for(i;i<=e.target.files.length-1;i++){
      if (e.target.files[i]) {
        let file = e.target.files[i];

        var storageRef = firebase
          .storage()
          .ref("test/" + Math.random() + "_" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            this.asd = snapshot
            // console.log(snapshot);
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
              // console.log(this.product.images);
            });
          }
        );
      }
      }
    },
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
},
chooseFilesAl() {

      document.getElementById("fileUploadAl").click();
    },
     sendTask(images) {
console.log(images);

  //         photographerRef.child(this.$route.params.key).update({
  // })
    }
},

  mounted() {
    photographerRef.orderByKey().equalTo(this.$route.params.key).on("value", snapshot => {
      this.photographers2 = snapshot.val()[this.$route.params.key].img;
      console.log(this.photographers2);

      
    });

  },

};
</script>



