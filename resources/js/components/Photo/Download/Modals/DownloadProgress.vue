<template>
    <modal-window
        v-if="this.$store.state.isDownloadProgress"
        title="Подготовка к скачиванию"
        :close-action="close"
    >
        <template v-slot:content>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: downloadProgress + '%'}"></div>
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
    .progress {
        margin-top: 33px
    }
</style>
