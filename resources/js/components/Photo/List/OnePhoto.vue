<template>
    <div class="parent">
        <div class="children">
            <input type="checkbox" class="m-1" :id="photo.id" :checked="isSelected" @click="select">
        </div>
        <img :src="photo.url" :alt="photo.name" class="one-photo">
        <div class="children">

        </div>
    </div>
</template>

<script>

    export default {
        name: "OnePhoto",
        props: {
            photo: {
                required: true,
                type: Object,
            }
        },
        data() {
            return {
                isSelected: false,
            }
        },
        methods: {
            select() {
                this.isSelected = this.isSelected;
            }
        }
    }
</script>

<style scoped>
    .one-photo {
        width: 100px;
        height: 100px;
    }
    .parent {
        position: relative;
    }
    .children {
        position: absolute;
    }
</style>
