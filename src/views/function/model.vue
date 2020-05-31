<template>
<v-container fluid>
        <v-col cols="12">
          <v-row
            align="start"
            justify="start"
            class="grey lighten-5"
          >
            <v-card max-width="50%" class="mx-auto" 
            v-for="n in 6"
              :key="n"
              tile
              outlined
              href="profilemodel.vue">
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="">Name Model</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  นำ้หนัก<br>
  ส่วนสูง <br>
  แนะนำตัว<br>
    <v-row >
      <v-col cols="4" sm>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
          height="50"
          max-width="100"
        ></v-img>
      </v-col>

      <v-col cols="4" sm>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
          height="50"
          max-width="100"
        ></v-img>
      </v-col>
      <v-col cols="4" sm>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
          height="50"
          max-width="100"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
          </v-row>
        </v-col>
    </v-container>


</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
