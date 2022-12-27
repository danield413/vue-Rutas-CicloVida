<template >
    <div>
        <!-- <routerLink :to="{ name: 'home' }">PokemonList</routerLink>
        <routerLink v-bind:to="{ name: 'pokemon-id', params: { id:85 } }">Pokemon por id</routerLink>
        <routerLink :to="{ name: 'about' }">PokemonAbout</routerLink> -->
        <CustomLink v-for="link in links" 
            :key="link.to" 
            :link="link"
        />
        </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {

    data() {
        return {
            links: [
                { to: '/home', name: 'Pokemons'},
                { to: '/pokemonid/50', name: 'Por ID'},
                { to: '/about', name: 'About'},
                { to: 'https://www.google.com', name: 'Google'}
            ]
        }
    },  

    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>
    div {
        padding: 0 30px;
    }
    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    /* .router-link-exact-active {
        color: #42b983;
    } */
</style>