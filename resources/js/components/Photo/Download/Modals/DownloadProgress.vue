<template>
    <modal-window
        title="Подготовка к скачиванию"
        :close-action="close"
    >
        <template v-slot:content>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: this.$store.state.downloadProgress + '%'}"></div>
            </div>
        </template>
    </modal-window>
</template>

<script>
    import ModalWindow from "../../../Global/ModalWindow";
    export default {
        name: "DownloadProgress",
        components: {ModalWindow},
        methods: {
            close() {
                this.$store.commit('closeDownloadProgress')
            }
        },
        computed: {
            isDownloadProgress() {
                return this.$store.state.isDownloadProgress
            }
        }
    }
</script>

<style scoped>

</style>
