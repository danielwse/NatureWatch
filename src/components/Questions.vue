<template>
    <div>
        <div v-bind:style="{color:'#FFFFFF', fontSize:'64px'}">Question {{index+1}} </div><br>
        <div v-bind:style="{color:'#45A025', fontSize:'36px'}">
            {{questions[this.index].cont}}
        </div><br><br>
        <div class="bigWhite">
        <div id="a" v-on:click="matchAnswer('a')">a.{{questions[index].a}}</div>
        <div id="b" v-on:click="matchAnswer('b')">b.{{questions[index].b}}</div>
        <div id="c" v-on:click="matchAnswer('c')">c.{{questions[index].c}}</div>
        <div id="d" v-on:click="matchAnswer('d')">d.{{questions[index].d}}</div>    
        </div><br>
        <button v-show="next" v-bind:style="{fontSize:'24px'}" v-on:click="updateQuestion()">Next</button>

    </div>
</template>

<script>
import database from "../firebase.js"
import firebase from "firebase"

export default {
    name: 'Questions',

    data() {
        return {
            questions: [],
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
        fetchQuestions:function() {
            database.collection('Questions').get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.questions.push(doc.data());
                    database.collection('Answers').doc(doc.id).get().then(doc => {
                        if (doc.exists) {
                            this.correctAnswer.push(doc.get('answer'));
                            console.log(doc.get('answer'));
                        } else {
                            console.log("No such document")
                        }
                    })
                })
            })
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
                document.getElementById(this.selectedAnswer).style.color = "white";
                document.getElementById(this.correctAnswer[this.index]).style.color = "white";
                this.index++;
                this.selectedAnswer= "";
                this.next=false;
            } else {
                var uid=firebase.auth().currentUser.uid;
                database.collection('Users').doc(uid).update({
                    chanceLeft: firebase.firestore.FieldValue.increment(-1)
                });

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
        this.fetchQuestions()
    }
}
</script>

<style scoped>
 * {
        font-family: "Mohave"
    }
 .bigWhite {
        color:#FFFFFF;
        font-size: 36px;
        display: block;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
   
    }
 #a, #b,#c,#d {
     text-align:left;
 }
</style>