<template>
  <v-container fluid>
    <div v-if="users.status_model == false">
    <center>
      <h2>โปรไฟล์ โมเดล</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ชื่อ โปรไฟล์" filled rounded dense outlined v-model="name" ></v-text-field>
      <v-text-field label="ชื่อจริง-นามสกุล" filled rounded dense outlined v-model="realname" ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="อีเมล" filled rounded dense outlined v-model="email"></v-text-field>
      <v-text-field label="เบอร์โทรศัพท์" filled rounded dense outlined v-model="phone"></v-text-field>
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
      <v-textarea label="คำแนะนำตัว" filled rounded dense outlined v-model="introduce"></v-textarea>
    </v-col>
    <v-col cols="12" sm="6" md="3">
    <v-text-field label="นำ้หนัก" filled rounded dense outlined v-model="weight"></v-text-field>
    <v-text-field label="ส่วนสูง" filled rounded dense outlined v-model="height" ></v-text-field>
    <v-select
            :items="dropdown_font"
            label="เพศ " filled rounded dense outlined v-model="sex" 
          ></v-select>
           

      <v-text-field label="ที่อยู่" filled rounded dense outlined @click="location('model')"></v-text-field>
       <div class="text-center">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="orange"
            dark
            v-bind="attrs"
            v-on="on"
          >
            ยืนยันสมัคร
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheet = !sheet;insertToModel(name, realname,email,phone,introduce,weight,height,sex,product.images)"

          >close</v-btn>
          <div class="my-3">ข้อมูลของคุณถูกส่งไปให้แอดมินพิจารณาเรียบร้อย รอระบบอนุมัติ</div>
        </v-sheet>
      </v-bottom-sheet>
    </div>

         <!-- <button @click="insertToModel(name, realname,email,phone,introduce,weight,height,sex,product.images)">Add</button> -->
    </v-col>
    </div>



        <div v-if="users.status_model == true">
          <v-container  >
    <v-card
      class="mx-auto"
      max-width="434"
      tile
    >
      <v-img
        height="100%"
        
      >
        <v-row
          align="end"
          class="fill-height"
        >
        <v-col  cols="3" ></v-col>
          <v-col
            class=""
            cols="7"
          >
            <v-avatar
              class="profile"
              color="grey"
              size="164"
              
              
            >
              <v-img  src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
          </v-col>
          
          
         
        </v-row>
      </v-img>



      <v-form>
      <v-container class="center" style="width:80%;">
        <v-row >
  
            <v-text-field 
              label="Text input"
              single-line
              solo
            ></v-text-field>

              <v-text-field
              label="Text input"
              single-line
              solo
            ></v-text-field>

              <v-text-field
              label="Text input"
              single-line
              solo
            ></v-text-field>

              <v-text-field
              label="Text input"
              single-line
              solo
            ></v-text-field>
        
  
         
  
        </v-row>
      </v-container>
    </v-form>

      
          </v-card>
    
      
    <center><v-btn text color="primary" href="">อัลบั้ม</v-btn> </center>
     <v-row class="">
       <v-col cols="4" sm>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="100" max-width=""
      ></v-img></v-col >
   <v-col cols="4" sm><v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="100" max-width=""
      ></v-img> </v-col >
      <v-col cols="4" sm><v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="100" max-width="" 
      ></v-img> </v-col >
       <v-col cols="4" sm>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="100" max-width=""
      ></v-img></v-col >
       <v-col cols="4" sm>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="100" max-width=""
      ></v-img></v-col >
       <v-col cols="4" sm>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="100" max-width=""
      ></v-img></v-col >
       
      </v-row>
    </v-container  >
        </div>
  </v-container>
</template>

<script>
import firebase from './firebaseConfig'

var database = firebase.database()
var modelRef = database.ref('/model')
var userRef = database.ref("/userdata");

export default {
  data: () => ({
    sheet: false,
    items: ["1", "2", "3", "4", "5"],
    dropdown_font:["ชาย", "หญิง"],
products: [],
users: {},
 images:[],
        product: {
          images:[]
        },
     name: '', 
     realname: '',
     email: '',
     phone: '',
     introduce: '',
     address: '',

     img: {},
  weight:'',
  height: '',
  sex: '',
     imageData: null,
      uploadValue: 0
      
  }),
 methods: {
  
    location(lo){
        this.$router.push("/"+lo+"/location.vue");
    },
    insertToModel (name, realname,email,phone,introduce,weight,height,sex,images) {

console.log(images);
  console.log(  this.users.status_model );

    let data = {
        name: name,
        realname: realname,
        email: email,
        phone: phone,
        introduce: introduce,
        img: images,
        keyUser:this.$store.state.keyUserF,
        weight:weight,
        height:height,
        sex:sex

      }
         userRef.child(this.$store.state.keyUserF).update({
status_model: true,
  })
      this.$store.dispatch("editUser", {
        status_model: true     
      });

      modelRef.push(data)
      .then(() => {
            console.log("Document successfully written!");
            console.log(data);
            
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
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
    modelRef.on('value', (snapshot) => {
      this.models = snapshot.val()
        this.users =this.$store.state.keyUser
    console.log(this.users);
    })
  



    
  },
  

};
</script>