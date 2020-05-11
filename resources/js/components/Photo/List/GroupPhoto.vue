<template>
    <div class="group">
        <div class="group-selector">
            <input type="checkbox" class="custom-checkbox" :id="'group-' + groupId" v-model="isSelected">
            <label class="group-date" :for="'group-' + groupId">{{ title }}</label>
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
                required: false,
                type: String
            },
            elements: {
                required: true,
                type: Array
            },
            groupId: {
                required: true,
                type: Number
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
        margin-left: 90px;
    }
    /*.group-selector {*/
    /*    display: flex;*/
    /*    flex-direction: row;*/
    /*    margin-left: 12px;*/
    /*}*/
    /*.group-selector input[type=checkbox] {*/
    /*    display: flex;*/
    /*    transform:scale(1.5);*/
    /*    margin-top: 7px;*/
    /*    margin-right: 4px;*/
    /*}*/
    .group-date {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        color: #999999;
        padding-left: 13px;
    }
    .group-content {
        display: flex;
        flex-direction: row;
        /*justify-content: space-between;*/
        flex-wrap: wrap;
    }

    label {
        margin: 0;
    }

    ul {
        padding: 0;
    }
    ul, li {
        list-style: none;
    }
    .paginate {
        display: flex;
    }
    .one-page {
        padding: 10px 15px;
        color: #666;
        border: 1px solid #F5F5F5;
        border-left: none;
    }
    .active,
    .one-page:hover {
        color: #000;
        background-color: #F5F5F5;
    }
    .prev {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
        border-left: 1px solid #F5F5F5;
    }
    .next {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
    }
    .disabled,
    .disabled:hover,
    .disabled > a {
        cursor: default;
        color: #F5F5F5;
    }
</style>
