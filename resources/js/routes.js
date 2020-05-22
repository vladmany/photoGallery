import VueRouter from 'vue-router'


// import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
// import BlockPhotoList from "./components/Photo/List/BlockPhotoList";
import IndexPhoto from "./components/Photo/List/PhotoIndex"
import IndexViewPhoto from "./components/Photo/View/ViewIndex";
import OnePhoto from "./components/Photo/View/OnePhoto";
import AlbumIndex from "./components/Album/AlbumIndex";
import OneAlbum from "./components/Album/List/OneAlbum";
import AddPhotoToAlbum from "./components/Album/List/AddPhotoToAlbum";
import CorrectIndex from "./components/Photo/Correct/CorrectIndex";
import CorrectIndexOne from "./components/Photo/Correct/CorrectIndexOne";


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
        },
        {
            path: '/albums/:id',
            component: OneAlbum,
            name: 'OneAlbum',
            props: (route) => {
                const id = Number.parseInt(route.params.id, 10)
                if (Number.isNaN(id)) {
                    return 0
                }
                return { id }
            }
        },
        {
            path: '/albums/:id/add',
            component: AddPhotoToAlbum,
            name: 'AddPhotoToAlbum',
            props: (route) => {
                const id = Number.parseInt(route.params.id, 10)
                if (Number.isNaN(id)) {
                    return 0
                }
                return { id }
            }
        },
        {
            path: '/photos',
            component: IndexPhoto,
            name: 'IndexPhoto',
            alias: ['/', '/home'],
        },
        {
            path: '/photos/:id',
            component: IndexViewPhoto,
            name: 'IndexViewPhoto',
            props: (route) => {
                const id = Number.parseInt(route.params.id, 10)
                const previousRoute = route.params.previousRoute
                const albumId = route.params.albumId
                if (Number.isNaN(id)) {
                    return 0
                }
                return { id, previousRoute, albumId }
            }
        },
        {
            path: '/photos/correct/:id',
            component: CorrectIndex,
            name: 'CorrectIndex',
            props: (route) => {
                const id = Number.parseInt(route.params.id, 10)
                const previousRoute = route.params.previousRoute
                if (Number.isNaN(id)) {
                    return 0
                }
                return { id, previousRoute }
            }
        },
        {
            path: '/photos/correct/one/:id',
            component: CorrectIndexOne,
            name: 'CorrectIndexOne',
            props: (route) => {
                const id = Number.parseInt(route.params.id, 10)
                const previousRoute = route.params.previousRoute
                const albumId = route.params.albumId
                if (Number.isNaN(id)) {
                    return 0
                }
                return { id, previousRoute, albumId }
            }
        },
        {
            path: '/manipul',

        },
    ],
    mode: 'history',
})
