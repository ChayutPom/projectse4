<template>
  <v-container fluid>
    <center>
      <h2>เพอ่มสินค้าที่ต้องการขาย</h2>
    </center>
    <br />
    <v-col cols="12" sm="6" md="3">
      ชื่อสินค้า
      <v-text-field solo v-model="name"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      ราคา
      <v-text-field solo v-model="price"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      รายละเอียดสินค้า
      <v-textarea solo v-model="detailProduct"></v-textarea>
    </v-col>
<v-btn color="primary"  href="" @click="insertToShop(name, price,detailProduct)">เพิ่มสินค้า</v-btn>
    <v-col cols="12" sm="6" md="3">
      เพิ่มรูปภาพ
      <v-file-input label="Photo" filled prepend-icon="mdi-camera"></v-file-input>
    </v-col>
     <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn color="primary"  href="">เพิ่มสินค้า</v-btn>
        </div></v-col>
  </v-container>
</template>
<script>

import firebase from './firebaseConfig'

var database = firebase.database()
var shopRef = database.ref('/shop')
export default {
  data: () => ({


        shop: {},
     name: '', 
     price: '',
     detailProduct: '',
    
  }),
 methods: {
    insertToShop (name, price,detailProduct) {
      let data = {
        name: name,
        price: price,
        detailProduct: detailProduct,

      }
      shopRef.push(data)
      this.name = ''
      this.price = ''
      this.detailProduct = ''

    },
    
  },
  mounted () {
    shopRef.on('value', (snapshot) => {
      this.shops = snapshot.val()
    })
  }

};
</script>