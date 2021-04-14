import Home from './components/Home.vue'
import AnimalHome from './components/AnimalSection/AnimalHome.vue'
import AnimalContent from './components/AnimalSection/AnimalContent.vue'
import UserDashboard from './components/PlayToPlant/UserDashboard.vue'
import QuizCover from './components/PlayToPlant/QuizCover.vue'
import Questions from './components/PlayToPlant/Questions.vue'
import QuizResult from './components/PlayToPlant/QuizResult.vue'
import ForestContent from './components/ForestSection/ForestContent.vue'
import ForestHome from './components/ForestSection/ForestHome.vue'


export default[
    { path: '/', component: Home},
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

