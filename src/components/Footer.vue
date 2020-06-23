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
        <!-- <v-tabs-slider></v-tabs-slider> -->

        <v-tab v-for="list in lists" :key="list.text"  router :to="list.route" >
          {{list.text}}
          <v-icon>{{list.icon}}</v-icon>
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
        {icon:"mdi-home" , text:"Home" ,route:"/home"},
        {icon:"mdi-clipboard-text" , text:"Schedule" ,route:"/schedule"},
        {icon:"mdi-message-text-outline" , text:"Message" ,route:"message"},
        {icon:"mdi-account-box" , text:"Profile" ,route:"profile"},
      ]
    }
  },
  }
</script>
