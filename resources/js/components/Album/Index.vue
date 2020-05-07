<template>
    <div>
        <modal-create-album v-if="isInfoPopupVisible" @closeModal="CloseModal"></modal-create-album>
        <button  @click="modalCreate" class="btn btn-primary btn-lg">Добавить альбом</button>
        <AllAlbums></AllAlbums>
    </div>

</template>

<script>
    import ModalCreateAlbum from "./ModalCreateAlbum";
    import AllAlbums from "./AllAlbums";
    export default {
        name: "Index",
        components: {AllAlbums, ModalCreateAlbum},
        comments:{
            ModalCreateAlbum,
            AllAlbums
        },
        data: function () {
            return {
                album: {
                    name: '',
                },
                isInfoPopupVisible:false
            }
        },
        methods: {
            modalCreate(){
                this.isInfoPopupVisible = true;
            },
            CloseModal(){
                this.isInfoPopupVisible = false;

            },
            saveForm() {
                event.preventDefault();
                var app = this;
                var newAlbum = app.album;
                axios.post('api/albums/create', newAlbum)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create album");
                    });
            }
        }
    }
</script>

<style scoped>

</style>