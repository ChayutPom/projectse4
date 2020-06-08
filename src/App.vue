<template>
  <v-app >
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center" centered>
        Photo
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content >
        <router-view></router-view>
    </v-content>


          <Footer/> 

  </v-app>
  
</template>
 <script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-auth.js"></script>

<script>
import Footer from './components/Footer.vue';


export default {
  
  name: 'App',

  components: {
    Footer,
   
  },
  methods: {
  userSignOut() {
    this.$store.dispatch("userSignOut");
  }
},
  // ----------------
isAuthenticated() {
  return (
    this.$store.getters.getUser !== null &&
    this.$store.getters.getUser !== undefined
  );
},
toolbarItems() {
  return this.isAuthenticated ? [] : [
    {
      icon: "face",
      title: "Sign Up",
      link: "/singup"
    }, {
      icon: "lock_open",
      title: "Sign In",
      link: "/singin"
    }
  ];
},

  data: () => ({
    //
  }),
};
</script>
