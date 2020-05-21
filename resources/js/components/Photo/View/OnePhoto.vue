<template>
    <div class="photo-wrap">
        <img :src="photo.url" :alt="photo.name" class="img-fluid one-photo pt-5" :style="myStyle">
    </div>
</template>

<script>
    export default {
        name: "OnePhoto",
        props: {
            id: {
                required: true,
                type: Number
            }
        },
        data() {
            return {
                myStyle: ''
            }
        },
        computed: {
            photo() {
                return this.$store.getters['ListPhoto/photo'](this.id);
            },
            cssStyle() {
                this.$store.dispatch('makeCssFilter')
                let filter = this.$store.getters.cssFilter;
                // console.log(filter);

                return filter;
            },
        },
        methods: {
            makeAction() {
                this.$store.dispatch('changeCorrectPhotoId', this.id);
                this.save()
                // let id = this.$store.getters.correctPhotoId;
                this.$store.dispatch('setSccAttrsById', this.id)
            },
        },
        watch: {
            cssStyle(newVal, oldVal) {
                // console.log(newVal)
                this.myStyle = newVal;
            },
        },
        created() {
            this.$store.dispatch('getCorrects')
            this.$store.dispatch('setCorrectPhotoId', this.id)
            this.$store.dispatch('setSccAttrsById', this.id)
            this.myStyle = this.cssStyle;
        }
    }
</script>

<style scoped>
    .photo-wrap > .one-photo {
        max-height: 400px;
        vertical-align: middle;
    }
    .photo-wrap {
        min-height: 400px;
        line-height: 400px;
        text-align: center;
    }
</style>
