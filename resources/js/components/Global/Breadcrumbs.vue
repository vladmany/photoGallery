<template>
    <nav aria-label="breadcrumb">
        <li><router-link to="/photos" v-for="crumb in crumbs" :key="crumb.path">Фотографии</router-link>
            <router-link to={crumbs.children:path}></router-link>
        </li>
    </nav>
</template>

<script>
    import AllPhoto from "../Photo/List/AllPhoto";
    import AllAlbums from "../Album/List/AllAlbums";

    export default {
        props: [
            crumbs=[
                {
                    path: '/photos',
                    component: AllPhoto,
                    children: [
                        {
                            path: 'photo',
                            component: AllPhoto
                        },
                        {
                            path: 'albums',
                            component: AllAlbums
                        },
                    ],
            ],
        ],
        name: "Breadcrumbs"
    }
</script>

<style scoped>

</style>
