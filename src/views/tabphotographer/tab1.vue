<template >
<div>
<photographer/>
<h1>adada</h1>
</div>
</template>

<script>
import photographer from '../function/photographer.vue';
import firebase from "../forms/firebaseConfig";
var database = firebase.database();
var userRef = database.ref("/userdata");
  export default {
  components: {
    photographer,
   
  },
  data () {

  },

    mounted() {
    userRef.on("value", snapshot => {

var i=0
for (Object.keys(snapshot.val())[i]; i < snapshot.numChildren(); i++) {
var key = Object.keys(snapshot.val())[i];

var data = snapshot.child(key).val();
      // console.log(data.email);

      if(data.email == firebase.auth().currentUser.email){
        console.log(data.email);
        
        userRef.orderByChild("email").equalTo(data.email).on("value", snapshot => {
  // console.log(snapshot.val().firstname);
    
     var key2 = Object.keys(snapshot.val())[0];
console.log(key2);
  this.users = snapshot.val()[key2];
  console.log(this.users.email);
  
});
        
      }
      
}
      
    
    });
    
  }
  }
</script>