<template>
<div>
    <div class = "row map">
        <l-map 
            
            @update:zoom="zoomUpdate"
            @update:center="centerUpdate"
            :zoom="zoom" :center="center"
            ref="myMap">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker 
                @mouseenter="mouseEnter(country)"
                @mouseleave="mouseLeave(country)"
                v-for="(country,index) in countries"
                :key = index
                :lat-lng="latlng(country)">

                <l-popup v-bind:class = "classCheck(country)"> {{getInfo(country)}}</l-popup>
                
                <l-icon
                    :icon-size=country.iconSize
                    :icon-url="getIcon(country)">
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
import { LMap, LTileLayer, LMarker, LIcon, LPopup, LControl } from 'vue2-leaflet';
import L from 'leaflet'
import { Icon } from 'leaflet';
import blacktree from '../../assets/blacktree.png'
import redtree from '../../assets/redtree.png'
import greentree from '../../assets/greentree.png'
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
            normalIcon: [15,15],
            largeIcon: [50,50],
            defaultCenter: [33.93911, 67.709953],
        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LPopup,
        LControl
    },
    methods:{
        latlng: function(country){
            return L.latLng(country.latitude,country.longitude)
        },
        centerUpdate: function(center){
            this.currentCenter = center
            console.log(this.currentCenter)
        },
        zoomUpdate: function(zoom){
            this.currentZoom = zoom
        },
        changeCo: function(){
            this.$refs.myMap.mapObject.setView(L.latLng(this.hover[0],this.hover[1]),10)
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
            this.$refs.myMap.mapObject.setView(L.latLng(this.defaultCenter[0],this.defaultCenter[1]),2)
        },
        getIcon(country){
            var deforest = country.Deforestation;
            if(deforest<0){
                return greentree
            }else if (deforest > 0){
                return redtree
            }else {
                return blacktree
            }
        },
        mouseEnter(country){
            country.iconSize = this.largeIcon
        },
        mouseLeave(country){
            country.iconSize = this.normalIcon
        }
        
    },
    watch: {
        hover: function(){
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
