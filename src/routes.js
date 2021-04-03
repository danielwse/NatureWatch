import Home from './components/home.vue'
import AnimalHome from './components/AnimalHome.vue'
import Play from './components/Headers/Play.vue'
//import Animal from './components/Headers/Animal.vue'
import AnimalContent from './components/AnimalContent.vue'
/*import Animal_e from './components/Animal_e.vue'
import Animal_v from './components/Animal_v.vue'*/
import UserDashboard from './components/UserDashboard.vue'
/*import Forest from './components/Headers/Forest.vue'*/
import QuizCover from './components/QuizCover.vue'
import Questions from './components/Questions.vue'
import QuizResult from './components/QuizResult.vue'
import ForestContent from './components/ForestHome.vue'


export default[
    { path: '/', component: Home},
    { path: '/play', component: Play},
    { path: '/animal', name: "AnimalHome", component: AnimalHome},
    { path: '/animal_ce', name: 'CE', component: AnimalContent},
    { path: '/animal_e', name: 'E', component: AnimalContent},
    { path: '/animal_v', name: 'V', component: AnimalContent},
    { path: '/forests', name: 'Forests', component: ForestContent},
    { path: '/forests/Amazon', name: "Amazon Rainforest", component: ForestContent},
    { path: '/forests/Congo', name: "Congo Basin", component:ForestContent},
    { path: '/forests/Bosawas', name: "Nicaragua Bosawás Biosphere Reserve", component: ForestContent},
    { path: '/playtoplant', name: 'Quiz', component: QuizCover},
    { path: '/Questions', name:'Questions',component: Questions},
    { path: '/Result', name: 'Result',component: QuizResult, props: true},
    { path: '/userdashboard', component: UserDashboard}
]

