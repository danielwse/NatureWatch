<template>
<div>
    <div v-for='(animal1,index) in animals' :key='index'>
 <PageContent v-if='index % 2 == 0' :animal='animal1' :animalIndex='evenAnimal'></PageContent>
 <PageContent v-else :animal='animal1' :animalIndex='oddAnimal'></PageContent>
 </div>
</div>
</template>

<script>
import PageContent from './PageContent.vue';
import database from '../firebase.js';


export default {
    data() {
        return {
            animals: [
     /*            {     imageURL : 'https://c402277.ssl.cf1.rackcdn.com/photos/875/images/story_full_width/amur-leopard_87883936.jpg',
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

                } */
            ],
            evenAnimal : 'evenAnimal',
            oddAnimal : 'oddAnimal'
        }
    },

    components: {
        PageContent
    },

    methods : {
         fetchItems:function() {
        database.collection('Animals').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                
              this.animals.push(doc.data());
    })
})
         },

         print:function() {
             console.log(this.animals)
         }
    },
created:function() {
    this.fetchItems();
} 
 }
</script>

<style scoped>
</style>