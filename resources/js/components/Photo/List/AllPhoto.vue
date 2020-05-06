<template>
    <div>
        <div>
            <p>Панель команд</p>
        </div>
        <div>
            <p>Группы</p>
        </div>
    </div>
</template>

<script>
    import Section from '../../Global/Section'
    import jwPaginator from '../../Global/jwPaginator'
    import GroupPhoto from './GroupPhoto'
    import { mapGetters } from 'vuex'

    export default {
        name: "AllPhoto",
        components: {Section, GroupPhoto, jwPaginator},
        props: {
            paginateCount: {
                type: Number,
                default: 40
            }
        },
        computed: {
            ...mapGetters([
                'groups',
            ]),
        },

    }
</script>

<style scoped>

</style>