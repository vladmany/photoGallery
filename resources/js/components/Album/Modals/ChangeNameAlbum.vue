<template>
    <div>
        <modal-window
            v-if="$store.state.isChangeNameAlbum"
             title="Изменить название альбома"
            :close-action="() => {
        this.$store.commit('hideChangeNameAlbum')
    }">
            <template v-slot:content>
                <form v-on:submit="saveChange()">
                    <div class="col-xs-12 form-group">
                        <label class="control-label">Переименовать альбом</label>
                        <input type="text" v-model="album.name" class="form-control input">
                        <span v-if="errors.name" class="create-error">{{errors.name[0]}}</span>
                    </div>
                    <div class="window-buttons d-flex pt-3">
                        <button class="btn btn-primary">Добавить</button>
                        <button class="btn btn-light" @click="CloseModalChangeNameAlbum">Отменить</button>
                    </div>
                </form>
            </template>
            <!--<template class="buttons" v-slot:buttons>
                <c-button
                    text="Изменить"
                    :action ="saveChange"
                >Изменить</c-button>
                <c-button
                    type="secondary"
                    text="Отменить"
                    @click="CloseModalChangeNameAlbum">Отменить</c-button>
            </template>-->
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
                /*axios.put('/api/albums/update', {
                    id:this.$store.state.IdAlbum,
                    name:this.album.name
                })
                    .then(response => {
                        this.CloseModalChangeNameAlbum()
                        this.$store.dispatch('ListAlbum/getAlbums');
                        console.log(this.album.name);
                        console.log(this.album.id);}
                    )
                    .catch(error =>{
                        if(error.response.status == 422){
                            this.errors = error.response.data.errors;
                            console.log(this.album.name);
                            console.log(this.$store.state.IdAlbum);
                            return false;
                        }
                    });*/
                /*console.log("dedede");
                this.$store.state.isChangeNameAlbum = false;*/
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
