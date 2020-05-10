<template>
    <div></div>
</template>

<script>
    export default {
        name: "OneAlbum",
        props: {
            id: {
                required: true,
                type: Number,
            }
        },
        created() {
            this.$store.dispatch('getAlbumById')
        }
    }
</script>

<style scoped>

</style>
