<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
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

      <section class="modal-body">
        <slot name="body">
          <div>Email </div>
          <input type="email" placeholder="Key in email address" v-model="user.email"><br>
          <div>Username </div>
          <input placeholder="Key in username" v-model="user.name"><br>
          <div>Password </div>
          <input type="password" placeholder="Key in email address" v-model="user.password"><br><br>
          <button class="btn-green" v-on:click="register">Confirm</button>
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
          Welcome to NatureWatch!
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import database from "../firebase.js"
import firebase from "firebase"

  export default {
    name: 'Modal2',
    components: {
    },
    data() {
      return {
        user: {
          name:'',
          trees:0,
          chanceLeft:2,
          questionsList:["01","02","03","04","05","06","07","08","09","10",
                        "11","12","13","14","15","16","17","18","19","20",
                        "21","22","23","24","25","26","27","28","29","30"],
          streak:0,
          longestStreak:0,
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
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            alert('Successfully registered! Please login.');
            var uid=firebase.auth().currentUser.uid;
 
            console.log(this.user.questionsList);
            database.collection('Users').doc(uid).set(this.user);
            this.$emit('close');
          })
          .catch(error => {
            alert(error.message);
          });
      }
    }
  };
</script>

<style scoped>
  .modal-backdrop {
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

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    font-size:25px;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;

  }

  .modal-body {
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

