<template>

 <v-card
    >
      <v-toolbar
      >
        <v-text-field

          prepend-icon="mdi-account-search"
          single-line
        ></v-text-field>
  
        <v-btn icon>
          <v-icon>mdi-pin</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- ------------------------ -->
<v-container  fluid>

        <v-row>    
      <v-col cols="3" sm ="4" ><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >mdi-camera</v-icon>
        
      </v-btn><p class="text-center">ภาพถ่ายบุคคล</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >mdi-camera</v-icon>
        
      </v-btn><p class="text-center">รับปริญญา</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >mdi-camera</v-icon>
        
      </v-btn><p class="text-center">พรีเวดดิ้ง</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >mdi-camera</v-icon>
        
      </v-btn><p class="text-center">งานแต่งงาน</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >mdi-camera</v-icon>
        
      </v-btn><p class="text-center">งานอีเวนต์</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >mdi-camera</v-icon>
        
      </v-btn><p class="text-center">สินค้า/อาหาร</p></v-col>

      <v-col  cols="3" sm ="4"><v-btn class="ma-3" outlined medium fab color="indigo" href="">
        <v-icon >mdi-camera</v-icon>
        
      </v-btn><p class="text-center">สถาปัตยกรรม</p></v-col>
</v-row>
    </v-container>


<!-- ------------------------- -->
     <v-card
      max-width="auto"
      class="mx-auto"
      href="profile.vue"
      v-for="n in 6"
              :key="n"
              tile
              outlined
    >
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">24Pixel</v-list-item-title>
          <v-list-item-subtitle>5.0<br>2500-3000</v-list-item-subtitle>
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

      <v-row class="">
       <v-col cols="3" sm><v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="90" max-width=""
      ></v-img></v-col>
    <v-col cols="3" sm><v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="90" max-width=""
      ></v-img> </v-col>
       <v-col cols="3" sm><v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="90" max-width=""
      ></v-img></v-col>
       <v-col cols="3" sm> <v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="90" max-width=""
      ></v-img></v-col>
      </v-row>
  
    </v-card>

    </v-card>




  
</template>

<script>

export default {
 

  data: () => ({
    //
  }),
};
</script>
