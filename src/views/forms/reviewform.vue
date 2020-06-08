<template>
  <v-container fluid>
    <center>
      <h2>เขียนรีวิว</h2>
    </center>
    <br />
    <v-col cols="12" sm="6" md="3">
      หัวข้อ
      <v-text-field solo  v-model="titel"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field solo  v-model="location"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      รายละเอียดรีวิว
      <v-textarea solo  v-model="detailReview"></v-textarea>
    </v-col>
<v-btn color="primary"   @click="insertToReview(titel, location,detailReview)" >ลงรีวิว</v-btn>
    <v-col cols="12" sm="6" md="3">
      เพิ่มรูปภาพ
      <v-file-input label="Photo" filled prepend-icon="mdi-camera"></v-file-input>
    </v-col>
     <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn color="primary"  href="" @click="insertToReivew(titel, location,detailReview)" >ลงรีวิว</v-btn>
        </div></v-col>
  </v-container>
</template>
<script>

import firebase from './firebaseConfig'

var database = firebase.database()
var reviewRef = database.ref('/review')
export default {
  data: () => ({


        review: {},
     titel: '', 
     location: '',
     detailReview: '',
    
  }),
 methods: {
    insertToReview (titel, location,detailReview) {
      let data = {
        titel: titel,
        location: location,
        detailReview: detailReview,

      }
      reviewRef.push(data)
      this.titel = ''
      this.location = ''
      this.detailReview = ''

    },
    
  },
  mounted () {
    reviewRef.on('value', (snapshot) => {
      this.reviews = snapshot.val()
    })
  }

};
</script>