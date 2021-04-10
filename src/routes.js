import Home from './components/home.vue'
import AnimalHome from './components/AnimalHome.vue'
import Play from './components/Headers/Play.vue'
import AnimalContent from './components/AnimalContent.vue'
import UserDashboard from './components/UserDashboard.vue'
import QuizCover from './components/QuizCover.vue'
import Questions from './components/Questions.vue'
import QuizResult from './components/QuizResult.vue'
import ForestContent from './components/ForestContent.vue'
import ForestHome from './components/ForestHome.vue'


export default[
    { path: '/', component: Home},
    { path: '/play', component: Play},
    { path: '/animal', name: "AnimalHome", component: AnimalHome},
    { path: '/animal_ce', name: 'CE', component: AnimalContent},
    { path: '/animal_e', name: 'E', component: AnimalContent},
    { path: '/animal_v', name: 'V', component: AnimalContent},
    { path: '/animal/:status/:name', name: 'indivAnimal', component: AnimalContent},
    { path: '/forests', name: 'Forests', component: ForestHome},
    { path: '/forests/:name', name: "indivForest", component: ForestContent},
    { path: '/playtoplant', name: 'Quiz', component: QuizCover},
    { path: '/Questions', name:'Questions',component: Questions},
    { path: '/Result', name: 'Result',component: QuizResult, props: true},
    { path: '/userdashboard', component: UserDashboard},

]

