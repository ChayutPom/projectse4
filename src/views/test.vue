<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiY2hheXV0c2UiLCJhIjoiY2tjN2JpaXMzMHo5aDJ5bHE1czkwNzd4YyJ9.LBPCO_2E0MjepoBa81-2Ww', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v11' // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>