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
        IdAlbum: 16,
        errorAlbum: [],
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
        //------------------------------------------

        // Изменение названия альбома
        showChangeNameAlbum(state) {
            state.isChangeNameAlbum = true
        },
        hideChangeNameAlbum(state) {
            state.isChangeNameAlbum = false
        },
        changeActiveIdAlbum(state, val) {
            state.IdAlbum = val
        }
        //----------------------------

        // Скачивание фото

        //----------------

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
        changeNameAlbum({ commit, getters }, albumName) {
            axios.put('/api/albums/update', {
                id:this.state.IdAlbum,
                name:albumName
            })
                .then(response => {
                    this.commit('hideChangeNameAlbum');
                    this.dispatch('ListAlbum/getAlbums');
                }
                )
                .catch(error =>{
                    if(error.response.status == 422){
                        this.state.errorAlbum = error.response.data.errors.name;
                        console.log(error.response.data.errors.name[0])
                        return false;
                    }
                });
        },
        downloadPhotos({ commit, getters }, photos) {
            axios.post('/api/photos/download', {
                photos: photos
            },
            {
                responseType: 'blob'
            })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                let randName = Math.random().toString(36).substring(2, 15);
                link.setAttribute('download',randName + '.' + response.data.type.split('/').pop());
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {

            })
        }

    }
})
