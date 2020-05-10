import VueRouter from 'vue-router'

import Albums from "./components/Album/Index";
import Index from "./components/Album/Index";
// import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
import BlockPhotoList from "./components/Photo/List/BlockPhotoList";

export default new VueRouter({
    routes: [
        // {
        //     path: '/:param',
        //     component: component,
        //     name: name
        // }
        {
            path: '/albums',
            component: Index
        },
        {
            path: '/photos',
            component: BlockPhotoList,
            name: 'BlockPhotoList'
        },

        {
            path: '/photo',

        },
    ],
    mode: 'history',
})
