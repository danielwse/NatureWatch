<template>
    <div>
        <PlayHeader></PlayHeader><br>
        <div>
            <div v-show="counter||counter==0">
                <div v-show="counter==5">
                    <div class="bigWhite">Congratulations!</div>
                    <span v-bind:style="{color:'#FFFFFF', fontSize:'28px'}"> Your scored </span>
                    <span v-bind:style="{color:'#9BDF84', fontSize:'28px'}">{{counter}}/5 </span>
                    <span v-bind:style="{color:'#FFFFFF', fontSize:'28px'}"> and planted 1 tree!</span><br>
                    <br><br><br><br>
                </div>

                <div v-show="counter!=5">
                    <div class="bigWhite">Try again!</div><br>
                    <span v-bind:style="{color:'#FFFFFF', fontSize:'28px'}"> Your scored </span>
                    <span v-bind:style="{color:'#9BDF84', fontSize:'28px'}">{{counter}}/5</span>
                    <span v-bind:style="{color:'#FFFFFF', fontSize:'28px'}">! {{5-counter}} more point(s) to plant 1 tree!</span><br>
                    <br><br><br>
                </div> 
            </div> 
            
            <div class = "undefined bigWhite" v-show="!counter&&counter!=0">
                <div v-show="chances<=0">Click the seedling to return to homepage</div>
                <div v-show="chances>0">Click the seedling to try again</div>
            </div>

            <Floating></Floating>
        </div>
        <div class="imagefield2">
    <span class="smallWhite" v-show="chances<=0">0 chances left. Come back tomorrow!</span>
        <span class="smallWhite" v-show="chances>0">You have {{chances}} chance(s) left!</span>
        <img src="../../assets/plant.svg" style="width:400px" v-on:click="redirect"><br><br>
        </div>

    </div>
</template>

<script>
import database from "../../firebase.js"
import PlayHeader from '../Headers/Play.vue'
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
            else this.$router.push('/playtoplant');
        },
    },
    created:function() {
        document.body.style.backgroundColor = "#343434";
        const self = this;
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            var uid=firebase.auth().currentUser.uid;
            database.collection('Users').doc(uid).onSnapshot({includeMetadataChanges:true}, (doc)=> {
                self.chances = doc.data().chanceLeft;
                console.log(self.chances);
            });
          }
        })
    }
}
</script>

<style scoped>
    .undefined {
        height:220px;
    }
    .bigWhite {
        color:#FFFFFF;
        font-size: 64px;
        font-family: "Mohave";
        line-height: 1.5;
    }
    .smallWhite {
        color:#FFFFFF;
        font-size:24px;
        vertical-align: top;
        line-height: 260px;
        margin-right: 20px;
    }

</style>