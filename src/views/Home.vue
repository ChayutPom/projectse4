<template>
<div id="app">
  <v-app id="inspire">
    <v-carousel
      cycle
      height="160"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3"> Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
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
          v-for="n in 5"
          :key="n"  
          
        >
          <v-card
      :loading="loading"
      class="mx-2 my-auto"
      max-width="200"
    >
      <v-img
        height="155" max-width="100%"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png">     
        </v-img>

      <v-card > 
Cafe Badilico
        <v-row
          align="center"
          class="mx-2"
        >
          <v-rating
            :value="4.5"
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
<h2 BOLD > แบบแนะนำ</h2></v-container>
    <v-sheet
      class=""
      max-width="auto"
    >
      <v-slide-group >
        <v-slide-item
          v-for="n in 5"
          :key="n"  
        >
          <v-card
      :loading="loading"
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
            :value="4.5"
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
      class=""
      max-width="auto"
    >
      <v-slide-group >
        <v-slide-item
          v-for="n in 5"
          :key="n"  
        >
          <v-card
      :loading="loading"
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
            :value="4.5"
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
      
    }
  },

  }

</script>
