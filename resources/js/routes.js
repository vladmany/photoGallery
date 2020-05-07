import VueRouter from 'vue-router'

import Albums from "./components/Album/Index";
import Index from "./components/Album/Index";
import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
export default new VueRouter({
    routes: [
        // {
        //     path: '/:param',
        //     component: component,
        //     name: name
        // }
        {
            path:'/photos',
            // components:UploadPhotosComponent,
            name:'photos'
        },
        {
            path:'/albums',
            // components:Index
        },
        {
            path:'/studio'
        }
    ],
    mode: 'history',
})