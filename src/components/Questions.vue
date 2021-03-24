<template>
    <div>
        <div v-bind:style="{color:'#FFFFFF', fontSize:'64px'}">Question {{index+1}} </div><br>
        <div v-bind:style="{color:'#45A025', fontSize:'36px'}">
            {{questions[this.index][1].cont}}
        </div><br><br>
        <div class="bigWhite">
        <div id="a" v-on:click="matchAnswer('a')">a.{{questions[index][1].a}}</div>
        <div id="b" v-on:click="matchAnswer('b')">b.{{questions[index][1].b}}</div>
        <div id="c" v-on:click="matchAnswer('c')">c.{{questions[index][1].c}}</div>
        <div id="d" v-on:click="matchAnswer('d')">d.{{questions[index][1].d}}</div>    
        </div><br>
        <button v-show="next" v-bind:style="{fontSize:'24px'}" v-on:click="updateQuestion()">Next</button>

    </div>
</template>

<script>
import database from "../firebase.js"

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
                    this.questions.push([doc.id,doc.data()]);
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
            console.log(key,cor)
            if (cor == key) {
                this.counter++;
                document.getElementById(key).style.color = "green";
            } else {
                console.log(this.counter);
                document.getElementById(key).style.color = "red";
                document.getElementById(cor).style.color = "green";

            }
            this.next=true;
        },
        updateQuestion:function() {
            document.getElementById(this.selectedAnswer).style.color = "white";
            document.getElementById(this.correctAnswer[this.index]).style.color = "white";
            if (this.index<=5) {
                this.index++;
                this.selectedAnswer= "";
                this.next=false;
            } else if (counter==5) {
                
            } else {

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
    }
</style>