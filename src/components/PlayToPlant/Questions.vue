<template>
    <div>
        <PlayHeader></PlayHeader><br><br>
        <div v-bind:style="{color:'#FFFFFF', fontSize:'64px'}">Question {{index+1}} </div><br>
        <div v-bind:style="{color:'#45A025', fontSize:'36px'}" v-if="questions[index]">
            {{questions[index].cont}}
        </div><br>
        <div class="bigWhite" v-if="questions[index]">
        <div id="a" v-on:click="matchAnswer('a')">a.{{questions[index].a}}</div>
        <div id="b" v-on:click="matchAnswer('b')">b.{{questions[index].b}}</div>
        <div id="c" v-on:click="matchAnswer('c')">c.{{questions[index].c}}</div>
        <div id="d" v-on:click="matchAnswer('d')">d.{{questions[index].d}}</div>
        </div><br>
        <button v-show="next" v-bind:style="{fontSize:'24px'}" v-on:click="updateQuestion()">Next</button>

    </div>
</template>

<script>
import database from "../../firebase.js"
import PlayHeader from '../Headers/Play.vue';
import firebase from "firebase"
export default {
    name: 'Questions',
    components: {
        PlayHeader
    },
    data() {
        return {
            questions: [],
            questionsList:[],
            index: 0,
            selectedAnswer: "",
            correctAnswer: [],
            counter:0,
            next: false,
        }
    },
    props: {
        user:{
        },
    },
    computed: {
        currentQuestion() {
            if (this.questions!=[]) {
                return this.questions[this.index];
            }
            return null;
        }
    },
    methods: {
        async fetchQuestions() {
            var uid = firebase.auth().currentUser.uid;

            //Prevent mutiple refresh
            var chanceLeft = await database.collection('Users').doc(uid).get().then(doc => 
                doc.data().chanceLeft);
            if (chanceLeft<=0) {
                alert("No chance left today! Please take note that every refresh will consume 1 chance even though no submission has been made.");
                this.$router.push('/playtoplant');

            } else {

                database.collection('Users').doc(uid).update({
                    chanceLeft: firebase.firestore.FieldValue.increment(-1)
                });
                
                this.questionsList = await database.collection('Users').doc(uid).get().then(doc => 
                   doc.data().questionsList);
                   
                for (let i=0;i<5;i++) {    
                    var index = Math.floor(Math.random() * this.questionsList.length);
                    var id = this.questionsList[index];

                    this.questionsList.splice(index,1);
                    database.collection('Questions').doc(id).get().then(doc=> {
                        this.questions.push(doc.data());
                        database.collection('Answers').doc(doc.id).get().then(doc => {
                            this.correctAnswer.push(doc.data().answer);
                        })
                    })      
                }
                database.collection('Users').doc(uid).update({
                    questionsList: this.questionsList,
                });
            }
        },
        matchAnswer:function(key) {
            var cor = this.correctAnswer[this.index];
            this.selectedAnswer = key;
            
            if (cor == key) {
                this.counter++;
                document.getElementById(key).style.color = "green";
            } else {
                document.getElementById(key).style.color = "red";
                document.getElementById(cor).style.color = "green";
            }
            this.next=true;
        },
        updateQuestion:function() {
            if (this.index<4) {
                document.getElementById("a").style.color = "white";
                document.getElementById("b").style.color = "white";
                document.getElementById("c").style.color = "white";
                document.getElementById("d").style.color = "white";
                this.index++;
                this.selectedAnswer= "";
                this.next=false;
            } else {
                var uid=firebase.auth().currentUser.uid;
            
                if (this.counter==5) {
                    database.collection('Users').doc(uid).update({
                        trees: firebase.firestore.FieldValue.increment(1)
                    });
                }
                this.$router.push({name:'Result',params:{counter:this.counter}})  
            }   
        }
      
    },
    created() {
        document.body.style.backgroundColor = "#343434" 
        const self = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) self.fetchQuestions();
        })
    },
}
</script>

<style scoped>
 .bigWhite {
        color:#FFFFFF;
        font-size: 36px;
        display: block;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        font-family: "Mohave";
        line-height: 1.5;
   
    }
 #a, #b,#c,#d {
     text-align:left;
 }
</style>