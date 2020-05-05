<template>
    <div class="one-photo" :style="style">
        <div>
            <Checkbox />
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    import Checkbox from "../../Global/Checkbox"

    export default {
        name: "OnePhoto",
        components: {Checkbox},
        props: {
            photo: {
                required: true,
                type: Object,
            }
        },
        computed: {
            style() {
                return {
                    background: "no-repeat center url({{this.photo.url}});"
                }
            }
        }
    }
</script>

<style scoped>
    .one-photo {
        width: 100px;
        height: 100px;
    }
</style>