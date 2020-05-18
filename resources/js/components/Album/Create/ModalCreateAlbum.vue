<template>
    <div class="outside-the-window popup-wrapper" ref="popup_wrapper" >
        <div class="modal-create window animated fadeInDown">
            <div class="header">
                <button class="close-window-btn" @click="closeModal">
                    <svg height="16pt" viewBox="0 0 311 311.07733" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"/><path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"/></svg>
                </button>
            </div>
            <div class="content window-content">
                <div>
                    <div class="panel panel-default">
                        <div class="panel-heading">Создать альбом</div>
                        <div class="panel-body">
                            <form v-on:submit="saveForm()">
                                    <div class="col-xs-12 form-group">
                                        <label class="control-label" for="name">Добавить название альбома</label>
                                        <input type="text" id="name" v-model="album.name" class="form-control input">
                                        <span v-if="errors.name" class="create-error">{{errors.name[0]}}</span>
                                    </div>
                                <div class="window-buttons d-flex pt-3">
                                    <button class="window-btn-ok">Добавить</button>
                                    <button class="window-btn-cancel" @click="closeModal">Отменить</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
            </div>
        </div>
    </div>
</template>

<script>
    import ModalCreateAlbum from "./ModalCreateAlbum";
    import routes from "../../../routes";

    export default {
        name: "ModalCreateAlbum",
        components: {ModalCreateAlbum},
        comments: {
            ModalCreateAlbum
        },
        data: function () {
            return {
                album: {},
                errors:[]
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newAlbum = app.album;
                axios.post('api/albums/create', newAlbum)
                    .then(response => {
                        this.closeModal()

                        let payload = {
                            text: this.album.name + ' Альбом создан',
                        };
                        this.$store.dispatch('showToasted', payload);


                        this.$store.dispatch('ListAlbum/getAlbums');}
                    )
                    .catch(error =>{
                        if(error.response.status == 422){
                            this.errors = error.response.data.errors
                            return false;
                        }
                    });
            },
            closeModal(){
                this.$emit('closeModal')
            }
        },
        mounted() {
            let vm = this;
            document.addEventListener('click', function (item) {
                if(item.target === vm.$refs['popup_wrapper']){
                    vm.closeModal();
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .popup-wrapper{
        display: flex;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        align-items: center;
        background: rgba(64,64,64, .4);

        opacity: 1;
        z-index: 1;
        position: fixed;


    }

    .panel-heading{
        font-style: normal;
        font-size: 18px;
        color: #666666;
        padding-bottom: 45px;
    }
    .control-label{
        font-style: normal;
        font-size: 14px;
        color: #808080;
    }
    .window {
        width: 100%;
        opacity: 1!important;
        max-width: 540px;
        //height: 100%;
        background: #FFFFFF;
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.07);
        border-radius: 6px;


        position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;

        margin-top: 150px;

        z-index: 2;
        /*position: absolute;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*margin: -125px 0 0 -270px;*/

        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -khtml-user-select: none;    /* Konqueror */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        user-select: none;           /* Non-prefixed version, currently
                                  not supported by any browser */
    }


    .window-buttons{
        margin-top: 45px;
    }
    .close-window-btn {
        position: relative;
        background: #fff;
        border: none;
        float: right;
    }

    .close-window-btn svg {
        fill: #D8D8D8;
    }

    .close-window-btn:hover svg, .close-window-btn:focus svg {
        fill: #808080;
    }

    .window-content {
        padding: 35px 22.22% 40px 7.41%;

    }

    .window-content h1 {
        font-weight: 500;
        font-size: 18px;
        line-height: 167%;
        /* or 167% */
        color: #666666;
    }

    .window-content span {
        font-style: normal;
        font-weight: 500;
        /*font-size: 14px;*/
        line-height: 30px;
        color: #808080;
    }

    .error-file {
        font-style: oblique!important;
    }

    .window-content .window-btn-ok, .window-content .window-btn-cancel {
        width: 120px;
        height: 50px;
        border: none;
        text-transform: uppercase;
    }
    .window-btn-ok{
        margin-right: 10px;
    }
    .window-content .window-btn-ok {
        background-color: #1875F0;
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #fff;
        border-radius: 4px;
        margin-right: 10px;
    }

    .window-btn-cancel {
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #B3B3B3;
        background-color: #fff;
    }
    .input{
        max-width: 380px;
        height: 45px;
        font-size: 22px;
    }
    .create-error{
        color: #FF0000 !important;
        font-size: 14px;

    }

</style>
