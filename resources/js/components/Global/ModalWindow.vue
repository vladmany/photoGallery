<template>
    <div>
        <div class="outside-the-window">
            <div class="window animated fadeInDown">
                <button class="close-window-btn" @click="closeAction">
                    <object type="image/svg+xml" data="/storage/ic_clear.svg"></object>
                </button>
                <div class="window-content">
                    <span class="title">{{title}}</span>
                    <slot name="content"><span>Содержание модалки</span></slot>
                    <div class="window-buttons d-flex">
                        <slot name="buttons"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ModalWindow",
        props: {
            title: {
                type: String,
                default: 'Заголовок'
            },
            closeAction: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style scoped>
    .outside-the-window {
        opacity: 1;
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .window {
        /*width: 150vw;*/
        opacity: 1!important;
        max-width: 540px;
        /*height: 278px;*/
        background: #FFFFFF;
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.07);
        border-radius: 6px;


        position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;

        margin-top: 150px;

        z-index: 2;
        /*position: absolute;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*margin: -125px 0 0 -270px;*/

        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -khtml-user-select: none;    /* Konqueror */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        user-select: none;           /* Non-prefixed version, currently
                                  not supported by any browser */
    }



    .close-window-btn {
        position: relative;
        background: #fff;
        border: none;
        float: right;
        cursor: pointer;
    }

    .close-window-btn object {
        pointer-events: none;
    }

    .close-window-btn:hover object {
        filter: brightness(50%);

    }

    .window-content {
        padding: 30px 40px 40px 40px;
        display: flex;
        flex-direction: column;
    }

    .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 167%;
        /* or 167% */
        color: #666666;
    }

    slot[name="content"] span {
        font-style: normal;
        font-weight: 500;
        /*font-size: 14px;*/
        line-height: 30px;
        color: #808080;
    }

</style>
