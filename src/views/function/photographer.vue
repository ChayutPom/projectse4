<template>
  <v-tabs  centered
        grow
        padless>
      <v-tab to="/tab1.vue">งานใหม่</v-tab>
      <v-tab to="/tab2.vue">งานที่รับ</v-tab>
      <v-tab to="/tab3.vue">งานที่รอส่ง</v-tab>
      <v-tab to="/tab4.vue">งานที่เสร็จ</v-tab>
    </v-tabs>
    
</template>

<script>

export default {
 

  data: () => ({
    //
  }),
};
</script>
