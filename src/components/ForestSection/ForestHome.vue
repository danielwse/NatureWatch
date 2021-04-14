<template>
<div>
    <ForestHeader class='header' v-bind:forestName = 'name'></ForestHeader>
    <div id="background">
        <div class="container">
            <div class = "row">
                <div class = "col-12">
                    <h1 class="text-center">Deforestation by Countries</h1>
                    <br>
                </div>

                <div class = "col-8">
                    <leafMap 
                        ref="maps"
                        :countries="countries" :hover="currentHover">
                    </leafMap>
                </div>

                <div class = "col-4 d-flex justify-content-center">
                    
                    <CountryList 
                        @mouse-over-country="mouseOverCountry"
                        @mouse-left-country="mouseLeftCountry"
                        @mouse-click-country="mouseClickCountry"
                        :countries="countries">
                    </CountryList>
                    
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import ForestHeader from '../Headers/Forest.vue';
import leafMap from './map.vue'
import database from '../../firebase.js'
import CountryList from './CountryList.vue'
export default {
    name:"Map",
    data() {
        return {
            name : this.$route.name,
            countries:[],
            normalIcon: [15,15],
            largeIcon: [50,50],
            currentHover: [33.93911, 67.709953]
        }
    },
    components: {
        ForestHeader,
        leafMap,
        CountryList
    },
    methods:{
        fetchCountries: function() {
            database.collection('countries').get().then((querySnapShot) => {
        querySnapShot.forEach(doc => {
            var new_doc = doc.data()
            new_doc.iconSize = this.normalIcon
            this.countries.push(new_doc)
        });
    });
        },
        mouseOverCountry: function(index){
            
            this.countries[index].iconSize = this.largeIcon
        },
        mouseLeftCountry: function(index){
            this.countries[index].iconSize = this.normalIcon
        },
        mouseClickCountry: function(index){
            var curr = this.countries[index]
            this.currentHover = [curr.latitude,curr.longitude]
        }
    },
    created(){
        this.fetchCountries();
    }
    
 }
</script>

<style scoped>
.container{
    top:5vh;
    position:relative;    
    z-index: 1;
}

.header {
    position: relative;
    z-index: 2;
}

#background:before {
     content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: url('../../assets/forest-bg-1.jpg');
    opacity: 0.8;    
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    height: 1300px;
    opacity: 0.4;
    

}
.text-center{
    color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


</style>