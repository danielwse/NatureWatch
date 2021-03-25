<template>
    <div>
        <div v-show="counter==5">
            <div class="bigWhite">Congratulations!</div>
            <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}"> Your scored </span>
            <span v-bind:style="{color:'#9BDF84', fontSize:'48px'}">{{counter}}/5 </span>
            <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}"> and planted 1 tree!</span><br>
        </div>

        <div v-show="counter!=5">
        <div class="bigWhite">Try again!</div>
            <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}"> Your scored </span>
            <span v-bind:style="{color:'#9BDF84', fontSize:'48px'}">{{counter}}/5 </span>
            <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}">! {{5-counter}} more score(s) to plant 1 tree!</span><br>
        </div>
        <span class="smallWhite">Click me to start planting trees!</span>
        <span class="smallWhite" v-show="chanceLeft!=0">You can plant {{chanceLeft}} more tree today</span> nbsp
        <img src="../assets/plant.svg" style="width:400px" v-on:click="redirect">
        <div class="smallWhite" v-show="chanceLeft==0">Sorry, no chance left today. Come tomorrow!</div>
    
    </div>
</template>

<script>
export default {
    name: 'QuizResult',
    props: {
        counter: {},
        chanceLeft: {}
    },
    data() {
        return {

        }
    },
    methods: {
        redirect:function() {
            this.$router.push({name:'Questions',params:{chanceLeft:this.chanceLeft}})
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