<template >
    <a v-if="isExternalLink" :href="link.to" target="_blank" class="normal-link">{{ link.name }}</a>
    <!-- <router-link v-else :to="link.to" v-slot="{ href, isActive }">
        <a :href="href" :class=" isActive ? 'isActive' : 'normal-link' ">{{ link.name }}</a>
    </router-link> -->
    <router-link v-else 
        :to="route" 
        v-slot="{ isActive }"
    >
        <a :class=" isActive ? 'isActive' : 'normal-link' ">{{ link.name }}</a>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith('http')
        },
        route() {
            return this.link.id === undefined ? { name: this.link.to } : { name: this.link.to, params: { id: this.link.id } }
        }
    }
}
</script>

<style scoped>
    .isActive {
        color: #42b983;
    }
    .normal-link {
        color: #c6c5c5
    }
</style>