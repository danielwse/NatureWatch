/* 
Layout for animal homepage. When user clicks 'Animal' in the header
*/ 
<template>
<div class='background'>
    <div class='header'>
    <Animal></Animal>
    </div>
    <div>
        <SearchBar></SearchBar>
    </div>
    
<div class="grid-container">
    <div v-for="(animal, index) in animals" :key="index" class="each-grid">
        <div v-on:click="route(animal.status, animal.genericName)" style="cursor: pointer;">
        <img id = 'homeAnimalPic' :src='animal.imageURL'>
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
import database from '../../firebase.js';
import Animal from '../Headers/Animal.vue';
import SearchBar from '../Headers/SearchBar.vue';
export default {
    data() {
        return {
            animals: [
            ],
        }
    },

    components: {
        Animal,
        SearchBar
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
        this.$router.push({name: 'indivAnimal', params: {name: genericName, status: status}})
      }


    },
created:function() {
    this.fetchItems();
} 
 }
</script>

<style scoped>

.background:before {
     content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: url('../../assets/animalhomebg.jpg');
    opacity: 0.8;    
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    height: 2000px;
    

}
.header {
    z-index: 3;
    position: relative;
    
}
.grid-container {
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
    z-index: 2;
    top: 20px;
}

.each-grid {
    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
    transition: all .4s ease;
    box-shadow: 0px 0px white;
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
    color: white;
    margin: 0;
    padding-top: 0;
    position: relative;
    
}

#homeAnimalPic {
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
    color: white;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1); 
    margin-bottom: 0;
}


</style>