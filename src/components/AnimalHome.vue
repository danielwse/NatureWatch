/* 
Layout for animal homepage. When user clicks 'Animal' in the header
*/ 
<template>
<div>
    <Animal></Animal>
<div class="grid-container">
    <div v-for="(animal, index) in animals" :key="index" class="each-grid">
        <div v-on:click="route(animal.status, animal.genericName)" style="cursor: pointer;">
        <img id = 'animalPic' :src='animal.imageURL'>
        <p id = 'genericNames' >{{ animal.genericName}}</p>
        <p v-if="animal.status == 'CE'" id = 'statusText'>Critically Endangered</p>
        <p v-if="animal.status == 'E'" id = 'statusText'>Endangered</p>
        <p v-if="animal.status == 'V'" id = 'statusText'>Vulnerable</p>
        </div>
    </div>
</div>
</div>
</template>

<script>
import database from '../firebase.js';
import Animal from './Headers/Animal.vue';
export default {
    data() {
        return {
            animals: [
            ],
        }
    },

    components: {
        Animal
    },

    methods : {
         fetchItems:function() {
        database.collection('Animals').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
             this.animals.push(doc.data());
    })
})
         },
               route:function(status, genericName) {
        this.$router.push({name: status, params: {name: genericName}})
      }


    },
created:function() {
    this.fetchItems();
} 
 }
</script>

<style scoped>
.grid-container {
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    background: black;
}

.each-grid {
    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
    transition: all .4s ease;
    box-shadow: 0px 0px white;
    background: black;
}

.each-grid:hover {
  border-radius: 0% 0% 50% 50% / 0% 0% 0% 0% ;
  box-shadow: 5px 5px lightgray;
}
#statusText {
    position: relative;
    max-height: 100%;
    max-width: 100%;
    font-family: Mohave;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
     text-align: center;
    color: #BE6160;
    margin: 0;
    padding-top: 0;
}

#animalPic {
    width: 200px;
    height: 200px; 
    border-radius: 50%;
    object-fit:cover;
}

#genericNames {
    position: relative;
    width: auto;
    height: auto;
    font-family: Mohave;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    text-align: center;
    color: #C4C4C4;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1); 
    margin-bottom: 0;
}


</style>