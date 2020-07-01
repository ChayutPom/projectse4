<template>
  <v-card>
<sctab/>

    <v-card class="mx-auto" max-width="auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="font-weight-bold mb-2">ภาพถ่ายบุคคล22</div>
          <v-list-item-title class="mb-1">ช่างภาพที่คุณเลือก : 24Pixel</v-list-item-title>
          <v-list-item-subtitle>สถานะงาน : ทำการชำระเงิน</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
    </v-card>

    <v-stepper v-model="e13" vertical>
      <v-stepper-step step="1" complete>
        Name of step 1
      </v-stepper-step>
  
      <!-- <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content> -->
  
      <v-stepper-step step="2" complete>Name of step 2</v-stepper-step>
  
      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <!-- <v-stepper-step :rules="[() => false]" step="3">
        Ad templates
        <small>Alert message</small>
      </v-stepper-step> -->
  
     
  
      <v-stepper-step step="3">View setup instructions</v-stepper-step>
  
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
<br>
    <v-card class="mx-auto" max-width="auto" outlined>
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
