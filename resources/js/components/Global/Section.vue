<template>
    <div class="main-wrapper container">
        <div class="row">
            <div class="bread-crumbs col-12">
                <slot name="breadcrumbs">
                    <p>Хлебные крошки</p>
                </slot>
            </div>
            <div class="main-title col-12">
                <slot name="title">
                    <p>Заголовок секции</p>
                </slot>
            </div>
        </div>
        <div class="row card-wrapper">
            <div class="card-button col-12 col-md-3 col-lg-2">
                <slot name="button">
                    <!--   Кнопка секции -->
                </slot>
            </div>
            <div class="actions-panel col-12 col-md-8 col-lg-9">
                <slot name="actions">
                    <!--   Панель операций раздела   -->
                </slot>
            </div>
        </div>
        <div class="row">
            <div class="card-content col-12">
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
        background: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        max-width: 1110px;
        display: flex;
        border-bottom: 2px solid #F5F5F5;
        min-height: 92px;
        height: 100%;
    }

    .card-button {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #F5F5F5;
    }
    .actions-panel{
        width: 100%;
        min-height: 92px;
        height: 100%;
    }

    .card-content {
        min-height: 710px;
        align-items: center;
        background-color: #ffffff;
        max-width: 1110px;
        margin-bottom: 25px;
    }
</style>
