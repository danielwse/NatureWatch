<template>
  <div id="app">
    <AnimalContent></AnimalContent>
  </div>
</template>

<script>
import AnimalContent from './components/AnimalContent.vue'

export default {
  name: 'App',
  components: {
    AnimalContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
