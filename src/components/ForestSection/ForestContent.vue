<template>
<div>
    <ForestHeader v-bind:forestName = 'name'></ForestHeader>
    <div v-for='(forest1,index) in forests' :key='index'>
 <PageContent v-if='index % 2 == 0' :forest='forest1' :forestIndex='evenForest'></PageContent>
 <PageContent v-else :forest='forest1' :forestIndex='oddForest'></PageContent>
 </div>
</div>
</template>

<script>
import PageContent from './ForestPageContent.vue';
import database from '../../firebase.js';
import ForestHeader from '../Headers/Forest.vue';
export default {
    data() {
        return {
            forests: [
            ],
            evenForest : 'evenForest',
            oddForest : 'oddForest',
            name : this.$route.params.name,
        }
    },

    components: {
        PageContent,
        ForestHeader
    },

    methods : {
         fetchItems:function() {
             if (this.$route.name == 'Forests') {
                database.collection('Forests').get().then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        this.forests.push(doc.data());
    })
})
             } else {
                 var forestName = this.$route.params.name;
                 database.collection('Forests').where("genericName", '==', forestName).get().then(snapshot => {
                    snapshot.docs.forEach(doc => {
                        this.forests.push(doc.data());
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
</style>