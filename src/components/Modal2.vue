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
          <input type="email" v-model="user.email"><br>
          <div>Username </div>
          <input type="email" v-model="user.name"><br>
          <div>Password </div>
          <input type="password" v-model="user.password"><br>
          <button v-on:click="confirm">Confirm</button>
          <div v-show="errorMsg" style="color:red">This email has been registered already!</div>
          <div v-show="successMsg" style="color:green">Registered successfully!Go back to sign in!</div>
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

  export default {
    name: 'Modal2',
    components: {
    },
    data() {
      return {
        user: {
          email:'',
          password:'',
          name:'',
        },
        errorMsg:false,
        successMsg:false,
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      confirm:function() {
        var count=1;
        database.collection('Users').get().then(snapshot => {
          snapshot.forEach(doc => {
              count++;
            if (doc.data().email == this.user.email) {
                this.errorMsg=true;
            }
          })
        })
        if (!this.errorMsg) {
            count++;
            database.collection('Users').doc(count.toString()).set(this.user);
            this.errorMsg = false;
            this.successMsg = true;
        }
      }
    },
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

