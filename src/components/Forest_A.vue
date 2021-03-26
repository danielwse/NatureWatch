<template>
    <div id="top">
        <p id="head">The Amazon</p>
        <app-header></app-header>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
     components:{
        'app-header':Header
     }

}
</script>

<style scoped>
#head{
    text-align: left;
    font-size: 5em;
    font-weight: 100;
    color: white;
    padding:0;
    margin: 0;
}


#top{
    background-image: url("https://www.coillte.ie/media/2016/10/forest-header.png");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; 
    background-size: cover; 
    height:200px;
}

</style>


