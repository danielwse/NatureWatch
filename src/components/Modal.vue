<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Login
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
          <div>Password </div>
          <input type="password" v-model="user.password"><br>
          <button v-on:click="confirm">Confirm</button>
          <div v-if="errorMsg" style="color:red">Wrong email or password!</div>
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
          Don't have an account yet?
        </slot>
        <button type="button" class="btn-green" v-on:click="showModal">
          Sign up now!
        </button>
      </footer>
    </div>
    <Modal2 v-show="isModalVisible" v-on:close="closeModal"/>
  </div>
</template>

<script>
import database from "../firebase.js"
import Modal2 from "./Modal2.vue"

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
          name:'',
          trees:0,
          chanceLeft:2,
        },
        errorMsg:false,
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
      confirm:function() {
        var unmatched=1;
        database.collection('Users').get().then(snapshot => {
          snapshot.forEach(doc => {
            if (doc.data().email == this.user.email) {
              if (doc.data().password == this.user.password) {
                unmatched=0;
                this.user.name=doc.data().name;
                this.user.trees=doc.data().trees;
                this.$router.push({name:'Questions',params:{user:this.user}})
              }
            }
          })
        })
        if (unmatched==1) this.errorMsg=true;
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

