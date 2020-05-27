<template>
    <div>
        <modal-window
            v-if="$store.state.isChangeNameAlbum"
            title="Изменить название альбома"
            :close-action="() => {
        this.$store.commit('hideChangeNameAlbum')
    }">
            <template v-slot:content>
                <div class="content">
                    <label class="control-label">Переименовать альбом</label>
                    <input type="text" v-model="album.name" class="form-control input">
                    <span v-if="$store.state.errorAlbum[0]" class="create-error">{{$store.state.errorAlbum[0]}}</span>
                </div>
            </template>
            <template class="button-panel" v-slot:buttons>
                <div class="button-panel">
                    <c-button
                        text="Изменить"
                        :action="saveChange"/>
                    <c-button
                        type="secondary"
                        text="Отменить"
                        :action="CloseModalChangeNameAlbum"/>
                </div>
            </template>
        </modal-window>
    </div>

</template>

<script>
    import ModalWindow from "../../Global/ModalWindow";
    import CButton from "../../Global/CButton";

    export default {
        name: "ChangeNameAlbum",
        components: {ModalWindow, CButton},
        data: function () {
            return {
                album: {},
                errors: []
            }
        },
        methods: {
            saveChange() {
                this.$store.state.errorAlbum=[]
                this.album.name.trim();
                if(this.album.name){
                    if( this.album.name.length<3){
                        this.$store.state.errorAlbum[0] = 'Минимальна длина названия 3 символа'
                    } else {
                        if( this.album.name.length>100){
                            this.$store.state.errorAlbum[0] = 'Максимальная длина названия 100 символов'
                        } else{
                            this.$store.dispatch('changeNameAlbum', this.album.name);
                        }
                    }
                }
                else {
                    this.$store.state.errorAlbum[0] = 'Вы не ввели название альбома'
                }



            },
            CloseModalChangeNameAlbum() {
                this.album.name = this.$store.getters['ListAlbum/album'](this.$store.state.IdAlbum).name;

                this.$store.commit('hideChangeNameAlbum');

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
