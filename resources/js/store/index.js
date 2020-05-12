import Vue from 'vue'
import Vuex from 'vuex'
import AddPhoto from './modules/AddPhoto'
import ListPhoto from './modules/ListPhoto'
import ListAlbum from "./modules/ListAlbum";
import Globals from "./modules/Globals";

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

        // Добавление фото в альбом(на стрнице фото)
        isAddPhotoToAlbum: false,
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

        // Добавление фото в альбом(на стрнице фото)
        showAddPhotoToAlbum(state) {
            state.isAddPhotoToAlbum = true
        },
        hideAddPhotoToAlbum(state) {
            state.isAddPhotoToAlbum = false
        }
        //------------------------------------------

        /*getAlbums() {
            axios.get('api/albums')
                .then(r => this.albums = r.data)
        }*/
    },
    actions: {
        savePhotosToAlbum({ getters }, albumId) {
                // axios.post('/api/****', {
                //     photos: getters['Global/selectedPhotos'],
                //     album: albumId
                // }).then(res => console.log(res.data))
        }

    }
})
