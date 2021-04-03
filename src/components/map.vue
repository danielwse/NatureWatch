<template>
<div>
    <div id='mapContainer'>
        {{data}}
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import L from 'leaflet'
import { Icon } from 'leaflet';
import axios from 'axios'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
    name:"Map",

    data() {
        return {
            zoom:13,
            center: L.latLng(47.413220, -1.219482),
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(47.413220, -1.219482),
            data:null
        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    mounted(){
        axios.get("https://www.globildata.org/arcgis/rest/services/Forests/Global_Forest_Analysis/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json")
        .then(response => (this.data = response))
    }
 }
</script>

<style scoped>
#mapContainer{
    height:95vh;
}
</style>