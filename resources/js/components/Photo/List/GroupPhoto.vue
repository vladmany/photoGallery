<template>
    <div v-if="elements.length > 0" class="col-auto">
        <div class="group-selector">
            <input type="checkbox" class="custom-checkbox" :id="'group-' + groupId"
                   v-model="isSelected"
                   @click="select"
            >
            <label class="group-date" :for="'group-' + groupId">{{ title }}</label>
        </div>
        <div class="group-content">
            <OnePhoto v-for="photo in elements" :key="photo.id"
                      :photo="photo"
                      :is-selected-def="isSelected"
                      :album-id="albumId"
                      :down-up="downUp"
                      @select-child="clickInput($event)"
            ></OnePhoto>
        </div>
    </div>
</template>

<script>
    import OnePhoto from './OnePhoto'
    import { mapGetters } from 'vuex'

    export default {
        name: "GroupPhoto",
        components: { OnePhoto },
        props: {
            title: {
                required: false,
                type: String,
                default: ''
            },
            elements: {
                required: true,
                type: Array
            },
            groupId: {
                required: true,
                type: Number
            },
            albumId: {
                type: Object
            }
        },
        data() {
            return {
                isSelected: false,
                downUp: { v: 0 }
            }
        },
        computed: {
            ...mapGetters({
                selectAll: 'ListPhoto/selectAllPhotos',
                selectedPhotos: 'selectedPhotos',
                // groupsSelected: 'ListPhoto/groupsSelected'
            }),
        },
        watch: {
            selectAll() {
                this.downUp.v = 0;
                this.isSelected = this.selectAll;
            },
        },
        methods: {
            checkAllElementsSelected() {
                for(let el of this.elements) {
                    if(!el['is_selected']) {
                        return false
                    }
                }
                return true
            },
            selectAllElements() {
                for(let el of this.elements) {
                    el['is_selected'] = true
                }
                console.log(this.elements)
            },
            clickInput(childChecked) {
                if(this.isSelected) {
                    if(childChecked) {
                        this.isSelected = false;
                    }
                }
            },
            select() {
                this.downUp.v = 0;
            },
        },
    }
</script>

<style scoped>
    .group {
        display: flex;
        flex-direction: column;
        margin-top: 53px;
        margin-left: 90px;
    }
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
    .group-date:hover {
        opacity: 0.8;
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
