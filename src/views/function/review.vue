<template>
    <v-container fluid>
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
            href="detailreview.vue"
          >
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class>
                  <!-- <v-card-title v-text="card.title"></v-card-title> -->
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-row>
              <v-col cols="4" sm>
                <v-img :src="card.src" height="50" max-width="100"></v-img>
              </v-col>

              <v-col cols="4" sm>
                <v-img :src="card.src" height="50" max-width="100"></v-img>
              </v-col>
              <v-col cols="4" sm>
                <v-img :src="card.src" height="50" max-width="100"></v-img>
              </v-col>
</v-row>
              <v-card-text>“หาดป่าตอง” ถือเป็นหาดที่มีชื่อเสียงมากที่สุดของภูเก็ตเลยก็ว่าได้ และเป็นหาดขวัญใจนักท่องเที่ยวที่อยากจะมาพักผ่อน อ่านต่อได้ที่</v-card-text>

         
             <v-row><v-col cols="6"> <v-btn class=""  icons-and-text color="lighten-12">
                <v-icon small>mdi-thumb-up</v-icon>1234 
              </v-btn></v-col>
              <v-col cols="6" ><v-btn class="" icons-and-text  color="lighten-12">
                <v-icon small>mdi-comment</v-icon>50  
              </v-btn></v-col></v-row>
              
            
          </v-card>
        </v-row>
      </v-col>
    </v-container>
</template>


<script>
export default {
  data: () => ({
    cards: [
      {
        title: "หาดป่าตอง",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "ภูเก็ตทาว์น",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      },
      {
        title: "เมืองเก่าภูเก็ต",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "คลับเฮ้าส์",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      }
    ],
  })
};
</script>

