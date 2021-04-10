<template>
<div>
    <div class = "row map">
        <l-map 
            
            @update:zoom="zoomUpdate"
            @update:center="centerUpdate"
            :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker 
                v-for="(country,index) in countries"
                :key = index
                :lat-lng="latlng(country)">

                <l-tooltip v-bind:class = "classCheck(country)"> {{getInfo(country)}}</l-tooltip>
                
                <l-icon
                    :icon-size=country.iconSize
                    :icon-url="icon">
                </l-icon>
            </l-marker>
            <l-control position="topright" >
                <button v-on:click="zoomOut">
                    Reset View
                </button>
            </l-control>
        </l-map>
    </div>

</div>
</template>
<script>
import { LMap, LTileLayer, LMarker, LIcon, LTooltip, LControl } from 'vue2-leaflet';
import L from 'leaflet'
import { Icon } from 'leaflet';
import tree from '../assets/tree.png'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
    name:"Map",
    props:{
        countries: Array,
        hover: Array
    },

    data() {
        return {
            zoom:2,
            center: L.latLng(this.hover[0],this.hover[1]),
            url:'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=9b4d71e674e2426384f666c1fe5a367a',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            icon: tree,
            defaultCenter: [33.93911, 67.709953],
        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LTooltip,
        LControl
    },
    methods:{
        latlng: function(country){
            return L.latLng(country.latitude,country.longitude)
        },
        centerUpdate: function(center){
            this.currentCenter = center
        },
        zoomUpdate: function(zoom){
            this.currentZoom = zoom
        },
        changeCo: function(){
            this.center= L.latLng(this.hover[0],this.hover[1])
            this.zoom = 10
        },
        getInfo(country){
            var deforest = country.Deforestation
            if(deforest<0){
                deforest = deforest * -1;
                var text = country.name + " ( " + country.Alpha2Code + " ) has regained " + deforest.toFixed(2) + "% of their forest cover."
                return text
            }else {
                var text1 = country.name + " ( " + country.Alpha2Code + " ) has deforested ";
                if(deforest == 0 && deforest){
                    text1 = text1 + deforest + "% of their forest cover."
                }else {
                    text1 = text1 + deforest.toFixed(2) + "% of their forest cover."
                    
                }
                return text1
            }
        },
        classCheck(country){
            var deforest = country.Deforestation;
            if(deforest<0){
                return {green:true}
            }else if (deforest > 0){
                return {red:true}
            }else {
                return {}
            }
        },
        zoomOut(){
            this.center = this.defaultCenter;
            this.zoom = 2;
        }
        
    },
    watch: {
        hover(){
            this.changeCo();
        }
    }
 }
</script>

<style scoped>

.map{
    height:95vh;
}
.red{
    background-color:red;
    color:white;
}

.green{
    background-color:green;
    color:white;
}
button{
    background-color: white;
    color:black;
    padding:2px;
    border-radius: 5px;
}

</style>