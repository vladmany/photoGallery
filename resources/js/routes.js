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
            path: '/home',
            beforeEnter() {location.href = 'https://team1-group-project.azurewebsites.net/'}
        },
        {
            path: '/mail',
            beforeEnter() {location.href = 'http://cu66460.tmweb.ru/'}
        },
        {
            path: '/calendar',
            beforeEnter() {location.href = 'http://laravelproject.s-host.net/'}
        },
        {
            path: '/contacts',
            beforeEnter() {location.href = 'https://contacts.s-host.net/'}
        },
        {
            path: "/albums",
            component: AlbumIndex,
            name: "AlbumIndex",
            meta: {
                title: 'IT 2.0 Tools - Альбомы'
            }
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
            },
            meta:{
                title: 'IT 2.0 Tools - Просмотр альбома'
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
            },
            meta:{
                title: 'IT 2.0 Tools - Добавить фото в альбом'
            }
        },
        {
            path: '/photos',
            component: IndexPhoto,
            name: 'IndexPhoto',
            alias: ['/'],
            meta: {
                title: 'IT 2.0 Tools - Фото'
            }
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
            },
            meta:{
                title: 'IT 2.0 Tools - Просмотр фото'
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
            },
            meta:{
                title: 'IT 2.0 Tools - Корректировать фото'
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
            },
            meta:{
                title: 'IT 2.0 Tools - Корректировать фото'
            }
        },
        {
            path: '/departaments',
            beforeEnter() {location.href = 'https://team1-group-project.azurewebsites.net/'}
        },
        {
            path: '/users',
            beforeEnter() {location.href = 'https://team1-group-project.azurewebsites.net/'}
        },
        {
            path: '/manipul',

        },
    ],
    mode: 'history',
})
