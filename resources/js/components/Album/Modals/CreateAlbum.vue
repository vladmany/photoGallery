<template>
        <modalwindow
            v-if="$store.state.isCreateAlbum"
            title="Создать альбом"
            :close-action="() => {
        this.$store.commit('hideCreateAlbum')
    }">
            <template v-slot:content>
                <div class="content">
                    <label class="control-label">Добавить название альбома</label>
                    <input type="text" v-model="$store.state.createAlbum.name" class="form-control input">
                    <span v-if="$store.state.errorAlbum[0]" class="create-error">{{$store.state.errorAlbum[0]}}</span>
                </div>
            </template>
            <template class="button-panel" v-slot:buttons>
                <div class="button-panel">
                    <c-button
                        text="Добавить"
                        :action="CreateAlbum"/>
                    <c-button
                        type="secondary"
                        text="Отменить"
                        :action="CloseModalCreateAlbum"/>
                </div>
            </template>
        </modalwindow>

</template>

<script>
    import modalwindow from "../../Global/ModalWindow";
    import CButton from "../../Global/CButton";

    export default {
        name: "CreateAlbum",
        components: {modalwindow, CButton},
        data: function () {
            return {
                errors: []
            }
        },
        methods: {
            CreateAlbum() {
                this.$store.dispatch('createAlbum', this.$store.state.createAlbum);
            },
            CloseModalCreateAlbum(){
                this.$store.state.createAlbum = {};
                this.$store.commit('hideCreateAlbum');
            }
        },
        created() {
            this.$store.state.createAlbum = {};
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
