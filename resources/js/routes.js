import VueRouter from 'vue-router'


// import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
// import BlockPhotoList from "./components/Photo/List/BlockPhotoList";
import IndexPhoto from "./components/Photo/List/PhotoIndex"
import IndexViewPhoto from "./components/Photo/View/ViewIndex";
import OnePhoto from "./components/Photo/View/OnePhoto";
import AlbumIndex from "./components/Album/AlbumIndex";
import OneAlbum from "./components/Album/List/OneAlbum";
import AddPhotoToAlbum from "./components/Album/List/AddPhotoToAlbum";


export default new VueRouter({
    routes: [
        // {
        //     path: '/:param',
        //     component: component,
        //     name: name
        // }

        {
            path: "/albums",
            component: AlbumIndex,
            name: "AlbumIndex",
            meta: ''
        },
        {
            path: '/album/:id',
            component: OneAlbum,
            name: 'OneAlbum',
            props: true
        },
        {
            path: '/album/:id/add',
            component: AddPhotoToAlbum,
            name: 'AddPhotoToAlbum',
            props: true
        },
        {
            path: '/photos',
            component: IndexPhoto,
            name: 'IndexPhoto',
            alias: '/',
        },
        {
            path: '/photo/:id',
            component: IndexViewPhoto,
            name: 'IndexViewPhoto',
            props: true
        },
        {
            path: '/manipul',

        },
    ],
    mode: 'history',
})
