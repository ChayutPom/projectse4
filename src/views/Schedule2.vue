<template>
  <v-card>
<sctab/>


  
<br>
    <v-card class="mx-auto" max-width="auto" outlined href="/selectPhoto">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="font-weight-bold mb-2">หา Model</div>
          <v-list-item-title class="mb-1">Model ที่คุณเลือก : 24Pixel</v-list-item-title>
          <v-list-item-subtitle>สถานะงาน : รอการตอบกลับของModel</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
    </v-card>
  </v-card>
</template>



<script>
import sctab from './sctab.vue';

export default {
    components: {
    sctab,
   
  },
  data() {
    return {
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>
