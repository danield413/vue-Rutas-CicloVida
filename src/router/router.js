import {
    createRouter,
    createWebHistory
} from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/*webpackChunkName: "ListPage"*/'@/modules/pokemon/pages/ListPage.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/*webpackChunkName: "AboutPage"*/'@/modules/pokemon/pages/AboutPage.vue')
    },
    {
        path: '/pokemonid/:id',
        component: () => import(/*webpackChunkName: "PokemonPage"*/'@/modules/pokemon/pages/PokemonPage.vue'),
        name: 'pokemon-id',
        props: (route) => {
            const id = Number(route.params.id)
            return isNaN( id ) ? { id: 1 } : { id }
        }
    },
    {
        path: '/:pathMatch(.*)*',
        // component: () => import(/*webpackChunkName: "NoPageFound"*/'@/modules/shared/pages/NoPageFound.vue')
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router