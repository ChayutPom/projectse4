<template>

 <v-card>
      <v-toolbar
      >
        <v-text-field

          prepend-icon="fa-search"
          single-line
        ></v-text-field>
  
        <v-btn icon>
          <v-icon>fa-map-marker</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- ------------------------ -->
<v-container  fluid>

        <v-row>    
      <v-col cols="3" sm ="4" ><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fas fa-street-view</v-icon>
        
      </v-btn><p class="text-center">ภาพถ่ายบุคคล</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-user-graduate</v-icon>
        
      </v-btn><p class="text-center">รับปริญญา</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-heart</v-icon>
        
      </v-btn><p class="text-center">พรีเวดดิ้ง</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon > fa-venus-mars</v-icon>
        
      </v-btn><p class="text-center">งานแต่งงาน</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-business-time</v-icon>
        
      </v-btn><p class="text-center">งานอีเวนต์</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-hamburger</v-icon>
        
      </v-btn><p class="text-center">สินค้า/อาหาร</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >fa-building</v-icon>
        
      </v-btn><p class="text-center">สถาปัตยกรรม</p></v-col>
</v-row>
    


<!-- ------------------------- -->
     <v-card
      max-width="auto"
      class="mx-auto"
        :href="'/profilephoto/' + key"
     :key="key" v-for="(photographer, key) in photographers"
              tile
              outlined
              
    >
      <v-list-item >
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content >
      <v-list-item-title class="headline">{{photographer.name}}{{key}}</v-list-item-title>
          <v-list-item-subtitle><i class="fas fa-star-half-alt"></i>5.0<br><i class="fas fa-money-bill-wave"></i>2500-3000</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
<v-chip
        class="ma-2"
        x-small
           v-for="n in 3"
              :key="n"
      >
        งานแต่งงาน
      </v-chip>

      <v-row >
        <v-col cols="3" :key="key" v-for="(photographer2, key) in photographer.img" sm><v-img 
        :src="photographer2"
        height="90" max-width=""
      ></v-img></v-col>
</v-row>
  
    </v-card>
    <v-footer
        fixed
        class="font-weight-medium"
      >
        <v-col
          class="text-center"
          cols="12"
        >
 <v-dialog v-model="dialog" scrollable max-width="300px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            ค้นหาช่างภาพเพื่อเปรียบเทียบ
          </v-btn>
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
      </v-dialog>        </v-col>
      </v-footer>
    </v-container>


  
  
 </v-card>


</template>

<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var photographerRef = database.ref("/photographer");

export default {
 

  data: () => {
    return {
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


searchJob(type){

console.log(type);
if(type == "photo1"){
this.$router.push('/profilephoto/all/photo1.vue')
}else if(type == "phot2"){
this.$router.push('/profilephoto/all/photo2.vue')
}else if(type == "phot3"){
this.$router.push('/profilephoto/all/photo3.vue')
}else if(type == "phot4"){
this.$router.push('/profilephoto/all/photo4.vue')
}else if(type == "phot5"){
this.$router.push('/profilephoto/all/photo5.vue')
}else if(type == "phot6"){
this.$router.push('/profilephoto/all/photo6.vue')
}else if(type == "phot7"){
this.$router.push('/profilephoto/all/photo7.vue')
}
},
},

  mounted() {
    photographerRef.on("value", snapshot => {
      this.photographers = snapshot.val();
      
    });
  }
};
</script>
