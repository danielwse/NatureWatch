<template>
     <div v-bind:class= 'forestIndex'>
        <div class = 'left'>
        <img id = 'forestPic' :src='forest.imageURL'>
       <p v-if= "forestIndex == 'oddForest'" id = 'oddGenericNames' >{{ forest.genericName}}</p>
       <p v-else id = 'evenGenericNames'>{{ forest.genericName}}</p>
        <p id = 'donationText'> Donate </p>
            <div id = 'donationLinks'>
                <a :href= 'forest.donationURL1' target="_blank"><img :src ='forest.donationURLImage1'></a>
                <a :href = 'forest.donationURL2' target="_blank"><img :src ='forest.donationURLImage2'></a>
                <a v-if="typeof(forest.donationURL3) != 'undefined'" :href = 'forest.donationURL3' target="_blank"><img :src ='forest.donationURLImage3'></a>
            </div>
        </div>
        <div class = 'middle'>
            <span v-for="(para, index) in forest.descriptionParas" :key='index'>
             <p v-if= "forestIndex == 'oddForest'" id = 'oddMainText'> {{ para }} </p>
            <p v-else id = 'evenMainText'> {{ para }}</p>
            </span>
            <p id = 'threatText'> Threats </p>
            <div v-for="(threat, index2) in forest.threats" :key="index2+threat">
            <p v-if= "forestIndex == 'oddForest'" id = 'oddThreats'>{{ threat }}</p>
            <p v-else id = 'evenThreats'> {{ threat }}</p>
            </div>
        </div>
        <div class = 'right'>
            <div class="forestCircle-with-text"> {{forest.numbersLeft}}
            </div>
                <p v-if= "forestIndex == 'oddForest'" id = 'oddNumMeaning'> {{ forest.numMeaning}} </p>
                <p v-else id = "evenNumMeaning"> {{ forest.numMeaning }}</p>
            <p id = 'distribution'> Distribution </p>
            <img id = distributionImg :src='forest.distributionImg'>
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
            forest : {
                type: Object
            },
            forestIndex : {
                type: String
            }
        },
        created() {
            document.body.style.backgroundColor = "#dfbb84";
        },
}

</script>

<style scoped>
@import './ForestPageStyles.css';
</style>
