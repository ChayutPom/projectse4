<template>
<v-card>
          <v-tabs
            v-model="tabs"
            fixed-tabs
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              href="#mobile-tabs-5-1"
              class="primary--text"
            >
              งานที่คุณค้นหา
            </v-tab>
  
            <v-tab
              href="#mobile-tabs-5-3"
              class="primary--text"
            >
              งานที่คุณประกาศหา
                       </v-tab>
          </v-tabs>

  
    
        <v-card
      class="mx-auto"
      max-width="auto"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="font-weight-bold mb-2">ภาพถ่ายบุคคล</div>
          <v-list-item-title class=" mb-1">ช่างภาพที่คุณเลือก : 24Pixel</v-list-item-title>
          <v-list-item-subtitle>สถานะงาน : ทำการชำระเงิน</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
    </v-card>
 

<v-stepper>
      <v-stepper-header>
        <v-stepper-step
          complete
          editable
          step="1"
        >
          รอช่างภาพตกลง
        </v-stepper-step>
  
        <v-divider></v-divider>
        
        <v-stepper-step
          complete
          step="2"
        >ชำระเงิน</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step
          step="3"
          editable
        >
          ดำเนินงาน
        </v-stepper-step>

        <v-divider></v-divider>
  
        <v-stepper-step
          step="4"
          editable
        >
         เสร็จเรียบร้อย
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>


 <v-card
      class="mx-auto"
      max-width="auto"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="font-weight-bold mb-2">หา Model</div>
          <v-list-item-title class=" mb-1">Model ที่คุณเลือก : 24Pixel</v-list-item-title>
          <v-list-item-subtitle>สถานะงาน : รอการตอบกลับของModel</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
    </v-card>
    
    </v-card>



    
</template>



<script>
export default {
 data () {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
};
</script>
