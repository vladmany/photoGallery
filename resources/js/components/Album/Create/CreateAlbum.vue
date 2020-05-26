<template>
    <div class="createAlbum">
<!--         DD -->
        <create></create>
        <CButton text="Добавить" :action="modalCreate" class="btn-create-album" title="Создать новый альбом"></CButton>
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
    .createAlbum {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
