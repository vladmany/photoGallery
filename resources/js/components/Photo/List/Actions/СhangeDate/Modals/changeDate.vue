<template>
    <modal-window
        v-if="this.$store.state.isChangeDate"
        title="Изменить дату"
        :close-action="close"
    >
    <template v-slot:content>
        <span>{{selDate}}</span>
        <date-picker
            v-model="selDate"
            is-inline
            :attributes='attrs'
        />
    </template>
    <template v-slot:buttons>
        <c-button
            text="Изменить"
            :action="changeDate"
        />
        <c-button
            text="Отмена"
            type="secondary"
            :action="close"
        />
    </template>
    </modal-window>
</template>

<script>
    import ModalWindow from "../../../../../Global/ModalWindow";
    import CButton from "../../../../../Global/CButton";
    import Calendar from 'v-calendar/lib/components/calendar.umd'
    import DatePicker from 'v-calendar/lib/components/date-picker.umd'
    export default {
        name: "changeDateModal",
        components: {ModalWindow, CButton,Calendar, DatePicker},
        methods: {
            changeDate() {

            },
            close() {

            }
        },
        data() {
            return {
                selDate: new Date(),
                attrs: [
                    {
                        key: 'today',
                        highlight: false,
                        dates: new Date(),
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>
