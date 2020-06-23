<template>
  <v-tabs  centered
        grow
        padless>
      <v-tab href="/tab1.vue">งานใหม่</v-tab>
      <v-tab href="/tab2.vue">งานที่รับ</v-tab>
      <v-tab href="/tab3.vue">งานที่รอส่ง</v-tab>
      <v-tab href="/tab4.vue">งานที่เสร็จ</v-tab>
    </v-tabs>
    
</template>

<script>

export default {
 

  data: () => ({
    //
  }),
};
</script>
