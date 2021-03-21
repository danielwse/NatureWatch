<template>
    <div>
        <h1>Critically Endangered</h1>
        <ul id="top">
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/play" exact>Play to Plant!</router-link></li>
            <li><router-link to="/forest" exact>Forests</router-link></li>
            <li><router-link to="/animal" exact>Animal</router-link></li>
        </ul>
        <ul id="under">
            <li><router-link to="/animal_ce" exact>Critically Endangered</router-link></li>
            <li><router-link to="/animal_e" exact>Endangered</router-link></li>
            <li><router-link to="/animal_v" exact>Vulnerable</router-link></li>
        </ul>
    </div>
</template>

<script>

export default {
    
}
</script>
<style scoped>
h1{
    text-align: left;
    font-size: 2.5em;
    font-weight: 400;
    color: black;
}
#top{
    
}

</style>
