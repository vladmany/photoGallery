<template>
    <div class="group">
        <div class="group-selector">
            <input type="checkbox" v-model="isSelected">
            <label class="group-date pl-3">{{ title }}</label>
        </div>
        <div class="group-content">
            <OnePhoto v-for="photo in elements" :key="photo.id"
                      :photo="photo"
                      :is-selected="isSelected"
            ></OnePhoto>
        </div>
    </div>
</template>

<script>
    import OnePhoto from './OnePhoto'

    export default {
        name: "GroupPhoto",
        components: { OnePhoto },
        props: {
            title: {
                required: true,
                type: String
            },
            elements: {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                isSelected: false,
            }
        }
    }
</script>

<style scoped>
    .group {
        display: flex;
        flex-direction: column;
        margin-top: 53px;
    }
    .group-selector {
        display: flex;
        flex-direction: row;
    }
    .group-selector input[type=checkbox] {
        display: flex;
        transform:scale(1.5);
        margin-top: 7px;
        margin-right: 4px;
    }
    .group-date {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        color: #999999;
    }
    .group-content {
        display: flex;
        flex-direction: row;
        /*justify-content: space-between;*/
        flex-wrap: wrap;
    }
</style>
