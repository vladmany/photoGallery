<template>
    <div class="d-flex">
        <div class="photo_element">
            <input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'photo-' + photo.id" v-model="isSelected">
            <label :for="'photo-' + photo.id"></label>
            <router-link :to="{ name: 'IndexViewPhoto', params: { id: photo.id, previousRoute: (albumId) ? { name: 'OneAlbum', params: { id: albumId } } : { name: 'IndexPhoto' }, albumId: albumId } }">
                <img :src="photo.url" :alt="photo.name"
                     class="img-fluid  one-photo"
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
            id: {
                required: true,
                type: Number,
            },
            isSelected: {
                required: true,
                type: Boolean,
            },
            albumId: {
                type: Number
            }
        },
        watch: {
            isSelected() {
                if(this.isSelected) {
                    this.$store.dispatch('addPhoto', this.photo.id);
                } else {
                    this.$store.dispatch('delPhoto', this.photo.id);
                }
                // console.log(this.$store.getters.selectedPhotos);
            },
            selectedPhotos() {
                if (this.selectedPhotos.length === 0) {
                    this.isSelected = false
                }
            }
        },
        computed: {
            ...mapGetters({
                selectedPhotos: 'selectedPhotos'
            }),
            photo: {
                get() {
                    return this.$store.getters['ListPhoto/photo'](this.id)
                },
                set(val) {
                    this.$store.commit('updateChecked', val)
                }
                // let ret = this.getPhoto()
                // console.log(ret)
                // return ret
            }
        },
        methods: {
            getId() {
                this.$store.dispatch('changeCorrectPhotoId', this.photo.id)
            },
            getPhoto() {
                return this.$store.getters['ListPhoto/photo'](this.id)
            }
        },
        // beforeCreate() {
            // this.$store.dispatch('ListPhoto/getPhotos');
        // }
        created() {
            console.log('одно фото')
            // this.$store.dispatch('ListPhoto/getPhotos');
        },
    }
</script>

<style scoped>
    .one-photo {
        max-height: 100px;
    }

    .photo_element {
        margin: 7px;
    }

    .photo_element input[type=checkbox] {
        display: flex;
        position: absolute;
        transform:scale(1.5);
        margin-top: 6px;
        margin-left: 6px!important;
    }
</style>
