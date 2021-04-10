<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/playtoplant" exact>Play to Plant!</router-link></li>
      <li class="dropdown">
        <a :href="$router.resolve({ name: 'Forests' }).href">Forests</a>

        <div class="dropdown-content">
          <a :href="$router.resolve({ name: 'Amazon Rainforest' }).href"
            >Amazon Rainforest</a
          >
          <a :href="$router.resolve({ name: 'Congo Basin' }).href"
            >Congo Basin</a
          >
          <a
            :href="
              $router.resolve({ name: 'Nicaragua Bosawás Biosphere Reserve' })
                .href
            "
            >Bosawás Biosphere</a
          >
        </div>
      </li>
      <li class="dropdown">
        <router-link to="/animal" exact class="dropbtn">Animal</router-link>
        <div class="dropdown-content">
          <a :href="$router.resolve({ name: 'CE' }).href"
            >Critically Endangered</a
          >
          <a :href="$router.resolve({ name: 'E' }).href">Endangered</a>
          <a :href="$router.resolve({ name: 'V' }).href">Vulnerable</a>
        </div>
      </li>
      <div class="searcher">
<sui-search :source="countries" fluid>
    <template v-slot:input="{ props, handlers }">
      <sui-input
        v-bind="props"
        v-on="handlers"
        icon="search"
        placeholder="Common animals..."
        focus
      />
    </template>
  </sui-search>      </div>
<!--       <div class="autocomplete">
        <input list="heroes" type="text" placeholder="Search.." name="search" v-on:keyup.enter="search()" id="searchbar" v-on:keyup.delete="clear()">
        <datalist id="heroes"></datalist>
      </div>
 -->    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     countries: [
        { key: 'AL', value: 'AL', title: 'Alabama' },
        { key: 'AK', value: 'AK', text: 'Alaska' },
        { key: 'AZ', value: 'AZ', text: 'Arizona' },
        { key: 'AR', value: 'AR', text: 'Arkansas' },
        { key: 'CA', value: 'CA', text: 'California' },
        { key: 'CO', value: 'CO', text: 'Colorado' },
        { key: 'CT', value: 'CT', text: 'Connecticut' },
        { key: 'DE', value: 'DE', text: 'Delaware' },
        { key: 'DC', value: 'DC', text: 'District Of Columbia' },
        { key: 'FL', value: 'FL', text: 'Florida' },
        { key: 'GA', value: 'GA', text: 'Georgia' },
        { key: 'HI', value: 'HI', text: 'Hawaii' },
        { key: 'ID', value: 'ID', text: 'Idaho' },
        { key: 'IL', value: 'IL', text: 'Illinois' },
        { key: 'IN', value: 'IN', text: 'Indiana' },
        { key: 'IA', value: 'IA', text: 'Iowa' },
        { key: 'KS', value: 'KS', text: 'Kansas' },
        { key: 'KY', value: 'KY', text: 'Kentucky' },
        { key: 'LA', value: 'LA', text: 'Louisiana' },
        { key: 'ME', value: 'ME', text: 'Maine' },
        { key: 'MD', value: 'MD', text: 'Maryland' },
        { key: 'MA', value: 'MA', text: 'Massachusetts' },
        { key: 'MI', value: 'MI', text: 'Michigan' },
        { key: 'MN', value: 'MN', text: 'Minnesota' },
        { key: 'MS', value: 'MS', text: 'Mississippi' },
        { key: 'MO', value: 'MO', text: 'Missouri' },
        { key: 'MT', value: 'MT', text: 'Montana' },
        { key: 'NE', value: 'NE', text: 'Nebraska' },
        { key: 'NV', value: 'NV', text: 'Nevada' },
        { key: 'NH', value: 'NH', text: 'New Hampshire' },
        { key: 'NJ', value: 'NJ', text: 'New Jersey' },
        { key: 'NM', value: 'NM', text: 'New Mexico' },
        { key: 'NY', value: 'NY', text: 'New York' },
        { key: 'NC', value: 'NC', text: 'North Carolina' },
        { key: 'ND', value: 'ND', text: 'North Dakota' },
        { key: 'OH', value: 'OH', text: 'Ohio' },
        { key: 'OK', value: 'OK', text: 'Oklahoma' },
        { key: 'OR', value: 'OR', text: 'Oregon' },
        { key: 'PA', value: 'PA', text: 'Pennsylvania' },
        { key: 'RI', value: 'RI', text: 'Rhode Island' },
        { key: 'SC', value: 'SC', text: 'South Carolina' },
        { key: 'SD', value: 'SD', text: 'South Dakota' },
        { key: 'TN', value: 'TN', text: 'Tennessee' },
        { key: 'TX', value: 'TX', text: 'Texas' },
        { key: 'UT', value: 'UT', text: 'Utah' },
        { key: 'VT', value: 'VT', text: 'Vermont' },
        { key: 'VA', value: 'VA', text: 'Virginia' },
        { key: 'WA', value: 'WA', text: 'Washington' },
        { key: 'WV', value: 'WV', text: 'West Virginia' },
        { key: 'WI', value: 'WI', text: 'Wisconsin' },
        { key: 'WY', value: 'WY', text: 'Wyoming' },
      ],
      current: null,
    };
  },
  methods: {
    search: function () {
      console.log("HI");
      
    },
    clear:function() {
      document.getElementById("heroes").innerHTML = "";
    }
  },
};
</script>

<style scoped>

.searcher {
  position: absolute;
  left: 80%;
  height: 100px;
  border: 1px solid yellow;
  width: 180px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-top: 0px;
  margin-left: 0px;
}
.dropbtn {
  display: inline-block;
  color: black;
  font-size: 1.3em;
  text-align: left;
  margin-top: 50px;
  padding: 0px 16px;
  text-decoration: none;
}
li {
  float: left;
  margin-left: 55px;
}
li a {
  display: inline-block;
  color: black;
  text-align: left;
  margin-top: 50px;
  font-size: 1.3em;
  font-weight: 500;
  padding: 0px 16px;
  text-decoration: none;
}
li a:hover,
.dropdown:hover .dropbtn {
  color: white;
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
  min-height: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 1px 1px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #008b8b;
}
.dropdown:hover .dropdown-content {
  display: block;
}
li.router-linkactive {
  color: white;
}
/* .autocomplete {
  float: right;
  opacity: 0.9;
}
 */
input[type="text"] {
  padding: 6px;
  margin-top: 30px;
  margin-right: 40px;
  font-size: 17px;
  border: none;
  width: 70%;
  -webkit-transition: width 0.15s ease-in-out;
  transition: width 0.15s ease-in-out;
}
input[type="text"]:focus {
  width: 70%;
}

::placeholder {
  color: black;
  opacity: 0.4;
}

#searchbar {
  border-radius: 10%;
}

.autocomplete {
  position: relative;
  display: inline-block;
  background: blue;
  border: 1px solid white;
}

.autocomplete-items {
  position: absolute;
  background: yellow;
  /*border: 1px solid #d4d4d4;*/
  border: 1px solid white;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}
.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: blue;
  border-bottom: 1px solid #d4d4d4;
}
.autocomplete-items div:hover {
  /*when hovering an item:*/
  background-color: #e9e9e9;
}
.autocomplete-active {
  /*when navigating through the items using the arrow keys:*/
  background-color: DodgerBlue !important;
  color: #ffffff;
}
</style>>
