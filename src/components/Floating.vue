<template>
    <div>
        <div class="align1" v-if="userName">
            <header class="modal-header">
                <img src="../assets/user_icon.png" width="50px">
                <span v-bind:style="{fontSize:'24px'}">Hi, {{userName}}!</span>
            </header>
            <footer class="modal-footer" v-on:click="redirect">
                <img src="../assets/stats.png" width="50px">
                <span v-bind:style="{color:'white'}">Click to see the statistics!</span>  
            </footer>
            <footer class="modal-footer" v-on:click="logout">
                <img src="../assets/exit.png" width="50px">
                <span>logout</span>
            </footer>
        </div>

        <div class="align2 smallWhite" v-if="!userName">Please login to start the quiz</div>
    </div>
</template>

<script>
import firebase from "firebase";
import database from "../firebase.js";

export default {
    name:'Floating',
    components:{

    },
    data() {
        return {
            userName:'',

        }
    },
    methods: {
        fetchUser:function(){
            firebase.auth().onAuthStateChanged(user=> {
                if (user) {
                  var uid = firebase.auth().currentUser.uid;
                  if (uid!=null) {
                      console.log(uid);
                      database.collection('Users').doc(uid).get().then(doc => this.userName = doc.data().name);
                  }
                }
            })    
        },
        logout:function() {
            firebase.auth().signOut().then(() => {
             alert('Safely signed out!');
             location.reload();
           }).catch(error => {
             alert('Sign Out Error', error);
           });
         },
         redirect:function() {
             this.$router.push("/userdashboard");
         }
    },
    created(){
        this.fetchUser();
    }
}
</script>

<style scoped>
.align1 {
    position: relative;
    bottom:240px;
    float: right;
}

.align2 {
    position: relative;
    right:10%;
    float: right;
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

.smallWhite {
        color:#FFFFFF;
        font-size:24px;
}

</style>