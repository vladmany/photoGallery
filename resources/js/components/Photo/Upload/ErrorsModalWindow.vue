<template>
    <div>
        <div class="outside-the-window">
            <div class="window animated fadeInDown">
                <button class="close-window-btn" @click="cancel()">
                    <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="6" width="14" height="14">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0667 8.15535L17.8447 6.93335L13 11.778L8.15535 6.93335L6.93335 8.15535L11.778 13L6.93335 17.8447L8.15535 19.0667L13 14.222L17.8447 19.0667L19.0667 17.8447L14.222 13L19.0667 8.15535Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <rect x="1.7334" y="1.7334" width="22.5333" height="22.5333"/>
                        </g>
                    </svg>
                </button>
                <div class="window-content">
                    <h1>Загрузка фото</h1>
                    <span>{{ this.$store.state.UploadErrorMessage }}</span>
                    <span class="d-block">Не удается загрузить фото:</span>
                    <span class="error-file d-block">{{ this.$store.state.UploadErrorFile }}</span>

                    <div class="window-buttons d-flex">
                        <button class="window-btn-ok" @click="apply()">Продолжить</button>
                        <button class="window-btn-cancel" @click="cancel()">Отменить</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TestModalWindow",
        showed: true,
        methods: {
            apply() {
                this.$root.$emit('continueUpload')
            },
            cancel() {
                this.$root.$emit('cancelUpload')
            }
        },
        created() {
            let vm = this;
            document.addEventListener('mouseup', function (e) {
                let container = $(".window");

                if ((container.has(e.target).length === 0) && ($(':focus').attr('class') ===! 'upload-btn' || $(':focus').attr('class') == undefined) && (container.css('display') === 'flex')){
                    container.css('display','none')
                }
            });
        },
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
    }

    .close-window-btn svg {
        fill: #D8D8D8;
    }

    .close-window-btn:hover svg, .close-window-btn:focus svg {
        fill: #808080;
    }

    .window-content {
        padding: 30px 40px 40px 40px;
    }

    .window-content h1 {
        font-weight: 500;
        font-size: 18px;
        line-height: 167%;
        /* or 167% */
        color: #666666;
    }

    .window-content span {
        font-style: normal;
        font-weight: 500;
        /*font-size: 14px;*/
        line-height: 30px;
        color: #808080;
    }

    .error-file {
        font-style: oblique!important;
    }

    .window-content .window-btn-ok, .window-content .window-btn-cancel {
        width: 120px;
        height: 50px;
        border: none;
        text-transform: uppercase;
    }

    .window-content .window-btn-ok {
        background-color: #1875F0;
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #fff;
        border-radius: 4px;
        margin-right: 10px;
    }

    .window-btn-cancel {
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #B3B3B3;
        background-color: #fff;
    }

</style>
