/* 
wrapper component that fetches animal data from firebase and renders the information
based on PageContent
 */
<template>
<div>
    <div v-if='this.$route.name == "CE" || this.$route.params.status == "CE"'>
        <CEHeader></CEHeader>
    </div>
    <div v-else-if="this.$route.name == 'E' || this.$route.params.status == 'E'">
        <EHeader></EHeader>
    </div>
    <div v-else>
        <VHeader></VHeader>
    </div>
    <div>
        <SearchBar></SearchBar>
    </div>
    <div v-for='(animal1,index) in animals' :key='index' id='back'>
 <PageContent v-if='index % 2 == 0' :animal='animal1' :animalIndex='evenAnimal'></PageContent>
 <PageContent v-else :animal='animal1' :animalIndex='oddAnimal'></PageContent>
 </div>
</div>
</template>

<script>
import PageContent from './AnimalPageContent.vue';
import database from '../firebase.js';
import CEHeader from './Headers/Animal_ce.vue';
import EHeader from './Headers/Animal_e.vue';
import VHeader from './Headers/Animal_v.vue';
import SearchBar from './Headers/SearchBar.vue';

export default {
    data() {
        return {
            animals: [
            ],
            evenAnimal : 'evenAnimal',
            oddAnimal : 'oddAnimal'
        }
    },

    components: {
        PageContent,
        CEHeader,
        EHeader,
        VHeader,
        SearchBar
    },

    methods : {
         fetchItems:function() {
             if (typeof(this.$route.params.name) == 'undefined') {
                var status = this.$route.name;
                database.collection('Animals').where("status", '==', status).get().then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        this.animals.push(doc.data());
    })
})
             } else {
                 var animalName = this.$route.params.name;
                 database.collection('Animals').where("genericName", '==', animalName).get().then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        this.animals.push(doc.data());
    })
})
             }
             
        
         },

    },
created:function() {
    this.fetchItems();
} 
 }
</script>

<style scoped>
html, body {
    height: 100%;
}

.back {
    height: 100%;
}
</style>