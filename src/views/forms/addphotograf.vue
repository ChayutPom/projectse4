<template>
  <v-container fluid>

    <div v-if="users == false">
      <center>
        <h2>โปรไฟล์ ช่างภาพ</h2>
     
      <br />
 <v-list-item-avatar color="grey"  height="150" width="150"> <input
                  type="file"
                  id="fileUploadProfile"
                  multiple
                  hidden
                  accept="image/png, image/jpeg, image/bmp"
                  @change="uploadProfile"
                  class="form-control"
                />     
  <img v-if="Profile.images == ''" @click="chooseFilesProfile()"   src="https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/kisspng-user-profile-computer-icons-profile-5ac09245049c32.0935523415225697970189.jpg?alt=media&token=9945f225-6db8-417a-ae7b-e239b2be5943" alt width="150px" />   
 <img v-if="Profile.images != ''" @click="chooseFilesProfile()"   :src="Profile.images[Profile.images.length-1]" alt width="150px" />   
</v-list-item-avatar> </center>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="ชื่อ โปรไฟล์"
          filled
          rounded
          dense
          outlined
          v-model="name"
        ></v-text-field>
        <v-text-field
          label="ชื่อจริง-นามสกุล"
          filled
          rounded
          dense
          outlined
          v-model="realname"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="อีเมล"
          filled
          rounded
          dense
          v-model="email"
        ></v-text-field>
        <v-select
          :items="items2"
          label="เพศ"
          dense
          rounded
          outlined
          v-model="gender"
        ></v-select>
      </v-col>

      <v-row>
        <v-col cols>
          <div>
            <div>
              รูปภาพ
              <div class="form-group">
                <!-- <label for="product_image">Product Images</label> -->

                <input
                  type="file"
                  id="fileUpload"
                  multiple
                  hidden
                  accept="image/png, image/jpeg, image/bmp"
                  @change="uploadImage"
                  class="form-control"
                />

                 <v-row justify="center">
                   <v-btn color="primary"
            dark  @click="chooseFiles()">เพิ่มรูปภาพ</v-btn>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            สร้างอัลบั้ม
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">สร้างอัลบั้ม</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                
            
                <v-col cols="12">
                  <v-text-field
                    label="ชื่ออัลบั้ม"
                    required
                    v-model="album"
                  ></v-text-field>
                  <input
                  type="file"
                  id="fileUploadAl"
                  multiple
                  hidden
                  accept="image/png, image/jpeg, image/bmp"
                  @change="uploadImageAl"
                  class="form-control"
                />

                 <v-row justify="center">
                   <v-btn color="primary"
            dark  @click="chooseFilesAl()">เพิ่มรูปภาพ</v-btn></v-row>
                </v-col>
              <div class="form-group d-flex">
                <div
                  class="img-wrapp p-1"
                  v-for="(image, index) in Album.images"
                  :key="index"
                >
                  <img :src="image" alt width="80px" />
                  <span class="delete-img" @click="deleteImage(image, index)"
                    >X</span
                  >
                </div>
              </div>
              
              </v-row>
            </v-container>
          
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false, SavechooseFilesAl(album)"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
              </div>
<!-- ///////////////////////////////////////////////////////////////////////////////// -->
              <div v-if="product.images.length > 0" class="form-group d-flex" >
        <v-card
      class="mx-auto"
      max-width="200"
    >
      <v-img
        class="white--text align-end"
        height="170px"
       :src="product.images[0]"
      >
        <v-card-title>อัลบั้ม ทั่วไป</v-card-title>
      </v-img>
  
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          ลบ
        </v-btn>
  

   <v-dialog
        v-model="dialog2"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            ดูรูปในอัลบั้ม
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
<!--             //// -->
<div
                  v-for="(image, index) in product.images"
                  :key="index"
                >
                <v-img
                  :src="image"
                  :lazy-src="image"
                  aspect-ratio="1"
                  max-width="70"
                ></v-img>
                  
                  <span class="delete-img" @click="deleteImage(image, index)"
                    >X</span
                  >
                </div>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog2 = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog2 = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      </v-card-actions>
    </v-card>
              </div>

     <!-- ////////////////////          -->
     <div v-if="Album.images.length > 0" class="form-group d-flex" >
        <v-card
      class="mx-auto"
      max-width="200"
    >
      <v-img
        class="white--text align-end"
        height="170px"
       :src="Album.images[0]"
      >
        <v-card-title>อัลบั้ม {{albumname}}</v-card-title>
      </v-img>
  
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          ลบ
        </v-btn>
  

   <v-dialog
        v-model="dialog2"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            ดูรูปในอัลบั้ม
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
<!--             //// -->
<div
                  v-for="(image2, index) in Album.images"
                  :key="index"
                >
                <v-img
                  :src="image2"
                  :lazy-src="image2"
                  aspect-ratio="1"
                  max-width="70"
                ></v-img>
                  
                  <span class="delete-img" @click="deleteImage(image2, index)"
                    >X</span
                  >
                </div>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog2 = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog2 = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      </v-card-actions>
    </v-card>
              </div>

            </div>
          </div>
        </v-col>
      </v-row>

      <v-col cols="12" sm="6" md="3">
        <v-textarea
          label="คำแนะนำตัว"
          filled
          rounded
          dense
          v-model="introduce"
        ></v-textarea>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          v-if="this.$store.state.location.locationData == null"
          label="สถานที่"
          filled
          rounded
          dense
          v-model="address"
          @click="location('photogra')"
        ></v-text-field>
        <v-text-field
          v-if="this.$store.state.location.locationData != null"
          :label="
            this.$store.state.location.locationData.subdistrict +
            this.$store.state.location.locationData.district +
            this.$store.state.location.locationData.province +
            this.$store.state.location.locationData.country 
          "
          filled
          rounded
          dense
          v-model="address"
          @click="location('photogra')"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        ประเภทงานที่รับและราคา ต่อชั่วโมง
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
            <v-text-field
              filled
              rounded
              dense
              v-model="price1"
              label
              solo
            ></v-text-field>
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
            <v-text-field
              filled
              rounded
              dense
              v-model="price2"
              label
              solo
            ></v-text-field>
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
            <v-text-field
              filled
              rounded
              dense
              v-model="price3"
              label
              solo
            ></v-text-field>
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
            <v-text-field
              filled
              rounded
              dense
              v-model="price4"
              label
              solo
            ></v-text-field>
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
            <v-text-field
              filled
              rounded
              dense
              v-model="price5"
              label
              solo
            ></v-text-field>
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
            <v-text-field
              filled
              rounded
              dense
              v-model="price6"
              label
              solo
            ></v-text-field>
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
            <v-text-field
              filled
              rounded
              dense
              v-model="price7"
              label
              solo
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>

      <div class="text-center">
        <v-bottom-sheet v-model="sheet" inset>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="orange" dark v-bind="attrs" v-on="on">
              ยืนยันสมัคร
            </v-btn>
          </template>
          <v-sheet class="text-center" height="200px">
            <v-btn
              class="mt-6"
              text
              color="error"
              @click="
                sheet = !sheet;
                insertToPhotographer(
                  Profile.images[Profile.images.length-1],
                  name,
                  realname,
                  email,
                  gender,
                  introduce,
                  address,
                  product.images,
                  Album.images,
                  album,
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
                );
              "
              >close</v-btn
            >
            <div class="my-3">
              ข้อมูลของคุณถูกส่งไปให้แอดมินพิจารณาเรียบร้อย รอระบบอนุมัติ
            </div>
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

    <!-- ===========================================================================================================================================
=========================================================================================================================================== -->

    <div v-if="users == true">
      {{users.status_photogra}}
      <v-container   v-for="(pho, index) in photograProfile"
                  :key="index">
        <v-card class="mx-auto" max-width="434" tile>
          <v-img height="100%">
          
            <v-row align="end" class="fill-height">
              <v-col cols="3"></v-col>
              <v-col class cols="7">
                <v-avatar class="profile" color="grey" size="164">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-img>

          <v-form>
            <v-container class="center" style="width: 80%">
              <v-row>
                <v-text-field
                   :label="pho.email"
                  single-line
                  solo
                ></v-text-field>

                <v-text-field
                  :label="pho.address"
                  single-line
                  solo
                ></v-text-field>

                <v-text-field
                  :label="pho.name"
                  single-line
                  solo
                ></v-text-field>

                <v-text-field
                  :label="pho.realname"
                  single-line
                  solo
                ></v-text-field>
              </v-row>
            </v-container>
          </v-form>
        </v-card>

        <center>
          <v-btn text color="primary" :href="'/album/' +index">อัลบั้ม</v-btn>
     </center>
        <v-row class>
          <v-col cols="4" sm v-for="(pho2, index) in pho.img"
                  :key="index">
            <v-img
              :src="pho2.image[0]"
              height="100"
              max-width
            ></v-img>
          </v-col>
          <!-- <v-col cols="4" sm>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="100"
              max-width
            ></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="100"
              max-width
            ></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="100"
              max-width
            ></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="100"
              max-width
            ></v-img>
          </v-col>
          <v-col cols="4" sm>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="100"
              max-width
            ></v-img>
          </v-col> -->
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
    photograProfile:{},
    status_photogra: null,
        dialog: false,
    show: false,
        dialog2: false,
    items: ["1", "2", "3", "4", "5"],
    items2: ["ชาย", "หญิง"],
    sheet: false,
    products: [],
    users: {},
    imagePhoto:[],
    product: {
      images: [],
    },
    nameAlbum: '',
    albumname:'',
    Profile: {
      images: [],
    },
    Album: {
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
    album: '',
    typePhoto: {
      type: [],
      price: [],
    },
    imageData: null,
    uploadValue: 0,
  }),
  methods: {
    location(lo) {
      this.$router.push("/" + lo + "/location.vue");
    },
    insertToPhotographer(
      profile,
      name,
      realname,
      email,
      gender,
      introduce,
      address,
      images,
      images2,
      album,
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
      console.log(album);
      console.log(  images2.length);
      console.log(  images.length);
      if(images2.length >0){
const datarec ={
 nameAlbum : album,
image : images2
}
console.log(datarec);
this.imagePhoto.push(datarec)
      }
      if(images.length>0){
const datarec2 ={
 nameAlbum : 'ทั่วไป',
image :images
}
console.log(datarec2);
this.imagePhoto.push(datarec2)
      }
console.log(this.imagePhoto);
      console.log(this.users.status_photogra);
      let data = {
        name: name,
        realname: realname,
        email: email,
        gender: gender,
        status: false,
        introduce: introduce,
        address: this.$store.state.location,
        img: this.imagePhoto,
        imgProfile: profile
        ,
        keyUser: this.$store.state.keyUserF,
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
//     addAlbum(album,img){
// console.log(album);
// console.log(img);
// this.nameAlbum = album
// this.image = img
// const datarec ={
//  nameAlbum = album,
// image = img
// }
// this.imagePhoto.push(datarec)
//     },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    chooseFilesProfile(){
      document.getElementById("fileUploadProfile").click();
    },
    chooseFilesAl() {
      document.getElementById("fileUploadAl").click();
    },
    SavechooseFilesAl(album){
      console.log(album);
      this.albumname = album
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
    uploadProfile(e) {
      var i = 0;
      for (i; i <= e.target.files.length - 1; i++) {
        if (e.target.files[i]) {
          let file = e.target.files[i];
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
                this.Profile.images.push(downloadURL);
                console.log(this.Profile.images[this.Profile.images.length-1]);
              });
            }
          );
        }
      }
    },
uploadImageAl(e) {
      var i = 0;
      for (i; i <= e.target.files.length - 1; i++) {
        if (e.target.files[i]) {
          let file = e.target.files[i];
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
                this.Album.images.push(downloadURL);
                console.log(this.product.images);
              });
            }
          );
        }
      }
    },
    uploadImage(e) {
      var i = 0;
      for (i; i <= e.target.files.length - 1; i++) {
        if (e.target.files[i]) {
          let file = e.target.files[i];
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
      }
    },
  },
  mounted() {
    userRef.orderByKey().equalTo(this.$store.state.keyUserF).on("value", (snapshot) => {
      this.users = snapshot.val()[this.$store.state.keyUserF].status_photogra;
      console.log(this.users);
    });
      photographerRef.orderByChild('keyUser').equalTo(this.$store.state.keyUserF).on("value", (snapshot) => {
      this.photograProfile = snapshot.val();
      // this.users = this.$store.state.keyUser;
      console.log(this.photograProfile);
    });
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