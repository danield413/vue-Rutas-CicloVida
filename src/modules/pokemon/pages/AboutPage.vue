<template>
    <h1>About page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>
export default {
    data() {
        return {
            name: "Daniel"
        }
    },
    methods: {
        onChangeName() {
            console.log('se cambiará el nombre a Natalia');
            this.name = "Natalia"
        }
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        // Se ejecuta cuando se crea el componente - peticiones HTTP
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    },
    beforeUnmount() {
        console.log("beforeUnmount")
    },
    unmounted() {
        console.log("unmounted")
    },
    errorCaptured() {
        console.log("errorCaptured")
    },
    renderTracked() {
        console.log("renderTracked")
    },
    renderTriggered() {
        console.log("renderTriggered")
    },
}
</script>