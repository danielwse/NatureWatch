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
          <div style="text-align:left;">Email </div>
          <input type="email" placeholder="Key in email address" v-model="user.email"><br>
          <div style="text-align:left;">Password </div>
          <input type="password" placeholder="Key in password" v-model="user.password"><br><br>
          <button v-on:click="login" class="btn-green1">Confirm</button>
          <div class="fgtpw" v-on:click="reset">Forgot password?</div>
        </slot>
       </section>

      <footer class="modal-footer1">
        <slot name="footer1">
          Don't have an account yet?
        </slot>
        <div class="btn-green2" v-on:click="showModal">
          Sign up now!
        </div>
      </footer>
    </div>
    <Modal2 v-show="isModalVisible" v-on:close="closeModal"/>
  </div>
</template>


<script>
import Modal2 from "./Modal2.vue"
import firebase from "firebase"
import database from "../firebase.js"

  export default {
    name: 'Modal1',
    components: {
      Modal2,
    },
    data() {
      return {
        user: {
          email:'',
          password:'',
          id:'',
        },
        isModalVisible: false,
        date:'',
        lastSignIn:'',
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
            var user = firebase.auth().currentUser;
            this.updateAttributes(this.lastSignIn).then((value)=> {
              database.collection("Users").doc(user.uid).update({
                lastSignInTime: user.metadata.lastSignInTime,
              })
              console.log(value);
            }).then(this.close());
          })
          .catch(error => {
            alert(error.message);
          });
          
      },
      reset() {
        firebase.auth().sendPasswordResetEmail(this.user.email)
        .then(()=> {
          alert('Check your email!')
        })
        .catch((error)=> {
          alert(error.message)
        })
      },
      updateAttributes:function(lastSignIn) {
        return new Promise(function(resolve) {
          const today = new Date();
          var date = today.getDate();
          var user = firebase.auth().currentUser;
          database.collection("Users").doc(user.uid).get().then(doc=> {
            if (doc.data().lastSignInTime!="") {
              console.log("last signin time from doc: ",doc.data().lastSignInTime);
              lastSignIn=doc.data().lastSignInTime.substring(5,7)
              console.log("Okie we got: ",lastSignIn);
              }
            }
          ).then(()=> {
              console.log(user.uid," ",lastSignIn);
              console.log(lastSignIn.length);
      
              if (lastSignIn.length!=0) {
                console.log("Not first time log in");
            
                if (date-lastSignIn>0) {
                    database.collection("Users").doc(user.uid).update({
                      chanceLeft:2,
                      questionsList:["01","02","03","04","05","06","07","08","09","10",
                                      "11","12","13","14","15","16","17","18","19","20",
                                      "21","22","23","24","25","26","27","28","29","30"],
                    }).then(console.log("updated chanceLeft"))
                }
                if (date-lastSignIn==1) {
                    database.collection("Users").doc(user.uid).update({
                      streak: firebase.firestore.FieldValue.increment(1)
                    })
                    database.collection("Users").doc(user.uid).get().then(doc=> {
                      var ls = doc.data().longestStreak;
                      var s = doc.data().streak;
                      if (ls<s) {
                        database.collection("Users").doc(user.uid).update({
                          longestStreak: s
                        })
                      }
                    })
                } else {
                  database.collection("Users").doc(user.uid).update({
                    streak:0
                  })
                }
              }
            })
  
          resolve("Completed!");
        })
      }
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

  .fgtpw {
    font-size:14px;
    text-align: center;
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

  .btn-green1,.btn-green2 {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 10px;
    font-size:15px;
    
  }
</style>