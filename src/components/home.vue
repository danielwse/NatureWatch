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
  background:url('https://media.istockphoto.com/photos/atlantic-forest-in-brazil-mata-atlantica-picture-id1044285108?k=6&m=1044285108&s=170667a&w=0&h=FPS-c6_AVNDsNIk4jQNdW4IcqOQaQdg5HFvnMp8Piys=');
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
}

button{
  background: #CFB96B;
  font-size: 30px;
  padding: 10px;
  border-radius: 15px;
  color:#FFFDFD;
}
</style>
