<template >
<div>
<photographer/>
    <v-card
      class="mx-auto"
      max-width="auto"
      outlined
     :key="keystatus" v-for="(tasks, keystatus) in task"
    >
    <div      v-if="tasks.statusTask == 'งานที่รอส่ง'">
      <v-list-item three-line>
        <v-list-item-content>
          <div class=" mb-4">ชื่อ{{keystatus}}</div>
          <v-list-item-title class="headline mb-1">{{tasks.taskType}}</v-list-item-title>
          <v-list-item-subtitle>{{tasks.taskDetail}}</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>

      </v-card-actions>
    </div>


    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            ส่งงาน
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>รายละเอียดงาน</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                dark
                text
                @click="dialog = false"
              >
                ย้อนกลับ
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

           
              <div>
              
              รูปภาพ
              <div class="form-group">
                <!-- <label for="product_image">Product Images</label> -->
                
                <input type="file"   multiple    accept="image/png, image/jpeg, image/bmp"
 @change="uploadImage" class="form-control" />
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
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
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

        </v-card>
         <v-footer padless fixed > <v-col cols="12" > <div class="text-center">
      <v-btn rounded color="primary" @click="sendTask(product.images,keystatus)" dark>ส่งงาน</v-btn>
    </div></v-col></v-footer>

      </v-dialog>
    </v-row>
    </v-card>
    </div>
</template>

<script>
import photographer from '../function/photographer.vue';
import firebase from "../forms/firebaseConfig";
var database = firebase.database();
var taskRef = database.ref("/taskphoto");
var photograRef = database.ref("/photographer");
  export default {
  components: {
    photographer,
   
  },

  data: () => {
    return {
       dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
task:{},
 img: {},
 imageData: null,
    uploadValue: 0,
keystatus:'',
   products: [],
      sheet: false,
    product: {
      images: [],
    }, 
    };
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
    sendTask(images,keystatus) {
console.log(images);

          taskRef.child(keystatus).update({
images
  })
    }
   },

    mounted() {
    
    photograRef.orderByChild("keyUser").equalTo(this.$store.state.keyUserF).on("value", snapshot => {
     var keyPhoto =Object.keys(snapshot.val())[0]
     console.log(keyPhoto);
     
taskRef.orderByChild("keyPhoto").equalTo(keyPhoto).on("value", snapshot => {
    // var key4 = Object.keys(snapshot.val())[0];
    this.taskas = snapshot.val();
    taskRef.orderByChild("statusTask").equalTo("งานที่รอส่ง").on("value", snapshot => {
        this.task = snapshot.val();
          console.log(this.task);  
        }); 
   }); 
        });



    

  }
  }
</script>