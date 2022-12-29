import {
    createRouter,
    createWebHistory
} from 'vue-router'
import isAuthenticatedGuard from './auth-guard'


const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/*webpackChunkName: "PokemonLayout"*/ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/*webpackChunkName: "ListPage"*/'@/modules/pokemon/pages/ListPage.vue')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/*webpackChunkName: "AboutPage"*/'@/modules/pokemon/pages/AboutPage.vue')
            },
            {
                path: 'pokemonid/:id',
                component: () => import(/*webpackChunkName: "PokemonPage"*/'@/modules/pokemon/pages/PokemonPage.vue'),
                name: 'pokemon-id',
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN( id ) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' },
                name: 'pokemon-default'
            },
        ]
    },
    //DBZ LAYOUT
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import(/*webpackChunkName: "DbzLayout"*/ '@/modules/dbz/layouts/DragonBallLayout.vue'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/*webpackChunkName: "Dbz CharactersPage"*/'@/modules/dbz/pages/Characters.vue')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/*webpackChunkName: "Dbz AboutPage"*/'@/modules/dbz/pages/About.vue')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' },
                name: 'dbz-default'
            },
        ]
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

// Guard Global  - Síncrono
// router.beforeEach((to, from, next) => {
//     console.log('beforeEach')
//     console.log(to, from)

//     const random = Math.random() * 100
//     if (random > 50) {
//         console.log('Acceso permitido!')
//         next()
//     } else {
//         console.log('Acceso denegado por el beforeEach Guard') 
//         next({ name: 'pokemon-home' })
//     }
// })

// Guard Global - Asíncrono
// const canAccess = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            const random = Math.random() * 100
//            if (random > 50) {
//                console.log('Acceso permitido!')
//                resolve(true)
//                } else {
//                 console.log('Acceso denegado por el beforeEach Guard - CanAccess')
//                 reject(false)
//                }
//         }, 3000)
//     }
// )}

// router.beforeEach( async (to, from, next) => {

//     // const authorized = await canAccess(to, from, next)
//     const authorized = await canAccess()

//     authorized ? next() : next({ name: 'pokemon-home' })

// })  


export default router