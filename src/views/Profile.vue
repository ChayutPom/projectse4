
<template>
  <v-list>
    <v-container >
      <v-row align="center"
            justify="center">
            <v-col >
      <v-avatar  color="indigo" height="90" width="90">
        <v-icon size="85" dark>mdi-account-circle</v-icon>
        
      </v-avatar></v-col >
      
      <v-col >
      <p class=" title center ">Chayut Auitakul</p></v-col >
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row align="center"
            justify="center">
        <v-col >

        
    <v-icon  >mdi-currency-btc</v-icon>15000  
        </v-col > 

        <v-btn class="ma-3 sm-12 center" outlined color="indigo">เติมเครดิต</v-btn>

        <v-btn class="ma-3 sm-12 center" outlined color="indigo">ถอนเครดิต</v-btn> 
      </v-row>
    </v-container>

    <v-list-item-group v-model="item" color="primary">
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { title: "ข้อมูลส่วนตัว", icon: " fa-id-badge" ,route:"/"},
        { title: "สร้างProfileช่างภาพ", icon: "fa-address-card",route:"/addphotograf" },
        { title: "สร้างProfile นางแบบ/นายแบบ", icon: "fa-address-card",route:"/addmodel" },
        { title: "คะแนน", icon: " fa-coins",route:"/" },
        { title: "ลงขายสินค้า", icon: "fa-cart-plus",route:"/" },
        { title: "ลงรีวิว", icon: " fa-star",route:"/" },
        { title: "ตั้งค่า", icon: " fa-cog" ,route:"/"}
      ]
    };
  }
};
</script>
