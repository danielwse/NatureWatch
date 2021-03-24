<template>
  <div id="app">
    <QuizCover></QuizCover>
    <Questions></Questions>
  </div>
</template>

<script>
import QuizCover from './components/QuizCover.vue'
import Questions from './components/Questions.vue'

export default {
  name: 'App',
  components: {
    QuizCover,
    Questions
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
