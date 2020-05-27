<template>
    <div class="search-panel">
        <div class="panel">
            <div class="group">
                <input type="text" v-model="value" required>
                <span class="bar"></span>
                <label>Найти альбом</label>
            </div>
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
                return a
            },

        },
        watch: {
            val(newVal, oldVal) {
                this.value = newVal
            },
            value() {
                this.$store.dispatch('ListAlbum/setSearchStr', this.value)
            },
        },
        created() {
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


    @media(max-width: 990px) {
        .search-panel {
            margin-bottom: 25px;
        }
    }

    @media (min-width: 992px){
        .search-panel{
            height: 92px;
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
    /* form starting stylings ------------------------------- */
    /* form starting stylings ------------------------------- */
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
    .group {
        position: relative;
        margin-bottom: 30px;
    }

    input {
        font-size: 16px;
        padding: 10px;
        display: block;
        width: 300px;
        border: none;
        border-bottom: 1px solid #ccc;
    }
    input:focus {
        outline: none;
    }

    /* LABEL ======================================= */
    label {
        font-family: "Nunito", sans-serif;
        color: #999;
        font-size: 18px;
        position: absolute;
        pointer-events: none;
        left: 10px;
        top: 15px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    /* active state */
    input:focus ~ label, input:valid ~ label {
        top: -15px;
        font-size: 14px;
        color: #808080;
    }

    /* BOTTOM BARS ================================= */
    .bar {
        position: relative;
        display: block;
        width: 320px;
    }
    .bar:before, .bar:after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 0;
        position: absolute;
        background: #808080;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }
    .bar:before {
        left: 50%;
    }
    .bar:after {
        right: 50%;
    }

    /* active state */
    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
        width: 50%;
    }
</style>
