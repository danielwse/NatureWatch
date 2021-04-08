<template>
    <div>
        <PlayHeader></PlayHeader><br>
        <div class="align-left">
            <div v-show="counter==5">
                <div class="bigWhite">Congratulations!</div>
                <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}"> Your scored </span>
                <span v-bind:style="{color:'#9BDF84', fontSize:'48px'}">{{counter}}/5 </span>
                <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}"> and planted 1 tree!</span><br>
            </div>

            <div v-show="counter!=5">
                <div class="bigWhite">Try again!</div><br>
                <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}"> Your scored </span>
                <span v-bind:style="{color:'#9BDF84', fontSize:'48px'}">{{counter}}/5 </span>
                <span v-bind:style="{color:'#FFFFFF', fontSize:'48px'}">! {{5-counter}} more score(s) to plant 1 tree!</span><br>
            </div>
        </div>
        <Floating></Floating>

        <span class="smallWhite" v-show="chances<=0">No chance left today. Come tomorrow!</span>
        <span class="smallWhite" v-show="chances>0">You have {{chances}} chance left!</span> nbsp
        <img src="../assets/plant.svg" style="width:400px vertical-align:middle" v-on:click="redirect"><br><br>

    </div>
</template>

<script>
import database from "../firebase.js"
import PlayHeader from './Headers/Play.vue'
import firebase from "firebase"
import Floating from "./Floating.vue"

export default {
    name: 'QuizResult',
    components: {
        PlayHeader,
        Floating,
    },
    props: {
        counter: {},
    },
    data() {
        return {
            chances:null,
        }
    },
    methods:{
        redirect:function() {
            if (this.chances>0) this.$router.push('/Questions');
        }
    },

    created:function() {
        document.body.style.backgroundColor = "#343434";

        var uid=firebase.auth().currentUser.uid;
        database.collection('Users').doc(uid).onSnapshot({includeMetadataChanges:true}, (doc)=> {
            this.chances = doc.data().chanceLeft;
        });
    }
}
</script>

<style scoped>
    * {
        font-family: "Mohave";
        line-height:1.5;
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