<template>
  <v-container fluid>
    <center>
      <h2>โปรไฟล์ mODEL</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ชื่อ โปรไฟล์" ></v-text-field>
      <v-text-field label="ชื่อจริง-นามสกุล" ></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="อีเมล" ></v-text-field>
      <v-text-field label="เบอร์โทรศัพท์" ></v-text-field>
    </v-col>

    <v-row>
      <v-col cols="4">รูปภาพ</v-col>
      <v-col cols="4">
        <v-btn small color="primary">สร้างอัลบั้ม</v-btn>   
      </v-col>
      <v-col cols="4">
        <v-btn small color="primary">เพิ่มรูปภาพ</v-btn>
      </v-col>
    </v-row>

    <v-col cols="12" sm="6" md="3">
      <v-textarea label="คำแนะนำตัว" ></v-textarea>
    </v-col>
    <v-col cols="12" sm="6" md="3">
    <v-text-field label="นำ้หนัก" ></v-text-field>
    <v-text-field label="ส่วนสูง" ></v-text-field>
    <v-select
            :items="dropdown_font"
            label="เพศ "
          ></v-select>
              <button @click="insertToModel(name, realname,email,phone,introduce,we,ta)">Add</button>

      <v-text-field label="ที่อยู่" ></v-text-field>
    </v-col>
   
  </v-container>
</template>

<script>

export default {
  data: () => ({
    items: ["1", "2", "3", "4", "5"],
        dropdown_font: ['ชาย', 'หญิง'],



  }),
  
};
</script>