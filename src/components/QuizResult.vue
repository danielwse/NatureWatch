<template>
    <div>
        <span class="bigWhite">Congratulations!</span>
        <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}">Your scored </span>
        <span v-bind:style="{color:'#9BDF84', fontSize:'48px'}">{{counter}}/5 and planted 1 tree!</span>
        
        <img src="../assets/oneTreePlanted_logo.png" alt="Not found" style="width:168px"><br>
        <span class="smallWhite">Click me to start planting trees!</span> nbsp
        <img src="../assets/plant.svg" style="width:400px">
    
    </div>
</template>

<script>
export default {
    name: 'QuizResult',
    data() {
        return {
            counter:0,

        }
    },
    created:function() {
        document.body.style.backgroundColor = "#343434"
    }
}
</script>

<style scoped>
    * {
        font-family: "Mohave"
    }
    .bigWhite {
        color:#FFFFFF;
        font-size: 64px;
    }
    .smallWhite {
        color:#FFFFFF;
        font-size:24px;
        vertical-align: bottom;
        line-height:400px;
    }
</style>