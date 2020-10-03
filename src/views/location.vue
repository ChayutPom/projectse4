<template>  
<div>   
    <v-card      height="650"  >
     <v-btn small v-on:click="say()">Normal</v-btn>

<longdo-map 
   @load="test" 
   :zoom="10" 
   :lastViw="false"
> 

</longdo-map>


    </v-card >
>
</div>

</template>
<script>
import { LongdoMap   } from 'longdo-map-vue'
LongdoMap.init('19d834440f9ee5958b68123c8a4c6d6b')
// import $ from 'jquery'
import axios from 'axios';


export default {
   name: 'Foo',
    components: {    
       LongdoMap,
       
    },
  data() {
    return {
      dialog: false,
            info: null,
      map:{},
 markers: [
      ]
    };
  },
    
methods:{
  
     test(map) {
  this.map2 = map

       var result = map.location();

       console.log(result);


// map.Event.bind('location', function() {
//   var location = map.location();

// console.log(location);
// });
// map.Event.bind('click', function() {

 
// });

map.Event.bind('overlayClick', function(overlay) {
    console.log(overlay)
    
});

     },
say: function () { 
console.log( this.map2.location());
// var marker = new longdo.Marker( this.map2.location());
// this.map2.Overlays.add(marker);

  axios
      .get('https://api.longdo.com/map/services/address?lon='+this.map2.location().lon+'&lat='+this.map2.location().lat+'&noelevation=1&key=19d834440f9ee5958b68123c8a4c6d6b&key=19d834440f9ee5958b68123c8a4c6d6b')
      .then(response => {
        this.info = response
        console.log(this.info.data);

 const datalo = {
        locations:this.map2.location(),
        keyUser: this.$store.state.keyUserF,
        locationData: {
          country: this.info.data.country,
          district:this.info.data.district,
          geocode:this.info.data.geocode,
          postcode:this.info.data.postcode,
          province:this.info.data.province,
          subdistrict:this.info.data.subdistrict,
         },
         type: this.$route.params.type
      }
      


      this.$store.dispatch("addLocation", {
      locationdata: datalo,
      marker:this.map2.location()
      });
              
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)



 
    }

 },
    mounted() {
    // mapRef.on("value", snapshot => {
    //   this.map = snapshot.val();
    //   console.log(this.map);
      
    // });


  }
};

</script>

