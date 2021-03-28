import Home from './components/Headers/Home.vue'
import AnimalHome from './components/AnimalHome.vue'
import Play from './components/Headers/Play.vue'
//import Animal from './components/Headers/Animal.vue'
import AnimalContent from './components/AnimalContent.vue'
/*import Animal_e from './components/Animal_e.vue'
import Animal_v from './components/Animal_v.vue'*/
import Forest from './components/Headers/Forest.vue'
import Forest_A from './components/Headers/Forest_A.vue'
import Forest_C from './components/Headers/Forest_C.vue'
import Forest_B from './components/Headers/Forest_B.vue'

export default[
    { path: '/', component: Home},
    { path: '/play', component: Play},
    { path: '/animal', component: AnimalHome},
    { path: '/animal_ce', name: 'CE', component: AnimalContent},
    { path: '/animal_e', name: 'E', component: AnimalContent},
    { path: '/animal_v', name: 'V', component: AnimalContent},
    { path: '/forest', component: Forest},
    { path: '/forest_a', component: Forest_A},
    { path: '/forest_c', component: Forest_C},
    { path: '/forest_b', component: Forest_B}
]
