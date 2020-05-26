<template>
    <modal-window
        v-if="this.$store.state.isDownloadProgress"
        title="Подготовка к скачиванию"
        :close-action="close"
    >
        <template v-slot:content>
            <span class="download_percents">{{downloadProgress}}%</span>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: downloadProgress + '%'}"></div>
            </div>
        </template>
    </modal-window>
</template>

<script>
    import ModalWindow from "../../../Global/ModalWindow";
    export default {
        name: "DownloadProgressModal",
        components: {ModalWindow},
        data() {
            return {

            }
        },
        methods: {
            close() {
                this.$store.commit('hideDownloadProgress')
                this.$store.state.downloadRequest.cancel();
                this.$store.commit('setDownloadProgress',0)
            }
        },
        computed: {
            downloadProgress() {
                return this.$store.state.downloadProgress
            }
        }
    }
</script>

<style scoped>
    .download_percents {
        margin-top: 33px;
        text-align: center;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        color: #808080;
    }
</style>
