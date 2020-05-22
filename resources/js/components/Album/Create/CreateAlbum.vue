<template>
    <div class="createAlbum">
        <create></create>
        <CButton text="Добавить альбом" :action="modalCreate" class="btn-create-album"></CButton>
    </div>
</template>

<script>

    import CButton from "../../Global/CButton";
    import Create from "../Modals/CreateAlbum";
    import DelAlbums from "../Modals/DelAlbums";
    export default {
        name: "CreateAlbum",
        components: {CButton,Create, DelAlbums},
        methods: {
            modalCreate(){
                this.$store.commit('showCreateAlbum');
            },
            CloseModal(){
                this.$store.commit('hideCreateAlbum');

            },
        }
    }
</script>

<style scoped>
</style>
