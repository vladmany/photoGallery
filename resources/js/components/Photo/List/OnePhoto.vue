<template>
    <div class="d-flex">
        <div class="photo_element">
            <input type="checkbox" class="mx-1 mb-1 custom-checkbox"
                   :id="'photo-' + photo.id"
                   v-model="isSelected"
                   @click="select"
            >
            <label :for="'photo-' + photo.id"></label>
            <router-link :to="{ name: 'IndexViewPhoto', params: { id: photo.id, previousRoute: (albumId) ? { name: 'OneAlbum', params: { id: albumId } } : { name: 'IndexPhoto' }, albumId: albumId } }">
                <img :src="photoUrl" :alt="photo.name"
                     class="img-fluid one-photo"
                     @click="getId"
                >
            </router-link>
        </div>
    </div>
</template>

<script>
    import Checkbox from "../../Global/Checkbox"
    import {mapGetters} from "vuex";

    export default {
        name: "OnePhoto",
        components: {Checkbox},
        props: {
            photo: {
                required: true,
                type: Object,
            },
            isSelectedDef: {
                required: true,
                type: Boolean,
            },
            albumId: {
                type: Number
            },
            downUp: {
                type: Object
            }
        },
        data() {
            return {
                isSelected: false
            }
        },
        watch: {
            isSelectedDef(newVal) {
                if(this.downUp.v === 0) {
                    this.isSelected = newVal;
                }
            },
            isSelected(newVal) {
                // if(this.downUp === 1) {
                if(newVal) {
                    this.$store.dispatch('addPhoto', this.photo.id);
                    this.$store.dispatch('ListPhoto/selectPhoto', this.photo.id)
                } else {
                    this.$store.dispatch('delPhoto', this.photo.id);
                    this.$store.dispatch('ListPhoto/unselectPhoto', this.photo.id)
                    if(this.selectAll) {
                        this.$store.dispatch('ListPhoto/selectAllPhotos', false);
                    }
                }
            },
            selectAll(newVal) {
                if(newVal) {
                    this.downUp.v = 0;
                }
            },
        },
        computed: {
            ...mapGetters({
                selectedPhotos: 'selectedPhotos',
                groupsSelected: 'ListPhoto/groupsSelected',
                selectAll: 'ListPhoto/selectAllPhotos',
                // downUp: 'ListPhoto/downUp',
                // clickCount: 'ListPhoto/clickCount',
            }),
            // photo() {
            //     return this.$store.getters['ListPhoto/photo'](this.id)
            // },
            photoUrl() {
                let ret = this.photo.url + '?' + new Date().getTime();
                // console.log(ret);

                return ret
            },
        },
        methods: {
            getId() {
                this.$store.dispatch('changeCorrectPhotoId', this.photo.id)
            },
            getPhoto() {
                return this.$store.getters['ListPhoto/photo'](this.id)
            },
            select() {
                this.downUp.v = 1;
                this.$emit('select-child', this.isSelected)
            }
        },
        created() {
            // this.isSelected = this.isSelectedDef;
        },
    }
</script>

<style scoped>
    .one-photo {
        max-height: 160px;
    }

    .photo_element {
        margin: 7px;
    }
    .photo_element {
        -webkit-filter: brightness(1);
        -webkit-transition: filter 0.2s ease;
        -moz-transition: filter 0.2s ease;
        -o-transition: filter 0.2s ease;
        -ms-transition: filter 0.2s ease;
        transition: filter 0.2s ease;
    }

    .photo_element a:hover {
        -webkit-filter: brightness(0.6);
    }

    .photo_element a:hover {
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }

    .photo_element input[type=checkbox] {
        display: flex;
        position: absolute;
        transform:scale(1.5);
        margin-top: 6px;
        margin-left: 6px!important;
        /*filter: brightness(1) saturate(1);*/
    }

    .photo_element label::before {
        z-index: 10;
    }
</style>
