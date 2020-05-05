<template>
    <div>
        <h2>{{ strTitle }}</h2>
        <div class="d-flex">
            <OnePhoto v-for="element in elements" :key="element.id"
                      :photo="element"></OnePhoto>
        </div>
    </div>
</template>

<script>
    import OnePhoto from './OnePhoto'

    export default {
        name: "GroupPhoto",
        components: {OnePhoto},
        props: {
            title: {
                required: true,
                type: Date
            },
            elements: {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                strTitle: '',
                weekdays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',],
                months: ['Января', 'Февраля', 'Марта', 'Апреля',
                    'Мая', 'Июня', 'Июля', 'Августа',
                    'Сентября', 'Октября', 'Ноября', 'Декабря',],
            }
        },
        watch: {
            title: (date) => {
                let weekday = this.weekdays[date.day];
                let month = this.months[date.month];
                this.strTitle = `${weekday}, ${date.date} ${month}`;
            }
        }
    }
</script>

<style scoped>

</style>