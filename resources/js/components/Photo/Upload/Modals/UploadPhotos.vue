<template>
    <modal-window
        v-if="this.$store.state.isUploadPhotos"
        title="Загрузка фото"
        :close-action="close"
    >
        <template v-slot:content>
            <div v-if="!isEnd">
                <span> Загружается ({{ fileLoading }}/{{filesAll.length}}): {{fileCurrent}}</span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: fileProgress + '%'}"></div>
                </div>
                <div v-if="errorMessage !== ''" class="invalid-feedback d-block">Ошибка загрузки фото: {{ errorMessage }}</div>
            </div>
            <div v-else>
                <div class="error-end" v-if="filesFinish.length <= 0">
                    <img src="/storage/photos/upload/ic_error.png">
                    <span>Ни одного фото не было загружено</span>
                </div>
                <div class="success-end" v-else>
                    <img src="/storage/photos/upload/ic_success.png">
                    <span class="d-block">Успешно загружено {{ filesFinish.length }} фото.</span>
                </div>
            </div>
        </template>
        <template v-slot:buttons>
            <div class="buttons">
                <c-button
                    :action="continueUpload"
                    :state="buttonState || isEnd"
                />
                <div class="apply-to-all" v-if="buttonState && !isEnd && (filesOrder.length !== 0)">
                    <input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'apply-to-all'" v-model="applyToAll">
                    <label :for="'apply-to-all'">Применить для всех</label>
                </div>
            </div>
        </template>

    </modal-window>
</template>

<script>
    import ModalWindow from "../../../Global/ModalWindow";
    import CButton from "../../../Global/CButton";
    export default {
        name: "UploadPhotosModal",
        components: {CButton, ModalWindow},
        props: ['files'],
        data() {
            return {
                filesAll: [],
                filesOrder: [],
                filesFinish: [],
                filesFail: [],
                filesLeft: [],
                fileProgress: 0,
                fileCurrent: '',
                fileLoading: 0,
                isError: false,
                buttonState: false,
                applyToAll: 0,
                errorMessage: '',
                isEnd: false
            }
        },
        methods: {
            reset() {
                this.filesAll = [];
                this.filesOrder = [];
                this.filesFinish = [];
                this.filesFail = [];
                this.filesLeft = [];
                this.fileProgress = 0;
                this.fileCurrent = '';
                this.fileLoading = 0;
                this.isError = false;
                this.buttonState = false;
                this.applyToAll = 0;
                this.errorMessage = ''
                this.isEnd = false
            },
            continueUpload() {
                this.uploadFiles(Array.from(this.filesOrder))
            },
            close() {
                this.$store.commit('hideUploadPhotos')
                this.reset()
            },
            async uploadFiles(files) {
                if (this.isEnd) {
                    this.$store.dispatch('ListPhoto/getPhotos');
                    this.close()
                }
                if (files.length > 0) {
                    for( let item of files ) {
                        if (this.isError && !this.applyToAll) {
                            this.isError = false;
                            break
                        }
                        this.buttonState = false;
                        this.fileLoading++;
                        $('.progress-bar').removeClass('bg-danger')
                        await this.uploadFile(item)
                    }
                } else {
                    this.isEnd = true
                }

            },
            async uploadFile(item) {
                let form = new FormData();
                form.append('photo', item)

                await axios.post('api/photos/upload', form, {
                    onUploadProgress: (itemUpload) => {
                        this.fileProgress = Math.round((itemUpload.loaded / itemUpload.total) * 100);
                        this.fileCurrent = item.name
                    }
                })
                .then(response => {
                    if (this.filesOrder.length !== 1)
                        this.fileProgress = 0;
                    // this.fileCurrent = '';
                    this.filesFinish.push(item);
                    this.filesOrder.splice(item, 1);
                    if (this.filesOrder.length === 0)
                        this.isEnd = true
                    this.isError = false
                })
                .catch(error => {
                    this.buttonState = true;
                    if (error.response.status === 413) {
                        this.errorMessage = 'Максимальный размер загружаемого фото 16 МБ';
                    } else
                    if (error.response.status === 422) {
                        this.errorMessage = error.response.data.errors.photo[0];
                    }

                    this.filesFail.push(item);
                    this.filesOrder.splice(item, 1);
                    if ((this.filesOrder.length === 0) && this.applyToAll)
                        this.isEnd = true
                    this.isError = true
                    $('.progress-bar').addClass('bg-danger')
                })
            }
        },
        mounted() {
            this.$root.$on('uploadPhotos', (files) => {
                this.reset()
                this.filesAll = files.slice();
                this.filesOrder = files.slice();

                this.uploadFiles(Array.from(this.filesOrder))
            })
        }
    }
</script>

<style scoped>
    span {
        font-style: normal;
        font-weight: 500;
        /*font-size: 14px;*/
        line-height: 30px;
        color: #808080;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .buttons {
        display: flex;
        margin-top: 33px;
    }
    .apply-to-all {
        display: flex;
        vertical-align: center;
    }
    .error-end, .success-end {
        margin-top: 33px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .error-end img, .success-end img {
        display: flex;
        max-width: 270px;
        width: 100%;
        max-height: 270px;
        height: 100%
    }
</style>
