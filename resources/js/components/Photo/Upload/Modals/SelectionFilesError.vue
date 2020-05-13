<template>
    <modal-window
        v-if="this.$store.state.isSelectFilesError"
        title="Ошибка загрузки фото"
        :close-action="close"
    >
        <template v-slot:content>
            <span class="content">Выбранное количество фото не должно превышать {{maxFiles}} шт.</span>
        </template>
        <template v-slot:buttons>
            <c-button
                text="Продолжить"
                :action="close"
                :state="true"
            />
        </template>
    </modal-window>
</template>

<script>
    import ModalWindow from "../../../Global/ModalWindow";
    import CButton from "../../../Global/CButton";

    export default {
        name: "SelectionFilesErrorModal",
        components: {CButton, ModalWindow},
        methods: {
            close() {
                this.$store.commit('hideSelectError')
            }
        },
        computed: {
            maxFiles() {
                return this.$store.state.maxFilesToUpload
            }
        }
    }
</script>

<style scoped>
    .content {
        font-style: normal;
        font-weight: 500;
        /*font-size: 14px;*/
        line-height: 30px;
        color: #808080;
        padding-top: 15px;
        padding-bottom: 33px;
    }
</style>
