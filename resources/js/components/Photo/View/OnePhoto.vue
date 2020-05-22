<template>
    <div class="photo-wrap">
        <img :src="photo.url" :alt="photo.name">
    </div>
</template>

<script>
    export default {
        name: "OnePhoto",
        props: {
            id: {
                required: true,
                type: Number
            },
        },
        computed: {
            photo() {
                return this.$store.getters.photo(this.id);
            }
        }
    }
</script>

<style scoped>
    .photo-wrap {
        max-width: 1000px;
    }
</style>
