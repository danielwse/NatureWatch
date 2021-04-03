<template>
    <div id="top">
        <p id="head">Play to Plant!</p>
        <app-header></app-header>
    </div>
</template>

<script>
import Header from './Header.vue'

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
    margin-left:70px;
    margin-right:0;
    margin-top:0;
    margin-bottom: 0;
}


#top{
    background-image: url("https://www.sezarc.org/sites/default/files/internal-header-5.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; 
    background-size: cover; 
    height:180px;
}

</style>