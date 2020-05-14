import Vue from 'vue'
import Vuex from 'vuex'
import AddPhoto from './modules/AddPhoto'
import ListPhoto from './modules/ListPhoto'
import ListAlbum from "./modules/ListAlbum";
import Globals from "./modules/Globals";
import routes from "../routes";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        AddPhoto,
        ListPhoto,
        ListAlbum,
        Globals,
    },
    state: {
        // Загрузка фото
        isUploadError: false,
        UploadErrorMessage: [],
        UploadErrorFile: [],
        isSuccessUpload: false,
        successUploadFiles: [],
        isSelectFilesError: false,
        maxFilesToUpload: 15,
        //---------------

        // Загрузка фото 2.0
        isUploadPhotos: false,
        filesToUpload: [],
        filesOrder: [],
        //---------------

        // Добавление фото в альбом(на стрнице фото)
        isAddPhotoToAlbum: false,
        //------------------------------------------

        // Изменение имени альбома(на стрнице детального просмотра альбома)
        isChangeNameAlbum: false,
        //------------------------------------------
        // Альбомы
        AllAlbums: []
        //--------
    },
    getters: {

    },
    mutations: {
        // Загрузка фото
        showUploadError(state) {
            state.isUploadError = true
        },
        hideUploadError(state) {
            state.isUploadError = false
        },
        showUploadSuccess(state) {
            state.isSuccessUpload = true
        },
        hideUploadSuccess(state) {
            state.isSuccessUpload = false
        },
        setUploadErrorMessage(state, data) {
            state.UploadErrorMessage = data
        },
        setUploadErrorFile(state, data) {
            state.UploadErrorFile = data
        },
        setUploadSuccessFile(state, data) {
            state.successUploadFiles = data
        },
        showSelectError(state) {
            state.isSelectFilesError = true
        },
        hideSelectError(state) {
            state.isSelectFilesError = false
        },
        //--------------

        // Загрузка фото 2.0
        showUploadPhotos(state) {
            state.isUploadPhotos = true
        },
        hideUploadPhotos(state) {
            state.isUploadPhotos = false
        },
        setFilesToUpload(state, data) {
            state.filesToUpload = data
        },
        setFilesOrder(state, data) {
            state.filesOrder = data
        },
        //--------------

        // Добавление фото в альбом(на стрнице фото)
        showAddPhotoToAlbum(state) {
            state.isAddPhotoToAlbum = true
        },
        hideAddPhotoToAlbum(state) {
            state.isAddPhotoToAlbum = false
        },
        hideChangeNameAlbum(state) {
            state.isChangeNameAlbum = false
        }
        //------------------------------------------

        /*getAlbums() {
            axios.get('api/albums')
                .then(r => this.albums = r.data)
        }*/
    },
    actions: {
        savePhotosToAlbum({ commit, getters }, albumId) {
            let photos = getters.selectedPhotos;
            if(photos && albumId) {
                axios.post('/api/albums-photos', {
                    photos: photos,
                    album: albumId
                })
                .then(response => {
                    console.log('successfully album saved');
                    // dispatch('ListAlbum/getAlbums');
                    // dispatch('ListPhoto/getPhotos');
                    if (this.state.isAddPhotoToAlbum) {
                        this.dispatch('clearPhotos');
                        this.commit('hideAddPhotoToAlbum')
                        if (response.data.length <= 0) {
                            Vue.toasted.show('Все объекты уже существуют в выбранном альбоме', {
                                action : {
                                    text : 'Закрыть',
                                    onClick : (e, toastObject) => {
                                        toastObject.goAway(0);
                                    }
                                },
                                position: 'bottom-left',
                                duration: 5000,
                                keepOnHover: true
                            });
                        } else {
                            Vue.toasted.show(response.data.length + ' объектов добавлены в альбом', {
                                action : {
                                    text : 'Посмотреть',
                                    onClick : (e, toastObject) => {
                                        routes.push({ name: 'OneAlbum', params: { id: +albumId } })
                                        toastObject.goAway(0);
                                    }
                                },
                                position: 'bottom-left',
                                duration: 5000,
                                keepOnHover: true
                            });
                        }
                    }
                })
                .catch(err =>
                    console.log('error album saved'))
            }
        },

    }
})
