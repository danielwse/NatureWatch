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

        <span class="smallWhite" v-show="chances<=0">No chance left today. Come tomorrow!</span>
        <span class="smallWhite" v-show="chances>0">You have {{chances}} chance left!</span> nbsp
        <img src="../assets/plant.svg" style="width:400px vertical-align:middle" v-on:click="redirect">
        <button style="vertical-align:right" v-on:click="logout">LogOut</button>
    
    </div>
</template>

<script>
import database from "../firebase.js"
import firebase from "firebase"
export default {
    name: 'QuizResult',
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
        },
        logout:function() {
           firebase.auth().signOut().then(() => {
            alert('Safely signed out!');
          }).catch(error => {
            alert('Sign Out Error', error);
          });
        }
    },

    created:function() {
        document.body.style.backgroundColor = "#343434"
    },
    beforeCreate: function() {
        var uid=firebase.auth().currentUser.uid;
        database.collection('Users').doc(uid).get().then(doc => {
            this.chances = doc.data().chanceLeft;
            console.log(this.chances);
        })
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