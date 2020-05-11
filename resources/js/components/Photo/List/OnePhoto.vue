<template>
    <div class="d-flex">
        <div class="photo_element">
            <input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'photo-' + photo.id" v-model="isSelected">
            <label :for="'photo-' + photo.id"></label>
            <router-link :to="{ name: 'OnePhoto', params: { id: photo.id } }">
                <img :src="photo.url" :alt="photo.name" class="one-photo">
            </router-link>
        </div>
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
            },
            isSelected: {
                required: true,
                type: Boolean,
            }
        },
        // data() {
        //     return {
        //         isSelected: false,
        //     }
        // },
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
