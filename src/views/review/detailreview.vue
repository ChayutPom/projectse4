<template>
  <v-container fluid>
    <v-row align="start" justify="start" class="grey lighten-5">
      <v-card
        max-width="98%"
        class="mx-auto"
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
        tile
        outlined
        href="detailreview.vue"
      >
        <v-card>
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class>
                <v-card-title v-text="card.title"></v-card-title>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card style="margin-top: 5px;">
          <v-card-text>“หาดป่าตอง” ถือเป็นหาดที่มีชื่อเสียงมากที่สุดของภูเก็ตเลยก็ว่าได้ และเป็นหาดขวัญใจนักท่องเที่ยวที่อยากจะมาพักผ่อน อ่านต่อได้ที่</v-card-text>
        </v-card>

        <v-card style="margin-top: 5px;">
          <v-row>
            <v-col cols="6">
              <v-img :src="card.src" height="220" max-width="99%"></v-img>
            </v-col>

            <v-col cols="6">
              <v-img :src="card.src" height="220" max-width="99%"></v-img>
            </v-col>
            <v-col cols="6">
              <v-img :src="card.src" height="220" max-width="99%"></v-img>
            </v-col>
            <v-col cols="6">
              <v-img :src="card.src" height="220" max-width="99%"></v-img>
            </v-col>
          </v-row>
        </v-card>


<v-card 
 max-width="auto"
      class="mx-auto">
        <v-row>
          <v-col cols="6">
            <v-btn class icons-and-text color="lighten-12">
              <v-icon small>mdi-thumb-up</v-icon>1234 Like
            </v-btn> 
          </v-col>
          <v-col cols="6">
            <v-btn class icons-and-text color="lighten-12">
              <v-icon small>mdi-comment</v-icon>50 Comment
            </v-btn> 
          </v-col>
        </v-row>
        
     
   
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="">ABCD</v-list-item-title>
          <v-list-item-subtitle>comment comment comment comment</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="">ABCD</v-list-item-title>
          <v-list-item-subtitle>comment comment comment comment</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
  

    </v-card>
      </v-card>
    </v-row>
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
      }
    ]
  })
};
</script>

