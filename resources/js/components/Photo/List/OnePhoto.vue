<template>
    <div class="d-flex">
        <Checkbox></Checkbox>
        <img :src="photo.path" :alt="photo.name" class="one-photo">
    </div>
</template>

<script>
    import Checkbox from "../../Global/Checkbox"

    export default {
        name: "OnePhoto",
        components: {Checkbox},
        props: {
            photo: {
                required: true,
                type: Object,
            }
        },
        // computed: {
        //     style() {
        //         return {
        //             background: "no-repeat center url({{this.photo.url}});"
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    .one-photo {
        width: 100px;
        height: 100px;
    }
</style>