<template>
    <modal-window
        v-if="this.$store.state.isChangeDate"
        title="Изменить дату"
        :close-action="close"
        :min-width="340"
    >
    <template v-slot:content>
        <div class="calendar-wrapper">
            <date-picker
                v-model="selDate"
                is-inline
                :attributes='attrs'
            />
            <div class="invalid-feedback">Дата не выбрана</div>
        </div>
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
                if (!this.selDate) {
                    $('.calendar-wrapper').addClass('is-invalid')
                } else {
                    let selYear = this.selDate.getFullYear();
                    let selMonth = ((this.selDate.getMonth()+1) <= 9) ? '0' + (this.selDate.getMonth()+1) : (this.selDate.getMonth()+1);
                    let selDay = (this.selDate.getDate() <= 9) ? '0' + (this.selDate.getDate()) : this.selDate.getDate() ;
                    let bdDate = `${selYear}-${selMonth}-${selDay} 00:00:00`;
                    this.$store.dispatch('changeDatePhotos', bdDate)
                }
            },
            close() {
                this.$store.commit('hideChangeDate')
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
        },
        watch: {
            selDate() {
                $('.calendar-wrapper').removeClass('is-invalid')
            }
        }
    }
</script>

<style scoped>
    .calendar-wrapper {
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        margin-top: 15px;
        margin-bottom: 33px;
    }
    .calendar-wrapper.is-invalid div:first-child {
        border: 1px solid red!important;
    }

    .calendar-wrapper.is-invalid .invalid-feedback{
        display: block;
    }
</style>
