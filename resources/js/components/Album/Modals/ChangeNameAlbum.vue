<template>
    <modal-window
        v-if="$store.state.isChangeNameAlbum"
        title="Изменить название альбома"
        :close-action="() => {
        this.$store.commit('hideChangeNameAlbum')
    }">
        <template v-slot:content>
            <form v-on:submit="saveChange()">
                <div class="col-xs-12 form-group">
                    <label class="control-label" for="name">Переименовать альбом</label>
                    <input type="text" id="name" v-model="album.name" class="form-control input">
                    <span v-if="errors.name" class="create-error">{{errors.name[0]}}</span>
                </div>
                <div class="window-buttons d-flex pt-3">
                    <button class="window-btn-ok">Добавить</button>
                    <button class="window-btn-cancel" @click="CloseModalChangeNameAlbum">Отменить</button>
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
                event.preventDefault();
                axios.post('/api/albums/update', {
                    AlbumId:this.album.id,
                    AlbumName:this.album.name
                })
                    .then(response => {
                        this.CloseModalChangeNameAlbum()
                        this.$store.dispatch('ListAlbum/getAlbums');}
                    )
                    .catch(error =>{
                        if(error.response.status == 422){
                            this.errors = error.response.data.errors +'ddd'+this.album.name;
                            return false;
                        }
                    });
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

</style>
