import VueRouter from 'vue-router'

import Albums from "./components/Album/Index";
import Index from "./components/Album/Index";
import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
import ExampleComponent from "./components/ExampleComponent";
export default new VueRouter({
    routes: [
        // {
        //     path: '/:param',
        //     component: component,
        //     name: name
        // }
        {
            path:'/photo',
            component: UploadPhotosComponent,
            name:'photos'
        },
        {
            path:'/albums',
            component:Index
        },
        {
            path:'/studio'
        }
    ],
    mode: 'history',
})