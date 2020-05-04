<template>
    <div>

        <div>
            <slot name="breadcrumbs">
                <p>Хлебные крошки</p>
            </slot>
        </div>

        <div>
            <slot name="title">
                <p>Заголовок страницы</p>
            </slot>
        </div>

        <div>
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