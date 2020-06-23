<template >

      <v-tabs
        light
        centered
        grow
        padless
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="list in lists" :key="list.text"  router :to="list.route" >
          {{list.text}}
        </v-tab>

      </v-tabs>
</template>

<script>
  export default {
  data () {
    return {
      lists:[
                { text:"งานใหม่" ,route:"/tab1.vue"},
        { text:"งานที่รับ" ,route:"/tab2.vue"},
        { text:"งานที่รอส่ง" ,route:"/tab3.vue"},
        { text:"งานที่เสร็จ" ,route:"/tab4.vue"},
      ]
    }
  },
  }
</script>
