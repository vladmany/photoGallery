<template>
    <div class="d-flex">
        <div class="photo_element">
            <input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'photo-' + photo.id" v-model="isSelected">
            <label :for="'photo-' + photo.id"></label>
            <router-link :to="{ name: 'IndexViewPhoto', params: { id: photo.id, previousRoute: (albumId) ? { name: 'OneAlbum', params: { id: albumId } } : { name: 'IndexPhoto' }, albumId: albumId } }">
                <img :src="photoUrl" :alt="photo.name"
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
            isSelectedDef: {
                required: true,
                type: Boolean,
            },
            albumId: {
                type: Number
            }
        },
        data() {
            return {
                isSelected: false
            }
        },
        watch: {
            isSelected() {
                if(this.isSelected) {
                    this.$store.dispatch('addPhoto', this.photo.id);
                    this.$store.dispatch('ListPhoto/selectPhoto', this.photo.id)
                } else {
                    this.$store.dispatch('delPhoto', this.photo.id);
                    this.$store.dispatch('ListPhoto/unselectPhoto', this.photo.id)

                    // let allPhotos = this.$store.getters["ListPhoto/photos"];
                    // let allSelectedPhotos = this.$store.getters.selectedPhotos;
                    // let res = allPhotos.length === allSelectedPhotos.length;
                    // this.$store.dispatch('ListPhoto/selectAllPhotos', res);
                }
            },
        },
        computed: {
            ...mapGetters({
                selectedPhotos: 'selectedPhotos',
                groupsSelected: 'ListPhoto/groupsSelected'
            }),
            photo() {
                return this.$store.getters['ListPhoto/photo'](this.id)
            },
            photoUrl() {
                let ret = this.photo.url + '?' + new Date().getTime();
                // console.log(ret);

                return ret
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
        created() {
            this.isSelected = this.isSelectedDef;
        },
    }
</script>

<style scoped>
    .one-photo {
        height: 200px;
    }

    .photo_element {
        margin: 7px;
        -webkit-filter: brightness(1) saturate(1);
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        -ms-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    .photo_element:hover {
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        -webkit-filter: brightness(0.6) saturate(1.3);
    }

    .photo_element input[type=checkbox] {
        display: flex;
        position: absolute;
        transform:scale(1.5);
        margin-top: 6px;
        margin-left: 6px!important;
    }
</style>
