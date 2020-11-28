<template>
<v-container  >
    <v-card
      class="mx-auto"
      max-width="434"
      tile
      :key="key" v-for="(photogra2, key) in photographers2"
    >
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
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
          
          
          <v-col  cols="3"></v-col>
          <v-col class="7">
            <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
                <v-list-item-title class="title">{{ photogra2.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
      
          </v-card>
    


      
     
<v-container  :key="key2" v-for="(photographer, key2) in photographers">
 <v-row><v-icon>mdi-account</v-icon>  {{ photographer.realname }}</v-row> 
   <v-row><v-icon>mdi-account-box</v-icon> {{ photographer.email }}</v-row> 
   <v-row><v-icon>mdi-pin</v-icon> สถานที่รับงาน:  ภูเก็ต</v-row> 
</v-container>


<v-container  fluid       >
ราคาและประเภทงาน 
        <v-row>    
      <v-col  cols="6" v-if="this.phototype.photo1 == 'success'">
 <center><v-list-item
                ripple  class="pl-9"
        ><v-btn class="ma-3" outlined medium fab color="indigo" :href="'/profilephoto/' + this.$route.params.key + '/photo1.vue'" >
        <v-icon >fas fa-street-view</v-icon>
      </v-btn>  
          </v-list-item>   
           <v-list-item-content>
                <v-list-item-title >ถ่ายบุคคล</v-list-item-title>
                <v-list-item-subtitle>{{this.photoprice.price1}} /ชั่วโมง</v-list-item-subtitle>
              </v-list-item-content></center>
      </v-col>

      <v-col   cols="6" v-if="this.phototype.photo2 == 'success'"><center><v-list-item
                ripple class="pl-9"
              ><v-btn class="ma-3" outlined medium fab color="indigo" :href="'/profilephoto/' + this.$route.params.key + '/photo2.vue'">
        <v-icon >fa-user-graduate</v-icon>
      </v-btn>  
             </v-list-item> <v-list-item-content>
                <v-list-item-title >รับปริญญา</v-list-item-title>
                <v-list-item-subtitle>{{this.photoprice.price2}} /ชั่วโมง</v-list-item-subtitle>
              </v-list-item-content></center></v-col>

      <v-col   cols="6" v-if="this.phototype.photo3 == 'success'"><center><v-list-item
                ripple class="pl-9"
              ><v-btn class="ma-3" outlined medium fab color="indigo" :href="'/profilephoto/' + this.$route.params.key + '/photo3.vue'">
        <v-icon >fa-heart</v-icon>
      </v-btn>  
            </v-list-item>  <v-list-item-content>
                <v-list-item-title >พรีเวดดิ้ง</v-list-item-title>
                <v-list-item-subtitle>{{this.photoprice.price3}} /ชั่วโมง</v-list-item-subtitle>
              </v-list-item-content></center></v-col>

      <v-col   cols="6" v-if="this.phototype.photo4 == 'success'"><center><v-list-item
                ripple class="pl-9"
              ><v-btn class="ma-3" outlined medium fab color="indigo" :href="'/profilephoto/' + this.$route.params.key + '/photo4.vue'">
        <v-icon >fa-venus-mars</v-icon>
      </v-btn>  
            </v-list-item>  <v-list-item-content>
                <v-list-item-title >งานแต่งงาน</v-list-item-title>
                <v-list-item-subtitle>{{this.photoprice.price4}} /ชั่วโมง</v-list-item-subtitle>
              </v-list-item-content></center></v-col>

      <v-col   cols="6" v-if="this.phototype.photo5 == 'success'"><center><v-list-item
                ripple class="pl-9"
              ><v-btn class="ma-3" outlined medium fab color="indigo" :href="'/profilephoto/' + this.$route.params.key + '/photo5.vue'">
        <v-icon >fa-business-time</v-icon>
      </v-btn>  
            </v-list-item>  <v-list-item-content>
                <v-list-item-title >งานอีเวนต์</v-list-item-title>
                <v-list-item-subtitle>{{this.photoprice.price5}} /ชั่วโมง</v-list-item-subtitle>
              </v-list-item-content></center></v-col>

      <v-col  cols="6" v-if="this.phototype.photo6 == 'success'"><center><v-list-item
                ripple class="pl-9"
              ><v-btn class="ma-3" outlined medium fab color="indigo" :href="'/profilephoto/' + this.$route.params.key + '/photo6.vue'">
        <v-icon >fa-hamburger</v-icon>
      </v-btn>  
           </v-list-item>   <v-list-item-content>
                <v-list-item-title >สินค้า/อาหาร</v-list-item-title>
                <v-list-item-subtitle>{{this.photoprice.price6}} /ชั่วโมง</v-list-item-subtitle>
              </v-list-item-content></center></v-col>

      <v-col   cols="6" v-if="this.phototype.photo7 == 'success'"><center><v-list-item
                ripple class="pl-9"
              ><v-btn class="ma-3" outlined medium fab color="indigo" :href="'/profilephoto/' + this.$route.params.key + '/photo7.vue'">
        <v-icon >fa-building</v-icon>
      </v-btn>  
             </v-list-item> <v-list-item-content>
                <v-list-item-title >สถาปัตยกรรม</v-list-item-title>
                <v-list-item-subtitle>{{this.photoprice.price7}} /ชั่วโมง</v-list-item-subtitle>
              </v-list-item-content></center></v-col>
</v-row>
    </v-container>

<v-container  :key="key2" v-for="(photogra, key2) in photographers">
    <center><v-btn text color="primary" :href="'/achievement.vue/'+ key2">ผลงาน</v-btn> </center>
     <v-row class="" >
       <v-col cols="4" sm :key="key2" v-for="(photogra2, key2) in photogra.img">
      <v-img
        :src="photogra2.image[0]"
        height="100" max-width=""
      ></v-img></v-col >
      </v-row>
</v-container>

      <center>ความคิดเห็น</center>
      <v-card
      max-width="auto"
      class="mx-auto"
      :key="key" v-for="(com, key) in comment"
    >
      <v-list-item   v-if="comment[key].ratingTask.comment != ''" >
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <div ><v-list-item-title class="">{{comment[key].ratingTask.comment}}</v-list-item-title></div>
          <v-list-item-subtitle >
            <div       >
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
  

    </v-card>
 </v-container  >
</template>

<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var photographerRef = database.ref("/photographer");
var taskRef = database.ref("/taskphoto");

export default {


  data: () => {
    return {
      photographers2:{},
      photographers: {},
      phototype: {},
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
      comment: {},
      ratingTask: '',
      com: '',
    
    };
  },

  mounted() {
    photographerRef.orderByKey().equalTo(this.$route.params.key).on("value", snapshot => {
      this.photographers = snapshot.val();
      console.log(this.photographers);
      this.phototype = snapshot.child(this.$route.params.key+"/typePhoto/type").val();
      this.photoprice = snapshot.child(this.$route.params.key+"/typePhoto/price").val();
     this.users = this.$store.state.keyUser
      console.log(snapshot.child(this.$route.params.key+"/typePhoto/type").val());
      
    });
    photographerRef.orderByKey().equalTo(this.$route.params.key).on("value", snapshot => {
      this.photographers2 = snapshot.val();
      console.log(this.photographers2);

      
    });
    taskRef.orderByChild("keyPhoto").equalTo(this.$route.params.key).on("value", snapshot => {
console.log(snapshot.val());
             var i=0

            for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
            var keys = Object.keys(snapshot.val())[i]
console.log(keys);

this.comment = snapshot.val()
console.log(this.comment );

            }
      });

      
  }
};
</script>
