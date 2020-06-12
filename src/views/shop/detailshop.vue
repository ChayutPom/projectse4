<template>
    <v-card
      class="mx-auto"
      max-width="500"
    >

      <v-container fluid>
          <v-card>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="170px"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        </v-card>
      </v-container>
 <v-container fluid>
     <v-card style="margin-top: -10px;">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Canon Eos M50</v-list-item-title>
          <v-list-item-title class="headline mb-3" style="font-size: 1.0rem !important;">ผู้ขาย : 24Pixel</v-list-item-title>
            <v-card-text>“ความละเอียดอยู่ที่ 24 ล้านพิกเซล จำนวนพิกเซลเท่านี้ก็ถือว่ามาตรฐานครับ เหมาะกับการใช้งานทั่วๆไป</v-card-text>
              <v-card-title > 14,500</v-card-title>
        </v-list-item-content>
  
      
      </v-list-item>
  
     <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn color="primary" > ซื้อสินค้า </v-btn>
        </div></v-col>
        </v-card>
      </v-container>
    </v-card>
</template>
<script>
export default {
  data: () => ({
   cards: [
      { title: '', src: 'https://www.กล้องมือสอง.net/images/full/camera120200201082737.jpg', flex: 12 },
      { title: '', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
      { title: '', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
       { title: '', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
    ],
  }),

};
</script>