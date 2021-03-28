<template>
    <div id="top">
        <p id="head">The Amazon</p>
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
    margin: 0;
}


#top{
    background-image: url("https://64.media.tumblr.com/d99f5cfc707b60afda9f1553a2542d54/tumblr_inline_nqeckmQ1XG1tn2sk4_540.png");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; 
    background-size: cover; 
    height:200px;
}

</style>


