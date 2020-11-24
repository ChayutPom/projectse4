<template>

 <v-card>
<div class="row">
  <v-toolbar
      
      
    >

   <input class="form-control" type="text"  v-model="searchQuery" placeholder="Search" />

    </v-toolbar>
<!--     
        <div class="search-wrapper panel-heading col-sm-12">
          <input class="form-control" type="text"  v-model="searchQuery" placeholder="Search" />
        </div> -->
      </div>
      <!-- <v-row align="center"> <v-col
          class="d-flex"
          cols="6"
          sm="3"
        >
          <v-select
            :items="items"
            label="จัดเรียงตาม"
            outlined
          ></v-select>
        </v-col></v-row> -->

        
        <!-- <v-card-text>
         <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 24 : 10"
            class="mx-auto pa-3"
            style="background-color: #A3C6C4 "
          >
           <h2 style="color:#354649">เลือกประเภทงาน</h2>
          </v-card>
        </template>
      </v-hover>
  
        <v-chip-group
          v-model="amenities"
          column
          multiple
        >
        <v-chip
            filter
            outlined
          >  <v-icon >fa-building</v-icon>
           สถาปัตยกรรม
          </v-chip>
          <v-chip
            filter
            outlined
          >   <v-icon >fa-hamburger</v-icon>
            สินค้า/อาหาร
          </v-chip>
          <v-chip
            filter
            outlined
          > <v-icon >fa-business-time</v-icon>
            งานอีเวนต์
          </v-chip>
          <v-chip
            filter
            outlined
          > <v-icon > fa-venus-mars</v-icon>
            งานแต่งงาน
          </v-chip>
          <v-chip
            filter
            outlined
          > <v-icon >fa-heart</v-icon>
           พรีเวดดิ้ง
          </v-chip>
          <v-chip
            filter
            outlined
          > <v-icon >fa-user-graduate</v-icon>
           รับปริญญา
          </v-chip>
          <v-chip
            filter
            outlined
          > 
        <v-icon >fas fa-street-view</v-icon>
        
ภาพถ่ายบุคคล
          </v-chip>
        </v-chip-group>


         <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 24 : 10"
            class="mx-auto pa-3"
            style="background-color: #A3C6C4 "
          >
           <h2 style="color:#354649">เลือกสถานที่</h2>
          </v-card>
        </template>
      </v-hover>
       <v-col cols="12" sm="6" md="3">
      <v-text-field 
             outlined
                v-if="this.$store.state.location.locationData==null" label='สถานที่' v-model="taskLocation" filled rounded dense  @click="location('task')" ></v-text-field>
      <v-text-field 

              outlined
               v-if="this.$store.state.location.locationData!=null" v-model="taskLocation" @click="location('task')" :label='this.$store.state.location.locationData.subdistrict+this.$store.state.location.locationData.district+this.$store.state.location.locationData.province+this.$store.state.location.locationData.country' solo ></v-text-field>
    </v-col>
      </v-card-text> -->


        
      <!-- ------------------------ -->
<v-container  fluid>

        <!-- <v-row>    
      <v-col cols="3" sm ="4" ><v-btn class="ma-3" outlined medium fab color="indigo" href="/profilephoto/all/photo1.vue">
        <v-icon >fas fa-street-view</v-icon>
        
      </v-btn><p class="text-center">ภาพถ่ายบุคคล</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="/profilephoto/all/photo2.vue">
        <v-icon >fa-user-graduate</v-icon>
        
      </v-btn><p class="text-center">รับปริญญา</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="/profilephoto/all/photo3.vue">
        <v-icon >fa-heart</v-icon>
        
      </v-btn><p class="text-center">พรีเวดดิ้ง</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="/profilephoto/all/photo4.vue">
        <v-icon > fa-venus-mars</v-icon>
        
      </v-btn><p class="text-center">งานแต่งงาน</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="/profilephoto/all/photo5.vue">
        <v-icon >fa-business-time</v-icon>
        
      </v-btn><p class="text-center">งานอีเวนต์</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="/profilephoto/all/photo6.vue">
        <v-icon >fa-hamburger</v-icon>
        
      </v-btn><p class="text-center">สินค้า/อาหาร</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="/profilephoto/all/photo7.vue">
        <v-icon >fa-building</v-icon>
        
      </v-btn><p class="text-center">สถาปัตยกรรม</p></v-col>
</v-row> -->
    


<!-- ------------------------- -->
   <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 24 : 10"
          ><v-card
      max-width="auto"
      class="mx-auto "
        :href="'/profilephoto/' + col.key"
     v-for="(col, index) in resultQuery" :key="index"
              tile
              outlined
    >
      <v-list-item  >
        <v-list-item-avatar color="grey">      <img  :src="col.img[0].image[0]" alt width="90px" />   
</v-list-item-avatar>
     <v-list-item-content >
      <v-list-item-title class="headline" >{{col.name}}</v-list-item-title>
          <v-list-item-subtitle><i class="fas fa-star-half-alt"></i> {{ col.star}}<br><i class="fas fa-money-bill-wave"></i> 2500-3000</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
<!-- <v-chip
        class="ma-2"
        x-small
           v-for="n in 3"
              :key="n"
      >
        งานแต่งงาน
      </v-chip> -->

      <v-row >
        <v-col cols="3" :key="key" v-for="(photographer2, key) in col.img[0].image" sm><v-img 
        :src="photographer2"
        height="90" max-width=""
      ></v-img></v-col>
      
</v-row>
  
    </v-card>
         
          </v-card>
        </template>
      </v-hover>


     
    <v-footer
        fixed
        class="font-weight-medium"
      >
      
 <v-dialog v-model="dialog" scrollable max-width="270px">
        <template v-slot:activator="{ on, attrs }">
   
            <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 24 : 10"
            class="mx-auto pa-3"
            style="background-color: #0C4A60 "
            dark
            v-bind="attrs"
            v-on="on"
          >
           <h2 style="color:#ffffff">ค้นหาช่างภาพด่วน</h2>
          </v-card>
        </template>
      </v-hover>

        </template>
        <v-card>
          <v-card-title>เลือกประเภทงาน</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="dialogm1" column>
              <v-radio label="ภาพถ่ายบุคคล" value="photo1"></v-radio>
              <v-radio label="รับปริญญา" value="photo2"></v-radio>
              <v-radio label="พรีเวดดิ้ง" value="photo3"></v-radio>
              <v-radio label="งานแต่งงาน" value="photo4"></v-radio>
              <v-radio label="งานอีเวนต์" value="photo5"></v-radio>
              <v-radio label="สินค้า/อาหาร" value="photo6"></v-radio>
              <v-radio label="สถาปัตตยกรรม" value="photo7"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">ยกเลิก</v-btn>
            <v-btn color="blue darken-1" text  @click="searchJob(dialogm1)">ตกลง</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>       
      </v-footer>
    </v-container>


  
  
 </v-card>


</template>

<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var photographerRef = database.ref("/photographer");
var userRef = database.ref("/userdata");

export default {
 

  data: () => {
    return {
       amenities: [],
    neighborhoods: [1],
        dataF: [],
      asd: [],
   taskLocation: null,
      startDate: null,
      endDate: null ,
      searchQuery: null,
      photographers: {},
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
       dialogm1: '',
      dialog: false,

    
    };
  },
methods: {

location(lo){
        this.$router.push("/"+lo+"/location.vue");
    },
searchJob(type){

console.log(type);
// if(type == "photo1"){
// this.$router.push('/profilephoto/all/photo1.vue')
// }else if(type == "phot2"){
// this.$router.push('/profilephoto/all/photo2.vue')
// }else if(type == "phot3"){
// this.$router.push('/profilephoto/all/photo3.vue')
// }else if(type == "phot4"){
// this.$router.push('/profilephoto/all/photo4.vue')
// }else if(type == "phot5"){
// this.$router.push('/profilephoto/all/photo5.vue')
// }else if(type == "phot6"){
// this.$router.push('/profilephoto/all/photo6.vue')
// }else if(type == "phot7"){
// this.$router.push('/profilephoto/all/photo7.vue')
// }
},
},
computed: {
    resultQuery: function () {
      // console.log(this.$store.state.location.locationData.province);
      console.log(this.amenities);
//       if(this.amenities==0){
// this.type == "สถาปัตยกรรม"
//       }else if(this.amenities==1){

//       }else if(this.amenities==2){

//       }else if(this.amenities==3){

//       }else if(this.amenities==4){

//       }else if(this.amenities==5){

//       }else if(this.amenities==6){

//       }


      if (this.searchQuery) {
        
        return this.dataF.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
             
        });
      } else {
        // console.log(this.photographers);
        return this.dataF;
      }
    },


  },
  mounted() {
   photographerRef.orderByChild("status").equalTo(true).on("value", snapshot => {

    this.photographers =snapshot.val();
          var i=0

            for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
            var keys = Object.keys(snapshot.val())[i]

console.log(this.photographers[keys].email);
const datarec ={
  name: this.photographers[keys].name,
  key: keys,
  img:this.photographers[keys].img,
  star: this.photographers[keys].ratingPhoto.ratePhoto.toFixed( 1 )
}

this.dataF.push(datarec)
            }
console.log(this.dataF);
    });

    userRef.on("value", snapshot => {
  this.name = snapshot.val()
console.log(snapshot.val());
    });
  }
};
</script>
