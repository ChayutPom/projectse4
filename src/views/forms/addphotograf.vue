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
      
      <input type="file" @change="previewImage"  accept="image/*" >
            <!-- <button @click="onUpload" >Upload</button> -->
    </div>
  
    <div v-if="imageData!=null" >
        <img class="preview" :src="picture" >

        <br>
    </div>
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
      <v-row><v-col cols="5" ><v-checkbox v-model="ex1" label="ภาพถ่ายบุคคล" color="success" value="success" hide-details></v-checkbox></v-col>
      <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex2" label="รับปริญญา" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex3" label="พรีเวดดิ้ง" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="งานแต่งงาน" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex5" label="งานอีเวน" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex6" label="สินค้า/อาหาร" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex7" label="สถาปัตตยกรรม" color="success" value="success" hide-details></v-checkbox></v-col>
       <v-col cols="7" > <v-text-field label="" solo></v-text-field></v-col></v-row>
    </v-col>
    <button @click="insertToPhotographer(name, realname,email,phone,introduce,address,picture)">Add</button>

  </v-container>
</template>
<script>
import firebase from './firebaseConfig'

var database = firebase.database()
var photographerRef = database.ref('/photographer')
export default {
  data: () => ({
    items: ["1", "2", "3", "4", "5"],

        photographer: {},
     name: '', 
     realname: '',
     email: '',
     phone: '',
     introduce: '',
     address: '',
     ex1: '',
     ex2: '',
     ex3: '',
     ex4: '',
     ex5: '',
     ex6: '',
     ex7: '',
     img: '',
     imageData: null,
      picture: null,
      uploadValue: 0
  }),
 methods: {
   
  //  อัฟรูปขึ้นfirebase
  //  onUpload(){
  //     this.picture=null;
  //     const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  //     storageRef.on(`state_changed`,snapshot=>{
  //       this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  //     }, error=>{console.log(error.message)},
  //     ()=>{this.uploadValue=100;
  //       storageRef.snapshot.ref.getDownloadURL().then((url)=>{
  //         this.picture =url;
          
  //       });
  //     }
  //     );
  //   },
    
    insertToPhotographer (name, realname,email,phone,introduce,address,picture) {
    console.log(picture)

       let data = {
        name: name,
        realname: realname,
        email: email,
        phone: phone,
        introduce: introduce,
        address: address,
        img: picture,
      }
      
      photographerRef.push(data)
      this.name = ''
      this.realname = ''
      this.email = ''
      this.phone = ''
      this.introduce = ''
      this.address = ''
    },

    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
      // this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          
        });
      }
      );
    },
  
    
  },
  
  mounted () {
    photographerRef.on('value', (snapshot) => {
      this.photographers = snapshot.val()
    })
  },
  

};
</script>
