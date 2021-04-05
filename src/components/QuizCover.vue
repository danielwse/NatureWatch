<template>
    <div>
        <PlayHeader></PlayHeader><br>
        
            <div class="align-left">
                <span class="bigWhite">Welcome to </span>
                <span class="lightGreen">Play to Plant!</span><br>
                <span class="green">for every 5 questions that you answer correctly NatureWatch donates the costs<br>
                    required to plant a tree in the Amazon Rainforest!</span><br>
                <span class="green align">In collaboration with</span>nbsp
                <img class="align" src="../assets/oneTreePlanted_logo.png" alt="Not found" style="width:168px">
            </div>nbsp
            <div class="align-right modal">
                <div v-if="name">
                    <header class="modal-header">
                        <img src="../assets/user_icon.png" width="50px">
                        <span v-bind:style="{fontSize:'24px'}">Hi, {{name}}!</span>
                    </header>
                    <footer class="modal-footer">
                        <img src="../assets/stats.png" width="50px">
                        <router-link v-bind:style="{color:'white'}" to="/userdashboard" exact>Click to see the statistics!</router-link>
                    </footer>
                    <footer class="modal-footer">
                        <img src="../assets/exit.png" width="50px">
                        <span v-on:click="logout">logout</span>
                    </footer>
                    <footer class="modal-footer">
                        <img src="../assets/arrow.svg" width="50px">
                        <div v-on:click="changeUser">change account</div>
                    </footer>
                </div>
                <div v-if="!name">Please login to start the quiz</div>
            </div>
        <br>
        <span class="smallWhite">Click me to start planting trees!</span> nbsp
        <img src="../assets/plant.svg" style="width:400px" v-on:click="showModal">
        <Modal v-show="isModalVisible" v-on:close="closeModal"/>


    </div>
</template>

<script>
import Modal from './Modal.vue';
import PlayHeader from './Headers/Play.vue';
import firebase from "firebase";
import database from "../firebase.js"

export default {
    name: 'QuizCover',
    components: {
        Modal,
        PlayHeader
    },
    data() {
        return {
            isModalVisible: false,
            date:'',
            lastSignIn:'',
            name:'',
        }
    },
    methods:{
        showModal:function() {
            var user = firebase.auth().currentUser;
            if (user!=null) {
                console.log(firebase.auth().currentUser);
           
                const today = new Date();
                this.date = today.getDate();
                const last = firebase.auth().currentUser.metadata.lastSignInTime;
                this.lastSignin = last.substring(5,7);
    
                if (this.date-this.lastSignin>0) {
                    database.collection("Users").doc(user.uid).update({
                        chanceLeft:2,
                        questionsList:["01","02","03","04","05","06","07","08","09","10"],
                    })
                }
                database.collection("Users").doc(user.uid).get().then(doc=> {
                    if (doc.data().chanceLeft!=0) this.$router.push('/Questions');
                    else alert("Chance used up today.Come tomorrow!");
                });
            }
            else this.isModalVisible = true;
        },
        changeUser:function() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
      fetchUser:function(){
            var uid = firebase.auth().currentUser.uid;
            if (uid!=null) {
                console.log(uid);
                database.collection('Users').doc(uid).get().then(doc => this.name = doc.data().name);
            }
        },
        logout:function() {
            firebase.auth().signOut().then(() => {
             alert('Safely signed out!');
             location.reload();
           }).catch(error => {
             alert('Sign Out Error', error);
           });
         }
    },
    created() {
        document.body.style.backgroundColor = "#343434";
    },
    mounted() {
        this.fetchUser();
    },
  
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
    .lightGreen{
        color: #4FE11C;
        font-size: 64px;
    }
    .green{
        color: #A2EA89;
        font-size:24px;
    }
    .align-left{
        display:inline-block;
        vertical-align: middle;
        width:87%;
    }
    .align-right{
        display:inline-block;
        vertical-align: middle;
        width:11%;
    }

    .modal {
    position: relative;
    bottom: 40px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    color: white;
  }

  .modal-header {
    position: relative;
    justify-content: space-evenly;
    font-size:25px;
    background-color: rgb(158 191 81);
    border-radius: 100px 0px 100px 0px;
  }

  .modal-footer {
    font-size:18px;
    border-top: 1px solid white;
    justify-content: space-evenly;
    background: rgb(114 170 74);
    border-radius: 100px 0px 100px 0px;
  }


</style>