/* 
controls the display layout of a single animal. AnimalContent will use many PageContent components
for many animals.
*/

<template>
     <div v-bind:class= 'animalIndex'>
        <div class = 'left'>
        <img id = 'animalPic' :src='animal.imageURL'>
       <p v-if= "animalIndex == 'oddAnimal'" id = 'oddGenericNames' >{{ animal.genericName}}</p>
       <p v-else id = 'evenGenericNames'>{{ animal.genericName}}</p>
        <p v-if= "animalIndex == 'oddAnimal'" id = 'oddScientificNames'> {{ animal.scientificName }} </p>
       <p v-else id = 'evenScientificNames'> {{ animal.scientificName }} </p>
        <p id = 'donationText'> Donation Links </p>
            <div id = 'donationLinks'>
                <a :href= 'animal.donationURL1'><img :src ='animal.donationURLImage1'></a>
                <a :href = 'animal.donationURL2'><img :src ='animal.donationURLImage2'></a>
                <a :href = 'animal.donationURL3'><img :src ='animal.donationURLImage3'></a>
            </div>
        </div>
        <div class = 'middle'>
            <span v-for="(para, index) in animal.descriptionParas" :key='index'>
            <p v-if= "animalIndex == 'oddAnimal'" id = 'oddMainText'> {{ para }} </p>
            <p v-else id = 'evenMainText'> {{ para }}</p>
            </span>
            <p id = 'threatText'> Threats </p>
            <p v-if= "animalIndex == 'oddAnimal'" id = 'oddThreats'>{{ animal.threat1 }}</p>
            <p v-else id = 'evenThreats'> {{ animal.threat1}}</p>
            <p v-if= "animalIndex == 'oddAnimal'" id = 'oddThreats'> {{ animal.threat2 }}</p>
            <p v-else id = 'evenThreats'> {{animal.threat2}}</p>
        </div>
        <div class = 'right'>
            <div class="circle-with-text">
                <p id = "survivalStats"> {{ animal.numbersLeft}} </p>
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
/*         imageUrl : 'https://c402277.ssl.cf1.rackcdn.com/photos/875/images/story_full_width/amur-leopard_87883936.jpg',
        genericName : "Amur Leopard",
        scientificName : 'Panthera pardus orientalis',
        donationURLImage1 : 'https://back.3blmedia.com/sites/default/files/Clients/GlobalGiving_Logo.png',
        donationURLImage2 : 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/WWF_logo.svg/1200px-WWF_logo.svg.png',
        donationURLImage3 : 'https://conservewildcats.org/wp-content/uploads/sites/5/2016/12/Artboard-1.png',
        donationURL1 : 'https://www.globalgiving.org/projects/amur-leopards-conservation/donate/',
        donationURL2 : 'https://www.worldwildlife.org/species/amur-leopard',
        donationURL3 : 'https://donations.zsl.org/wildcats/',
        description : 'People usually think of leopards in the savannas of Africa but in the Russian Far East, a rare subspecies has adapted to life in the temperate forests that make up the northern-most part of the species’ range. Similar to other leopards, the Amur leopard can run at speeds of up to 37 miles per hour. This incredible animal has been reported to leap more than 19 feet horizontally and up to 10 feet vertically' + "\n" +'\n' + 'The Amur leopard is solitary. Nimble-footed and strong, it carries and hides unfinished kills so that they are not taken by other predators. It has been reported that some males stay with females after mating, and may even help with rearing the young. Several males sometimes follow and fight over a female. They live for 10-15 years, and in captivity up to 20 years. The Amur leopard is also known as the Far East leopard, the Manchurian leopard or the Korean leopard.',
        threat1 : "Illegal Wildlife Trade",
        threat2 : 'Prey Scarcity',
        numbersLeft : '>47',
        distributionImg : 'https://www.researchgate.net/profile/Limin-Feng-2/publication/313350023/figure/fig1/AS:458299926683648@1486278626040/The-current-range-of-the-Amur-leopard-popu-lation.png'
 */
}

</script>

<style scoped>
@import './PageStyles.css';
</style>
