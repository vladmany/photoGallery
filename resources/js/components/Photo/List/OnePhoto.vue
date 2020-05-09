<template>
    <div class="d-flex">
        <label class="photo_element">
            <input type="checkbox" class="mx-1">
            <img :src="photo.url" :alt="photo.name" class="one-photo">
        </label>
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
        width: 80px;
        height: 80px;
    }

    .photo_element {
        margin: 7px;
    }

    .photo_element input[type=checkbox] {
        display: flex;
        position: absolute;
        transform:scale(1.5);
        margin-top: 6px;
        margin-left: 6px!important;
    }
</style>
