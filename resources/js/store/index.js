import Vue from 'vue'
import Vuex from 'vuex'

import AddPhoto from './modules/AddPhoto'
import ListPhoto from './modules/ListPhoto'
import ListAlbum from "./modules/ListAlbum";
import Globals from "./modules/Globals";
import routes from "../routes";
import Correct from "./modules/Correct";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        AddPhoto,
        ListPhoto,
        ListAlbum,
        Globals,
        Correct
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
        isCreateAlbum: false,
        isChangeNameAlbum: false,
        isDelAlbum: false,
        IdAlbum: 16,
        errorAlbum: [],
        //------------------------------------------

        // Альбомы
        AllAlbums: [],
        //--------

        // Скачивание фото
        isDownloadProgress: false,
        downloadProgress: 0,
        //----------------

        // Удоление фото на странице фото
        isDeleteImages: false,
        //-------------------------------

        // Изменение даты фото
        isChangeDate: false,
        //--------------------

        // Удаление фото из альбома
        isDeleteImagesFromAlbum: false,
        //-------------------------

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
        showCreateAlbum(state) {
            state.isCreateAlbum = true
        },
        hideCreateAlbum(state) {
            state.isCreateAlbum = false
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
        showDelAlbum(state) {
            state.isDelAlbum = true
        },
        hideDelAlbum(state) {
            state.isDelAlbum = false
        },
        changeActiveIdAlbum(state, val) {
            state.IdAlbum = val
        },
        //----------------------------

        // Скачивание фото
        showDownloadProgress(state) {
            state.isDownloadProgress = true
        },
        hideDownloadProgress(state) {
            state.isDownloadProgress = false
        },
        setDownloadProgress(state, data) {
            state.downloadProgress = data
        },
        //----------------

        // Удоление фото на странице фото
        showDeleteImages(state) {
            state.isDeleteImages = true
        },
        hideDeleteImages(state) {
            state.isDeleteImages = false
        },
        //-------------------------------

        // Изменение даты фото
        showChangeDate(state) {
            state.isChangeDate = true
        },
        hideChangeDate(state) {
            state.isChangeDate = false
        },
        //--------------------

        // Удаление фото из альбома
        showDeleteImagesFromAlbum(state) {
            state.isDeleteImagesFromAlbum = true
        },
        hideDeleteImagesFromAlbum(state) {
            state.isDeleteImagesFromAlbum = false
        },
        //-------------------------

        /*getAlbums() {
            axios.get('api/albums')
                .then(r => this.albums = r.data)
        }*/
    },
    actions: {
        savePhotosToAlbum({ commit, getters, dispatch }, albumId) {
            console.log(getters.selectedPhotos)
            let photos = ((getters.selectedPhotos.length === 0) && (getters.correctPhotoId !== 0)) ? [getters.correctPhotoId] : getters.selectedPhotos;
            if(photos && albumId) {
                axios.post('/api/albums-photos', {
                    photos: photos,
                    album: albumId
                })
                .then(response => {
                    // console.log('successfully album saved');
                    // dispatch('ListAlbum/getAlbums');
                    // dispatch('ListPhoto/getPhotos');
                    // if (this.state.isAddPhotoToAlbum) {
                        this.dispatch('clearPhotos');
                        this.commit('hideAddPhotoToAlbum')
                        if (response.data.length <= 0) {
                            dispatch('showToasted', {
                                text: 'Все объекты уже существуют в выбранном альбоме',
                            })
                        } else {
                            let payload = {
                                text: response.data.length + ' объектов добавлены в альбом',
                                action: (this.state.isAddPhotoToAlbum) ? {
                                    text : 'Посмотреть',
                                    onClick : (e, toastObject) => {
                                        routes.push({ name: 'OneAlbum', params: { id: +albumId } })
                                        toastObject.goAway(0);
                                    }
                                } : {},
                            };
                            dispatch('showToasted', payload);
                        }
                    // }
                })
                .catch(err =>
                    console.log('error album saved')
                )
            }
        },
        changeNameAlbum({ commit, getters }, albumName) {
            axios.post('/api/albums/update', {
                id:this.state.IdAlbum,
                name:albumName
            })
                .then(response => {
                        let payload = {
                            text: ' Имя альбома было изменено на ' + albumName,
                        };
                        this.dispatch('showToasted', payload);

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
        deleteAlbum({ commit, getters }, albumId) {
            axios.post('/api/album-destr', {
                id:albumId
            })
                .then(response => {
                        this.commit('hideDelAlbum');
                        this.commit('ListAlbum/countAlbumsM')
                        this.dispatch('ListAlbum/getAlbums');
                    }
                );
        },
        changeCover({ commit, getters }, [photoId, albumId]) {
            axios.post('/api/albums/change-cover', {
                idPhoto:photoId,
                idAlbum:albumId
            })
                .then(response => {
                    let payload = {
                        text: ' Обложка альбома была изменена',
                    };
                    this.dispatch('showToasted', payload);
                    this.dispatch('ListAlbum/getAlbums');
                    }
                );
        },
        createAlbum({ commit, getters }, newAlbum) {
            axios.post('api/albums/create', newAlbum)
                .then(response => {
                     let payload = {
                        text:'Альбом ' + newAlbum.name + ' успешно создан',
                    };
                    this.dispatch('showToasted', payload);
                    this.commit('ListAlbum/countAlbumsP');
                    this.commit('hideCreateAlbum');
                    this.dispatch('ListAlbum/getAlbums');
}
                )
                .catch(error =>{
                    if(error.response.status == 422){
                        this.state.errorAlbum = error.response.data.errors.name;
                        return false;
                    }
                });
        },
        downloadPhotos({ commit, getters }, photos) {
            this.commit('showDownloadProgress');
            axios.post('/api/photos/download', {
                photos: photos
            },
            {
                responseType: 'blob',
                onDownloadProgress: (itemDownload) => {
                    let Progress = Math.round((itemDownload.loaded / itemDownload.total) * 100);
                    this.commit('setDownloadProgress', Progress)
                }
            })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                let randName = Math.random().toString(36).substring(2, 15);
                link.setAttribute('download',randName + '.' + response.data.type.split('/').pop());
                document.body.appendChild(link);
                link.click();
                this.commit('hideDownloadProgress');
                this.commit('setDownloadProgress', 0);
                this.dispatch('clearPhotos');
                let payload = {
                    text: 'Скачивание началось',
                };
                this.dispatch('showToasted', payload);
            })
            .catch(error => {

            })
        },
        downloadAlbums({ commit, getters }, albums) {
            this.commit('showDownloadProgress');
            axios.post('/api/album-photos/download-albums', {
                albums: albums
            },
            {
                responseType: 'blob',
                onDownloadProgress: (itemDownload) => {
                    let Progress = Math.round((itemDownload.loaded / itemDownload.total) * 100);
                    this.commit('setDownloadProgress', Progress)
                }
            })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                let randName = Math.random().toString(36).substring(2, 15);
                link.setAttribute('download',randName + '.' + response.data.type.split('/').pop());
                document.body.appendChild(link);
                link.click();
                this.commit('hideDownloadProgress');
                this.commit('setDownloadProgress', 0);
                this.dispatch('clearPhotos');
                let payload = {
                    text: 'Скачивание началось',
                };
                this.dispatch('showToasted', payload);
            })
            .catch(error => {

            })
        },
        deletePhotos({ commit, getters, dispatch }) {
            let photos = ((getters.selectedPhotos.length === 0) && (getters.correctPhotoId !== 0)) ? [getters.correctPhotoId] : getters.selectedPhotos;
            axios.post('/api/photos/delete', {
                photos: photos
            })
            .then(response => {
                console.log("Успешное удаление")
                this.commit('hideDeleteImages')
                this.dispatch('ListPhoto/getPhotos');
                if(this.state.isDeleteImagesFromAlbum) {
                    this.commit('hideDeleteImagesFromAlbum')
                    this.dispatch('ListAlbum/getAlbums');
                }
                this.commit('clearPhotos');
                let payload = {
                    text: `Удалено ${photos.length} фото`,
                };
                dispatch('showToasted', payload);
            })
            .catch(error => {
                console.log('Удаление не удалось')
            })
        },
        deletePhotosFromAlbum({ commit, getters, dispatch }, albumId) {
            let photos = getters.selectedPhotos;
            console.log(photos)
            console.log(albumId)
            axios.post('/api/album-photos/delete', {
                photos: photos,
                albumId: albumId
            })
            .then(response => {
                console.log("Успешное удаление фото из альбома")
                this.commit('hideDeleteImagesFromAlbum')
                this.dispatch('ListPhoto/getPhotos');
                this.dispatch('ListAlbum/getAlbums');
                this.commit('clearPhotos');
                let payload = {
                    text: `Удалено ${photos.length} фото из альбома`,
                };
                dispatch('showToasted', payload);
            })
            .catch(error => {
                console.log('Удаление из альбома не удалось')
            })
        },
        changeDatePhotos({ commit, getters, dispatch }, date) {
            let photos = ((getters.selectedPhotos.length === 0) && (getters.correctPhotoId !== 0)) ? [getters.correctPhotoId] : getters.selectedPhotos;
            axios.post('/api/photos/change-date', {
                photos: photos,
                date: date
            })
            .then(response => {
                console.log("Успешное изменение даты")
                this.commit('hideChangeDate')
                this.dispatch('ListPhoto/getPhotos');
                this.commit('clearPhotos');
                let payload = {
                    text: `Изменена дата ${photos.length} фото`,
                };
                dispatch('showToasted', payload);
            })
            .catch(error => {
                console.log('Изменение даты не удалось')
            })
        }
    },
})

// как пример для вставки в toasted
// action : {
//     text : 'Закрыть',
//         onClick : (e, toastObject) => {
//         toastObject.goAway(0);
//     }
// },
