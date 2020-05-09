import VueRouter from 'vue-router'

import Albums from "./components/Album/Index";
import Index from "./components/Album/Index";
// import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
import BlockPhotoList from "./components/Photo/List/BlockPhotoList";
import BlockOnePhoto from "./components/Photo/onePhoto/BlockOnePhoto";
import OnePhoto from "./components/Photo/onePhoto/OnePhoto";

export default new VueRouter({
    routes: [
        // {
        //     path: '/:param',
        //     component: component,
        //     name: name
        // }
        {
            path: '/albums',
            component: Index,
        },
        {
            path: '/photos',
            component: BlockPhotoList,
            name: 'BlockPhotoList',
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
