<template>
    <div class="group">
        <div class="group-selector">
            <input type="checkbox" id="sel-group">
            <label for="sel-group" class="group-date">{{ strTitle }}</label>
        </div>
        <div class="group-content">
            <OnePhoto v-for="photo in photos" :key="photo.id" :photo="photo"
            ></OnePhoto>
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
