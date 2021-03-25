import QuizCover from './components/QuizCover.vue'
import Questions from './components/Questions.vue'
import QuizResult from './components/QuizResult.vue'

export default [ 
    { path: '/', name: 'Quiz', component: QuizCover},
    { path: '/Questions', name:'Questions',component: Questions},
    { path: '/Result', name: 'Result',component: QuizResult, props: true}
]


