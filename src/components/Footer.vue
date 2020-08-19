<template >
   <v-footer fixed  padless >
    <v-card flat
          tile
          width="100%"
          class=" text-center " 
           v-if="!$route.meta.hideNavigation"

       >

      <v-tabs
        light
        icons-and-text
        centered
        grow
        padless
      >

        <v-tab v-for="list in lists" :key="list.text"  router :to="list.route" >
          {{list.text}}
   <v-img
                   max-width="40px" max-height="40px" :src="list.icon" 
                    :lazy-src="list.icon"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate ></v-progress-circular>
                      </v-row>
                    </template>

                  </v-img>

        </v-tab>

      </v-tabs>
  
      
    </v-card>
      </v-footer>
</template>

<script>
  export default {
  data () {
    return {
      lists:[
        {icon:"https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Ffooter%2Freal-setate-house-home-apartment_108558.png?alt=media&token=db084764-46c2-4b71-b21a-81f4b72c6efd" , text:"Home" ,route:"/home"},
        {icon:"https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Ffooter%2Fcalendar_clock_schedule_icon-icons.com_51085.png?alt=media&token=7561502b-5c42-4abf-8cf9-9f81028a6b47" , text:"Schedule" ,route:"/schedule"},
        {icon:"https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Ffooter%2F1486164733-111_79707.png?alt=media&token=3978ccd3-07c8-4050-8e62-ab51ee8aa323" , text:"Message" ,route:"message"},
        {icon:"https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/icon%2Ffooter%2F4288584andbusinessfinancepersonalportfolioprofileresume-115772_115741.png?alt=media&token=f16d02db-efd1-4c20-bff0-26d9014ba81d" , text:"Profile" ,route:"profile"},
      ]
    }
  },
  }
</script>
