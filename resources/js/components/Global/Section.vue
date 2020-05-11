<template>
    <div class="main-wrapper">
        <div class="bread-crumbs">
            <slot name="breadcrumbs">
                <p>Хлебные крошки</p>
            </slot>
        </div>
        <div class="main-title">
            <slot name="title">
                <p>Заголовок секции</p>
            </slot>
        </div>
        <div class="card-wrapper">
            <div class="card-panel">
                <div class="card-button">
                    <slot name="button">
                        <!--   Кнопка секции -->
                    </slot>
                </div>
                <div class="actions-panel">
                    <slot name="actions">
                        <!--   Панель операций раздела   -->
                    </slot>
                </div>
            </div>
            <div class="card-content">
                <slot name="content">
                    <p>Контент секции</p>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Section"
    }
</script>

<style scoped>
    .main-wrapper {
        margin: 25px 48px 30px 48px;
    }
    .bread-crumbs {
        font-family: 'Roboto', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 30px;
        color: #CCCCCC;
    }
    .main-title {
        font-family: 'Roboto', serif;
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 90px;
        color: #808080
    }
    .card-wrapper {
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
    }
    .card-panel {
        display: flex;
        height: 90px;
        width: 100%;
        border-bottom: 2px solid #F5F5F5;
    }
    .card-button {
        display: flex;
        max-width: 214px;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #F5F5F5;
    }
    .card-content {
        /*height: 710px;*/
        /*height: 100%;*/
    }
</style>
