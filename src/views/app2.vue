<template>
 

    
<div>
<div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file" @change="uploadImage" class="form-control">
                    </div>

                    <div class="form-group d-flex">
                      <div class="img-wrapp p-1" v-for="(image, index) in product.images" :key = index>
                
                              <img :src="image" alt="" width="80px">
                              <span class="delete-img" @click="deleteImage(image,index)">X</span>

                      </div>
                    </div>
</div>
   
</template>

<script>
import firebase from './forms/firebaseConfig'
export default {
  name: "Products",
  data(){
    return {
        products: [],
        product: {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
        },
        activeItem:null,
        modal: null,
        tag: null
    }
  },

  methods:{
    deleteImage(img,index){
      let image = firebase.storage().refFromURL(img);
      this.product.images.splice(index,1);
      image.delete().then(function() {
        console.log('image deleted');
      }).catch(function(error) {
        console.log(error);
        
        // Uh-oh, an error occurred!
        console.log('an error occurred');
      });
    },

    uploadImage(e){
      if(e.target.files[0]){
        
          let file = e.target.files[0];
    
          var storageRef = firebase.storage().ref('products/'+ Math.random() + '_'  + file.name);
    
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            console.log(snapshot);
            
          }, (error) => {
            // Handle unsuccessful uploads
            console.log(error);
            
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
            });
          });
      }
    },
   

  
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
</style>