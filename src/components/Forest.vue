<template>
    <div>
        <h1>Atlantic Rainforest</h1>
        <ul id="top">
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/play" exact>Play to Plant!</router-link></li>
            <li><router-link to="/forest" exact>Forests</router-link></li>
            <li><router-link to="/animal" exact>Animal</router-link></li>
        </ul>
        <ul id="under">
            <li><router-link to="/forest_a" exact>Amazon</router-link></li>
            <li><router-link to="/forest_c" exact>Congo</router-link></li>
            <li><router-link to="/forest_b" exact>Bosawas</router-link></li>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style scoped>

</style>