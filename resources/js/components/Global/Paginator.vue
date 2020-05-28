<template>
    <paginate
        :page-count="pages"
        :page-range="3"
        :margin-pages="2"
        :click-handler="func"
        prev-text="<object type='image/svg+xml' data='/storage/ic_arrow_back.svg'></object>"
        next-text="<object type='image/svg+xml' data='/storage/ic_arrow_forward.svg'></object>"
        :prev-class="'one-page prev'"
        :next-class="'one-page next'"
        :container-class="'paginate'"
        :page-class="'one-page'">
    </paginate>
</template>

<script>
    export default {
        name: "Paginator",
        props: {
            pages: {
                required: true,
                type: Number,
            },
            func: {
                required: true,
                type: Function
            }
        },
    }
</script>

<style>
    ul {
        padding: 0;
    }
    ul, li {
        list-style: none;
    }
    .paginate {
        display: flex;
        margin-bottom: 0;
        user-select: none;
        outline: none;
        margin-top: 53px;
    }
    .one-page {
        width: 60px;
        height: 60px;
        color: #666;
        border-left: 2px solid #DADADA;

    }
    .one-page a {
        display: block; /* Ссылка как блочный элемент */
        text-align: center; /* Выравнивание по центру */
        height: 100%; /* Высота на весь слой */
        line-height: 60px;
        outline: none;
    }
    .one-page:hover ~ .disable {
        color: #000;

    }
    .prev a, .next a {
        display: flex!important;
        justify-content: center;
        align-items: center;
    }

    .prev a object, .next a object {
        pointer-events: none;
    }

    .next {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        color: #D8D8D8;
    }

    .prev.disabled,
    .next.disabled {
        opacity: 0
    }

    .prev.disabled a,
    .next.disabled a {
        cursor: default;
    }

    li.active > a {
        /*background-color: red;*/
        background: #FAFAFA;
    }

    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .photo_element .custom-checkbox+label {
        position: absolute;
        margin-top: 6px;
        margin-left: 6px;
    }

    .custom-checkbox:checked+label::before {
        border-color: #0b76ef;
        background-color: #0b76ef;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    .custom-checkbox:not(:disabled):not(:checked)+label::before {
        background: #ffffff;
    }

    .custom-checkbox:not(:disabled):active+label::before {
        background-color: #b3d7ff;
        border-color: #b3d7ff;
    }

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked)+label::before {
        border-color: #80bdff;
    }
    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled+label::before {
        background-color: #e9ecef;
    }
</style>
