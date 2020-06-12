<template>
  <v-app >
    <div class=" ">
    <v-app-bar
      app
      color="primary"
      dark
    ><button onclick="window.history.go(-1); return false;"
               v-if="!$route.meta.hideBack" ><v-icon >mdi-keyboard-backspace</v-icon></button>

      <div class="d-flex align-center" centered>
        
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content >
        <router-view ></router-view>
    </v-content>
    
     

 </div>
 <v-footer
        color="white"
        class=""
         height="75"
      >
      </v-footer>
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

