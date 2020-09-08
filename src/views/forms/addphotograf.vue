<template>
  <v-container fluid>
    <div v-if="users.status_photogra == false">
      <center>
        <h2>โปรไฟล์ ช่างภาพ</h2>
      </center>
      <br />

      <v-col cols="12" sm="6" md="3">
        <v-text-field label="ชื่อ โปรไฟล์" filled rounded dense outlined v-model="name"></v-text-field>
        <v-text-field label="ชื่อจริง-นามสกุล" filled rounded dense outlined v-model="realname"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field label="อีเมล" filled rounded dense v-model="email"></v-text-field>
        <v-select :items="items2" label="เพศ" dense rounded outlined v-model="gender"></v-select>
      </v-col>

      <v-row>
        <v-col cols>
          <div>
            <div>
              รูปภาพ
              <div class="form-group">
                <!-- <label for="product_image">Product Images</label> -->
                <input type="file" @change="uploadImage" class="form-control" />
              </div>

              <div class="form-group d-flex">
                <div class="img-wrapp p-1" v-for="(image, index) in product.images" :key="index">
                  <img :src="image" alt width="80px" />
                  <span class="delete-img" @click="deleteImage(image,index)">X</span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-col cols="12" sm="6" md="3">
        <v-textarea label="คำแนะนำตัว" filled rounded dense v-model="introduce"></v-textarea>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="ที่อยู่" filled rounded dense v-model="address"></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        ประเภทงานที่รับและราคา
        <v-row>
          <v-col cols="5">
            <v-checkbox
              v-model="photo1"
              label="ภาพถ่ายบุคคล"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="7">
            <v-text-field filled rounded dense v-model="price1" label solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-checkbox
              v-model="photo2"
              label="รับปริญญา"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="7">
            <v-text-field filled rounded dense v-model="price2" label solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-checkbox
              v-model="photo3"
              label="พรีเวดดิ้ง"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="7">
            <v-text-field filled rounded dense v-model="price3" label solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-checkbox
              v-model="photo4"
              label="งานแต่งงาน"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="7">
            <v-text-field filled rounded dense v-model="price4" label solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-checkbox
              v-model="photo5"
              label="งานอีเวน"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="7">
            <v-text-field filled rounded dense v-model="price5" label solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-checkbox
              v-model="photo6"
              label="สินค้า/อาหาร"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="7">
            <v-text-field filled rounded dense v-model="price6" label solo></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-checkbox
              v-model="photo7"
              label="สถาปัตตยกรรม"
              color="success"
              value="success"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="7">
            <v-text-field filled rounded dense v-model="price7" label solo></v-text-field>
          </v-col>
        </v-row>
      </v-col>








 <div class="text-center">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="orange"
            dark
            v-bind="attrs"
            v-on="on"
          >
            ยืนยันสมัคร
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheet = !sheet;insertToPhotographer(name, realname,email,gender,introduce,address,product.images,photo1,photo2,photo3,photo4,photo5,photo6,photo7,price1,price2,price3,price4,price5,price6,price7)"

          >close</v-btn>
          <div class="my-3">ข้อมูลของคุณถูกส่งไปให้แอดมินพิจารณาเรียบร้อย รอระบบอนุมัติ</div>
        </v-sheet>
      </v-bottom-sheet>
    </div>




    <!-- <center><v-btn
        rounded
        outlined
        color="primary"
        :disabled="loading"
        @click="insertToPhotographer(name, realname,email,gender,introduce,address,product.images,photo1,photo2,photo3,photo4,photo5,photo6,photo7,price1,price2,price3,price4,price5,price6,price7)"
      >ยืนยัน</v-btn></center> -->
    </div>

    <div v-if="users.status_photogra == true">
      <v-container>
        <v-card class="mx-auto" max-width="434" tile>
          <v-img height="100%">
            <v-row align="end" class="fill-height">
              <v-col cols="3"></v-col>
              <v-col class cols="7">
                <v-avatar class="profile" color="grey" size="164">
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-img>

          <v-form>
            <v-container class="center" style="width:80%;">
              <v-row>
                <v-text-field label="Text input" single-line solo></v-text-field>

                <v-text-field label="Text input" single-line solo></v-text-field>

                <v-text-field label="Text input" single-line solo></v-text-field>

                <v-text-field label="Text input" single-line solo></v-text-field>
              </v-row>
            </v-container>
          </v-form>
        </v-card>

        <center>
          <v-btn text color="primary" href>อัลบั้ม</v-btn>
        </center>
        <v-row class>
          <v-col cols="4" sm>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="100" max-width></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="100" max-width></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="100" max-width></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="100" max-width></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="100" max-width></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="100" max-width></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>
<script>
import firebase from "./firebaseConfig";

var database = firebase.database();
var photographerRef = database.ref("/photographer");
var userRef = database.ref("/userdata");

export default {
  data: () => ({

    items: ["1", "2", "3", "4", "5"],
    items2: ["ชาย", "หญิง"],
 sheet: false,
    products: [],
    users: {},
    product: {
      images: [],
    },
    name: "",
    realname: "",
    email: "",
    gender: "",
    introduce: "",
    address: "",
    photo1: "",
    photo2: "",
    photo3: "",
    photo4: "",
    photo5: "",
    photo6: "",
    photo7: "",
    price1: "",
    price2: "",
    price3: "",
    price4: "",
    price5: "",
    price6: "",
    price7: "",
    img: {},
    typePhoto: {
      type: [],
      price: [],
    },
    imageData: null,
    uploadValue: 0,
  }),
  methods: {
    insertToPhotographer(
      name,
      realname,
      email,
      gender,
      introduce,
      address,
      images,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      price1,
      price2,
      price3,
      price4,
      price5,
      price6,
      price7
    ) {
      console.log(photo1);
      console.log(images);

                console.log(this.users.status_photogra);

                let data = {
                  name: name,
                  realname: realname,
                  email: email,
                  gender: gender,
                  introduce: introduce,
                  address: address,
                  img: images,
                  keyUser:this.$store.state.keyUserF,
                  typePhoto: {
                    type: {
                      photo1,
                      photo2,
                      photo3,
                      photo4,
                      photo5,
                      photo6,
                      photo7,
                    },
                    price: {
                      price1,
                      price2,
                      price3,
                      price4,
                      price5,
                      price6,
                      price7,
                    },
                  },
                };
                userRef.child(this.$store.state.keyUserF).update({
                  status_photogra: true,
                });
this.$store.dispatch("editUser", {
        status_photogra: true,
      });
                photographerRef
                  .push(data)
                  .then(() => {
                    console.log("Document successfully written!");
                    console.log(data);
                  })
                  .catch((error) => {
                    console.error("Error writing document: ", error);
                  });
                this.name = "";
                this.realname = "";
                this.email = "";
                this.phone = "";
                this.introduce = "";
                this.address = "";

          
        

    },
    deleteImage(img, index) {
      let image = firebase.storage().refFromURL(img);
      this.product.images.splice(index, 1);
      image
        .delete()
        .then(function () {
          console.log("image deleted");
        })
        .catch(function (error) {
          console.log(error);

          // Uh-oh, an error occurred!
          console.log("an error occurred");
        });
    },

    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = firebase
          .storage()
          .ref("products/" + Math.random() + "_" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            console.log(snapshot);
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
              console.log(this.product.images);
            });
          }
        );
      }
    },
  },

  mounted() {
    photographerRef.on("value", (snapshot) => {
      this.photographers = snapshot.val();
      this.users =this.$store.state.keyUser
      console.log(this.users);
    })
        
  },
};
</script>
<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
</style>