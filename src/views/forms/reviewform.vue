<template>
  <v-container fluid>
    <center>
      <h2>เขียนรีวิว</h2>
    </center>
    <br />
    <v-col cols="12" sm="6" md="3">
      หัวข้อ
      <v-text-field solo></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field solo></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      รายละเอียดรีวิว
      <v-textarea solo></v-textarea>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      เพิ่มรูปภาพ
      <v-file-input label="Photo" filled prepend-icon="mdi-camera"></v-file-input>
    </v-col>
     <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn color="primary"  href="">ลงรีวิว</v-btn>
        </div></v-col>
  </v-container>
</template>