<template>
  <v-container fluid>
    <center>
      <h2>โปรไฟล์ ช่างภาพ</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ชื่อ โปรไฟล์" v-model="name"></v-text-field>
      <v-text-field label="ชื่อจริง-นามสกุล" v-model="realname"></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-text-field label="อีเมล" v-model="email"></v-text-field>
      <v-text-field label="เบอร์โทรศัพท์" v-model="phone"></v-text-field>
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
      <v-textarea label="คำแนะนำตัว" v-model="introduce"></v-textarea>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ที่อยู่"  v-model="address"></v-text-field>
    </v-col>
    <button @click="insertToContact(name, realname,email,phone,introduce,address)">Add</button>
    <v-col cols="12" sm="6" md="3">
      ประเภทงานที่รับและราคา
      <v-row><v-col cols="5" ><v-checkbox v-model="ex1" label="ภาพถ่ายบุคคล" color="success" value="success" hide-details></v-checkbox></v-col>
      <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex2" label="รับปริญญา" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex3" label="พรีเวดดิ้ง" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex4" label="งานแต่งงาน" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex5" label="งานอีเวน" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex6" label="สินค้า/อาหาร" color="success" value="success" hide-details></v-checkbox></v-col>
        <v-col cols="7" ><v-text-field label="" solo></v-text-field></v-col></v-row>
      <v-row><v-col cols="5" ><v-checkbox v-model="ex7" label="สถาปัตตยกรรม" color="success" value="success" hide-details></v-checkbox></v-col>
       <v-col cols="7" > <v-text-field label="" solo></v-text-field></v-col></v-row>
    </v-col>

  </v-container>
</template>
<script>
// import firebase from "firebase";

// var database = firebase.database()
// var contactRef = database.ref('/contacts')
// export default {
//   data: () => ({
//     items: ["1", "2", "3", "4", "5"],

//         contacts: {},
//      name: '', 
//      realname: '',
//      email: '',
//      phone: '',
//      introduce: '',
//      address: '',
//      ex1: '',
//      ex2: '',
//      ex3: '',
//      ex4: '',
//      ex5: '',
//      ex6: '',
//      ex7: '',
//   }),
//  methods: {
//     insertToContact (name, realname,email,phone,introduce,address) {
//       let data = {
//         name: name,
//         realname: realname,
//         email: email,
//         phone: phone,
//         introduce: introduce,
//         address: address,
//       }
//       contactRef.push(data)
//       this.name = ''
//       this.realname = ''
//       this.email = ''
//       this.phone = ''
//       this.introduce = ''
//       this.address = ''
//     },
    
//   },
//   mounted () {
//     contactRef.on('value', (snapshot) => {
//       this.contacts = snapshot.val()
//     })
//   }

// };
</script>