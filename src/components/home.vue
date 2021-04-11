<template>
  <div class="img">
    <div id='welcomebox'>
      <span id='welcome'>Welcome to </span>
      <span id='nature'>Nature</span>
      <span id='watch'>Watch</span>
      <div id="explore">
        Explore
        <br><br>
        <div id="left">
          <button v-on:click="route('Forests')" id="forest" style="cursor: pointer;"> Forests </button>
        </div>
        <div id="right">
          <button v-on:click="route('AnimalHome')" id="animals" style="cursor: pointer;"> Animals </button>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>

export default {
  methods : {
    route(name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style scoped>
body{
  margin:0px;
}
.img {
  font-size: 50px;
  background:url('../assets/home2.jpg');
  width:100%;
  height: 100vh;
  background-size: cover;
  background-position:center;
}
#welcomebox{
  text-align: center;
  top:10%;
  position:relative;
}
#welcome{
  color:#FFF2f2;
  font-weight: bold;
}
#nature{
  color: #f9d451;
}
#watch{
  color:#bfbfbf;
}
#left{

  float:left;
  text-align: center;
  position:relative;
  width:50%;

}
#right{
  float:right;
  text-align: center;
  position:relative;
  width:50%;
}

#explore{
  font-size: 30px;
  top:20vh;
  position:relative;
  color:#FFFFFF;
  font-weight: 600;

}

button{
  font-size: 40px;
  padding: 0;
  background: none;
  border: none;
  color:white;
  font-weight: 500;
  padding-top: 75px;
  font-family: 'Trebuchet MS', sans-serif;
  -webkit-animation: pulse 1.5s infinite;
  animation: pulse 1.5s infinite;
  font-style: italic;
}

button:hover {
  -webkit-animation: none;
  animation: none;
}
@-webkit-keyframes pulse {
  0% { transform:scale(.9); }
  70% { transform:scale(1);
    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
  }
    100% {
    transform:scale(.9);
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
  }
}

@keyframes pulse {
  0% { transform:scale(.9); }
  70% { transform:scale(1);
    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
  }
    100% {
    transform:scale(.9);
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
  }
}

  </style>
