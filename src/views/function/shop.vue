<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex" style="margin-top: -12px;" >
          <v-select :items="items1" label="ประเภทสินค้า" dense solo></v-select>
        </v-col>
        <v-col class="d-flex"  style="margin-top: -12px;">
          <v-select :items="items2" label="ราคา" dense solo></v-select>
        </v-col>

        <v-btn icon >
          <v-icon>fas fa-search</v-icon>
        </v-btn>
     </v-row>

      <v-col cols="12">
        <v-row align="start" justify="start" class="grey lighten-5">
          <v-card
            max-width="49%"
            class="mx-auto"
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            tile
            outlined
            href="detailshop.vue"
          >
            <v-row>
              <v-col>
                <v-img :src="card.src" height="150px" max-width="auto"></v-img>
              </v-col>

              <v-card-title v-text="card.title"></v-card-title>
              <v-card-text>“ความละเอียดอยู่ที่ 24 ล้านพิกเซล จำนวนพิกเซลเท่านี้ก็ถือว่ามาตรฐานครับ เหมาะกับการใช้งานทั่วๆไป</v-card-text>
              <v-card-title > 14,500</v-card-title>

              
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items1: ["กล้อง", "เลนส์"],
    items2: ["0-5,000", "5,001-10,000"],
    cards: [
      {
        title: "Canon Eos M50",
        src:
          "https://www.กล้องมือสอง.net/images/full/camera120200201082737.jpg",
        flex: 6
      },
      {
        title: "Canon eos 200d",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      },
      {
        title: "Canon eos 80d",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Canon eos 5d mark II",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
    ],

    //
  })
};
</script>
