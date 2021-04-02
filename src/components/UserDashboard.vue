<template>
  <div>
    <Forest></Forest>
    <div class="grid-container">
      <div class="firstGrid">
        <div class="leftStreak">
          <div class="streak">
            <img src="../assets/flame.svg" />
            <span id="streakNum"><b>3</b></span>
          </div>
          <h3><b>Logins This Week </b></h3>
        </div>
        <div class="rightStreak">
          <div class="streak">
            <img src="../assets/flame.svg" />
            <span id="streakNum"><b>10</b></span>
          </div>
          <h3><b> Longest Streak </b></h3>
        </div>
      </div>
      <div class="card1">
        <div class="container">
          <span id="treeNum"><b>10</b></span>
          <img src="../assets/tree.svg" />
        </div>
        <h3><b>Planted By You</b></h3>
      </div>
      <div class="card2">
        <div class="container">
          <span id="treeNum"><b>2000</b></span>
          <img src="../assets/tree.svg" />
        </div>
        <h3><b>Planted By NatureWatch</b></h3>
      </div>
      <div class="chart">
        <div class="progressBarAndText">
          <RadialProgressBar
            :diameter="200"
            :completed-steps="completedSteps"
            :total-steps="totalSteps"
          >
            <h3><b> 2/5 Quiz Attempts Today</b></h3>
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
              <li>
                <mark>Jerry Wood</mark>
                <small>948</small>
              </li>
              <li>
                <mark>Brandon Barnes</mark>
                <small>750</small>
              </li>
              <li>
                <mark>Raymond Knight</mark>
                <small>684</small>
              </li>
              <li>
                <mark>Trevor McCormick</mark>
                <small>335</small>
              </li>
              <li>
                <mark>Andrew Fox</mark>
                <small>296</small>
              </li>
            </ol>
          </div>
        </div>
      </div>
            <div class="leaderContainerWeek">
        <div class="leaderboard">
          <div class="head">
            <i class="fas fa-crown"></i>
            <h1>Most Trees Planted</h1>
            <h4>This Week</h4>
          </div>
          <div class="body">
            <ol>
              <li>
                <mark>Jerry Wood</mark>
                <small>948</small>
              </li>
              <li>
                <mark>Brandon Barnes</mark>
                <small>750</small>
              </li>
              <li>
                <mark>Raymond Knight</mark>
                <small>684</small>
              </li>
              <li>
                <mark>Trevor McCormick</mark>
                <small>335</small>
              </li>
              <li>
                <mark>Andrew Fox</mark>
                <small>296</small>
              </li>
            </ol>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Forest from "./Headers/Forest.vue";
import RadialProgressBar from "vue-radial-progress";

export default {
  components: {
    Forest,
    RadialProgressBar,
  },
  data() {
    return {
      completedSteps: 2,
      totalSteps: 5,
    };
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.firstGrid {
  display: flex;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;
  background: lightgreen;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.streak img {
  height: 50px;
  width: 50px;
  border: 1px solid white;
}

.streak {
  border: 1px solid white;
  display: flex;
  justify-content: center;
}
#streakNum {
  font-size: 50px;
  color: green;
  border: 1px solid white;
}

.chart {
  border: 1px solid white;
  display: flex;
  justify-content: center;
  background: lightgreen;
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
  background: lightgrey;
  display: inline-block;
}
.card1 img {
  height: 100px;
  width: 80px;
  border: 1px solid white;
}

.card2 img {
  height: 100px;
  width: 80px;
  border: 1px solid white;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
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
}

.leaderboard h4 {
  color: green;
}

/* body */
.leaderboard .body {
	color: snow;
	font-size: 20px;
  border: 1px solid yellow;
}
.leaderboard ol {
	counter-reset: number;
  border: 1px solid blue;
  padding-left: 0px;
  padding-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  list-style-position: inside;
}
.leaderboard li {
	padding: 16px;
	display: flex;
  border: 1px solid white;
}
.leaderboard li mark {
	flex-grow: 1;
	color: snow;
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
</style>