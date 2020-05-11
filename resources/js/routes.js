import VueRouter from 'vue-router'

import Albums from "./components/Album/Index";
// import Index from "./components/Album/Index";
// import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
// import BlockPhotoList from "./components/Photo/List/BlockPhotoList";
import IndexPhoto from "./components/Photo/List/Index"
import BlockOnePhoto from "./components/Photo/onePhoto/BlockOnePhoto";
import OnePhoto from "./components/Photo/onePhoto/OnePhoto";
// import AllAlbums from "./components/Album/AllAlbums";
import BlockAlbumList from "./components/Album/BlockAlbumList";
import OneAlbum from "./components/Album/OneAlbum";

export default new VueRouter({
    routes: [
        // {
        //     path: '/:param',
        //     component: component,
        //     name: name
        // }

        {
            path: "/albums",
            component: BlockAlbumList,
            name: "BlockAlbumList",
        },
        {
            path: '/album/:id',
            component: OneAlbum,
            name: 'OneAlbum',
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
            component: BlockOnePhoto,
            name: 'OnePhoto',
            props: true
        },
        {
            path: '/manipul',

        },
    ],
    mode: 'history',
})
