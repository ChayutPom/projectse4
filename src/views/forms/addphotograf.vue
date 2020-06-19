<template>
  <v-container fluid>
    <center>
      <h2>โปรไฟล์ ช่างภาพ</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ชื่อ โปรไฟล์" v-model="name"></v-text-field>
      <v-text-field label="ชื่อจริง-นามสกุล" v-model="realname"></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="อีเมล" v-model="email"></v-text-field>
      <v-text-field label="เบอร์โทรศัพท์" v-model="phone"></v-text-field>
    </v-col>

    <v-row>

      <v-col cols="" >
        <div >
    <div >
      รูปภาพ

      <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file" @change="uploadImage" class="form-control">
                    </div>

                    <div class="form-group d-flex">
                      <div class="img-wrapp p-1" v-for="(image, index) in product.images" :key = index>
                
                              <img :src="image" alt="" width="80px">
                              <span class="delete-img" @click="deleteImage(image,index)">X</span>

                      </div>
                    </div>
       <!-- <input type="file" @change="previewImage" multiple accept="image/*" >
       <img :src="picture"  alt="" width="80px"> -->


      <!-- <div class="form-group">
                      <input type="file" @change="previewImage"  accept="image/*" >
                                            <input type="file" @change="previewImage"  accept="image/*" >

                    </div> -->

                    <!-- <div class="form-group d-flex">
                      <div class="p-1" >
                          <div class="img-wrapp">
                              <img :src="picture"  alt="" width="80px">
                          </div>
                      </div>
                    </div> -->

      
            <!-- <button @click="onUpload" >Upload</button> -->
    </div>
  
    <!-- <div v-if="imageData!=null" >
        <img class="preview" :src="picture" >

        <br>
    </div> -->
  </div>
      </v-col>
    </v-row>

    <v-col cols="12" sm="6" md="3">
      <v-textarea label="คำแนะนำตัว" v-model="introduce"></v-textarea>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ที่อยู่"  v-model="address"></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3" >
      ประเภทงานที่รับและราคา
      <v-row><v-col cols="5" ><v-checkbox v-model="photo1" label="ภาพถ่ายบุคคล" color="success" value="success" hide-details></v-checkbox></v-col>
      <v-col cols="7" ><v-text-field v-model="price1" label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="photo2" label="รับปริญญา" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field v-model="price2" label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="photo3" label="พรีเวดดิ้ง" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field v-model="price3" label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="photo4" label="งานแต่งงาน" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field v-model="price4" label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="photo5" label="งานอีเวน" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field v-model="price5" label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="photo6" label="สินค้า/อาหาร" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field v-model="price6" label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="photo7" label="สถาปัตตยกรรม" color="success" value="success" hide-details></v-checkbox></v-col>
       <v-col cols="7" > <v-text-field v-model="price7" label="" solo></v-text-field></v-col></v-row>
    </v-col>
    <button @click="insertToPhotographer(name, realname,email,phone,introduce,address,product.images,photo1,photo2,photo3,photo4,photo5,photo6,photo7,price1,price2,price3,price4,price5,price6,price7)">Add</button>

  </v-container>
</template>
<script>
import firebase from './firebaseConfig'

var database = firebase.database()
var photographerRef = database.ref('/photographer')
var userRef = database.ref("/userdata");

export default {
  data: () => ({
    items: ["1", "2", "3", "4", "5"],
products: [],
        product: {
          images:[]
        },
     name: '', 
     realname: '',
     email: '',
     phone: '',
     introduce: '',
     address: '',
     photo1: '',
     photo2: '',
     photo3: '',
     photo4: '',
     photo5: '',
     photo6: '',
     photo7: '',
     price1: '',
     price2: '',
     price3: '',
     price4: '',
     price5: '',
     price6: '',
     price7: '',
     img: {},
     typePhoto: {
       type: [],
       price: [],
     },
     imageData: null,
      uploadValue: 0
      
  }),
 methods: {
  
    
    insertToPhotographer (name, realname,email,phone,introduce,address,images,photo1,photo2,photo3,photo4,photo5,photo6,photo7,price1,price2,price3,price4,price5,price6,price7) {
    
console.log(photo1);
console.log(images);
 userRef.on("value", snapshot => {
var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];

var data = snapshot.child(key).val();

      if(data.email == firebase.auth().currentUser.email){
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
    
     var key2 = Object.keys(snapshot.val())[0];
  this.users = snapshot.val()[key2];
  console.log(  key2 );

    let data = {
        name: name,
        realname: realname,
        email: email,
        phone: phone,
        introduce: introduce,
        address: address,
        img: images,
        keyUser:key2,
        typePhoto: {
       type: {photo1,photo2,photo3,photo4,photo5,photo6,photo7},
       price: {price1,price2,price3,price4,price5,price6,price7},
     }

      }
      
      photographerRef.push(data)
      .then(() => {
            console.log("Document successfully written!");
            console.log(data);
            
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      this.name = ''
      this.realname = ''
      this.email = ''
      this.phone = ''
      this.introduce = ''
      this.address = ''
  
});
        
      }
      
}
      
    
    });
     
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
    photographerRef.on('value', (snapshot) => {
      this.photographers = snapshot.val()
    })


    
  },
  

};
</script>
<style scoped lang="scss">
.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
</style>