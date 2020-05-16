<template>
    <modal-window
        title="Подготовка к скачиванию"
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
        components: {ModalWindow}
    }
</script>

<style scoped>

</style>
