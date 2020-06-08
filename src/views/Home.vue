<template>
<div id="app">
  <v-app id="inspire">
     <v-carousel
                cycle
      height="170"
      hide-delimiter-background
      show-arrows-on-hover>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>



    <v-container  fluid>

        <v-row>    
      <v-col  ><v-btn class="ma-6" outlined medium fab color="indigo" href="photo.vue">
        <v-icon >mdi-camera</v-icon>
        
      </v-btn><p class="text-center">Photo</p></v-col>

      <v-col  ><v-btn class="ma-6" outlined medium fab color="indigo" href="model.vue">
        <v-icon >fa-female</v-icon>
        
      </v-btn><p class="text-center">model</p></v-col>

      <v-col  ><v-btn class="ma-6" outlined medium fab color="indigo" href="review.vue">
        <v-icon >fa-star</v-icon>
        
      </v-btn><p class="text-center">review</p></v-col>

      <v-col  ><v-btn class="ma-6" outlined medium fab color="indigo" href="shop.vue">
        <v-icon >fa-store</v-icon>
        
      </v-btn><p class="text-center">shop</p></v-col>

      <v-col  ><v-btn class="ma-6" outlined medium fab color="indigo" href="photographer.vue">
        <v-icon >fa-images</v-icon>
        
      </v-btn><p class="text-center">photographer</p></v-col>

      <v-col  ><v-btn class="ma-6" outlined medium fab color="indigo" href="Modeling.vue">
        <v-icon >fa-image</v-icon>
        
      </v-btn><p class="text-center">Modeling</p></v-col>
</v-row>
    </v-container>

<v-container>
<h2 BOLD > ช่างภาพแนะนำ</h2></v-container>
    <v-sheet
      class="mx-2"
      max-width="auto"
    >
      <v-slide-group >
        <v-slide-item
          v-for="(photos, i) in photos" :key="i"  
          
        >
          <v-card
      class="mx-1 my-2"
      max-width="200"
    >
      <v-img
        height="155" max-width="100%"
        :src="photos.img" >     
        </v-img>

      <v-card > 
{{photos.name}}
        <v-row
          align="center"
          class="mx-2"
        >
          <v-rating
            
            :value= 5
            dense
            half-increments
            readonly
            size="10"
          ></v-rating>
          <div class="grey--text ml-4">{{photos.star}} ({{photos.num}})</div>
        </v-row>
      </v-card>
    </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>


<v-container>
<h2 BOLD > แบบแนะนำ</h2></v-container>
    <v-sheet
      class="mx-1 my-2"
      max-width="auto"
    >
      <v-slide-group >
        <v-slide-item
          v-for="n in 5"
          :key="n"  
        >
          <v-card
      class="mx-1 my-auto"
      max-width="200"
    >
      <v-img
        height="150"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">     
        </v-img>

      <v-card > 
Cafe Badilico
        <v-row
          align="center"
          class="mx-1"
        >
          <v-rating
            :value= 4.5
            color="amber"
            dense
            half-increments
            readonly
            size="10"
          ></v-rating>
          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>
      </v-card>
    </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>




    <v-container>
<h2 BOLD > รีวิวแนะนำ</h2></v-container>
    <v-sheet
      class="mx-1 my-2 "
      max-width="auto"
    >
      <v-slide-group >
        <v-slide-item
          v-for="n in 5"
          :key="n"  
        >
          <v-card
      class="mx-1 my-auto"
      max-width="200"
    >
      <v-img
        height="150"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">     
        </v-img>

      <v-card > 
Cafe Badilico
        <v-row
          align="center"
          class="mx-1"
        >
          <v-rating
            :value= 4.5
            color="amber"
            dense
            half-increments
            readonly
            size="10"
          ></v-rating>
          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>
      </v-card>
    </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>




  </v-app>
</div>



</template>

<script>

  export default {

  data: () => {
    return {
      lists:[
        {iconmenu:"mdi-home" , menu:"Photo" },
        {iconmenu:"mdi-clipboard-text" , menu:"Model" },
        {iconmenu:"mdi-message-text-outline" , menu:"Review" },
        {iconmenu:"mdi-account-box" , menu:"Shop" },
      ],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      iconmenu: [
        'mdi-camera',
        'mdi-star-circle',
        'mdi-star-circle',
        'mdi-star-circle'

      ],
      photos:[
        {img:"https://cdn.vuetifyjs.com/images/cards/cooking.png" , name:"ABC",star:5.0,num:"243" },
        {img:"https://cdn.vuetifyjs.com/images/cards/cooking.png" , name:"asd",star:5.0,num:"212" },
        {img:"https://cdn.vuetifyjs.com/images/cards/cooking.png" , name:"Photossss",star:4.5,num:"234" },
        {img:"https://cdn.vuetifyjs.com/images/cards/cooking.png" , name:"tooos",star:4.5,num:"123" },
        {img:"https://cdn.vuetifyjs.com/images/cards/cooking.png" , name:"sdfsdf" ,star:4,num:"222"},
      ],
      
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    
    }

    
  },

  }

</script>
