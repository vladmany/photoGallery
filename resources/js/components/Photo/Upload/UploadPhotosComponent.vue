<template>
    <div class="upload-wrapper">

            <c-button
                text="Загрузить"
                :action="selectFiles"
            />
<!--            <button class="upload-btn" @click="switchShowMethods"><label for="photo" class="from-computer">Загрузить</label></button>-->

        <input type="file" name="photo" id="photo" ref="photo" class="inputfile inputfile-1" @change="sendFiles" @click="clearFiles" multiple accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff"/>
    </div>
</template>

<script>
    import CButton from "../../Global/CButton";
    let width;
    let height;
    export default {
        name: "UploadPhotosComponent",
        components: {CButton},
        data() {
            return {

            }
        },
        methods: {
            clearFiles(e) {
                let photos = $(e.target);
                photos.val('');
            },
            selectFiles() {
                $('#photo').trigger('click');
            },
            sendFiles(e) {
                let photos = $(e.target);
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
        }
    }
</script>

<style scoped>
    .upload-wrapper {
        width: 100%;
        display: flex;
        /*justify-content: center;*/
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
