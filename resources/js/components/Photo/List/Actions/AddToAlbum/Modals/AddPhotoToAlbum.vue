<template>
    <modal-window
        v-if="this.$store.state.isAddPhotoToAlbum"
        title="Добавить в альбом"
        :close-action="() => {
            this.$store.commit('hideAddPhotoToAlbum')
        }">
        <template v-slot:content>
            <div class="content">
                <label for="sel-album">Выбрать альбом</label>
                <select class="sel-album" id="sel-album">
                </select>
            </div>
        </template>
        <template class="buttons" v-slot:buttons>
                <c-button
                    text="Добавить фото"
                    :action="addToAlbum"
                />
                <c-button
                    text="Отмена"
                    type="secondary"
                    :action="close"
                />
        </template>
    </modal-window>
</template>

<script>
    import ModalWindow from "../../../../../Global/ModalWindow";
    import CButton from "../../../../../Global/CButton";
    export default {
        name: "AddPhotoToAlbumModal",
        components: {ModalWindow, CButton},
        methods: {
            close() {
                this.$store.commit('hideAddPhotoToAlbum')
            }
        },
        created() {
            this.$store.dispatch('ListAlbum/getAlbums')
        }
    }
</script>

<style scoped>
    .content {
        display: flex;
        flex-direction: column;
        max-width: 380px;
        width: 100%;
        margin-top: 33px;
        margin-bottom: 33px;
    }
    .content label {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        color: #808080;
    }
    .sel-album {
        border: 2px solid #F5F5F5;
        box-sizing: border-box;
        border-radius: 4px;
        height: 50px;
        appearance: none;
        background: url('/storage/photos/actions/add_to_album/ic_keyboard_arrow_down.svg') no-repeat right center;
    }

</style>
