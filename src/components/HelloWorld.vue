<template>
<div id="app">
  <v-app id="inspire">
    <v-carousel
      cycle
      height="175"
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



    <v-container  >
      <v-row>
        <v-col cols="12" >
          <v-row
            align="center"
            justify="space-around"
            class=" lighten-5"
            style="height: 180px;"
            
          >
            <div
            v-for="iconmenu in iconmenu"
          :key="iconmenu"
              class="ma-4 pa-6"
              
            
            >
              <v-icon x-large>{{ iconmenu }}</v-icon>
            </div>
          </v-row>
        </v-col>
        
      </v-row>
    </v-container>
  </v-app>
</div>
</template>

<script>


  export default {

  data: () => {
    return {
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
