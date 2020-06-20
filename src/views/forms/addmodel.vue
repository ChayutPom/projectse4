<template>
  <v-container fluid>
    <center>
      <h2>โปรไฟล์ mODEL</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ชื่อ โปรไฟล์" v-model="name" ></v-text-field>
      <v-text-field label="ชื่อจริง-นามสกุล" v-model="realname" ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="อีเมล" v-model="email"></v-text-field>
      <v-text-field label="เบอร์โทรศัพท์" v-model="phone"></v-text-field>
    </v-col>

    <v-row>
      <div >
      รูปภาพ

      <div class="form-group">
                      <input type="file" @change="uploadImage" class="form-control">
                    </div>

                    <div class="form-group d-flex">
                      <div class="img-wrapp p-1" v-for="(image, index) in product.images" :key = index>
                
                              <img :src="image" alt="" width="80px">
                              <span class="delete-img" @click="deleteImage(image,index)">X</span>

                      </div>
                    </div>
      
    </div>

    </v-row>

    <v-col cols="12" sm="6" md="3">
      <v-textarea label="คำแนะนำตัว" v-model="introduce"></v-textarea>
    </v-col>
    <v-col cols="12" sm="6" md="3">
    <v-text-field label="นำ้หนัก" v-model="weight"></v-text-field>
    <v-text-field label="ส่วนสูง" v-model="height" ></v-text-field>
    <v-select
            :items="dropdown_font"
            label="เพศ " v-model="sex" 
          ></v-select>
              <button @click="insertToModel(name, realname,email,phone,introduce,weight,height,sex)">Add</button>

      <v-text-field label="ที่อยู่" ></v-text-field>
    </v-col>
   
  </v-container>
</template>

<script>

import firebase from './firebaseConfig'

var database = firebase.database()
var modelRef = database.ref('/model')
export default {
  data: () => ({
    items: ["1", "2", "3", "4", "5"],
        dropdown_font: ['ชาย', 'หญิง'],

        contacts: {},
     name: '', 
     realname: '',
     email: '',
     phone: '',
     introduce: '',
     weight: '',
     height: '',
     sex: '',
         img: {},
         product: {
          images:[]
        },
        products: [],
users: {},
  }),
 methods: {
    insertToModel (name, realname,email,phone,introduce,weight,height,sex) {
      let data = {
        name: name,
        realname: realname,
        email: email,
        phone: phone,
        introduce: introduce,
        weight: weight,
         height: height,
        sex: sex,
      }
      modelRef.push(data)
      this.name = ''
      this.realname = ''
      this.email = ''
      this.phone = ''
      this.introduce = ''
      this.weight = ''
      this.height = ''
      this.sex = ''
    },
    deleteImage(img,index){
      let image = firebase.storage().refFromURL(img);
      this.product.images.splice(index,1);
      image.delete().then(function() {
        console.log('image deleted');
      }).catch(function(error) {
        console.log(error);
        
        // Uh-oh, an error occurred!
        console.log('an error occurred');
      });
    },

    uploadImage(e){
      if(e.target.files[0]){
        
          let file = e.target.files[0];
    
          var storageRef = firebase.storage().ref('products/'+ Math.random() + '_'  + file.name);
    
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            console.log(snapshot);
            
          }, (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
              console.log( this.product.images);
              
            });
          });
      }
    },
  },
  mounted () {
    modelRef.on('value', (snapshot) => {
      this.models = snapshot.val()
    })
  }

};
</script>