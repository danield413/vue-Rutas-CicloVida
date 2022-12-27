<template>
    <h1>Pokemon: <span>#{{ id }}</span></h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // id: this.$route.params.id
            pokemon: null
        }
    },
    created() {
        // const { id } = this.$route.params
        // console.log(this.id)
        // this.id = id
        this.getPokemon()
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(res => res.json())
                this.pokemon = pokemon
                console.log(this.pokemon);
            } catch (error) {
                this.$router.push('/')
                console.log('nada que hacer aquí...');
            }
        }
    },
    watch: {
        id() {
            console.log('el nuevo id')
            this.getPokemon()
        }
    }
}
</script>