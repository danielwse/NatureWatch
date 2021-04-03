<template>
    <div id="content">
        <div id="top">
            <p id="head">Our Forests</p>
            <app-header></app-header>
        </div>
        <div>
                <p style="color:black; font-weight:400;font-size:1.5em;margin-top:10px;margin-bottom:0">Ooops.... We couldn't find</p>
                <p style="color:#297D0D; text-decoration: underline;font-weight:400;font-size:1.5em;margin:0 ">{{this.animal}}</p>
                <p style="color:black; font-weight:400;font-size:1.5em;margin:0">in our database</p>
                <br><br>
                <img id = 'pic' :src= 'this.imageUrl'>
        </div>
    </div>
</template>

<script>

import Header from './Headers/Header.vue'

export default {
     data(){
         return{
             forest : "",
             imageUrl :"https://s3-alpha-sig.figma.com/img/bd1f/b31f/e4aea9a7b202ca6f3721aad932957371?Expires=1617580800&Signature=hxTbTF4lHlmhGdVQRx4fYp0sXzyIUr1zpBjlnXOODTv-PdEXGLqOpoNK2Zjl4VU7Zwr8Z-5ncsG7g9bvkEJn-h-6yOJ8yk2eXJi5R8qeW~al~2HnpOJo84ZtPNBVtWeJoj5dTKm5P1JK5cpgJX24BmQzdxsjSJYWSd-S0jVbRFi-D9JJppI72VSO0TORCQA3eO77MapEagCDQ~bTVS41~gSSF8PUWk1Q2SqNPSAq9EN1EcY5B01N68~gC4vYzOclNfq-Sb~nuXm-ekrD8XJEv~A9fxXbfustvSW9xydzivAVO1izzX8uogtO~m9~-ajWaKXpHK4qG9C53X6w5eGt2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
         }
     },
     components:{
        'app-header':Header
     }

}
</script>
<style scoped>

#content{
    background: #DFBB84;
    text-align: center;
}
#pic{
  width: 10%;
  height:10%
}
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
    background-image: url("https://www.coillte.ie/media/2016/10/forest-header.png");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; 
    background-size: cover; 
    height:180px;
}
</style>
