<template>
  <div class="modal2-backdrop">
    <div class="modal2">
      <header class="modal2-header">
        <slot name="header">
            Sign up
        </slot>
        <button
          type="button"
          class="btn-close"
          v-on:click="close"
        >
          x
        </button>
      </header>

      <section class="modal2-body">
        <slot name="body">
          <div>Email </div>
          <input type="email" placeholder="Key in email address" v-model="email"><br>
          <div>Username </div>
          <input placeholder="Key in username" v-model="user.name"><br>
          <div>Password </div>
          <input type="password" placeholder="Key in password" v-model="password"><br><br>
          <button class="btn-green" v-on:click="register">Confirm</button>
        </slot>
       </section>

      <footer class="modal2-footer">
        <slot name="footer">
          Welcome to NatureWatch!
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import database from "../../firebase.js"
import firebase from "firebase"
  export default {
    name: 'modal22',
    components: {
    },
    data() {
      return {
        email:'',
        password:'',
        user: {
          name:'',
          trees:0,
          chanceLeft:2,
          questionsList:["01","02","03","04","05","06","07","08","09","10",
                        "11","12","13","14","15","16","17","18","19","20",
                        "21","22","23","24","25","26","27","28","29","30"],
          streak:0,
          longestStreak:0,
          lastSignInTime:'',
        },
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      register() {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('Successfully registered! Please login.');
            var user = firebase.auth().currentUser;
            var uid = user.uid;
            console.log(this.user.questionsList);
            database.collection('Users').doc(uid).set(this.user);
            this.$emit('close');
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (this.email.length==0) alert("Please enter your email!");
            else if (this.user.name.length==0) alert("Please enter your username!");
            else if (this.password.length==0) alert("Please enter your password!");
            else if (errorCode=='auth/invalid-email') alert("Invalid email!");
            else if (errorCode=='auth/email-already-in-use') alert("The email has already been registered!");
            else alert(errorMessage);
          });
      }
    }
  };
</script>

<style scoped>
  .modal2-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal2 {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  .modal2-header,
  .modal2-footer {
    padding: 15px;
    display: flex;
  }
  .modal2-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    font-size:25px;
  }
  .modal2-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }
  .modal2-body {
    position: relative;
    padding: 20px 10px;
    text-align: left;
    font-size: 20px;
  }
  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 10px;
    font-size:15px;
  }
</style>
