<template>
    <div>
        <p>{{ retStr }}</p>
    </div>
</template>

<script>
    export default {
        name: "breadcrumbs",
        props: {
            crumbs: {      // { tile1: 'link1', title2: 'link2'} - что будет передаваться
                type: Object,
                required: true
            }
        },
        computed: {
            retStr() {
                let breadStr = '';
                for(let key of Object.keys(this.crumbs)) {
                    breadStr += ''  // здесь наращиваешь крошки
                                    // (ссылки(this.crumbs[key]) с титлам(key))
                                    // c разделителем
                }

                return breadStr;
            }
        }
    }
</script>

<style scoped>

</style>
