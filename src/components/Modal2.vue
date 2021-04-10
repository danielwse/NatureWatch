<template>
  <div class="modal-backdrop2">
    <div class="modal2">
      <header class="modal-header2">
        <slot name="header">
            Sign up
        </slot>
        <button
          type="button"
          class="btn-close2"
          v-on:click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body2">
        <slot name="body">
          <div>Email </div>
          <input type="email" placeholder="Key in email address" v-model="user.email"><br>
          <div>Username </div>
          <input placeholder="Key in username" v-model="user.name"><br>
          <div>Password </div>
          <input type="password" placeholder="Key in email address" v-model="user.password"><br><br>
          <button class="btn-green2" v-on:click="register">Confirm</button>
        </slot>
       </section>

      <footer class="modal-footer2">
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
          questionsList:["01","02","03","04","05","06","07","08","09","10"],
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
  .modal-backdrop2 {
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

  .modal-header2,
  .modal-footer2 {
    padding: 15px;
    display: flex;
  }

  .modal-header2 {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    font-size:25px;
  }

  .modal-footer2 {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;

  }

  .modal-body2 {
    position: relative;
    padding: 20px 10px;
    text-align: left;
    font-size: 20px;
  }

  .btn-close2 {
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

  .btn-green2 {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 10px;
    font-size:15px;
  }
</style>

