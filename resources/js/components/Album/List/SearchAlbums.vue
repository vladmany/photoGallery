<template>
    <div class="search-panel">
        <div class="panel">
            <input type="text" v-model="value" placeholder="Найти альбом">
            <button type="submit"><img src="/storage/albums/actions/ic_search.png"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchAlbums",
        data() {
            return {
                value: "",
            }
        },
        computed: {
            val() {
                let a = this.$store.getters['ListAlbum/getSearchStr'];
                //console.log(a);
                return a
            },

        },
        watch: {
            val(newVal, oldVal) {
                //console.log(newVal);
                this.value = newVal
            },
            value() {
                this.$store.dispatch('ListAlbum/setSearchStr', this.value)
                //console.log(this.value)
            },
        },
        created() {
            //console.log(this.val);
            this.value = this.val;
        }
    }
</script>

<style scoped>
    * {box-sizing: border-box;}
    .search-panel {
        position: relative;
        width: 100%;
        max-width: 285px;
        background: #ffffff;
        display: flex;
        align-self: center;
        justify-content: center;

    }
    @media (min-width: 992px){
        .search-panel{
            height: 92px;
            border-left: 5px solid rgb(250, 250, 250);
        }
        .panel{
            padding-left: 28px;
        }
    }
    @media (max-width: 991px){
        .search-panel{
            height: 35px;
        }
    }

    .panel{
        position: relative;
        width: 100%;
        height: 35px;
        display: flex;
        align-self: center;
        justify-content: center;
    }
    input, button {
        border: none;
        outline: none;
        background: transparent;
    }
    input {
        width: 100%;
    }
    button {
        height: 35px;
        width: 42px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
</style>
