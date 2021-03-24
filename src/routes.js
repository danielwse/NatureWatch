import QuizCover from './components/QuizCover.vue'
import Questions from './components/Questions.vue'
import QuizResult from './components/QuizResult.vue'

export default [ 
    { path: '/Quiz', component: QuizCover},
    { path: '/Quiz/Questions', name:'Questions',component: Questions},
    { path: '/Quiz/Result', name: 'Result',component: QuizResult}]

