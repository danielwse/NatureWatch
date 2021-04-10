<template>
<div>
    <ForestHeader v-bind:forestName = 'name'></ForestHeader>
    <div id='mapContainer'>
        <leafMap></leafMap>
    </div>

</div>
</template>

<script>
import ForestHeader from './Headers/Forest.vue';
import leafMap from './map.vue'
export default {
    name:"Map",

    data() {
        return {
            name : this.$route.name,
        }
    },
    components: {
        ForestHeader,
        leafMap
    },
 }
</script>

<style scoped>
#mapContainer{
    position:relative;
}

</style>