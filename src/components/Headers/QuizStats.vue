<template>
    <div id="top">
        <p id="head"> User Dashboard</p>
        <app-header></app-header>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
     components:{
        'app-header':Header
     },
}
</script>
<style scoped>
#head{
    text-align: left;
    font-size: 5em;
    font-weight: 100;
    color: white;
    padding:0;
    margin-left:70px;
    margin-right:0;
    margin-top:0;
    margin-bottom: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


#top{
    background-image: url("https://www.coillte.ie/media/2016/10/forest-header.png");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; 
    background-size: cover; 
    height:180px;
}
</style>