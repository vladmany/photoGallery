<template>
    <div>
        <modal-window
            v-if="$store.state.isChangeNameAlbum"
             title="Изменить название альбома"
            :close-action="() => {
        this.$store.commit('hideChangeNameAlbum')
    }">
            <template v-slot:content>
                <!--<form v-on:submit="saveChange()">
                    <div class="col-xs-12 form-group">
                        <label class="control-label">Переименовать альбом</label>
                        <input type="text" v-model="album.name" class="form-control input">
                        <span v-if="errors.name" class="create-error">{{this.$store.state.errorAlbum[0]}}</span>
                    </div>
                    <div class="window-buttons d-flex pt-3">
                        <button class="btn btn-primary">Изменить</button>
                        <button class="btn btn-light" @click="CloseModalChangeNameAlbum">Отменить</button>
                    </div>
                </form>-->
            </template>
            <template v-slot:buttons>
                <c-button
                    text="Изменить"
                    :action ="saveChange"
                />
                <c-button
                    type="secondary"
                    text="Отменить"
                    @click="CloseModalChangeNameAlbum"/>
            </template>
        </modal-window>
    </div>

</template>

<script>
    import ModalWindow from "../../Global/ModalWindow";
    export default {
        name: "ChangeNameAlbum",
        components: {ModalWindow},
        data: function () {
            return {
                album: {},
                errors:[]
            }
        },
        methods: {
            saveChange() {
                this.$store.dispatch('changeNameAlbum', this.album.name);
            },
            CloseModalChangeNameAlbum(){
                this.$store.state.isChangeNameAlbum = false;

            },
        },
    }
</script>

<style scoped>
    .create-error{
        color: #FF0000 !important;
        font-size: 14px;

    }
</style>
