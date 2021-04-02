import Home from './components/home.vue'
import AnimalHome from './components/AnimalHome.vue'
import Play from './components/Headers/Play.vue'
import AnimalContent from './components/AnimalContent.vue'
import UserDashboard from './components/UserDashboard.vue'
import Notfound_A from './components/Notfound_A.vue'
import Notfound_F from './components/Notfound_F.vue'
import QuizCover from './components/QuizCover.vue'
import Questions from './components/Questions.vue'
import QuizResult from './components/QuizResult.vue'
import ForestContent from './components/ForestContent.vue'


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
    { path: '/userdashboard', component: UserDashboard},
    { path: '/notfound_a', component: Notfound_A},
    { path: '/notfound_f', component: Notfound_F}

]

