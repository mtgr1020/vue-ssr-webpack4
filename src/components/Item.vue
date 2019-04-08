<template>
    <div>{{ item.title }}</div>
</template>

<script>
export default {
    asyncData ({ store, router }) {
        return store.dispatch('fetchItem', router.params.id)
    },
    computed: {
        item () {
            return this.$store.state.items[this.$route.params.id]
        }
    }
}
</script>

