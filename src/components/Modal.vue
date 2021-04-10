<template>
  <div class="modal-backdrop1">
    <div class="modal1">
      <header class="modal-header1">
        <slot name="header">
          Login
        </slot>
        <button
          type="button"
          class="btn-close1"
          v-on:click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body1">
        <slot name="body">
          <div>Email </div>
          <input type="email" placeholder="Key in email address" v-model="user.email"><br>
          <div>Password </div>
          <input type="password" placeholder="Key in password" v-model="user.password"><br><br>
          <button v-on:click="login" class="btn-green1">Confirm</button>
        </slot>
       </section>

      <footer class="modal-footer1">
        <slot name="footer1">
          Don't have an account yet?
        </slot>
        <button type="button" class="btn-green1" v-on:click="showModal">
          Sign up now!
        </button>
      </footer>
    </div>
    <Modal2 v-show="isModalVisible" v-on:close="closeModal"/>
  </div>
</template>

<script>
import Modal2 from "./Modal2.vue"
import firebase from "firebase"

  export default {
    name: 'Modal',
    components: {
      Modal2,
    },
    data() {
      return {
        user: {
          email:'',
          password:'',
        },
        isModalVisible: false,
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      login() {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(() => {
            alert('Successfully logged in');
            this.$router.push('/Questions');
          })
          .catch(error => {
            alert(error.message);
          });
      },
    },
  };
</script>

<style scoped>
  .modal-backdrop1 {
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

  .modal1 {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }

  .modal-header1,
  .modal-footer1 {
    padding: 15px;
    display: flex;
  }

  .modal-header1 {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    font-size:25px;
  }

  .modal-footer1 {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;

  }

  .modal-body1 {
    position: relative;
    padding: 20px 10px;
    text-align: left;
    font-size: 20px;
  }

  .btn-close1 {
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

  .btn-green1 {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 10px;
    font-size:15px;
  }
</style>

