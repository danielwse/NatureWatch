import Home from './components/Home.vue'
import Play from './components/Play.vue'
import Animal from './components/Animal.vue'
import Animal_ce from './components/Animal_ce.vue'
import Animal_e from './components/Animal_e.vue'
import Animal_v from './components/Animal_v.vue'
import Forest from './components/Forest.vue'
import Forest_A from './components/Forest_A.vue'
import Forest_C from './components/Forest_C.vue'
import Forest_B from './components/Forest_B.vue'

export default[
    { path: '/', component: Home},
    { path: '/play', component: Play},
    { path: '/animal', component: Animal},
    { path: '/animal_ce', component: Animal_ce},
    { path: '/animal_e', component: Animal_e},
    { path: '/animal_v', component: Animal_v},
    { path: '/forest', component: Forest},
    { path: '/forest_a', component: Forest_A},
    { path: '/forest_c', component: Forest_C},
    { path: '/forest_b', component: Forest_B}
]
