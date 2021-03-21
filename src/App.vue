<template>
  <div id="app">
    <QuizCover></QuizCover>
  </div>
</template>

<script>
import QuizCover from './components/QuizCover.vue'

export default {
  name: 'App',
  components: {
    QuizCover
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
  margin-top: 60px;
}
</style>
