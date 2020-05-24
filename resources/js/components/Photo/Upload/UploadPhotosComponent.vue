<template>
    <div>

            <button class="upload-btn" @click="switchShowMethods"><label for="photo" class="from-computer">Загрузить</label></button>

        <input type="file" name="photo" id="photo" ref="photo" class="inputfile inputfile-1" @change="sendFiles" @click="clearFiles" multiple accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff"/>
    </div>
</template>

<script>
    let width;
    let height;
    export default {
        name: "UploadPhotosComponent",
        data() {
            return {

            }
        },
        methods: {
            clearFiles(e) {
                let photos = $(e.target);
                photos.val('');
            },
            switchShowMethods() {
                let methods = $('.upload-methods')
                methods.css('display', methods.css('display') === 'none' ? 'flex' : 'none')
            },
            cancelUpload() {
            },
            sendFiles(e) {
                let photos = $(e.target);
                console.log(photos.prop('files').length)
                console.log(this.$store.state.maxFilesToUpload)
                if ((photos.prop('files').length > 0) && (photos.prop('files').length <= this.$store.state.maxFilesToUpload))
                {
                    let files = Array.from(this.$refs.photo.files);
                    this.$root.$emit('uploadPhotos',files)
                    this.$store.commit('showUploadPhotos')
                }
                if (photos.prop('files').length > this.$store.state.maxFilesToUpload) {
                        this.$store.commit('showSelectError')
                }
            },
            // validate(file) {
            //     if (file.size > 16000000)
            //     {
            //         this.$store.commit('setUploadErrorMessage', 'Превышает объем  загружаемого фото. Объем загружаемого файла не должен превышать 16 МВ')
            //         this.$store.commit('setUploadErrorFile',file.name)
            //         return false
            //     }
            //     if (!['bmp','gif','jpeg','jpg','png','tiff'].includes(file.type.split('/').pop()))
            //     {
            //         this.$store.commit('setUploadErrorMessage', 'Не соответствует формат загружаемых фото. Рекомендуемые форматы - BMP; GIF; JPG; PNG; TIFF')
            //         this.$store.commit('setUploadErrorFile',file.name)
            //         return false
            //     }
            //     let reader = new FileReader();
            //     reader.readAsDataURL(file);
            //     reader.onload = evt => {
            //         let img = new Image();
            //         img.onload = () => {
            //             this.width = img.width;
            //             this.height = img.height;
            //         }
            //         img.src = evt.target.result;
            //     }
            //     reader.onerror = evt => {
            //         console.error(evt);
            //     }
            //     setTimeout( () => {
            //         if ((this.width <= 3024) && (this.height <= 4032)) {
            //             return true
            //         } else {
            //             this.$store.commit('setUploadErrorMessage', 'Не соответствует размер загружаемых фото. Размер загружаемых фото не должен превышать 3024 × 4032')
            //             this.$store.commit('setUploadErrorFile',file.name)
            //             return false
            //         }
            //     }, 250);
            //     return true
            // }
        },
        created() {
            let vm = this;
            document.addEventListener('mouseup', function (e) {
                let container = $(".upload-methods");
                if ((container.has(e.target).length === 0) && ($(':focus').attr('class') ===! 'upload-btn' || $(':focus').attr('class') == undefined) && (container.css('display') === 'flex')){
                    container.css('display','none')
                }
            });
        }
    }
</script>

<style scoped>
    .upload-btn {
        font-family: sans-serif!important;
        font-style: normal;
        width: 120px;
        height: 50px;
        border: none;
        background-color: #1875F0;
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #fff;
        border-radius: 4px;
        /*margin-right: 10px;*/
        text-transform: uppercase;
    }

    .upload-btn label {
        width: 100%;
        height: 100%;
        cursor: pointer
    }

    .upload-methods {
        z-index: 999;
        display: none;
        position: absolute;
        max-width: 255px;
        width: 100%;
        max-height: 120px;
        height: 100%;
        margin-top: 7px;
        background: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    }
    .upload-methods .from-computer, .upload-methods .from-disk {
        padding-left: 27px;
        margin: 0;
        max-width: 255px;
        width: 100%;
        background: #fff;
        border: none;
        text-align: left;
        font-family: sans-serif!important;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 60px;
        color: #999999;
    }
    .from-computer-form {
        max-height: 62px;
    }
    .upload-methods .from-computer object {
        vertical-align: middle;
        pointer-events: none;
        min-width: 30px;
        min-height: 30px;
        padding: 0;
        margin: 0;
    }
    button.from-disk {
        border-top: 2px solid #F5F5F5!important;
    }
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .inputfile + label {
        max-width: 80%;
        font-size: 1.25rem;
        /* 20px */
        font-weight: 700;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        padding: 0.625rem 1.25rem;
        /* 10px 20px */
    }
    .inputfile:focus + label,
    .inputfile.has-focus + label {
        outline: 1px dotted #000;
        outline: -webkit-focus-ring-color auto 5px;
    }
    .inputfile + label * {
        /* pointer-events: none; */
        /* in case of FastClick lib use */
    }
    .inputfile + label svg {
        width: 1em;
        height: 1em;
        vertical-align: middle;
        fill: currentColor;
        margin-top: -0.25em;
        /* 4px */
        margin-right: 0.25em;
        /* 4px */
    }
    /* style 1 */
    .inputfile-1 + label {
        color: #fff6fe;
        background-color: #3e51d3;
    }
</style>
