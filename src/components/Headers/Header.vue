<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/playtoplant" exact>Play to Plant!</router-link></li>
      <li class="dropdown1">
        <a :href="$router.resolve({ name: 'Forests' }).href">Forests</a>

        <div class="dropdown-content">
          <router-link :to="{ name: 'indivForest', params: {name: 'Amazon Rainforest'}}">Amazon Rainforest</router-link>
          <router-link :to="{ name: 'indivForest', params: {name: 'Congo Basin'}}">Congo Basin</router-link>
          <router-link :to="{ name: 'indivForest', params: {name: 'Nicaragua Bosawás Biosphere Reserve'}}">Nicaragua Bosawás Biosphere Reserve</router-link>
          <router-link :to="{ name: 'indivForest', params: {name: 'Atlantic Rainforest'}}">Atlantic Rainforest</router-link>
          <router-link :to="{ name: 'indivForest', params: {name: 'Valdivian Temperate Rainforest'}}">Valdivian Temperate Rainforest</router-link>


        </div>
      </li>
      <li class="dropdown1">
        <router-link to="/animal" exact class="dropbtn">Animal</router-link>
        <div class="dropdown-content">
          <a :href="$router.resolve({ name: 'CE' }).href"
            >Critically Endangered</a
          >
          <a :href="$router.resolve({ name: 'E' }).href">Endangered</a>
          <a :href="$router.resolve({ name: 'V' }).href">Vulnerable</a>
        </div>
      </li>
     
     </ul>
  </div>
</template>

<script>

</script>

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-top: 0px;
  margin-left: 5%;
}
.dropbtn {
  display: inline-block;
  color: white;
  font-size: 1.3em;
  text-align: left;
  text-decoration: none;
}
li {
  float: left;
  margin-left: 0%;
}
li a {
  display: inline-block;
  color: white;
  text-align: left;
  margin-top: 50px;
  font-size: 1.3em;
  font-weight: 500;
  padding: 0px 16px;
  text-decoration: none;
}
l
.dropdown1:hover .dropbtn {
  color: white;
  z-index: 1;
}

li.dropdown {
  display: inline-block;
  z-index: 1;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  font-size: 0.8em;
  font-weight: 500;
  z-index: 1;
}
.dropdown-content a {
  color: black;
  margin-top: 20px;
  text-decoration: none;
  display: block;
  text-align: left;
  z-index: 1;
}
.dropdown-content a:hover {
  background-color: #008b8b;
  height: auto;
}
.dropdown1:hover .dropdown-content {
  display: block;
  z-index: 1;
}
li.router-linkactive {
  color: white;
}
</style>>
