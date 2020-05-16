<template>
    <div>
        <modal-window
            v-if="$store.state.isDelAlbum"
            title="Удалить альбом?"
            :close-action="() => {
        this.$store.commit('hideDelAlbum')
    }">
            <template v-slot:content>
                <div class="content">
                    <label class="control-label">Удаленный (-е) альбом(-ы) нельзя восстановить. Фотографии из него сохраняются в разделе “Фото”</label>
                </div>
            </template>
            <template class="button-panel" v-slot:buttons>
                <div class="button-panel">
                    <c-button
                        text="Удалить"
                        :action="delAlbums"/>
                    <c-button
                        type="secondary"
                        text="Отменить"
                        :action="CloseModalDelAlbum"/>
                </div>
            </template>
        </modal-window>
    </div>

</template>

<script>
    import ModalWindow from "../../Global/ModalWindow";
    import CButton from "../../Global/CButton";

    export default {
        name: "DelAlbums",
        components: {ModalWindow, CButton},
        data: function () {
            return {
                album: {},
                errors: [],
            }
        },
        methods: {
            delAlbums() {
                if (this.$store.getters.selectedAlbums.length > 0) {
                    for(let i = 0; i<this.$store.getters.selectedAlbums.length; i++) {
                    this.$store.dispatch('deleteAlbum', this.$store.getters.selectedAlbums[i])
                    }
                    this.$store.commit('clearAlbums');
                }

            },
            CloseModalDelAlbum() {
                this.$store.commit('hideDelAlbum');

            },
        },
        created() {
            this.album.name = this.$store.getters['ListAlbum/album'](this.$store.state.IdAlbum).name;
        }
    }
</script>

<style scoped>
    .button-panel{
        display: flex;
        margin-top: 35px;
    }
    .content{
        margin-top: 35px;
    }
    .control-label{
        color: #808080;
        font-size: 14px;
    }
    .create-error {
        color: #FF0000 !important;
        font-size: 14px;

    }
</style>
