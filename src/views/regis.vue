<template>
  <v-app>
    <v-content>
      <v-container fluid pa-0>
        <form >
          <v-layout row wrap>
            <v-layout column align-center justify-center pa-3 mt-2>
              <v-flex xs12 mb-3 >
                <div class="login-wrapper text-xs-center">
                  <div class="display-1 font-weight-black">Sign Up</div>
                </div>
              </v-flex>

              <v-flex xs12 class="form-wrapper">
                <v-text-field
               filled
              rounded
              dense
                  label="FirstName"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  name="firstname"
                  type="firstname"
                  id="firstname"
                  v-model="firstname"
                  required
                ></v-text-field>

                <v-text-field
                  filled
              rounded
              dense
                  label="LastName"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  name="lastname"
                  type="lastname"
                  id="lastname"
                  v-model="lastname"
                  required
                ></v-text-field>

                <v-text-field
                   filled
              rounded
              dense
                  label="Phone"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  name="phone"
                  type="phone"
                  id="phone"
                  v-model="phone"
                  required
                ></v-text-field>

                <v-text-field
                   filled
              rounded
              dense
                  label="Email"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-email-outline"
                  name="email"
                  id="email"
                  type="email"
                  v-model="email"
                  required
                ></v-text-field>

                <v-text-field
                   filled
              rounded
              dense
                  label="Password"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  name="password"
                  type="password"
                  id="password"
                  v-model="password"
                  required
                ></v-text-field>
                <v-text-field
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  v-model="passwordConfirm"
                  :rules="[comparePasswords]"
                   filled
              rounded
              dense
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                ></v-text-field>
              </v-flex>

              <br />
<v-btn rounded outlined color="primary" :disabled="loading" @click="addUser(firstname,lastname,phone,email,password)">Sign Up </v-btn>
            </v-layout>
          </v-layout>
        </form>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from './forms/firebaseConfig'

var database = firebase.database()
var userdataRef = database.ref('/userdata')

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      firstname: "",
      lastname: "",
      phone:  "",
      alert: false
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    comparePasswords() {
      return this.password === this.passwordConfirm
        ? true
        : "Password and confirm password don't match";
    },
    error() {
      return this.$store.getters.getError;
    },
    loading() {
      return this.$store.getters.getLoading;
    }
  },
  methods: {
    userSignUp() {
      if (this.comparePasswords !== true) {
        return;
      }
      this.$store.dispatch("userSignUp", {
        email: this.email,
        password: this.password        
      });
      
    },
    addUser(firstname,lastname,phone,email,password){

      if (this.comparePasswords !== true) {
        return;
      }
      this.$store.dispatch("userSignUp", {
        email: this.email,
        password: this.password        
      });
      
      

          let data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
        status_photogra:false ,
        status_model: false,
        profileImg: 'https://firebasestorage.googleapis.com/v0/b/photo-992f6.appspot.com/o/image%2Fkisspng-user-profile-computer-icons-profile-5ac09245049c32.0935523415225697970189.jpg?alt=media&token=5bcb1a1a-5dfb-48c9-947e-4d0afe3bf218'

        // uid_user: firebase.auth().currentUser.uid,
      }
   
      userdataRef.push(data)
      // this.$router.push('/home'+ '/'+firebase.auth().currentUser.uid)

  },
  },
  // watch: {
  //   error(value) {
  //     if (value) {
  //       this.alert = true;
  //     }
  //   },
  //   alert(value) {
  //     if (!value) {
  //       this.$store.dispatch("setError", null);
  //     }
  //   }
  // },
  
};
</script>