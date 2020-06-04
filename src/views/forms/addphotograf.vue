<template>
  <v-container fluid>
    <center>
      <h2>โปรไฟล์ ช่างภาพ</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ชื่อ โปรไฟล์"></v-text-field>
      <v-text-field label="ชื่อจริง-นามสกุล"></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="อีเมล"></v-text-field>
      <v-text-field label="เบอร์โทรศัพท์"></v-text-field>
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
      <v-textarea label="คำแนะนำตัว"></v-textarea>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ที่อยู่"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      ประเภทงานที่รับและราคา
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="ภาพถ่ายบุคคล" color="success" value="success" hide-details></v-checkbox></v-col>
      <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="รับปริญญา" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="พรีเวดดิ้ง" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="งานแต่งงาน" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="งานอีเวน" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="สินค้า/อาหาร" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="สถาปัตตยกรรม" color="success" value="success" hide-details></v-checkbox></v-col>
       <v-col cols="7" > <v-text-field label="" solo></v-text-field></v-col></v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["1", "2", "3", "4", "5"]
  })
};
</script>