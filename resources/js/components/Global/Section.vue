<template>
    <div class="d-flex flex-column px-5">

        <div class="w-100 breadcrumb">
            <slot name="breadcrumbs">
                <p>Хлебные крошки</p>
            </slot>
        </div>

        <div>
            <slot name="title">
                <p>Заголовок страницы</p>
            </slot>
        </div>

        <div class="py-3">
            <slot name="content">
                <p>Контент страницы</p>
            </slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Section"
    }
</script>

<style scoped>

</style>