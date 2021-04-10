<template>
<div>
    <ForestHeader v-bind:forestName = 'name'></ForestHeader>
    
    <div class="container">
        <div class = "row">
            <div class = "col-12">
                <h1 class="text-center text-info">Deforestation by Countries</h1>
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
</template>

<script>
import ForestHeader from './Headers/Forest.vue';
import leafMap from './map.vue'
import database from '../firebase.js'
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
            //console.log(this.countries[index].name + " size: " + this.countries[index].iconSize)

        },
        mouseLeftCountry: function(index){

            this.countries[index].iconSize = this.normalIcon
            //console.log(this.countries[index].name + " size: " + this.countries[index].iconSize)

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
    top:10vh;
    position:relative;
}

</style>