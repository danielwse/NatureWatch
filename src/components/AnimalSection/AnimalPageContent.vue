/* 
controls the display layout of a single animal. AnimalContent will use many PageContent components
for many animals.
*/
<template>
     <div v-bind:class= 'animalIndex'>
        <div class = 'leftAnimal'>
        <img id = 'animalPic' :src='animal.imageURL'>
       <p v-if= "animalIndex == 'oddAnimal'" id = 'oddAmlGenericNames' >{{ animal.genericName}}</p>
       <p v-else id = 'evenAmlGenericNames'>{{ animal.genericName}}</p>
        <p v-if= "animalIndex == 'oddAnimal'" id = 'oddScientificNames'> {{ animal.scientificName }} </p>
       <p v-else id = 'evenScientificNames'> {{ animal.scientificName }} </p>
        <p id = 'donationText'> Donate</p>
            <div id = 'donationLinks'>
                <a :href= 'animal.donationURL1' target="_blank"><img :src ='animal.donationURLImage1'></a>
                <a :href = 'animal.donationURL2' target="_blank"><img :src ='animal.donationURLImage2'></a>
                <a v-if="typeof(animal.donationURL3) != 'undefined'" :href = 'animal.donationURL3' target="_blank"><img :src ='animal.donationURLImage3'></a>
            </div>
        </div>
        <div class = 'middleAnimal'>
            <div v-for='(para, index) in animal.descriptionParas' :key="index">
            <p v-if= "animalIndex == 'oddAnimal'" id = 'oddAnimalMainText'> {{ para }} </p>
            <p v-else id = 'evenAnimalMainText'> {{ para }}</p>
            <br>
            </div>
            <p id = 'threatText'> Threats </p>
            <div v-for="(threat, index2) in animal.threats" :key="index2+threat">
            <p v-if= "animalIndex == 'oddAnimal'" id = 'oddAnimalThreats'>{{ threat }}</p>
            <p v-else id = 'evenAnimalThreats'> {{ threat }}</p>
            </div>
        </div>
        <div class = 'rightAnimal'>
            <div class="animalCircle-with-text"> {{animal.numbersLeft}}
            </div>
                <p v-if= "animalIndex == 'oddAnimal'" id = 'oddLeftInTheWild'> Left In The Wild </p>
                <p v-else id = "evenLeftInTheWild"> Left In The Wild</p>
            <p id = 'distribution'> Distribution </p>
            <img id = distributionImg :src='animal.distributionImg'>
        </div>
    </div> 
</template>

<script>
export default {
data () {
    return {
    }
},
        props: {
            animal : {
                type: Object
            },
            animalIndex : {
                type: String
            }
        },
        created() {
            document.body.style.backgroundColor = "#343434";
        },
}

</script>

<style scoped>
@import './AnimalPageStyles.css';
</style>
