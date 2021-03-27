<template>
    <div id = "top">
        <p id="head">Critically Endangered</p>
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
    font-weight: 600;
    color: white;
    padding:0;
    margin-left:70px;
    margin-right:0;
    margin-top:0px;
    margin-bottom: 0;
}


#top{
    background-image: url("https://s3-alpha-sig.figma.com/img/a1e9/981f/0e780167968169bd0113df2fc3e6b944?Expires=1617580800&Signature=Dxd4uBtDNzEKfHsfhk3iidZA0XF~-D~6ls7YaP8zuH7gh-5EgUTvV33vxQvIXo~-0KuxU0ro4Ttmdwijll3RQLrF8Hvnce0pvKYTfguZDtNm895RAFLNh5KEIjm~eT5WL5IOG8mhO5V1LHrTOqnU2vL6RYoRXytBTGkyKSpBrlzV9MYc2NxgwHUam8Rg1W~Wlr2fqgDGi2EHjeLW9xLlNRDnNLtXe72ZkBWfZiF1nBsc6Def85lW8bI0csXeAfsp2QVh~Jv0I9T~W69vHe41O7Mn7OhnHyX38UxHGqcsRz50B8J2WbiH2mMhC9aAUZXrpr7lZ8NC3bHb3Wmn5QSWSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; 
    background-size: cover; 
    height:200px;
}

</style>
