<template>
  <div>
    <Header></Header>
    <div class="grid-container">
      <div class="firstGrid">
        <div class="leftStreak">
          <div class="streak">
            <img src="../assets/flame.svg" />
            <span id="streakNum"><b>{{user.streak}}</b></span>
          </div>
          <h3><b>Streak </b></h3>
        </div>
        <div class="rightStreak">
          <div class="streak">
            <img src="../assets/flame.svg" />
            <span id="streakNum"><b>{{user.longestStreak}}</b></span>
          </div>
          <h3><b> Longest Streak </b></h3>
        </div>
      </div>
      <div class="card1">
        <div class="container">
          <span id="treeNum"><b>{{user.trees}}</b></span>
          <img src="../assets/tree.svg" />
        </div>
        <h3><b>Planted By You</b></h3>
      </div>
      <div class="card2">
        <div class="container">
          <span id="treeNum"><b>{{totalTrees}}</b></span>
          <img src="../assets/tree.svg" />
        </div>
        <h3><b>Planted By NatureWatch</b></h3>
      </div>
      <div class="chart">
        <div class="progressBarAndText">
          <RadialProgressBar
            :diameter="200"
            :completed-steps="totalSteps-user.chanceLeft"
            :total-steps="totalSteps"
          >
            <h3><b> {{totalSteps-user.chanceLeft}}/{{totalSteps}} Quiz Attempts Today</b></h3>
          </RadialProgressBar>
        </div>
      </div>
      <div class="leaderContainer">
        <div class="leaderboard">
          <div class="head">
            <i class="fas fa-crown"></i>
            <h1>Most Trees Planted</h1>
            <h4>All-Time</h4>
          </div>
          <div class="body">
            <ol>
              <li v-for="person in nameList" :key="person.id">
                <mark>{{person.name}}</mark>
                <small>{{person.trees}}</small>
              </li>
            </ol>
          </div>
        </div>
      </div>
            <div class="leaderContainerWeek">
        <div class="leaderboard">
          <div class="head">
            <i class="fas fa-crown"></i>
            <h1>Longest Streak</h1>
            <h4>All-Time</h4>
          </div>
          <div class="body">
            <ol>
              <li v-for="person in streakList" :key="person.id">
                <mark>{{person.name}}</mark>
                <small>{{person.streak}}</small>
              </li>
            </ol>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from "./Headers/QuizStats.vue";
import RadialProgressBar from "vue-radial-progress";
import firebase from "firebase";
import database from "../firebase.js"

export default {
  components: {
    Header,
    RadialProgressBar,
  },
  data() {
    return {
      user:{},
      nameList:[],
      streakList:[],
      totalSteps: 2,
      totalTrees: '',
    };
  },
  methods: {
    fetchData:function() {
        var uid = firebase.auth().currentUser.uid;
        if (uid!=null) {
            console.log(uid);
            database.collection('Users').doc(uid).get().then(doc => this.user= doc.data());
        }

        database.collection('Users').orderBy('trees','desc').limit(5).orderBy('name').get().then(snapshot=> {
          var totalTrees=0;
          snapshot.docs.forEach(doc => {
            var data=doc.data();
            totalTrees += data.trees;
            this.nameList.push({id:doc.id,name:data.name,trees:data.trees});
          })
          this.totalTrees=totalTrees;
        })

        database.collection('Users').orderBy('longestStreak','desc').limit(5).orderBy('name').get().then(snapshot=> {
          snapshot.docs.forEach(doc => {
            var data=doc.data();
            this.streakList.push({id:doc.id,name:data.name,streak:data.longestStreak});
          })
        })
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.firstGrid {
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgreen;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.streak img {
  height: 50px;
  width: 50px;
}

.streak {
  display: flex;
  justify-content: center;
}
#streakNum {
  height: 50px;
  width: 50px;
  font-size: 44px;
  color: darkred;
  margin-bottom: 10px;
}

.chart {
  display: flex;
  justify-content: center;
  background: #C0EFF6;
}

.progressBarAndText {
  display: inline-block;
}

.chart span {
  color: black;
}

.leftStreak,
.rightStreak {
  margin: 10px;
}

.leftStreak,
.rightStreak h3 {
  color: black;
}

.card1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: lightgrey;
  display: inline-block;
}

.card2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background: #A5CBAF;
  display: inline-block;
}
.card1 img {
  height: 100px;
  width: 80px;
 
}

.card2 img {
  height: 100px;
  width: 80px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px;
}

#treeNum {
  color: green;
  font-size: 60px;
}

.leaderContainer {
	grid-column-start: 1;
  grid-column-end: 3;
}

.leaderContainerWeek {
  grid-column-start: 3;
  grid-column-end: 5;

}


/* leaderboard */
.leaderboard {
	background: linear-gradient(to bottom, #3a404d, #181c26);
  height: 100%;
}

/* head */
.leaderboard .head {
	color: snow;
	font-size: 14px;
	text-align: center;
  border: 1px solid white;
  padding:18px;
}

.leaderboard h4 {
  color: green;
}

/* body */
.leaderboard .body {
	color: snow;
	font-size: 20px;
  border: 2px solid black;
}
.leaderboard ol {
	counter-reset: number;
  padding-left: 0px;
  padding-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  list-style-position: inside;
}
.leaderboard li {
	padding: 16px;
	display: flex;
}
.leaderboard li::before {
  color: white;
}
.leaderboard li small {
  color: darkgreen;
  font-weight: bold;
  font-size: 28px;
  margin-right: 20px;
}
.leaderboard li mark {
	flex-grow: 1;
	color: lightcyan;
	background-color: transparent;
}
.leaderboard li:before {
	counter-increment: number; 
	content: counter(number) "."; 
}
.leaderboard li:nth-child(1) {
	background: #fa6855;
}
.leaderboard li:nth-child(2) {
	background: #e0574f;
}
.leaderboard li:nth-child(3) {
	background: #d7514d;
}
.leaderboard li:nth-child(4) {
	background: #cd4b4b;
}
.leaderboard li:nth-child(5) {
	background: #c24448;
}
.leaderboard li:nth-child(6) {
	background: #ab373a;
}
.leaderboard li:nth-child(7) {
	background: #ab373a;
}
.leaderboard li:nth-child(8) {
	background: #ab373a;
}
.leaderboard li:nth-child(9) {
	background: #ab373a;
}
.leaderboard li:nth-child(10) {
	background: #ab373a;
}
</style>