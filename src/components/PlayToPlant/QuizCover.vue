<template>
    <div>
        <PlayHeader></PlayHeader><br>
        
        <div>
            <span class="bigWhite">Welcome to </span>
            <span class="lightGreen">Play to Plant!</span><br>
            <span class="green">For every 5 questions that you answer correctly, NatureWatch donates the cost<br>
                required to plant one tree in the Amazon Rainforest!</span><br>
            <span class="green align" style="color:white">In collaboration with  </span>
            <a href="https://onetreeplanted.org/"><img class="align" src="../../assets/oneTreePlanted_logo.png" alt="Not found" style="width:168px"></a>
            <Floating></Floating>
        </div>

        <div class="imagefield">
            <span class="smallWhite">Click me to start planting trees! </span>
            <img src="../../assets/plant.svg" style="width:400px" v-on:click="showModal">
        </div>
        <Modal v-show="isModalVisible" v-on:close="closeModal"/>

    </div>
</template>

<script>
import Modal from './Modal.vue';
import PlayHeader from '../Headers/Play.vue';
import firebase from "firebase";
import database from "../../firebase.js";
import Floating from './Floating.vue';
export default {
    name: 'QuizCover',
    components: {
        Modal,
        PlayHeader,
        Floating,
    },
    data() {
        return {
            isModalVisible: false,
            date:'',
            lastSignIn:'',
            userName:'',
        }
    },
    methods:{
        showModal:function() {
            var user = firebase.auth().currentUser;
            if (user!=null) {
                console.log(firebase.auth().currentUser);
           
                const today = new Date();
                this.date = today.getDate();
                var last = firebase.auth().currentUser.metadata.lastSignInTime;
                this.lastSignin = last.substring(5,7);
    
                if (this.date-this.lastSignin>0) {
                    database.collection("Users").doc(user.uid).update({
                        chanceLeft:2,
                        questionsList:["01","02","03","04","05","06","07","08","09","10",
                                        "11","12","13","14","15","16","17","18","19","20",
                                        "21","22","23","24","25","26","27","28","29","30"],
                    })
                }
                if (this.date-this.lastSignin==1) {
                    database.collection("Users").doc(user.uid).update({
                      streak: firebase.firestore.FieldValue.increment(1)
                    })
                    database.collection("Users").doc(user.uid).get().then(doc=> {
                      var ls = doc.data().longestStreak;
                      var s = doc.data().streak;
                      if (ls<s) {
                        database.collection("Users").doc(user.uid).update({
                          longestStreak: s
                        })
                      }
                    })
                }
                
                database.collection("Users").doc(user.uid).get().then(doc=> {
                    if (doc.data().chanceLeft!=0) this.$router.push('/Questions');
                    else alert("All chances used up today. Try again tomorrow!");
                });
            }
            else this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    
    },
    created() {
        document.body.style.backgroundColor = "#343434";
    },
  
}
</script>

<style scoped>

    .bigWhite {
        color:#FFFFFF;
        font-size: 64px;
        font-family: "Mohave";
        line-height: 1.5;
    }
    .smallWhite {
        color:#FFFFFF;
        font-size:24px;
        vertical-align: bottom;
        line-height:400px;

    }
    .lightGreen{
        color: #4FE11C;
        font-size: 64px;
        font-family: "Mohave";
        line-height:1.5;

    }
    .green{
        color: #A2EA89;
        font-size:24px;
        font-family: "Mohave";
        line-height:1.5;

    }
    .imagefield {
        position: relative;
    }
</style>