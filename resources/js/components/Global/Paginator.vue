<template>
    <div>
<!--        <paginate-->
<!--            v-model="elements"-->
<!--            :page-count="20"-->
<!--            :page-range="2"-->
<!--            :margin-pages="2"-->
<!--            :click-handler="photoPaginator"-->
<!--            :prev-text="'&#10094;'"-->
<!--            :next-text="'&#10095;'"-->
<!--            :prev-class="'one-page prev'"-->
<!--            :next-class="'one-page next'"-->
<!--            :container-class="'paginate'"-->
<!--            :page-class="'one-page'">-->
<!--        </paginate>-->
    </div>
</template>

<script>
    export default {
        name: "Paginator",
        props: {
            elements: {
                required: true,
                type: Array,
            }
        },
    }
</script>

<style scoped>
    ul {
        padding: 0;
    }
    ul, li {
        list-style: none;
    }
    .paginate {
        display: flex;
    }
    .one-page {
        padding: 10px;
        color: #666;
        border: 1px solid red;
        border-left: none;
    }
    .active,
    .one-page:hover {
        color: #000;
        background-color: #F5F5F5;
    }
    .prev {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
        border-left: 1px solid red;
    }
    .next {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
    }
    .disable {

    }
</style>
