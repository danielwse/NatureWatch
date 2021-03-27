<template>
    <div>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/play" exact>Play to Plant!</router-link></li>
            <li class="dropdown">
                <router-link to="/forest" exact class = "dropbtn">Forests</router-link>
                <div class="dropdown-content">
                    <router-link to="/forest_a" exact>Amazon</router-link>
                    <router-link to="/forest_c" exact>Congo</router-link>
                    <router-link to="/forest_b" exact>Bosawás</router-link>
                </div>
            </li>
            <li class="dropdown">
                <router-link to="/animal" exact class = "dropbtn">Animal</router-link>
                <div class="dropdown-content">
                    <router-link to="/animal_ce" exact>Critically Endangered</router-link>
                    <router-link to="/animal_e" exact>Endangered</router-link>
                    <router-link to="/animal_v" exact>Vulnerable</router-link>
                </div>
            </li>
            
            <div class="search-container">
                <input type="text" placeholder="Search.." name="search">
            </div>
        </ul>
    </div>
</template>

<script>

  export default {
    
  }
</script>

<style scoped>
ul{
    list-style-type: none;
    margin:0;
    padding: 0;
    overflow: hidden;
    margin-top:0px;
    margin-left:0px;
}
.dropbtn{
  display: inline-block;
  color: black;
  font-size:1.3em;
  text-align: left;
  margin-top: 50px;
  padding: 0px 16px;
  text-decoration: none;
}
li{
  float:left;
  margin-left:55px;
}
li a{
  display: inline-block;
  color: black;
  text-align: left;
  margin-top: 50px;
  font-size:1.3em;
  font-weight: 500;
  padding: 0px 16px;
  text-decoration: none;
}
li a:hover, .dropdown:hover .dropbtn{
  color:white;
}
li.dropdown {
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  font-size: 0.7em;
  font-weight: 500;
  min-width: 150px;
  min-height:10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a{
  color: black;
  padding: 1px 1px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #008B8B;
}
.dropdown:hover .dropdown-content {
  display: block;
}
li.router-linkactive{
    color: white;
}
.search-container {
  float: right;
}
input[type=text] {
  padding: 6px;
  margin-top: 30px;
  margin-right:40px;
  font-size: 17px;
  border: none;
}


</style>>
