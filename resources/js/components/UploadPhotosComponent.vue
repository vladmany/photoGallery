<template>
    <div>
        <button class="upload-btn" @click="switchShowMethods">Загрузить</button>
        <div class="upload-methods flex-column">
            <form action="/photos/upload" method="post" class="from-computer-form">
                <input type="file" name="file-1" id="file-1" class="inputfile inputfile-1" multiple accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff"/>
                <label for="file-1" class="from-computer" @click="switchShowMethods">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="7" width="24" height="16">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 21C24.1 21 25 20.1 25 19V9C25 7.9 24.1 7 23 7H7C5.9 7 5 7.9 5 9V19C5 20.1 5.9 21 7 21H3V23H27V21H23ZM7 9H23V19H7V9Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <rect x="2" y="2" width="26" height="26" fill="#D8D8D8"/>
                        </g>
                    </svg>
                    <span>С компьютера</span>
                </label>
            </form>
            <button class="from-disk" @click="switchShowMethods">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="7" width="24" height="16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.35 13.04C21.67 9.59 18.64 7 15 7C12.11 7 9.6 8.64 8.35 11.04C5.34 11.36 3 13.91 3 17C3 20.31 5.69 23 9 23H22C24.76 23 27 20.76 27 18C27 15.36 24.95 13.22 22.35 13.04ZM20 16L15 21L10 16H13V12H17V16H20Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1)">
                        <rect x="2" y="2" width="26" height="26" fill="#D8D8D8"/>
                    </g>
                </svg>
                <span>С диска</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UploadPhotosComponent",
        data() {
            return {
                showMethods: false
            }
        },
        methods: {
            switchShowMethods() {
                let methods = $('.upload-methods')
                // console.log(methods.css('display') === 'none' ? 'flex' : 'none')
                methods.css('display', methods.css('display') === 'none' ? 'flex' : 'none')
            }
        },
        created() {
            let vm = this;
            document.addEventListener('mouseup', function (e) {
                let container = $(".upload-methods");

                if ((container.has(e.target).length === 0) && ($(':focus').attr('class') ===! 'upload-btn' || $(':focus').attr('class') == undefined) && (container.css('display') === 'flex')){
                    container.css('display','none')
                }
            });
        },
    }

    // ;(function (document, window, index){
    //     'use strict';
    //     var inputs = document.querySelectorAll('.inputfile');
    //     Array.prototype.forEach.call(inputs, function (input) {
    //         var label = input.nextElementSibling,
    //             labelVal = label.innerHTML;
    //
    //
    //         // Firefox bug fix
    //         input.addEventListener('focus', function () {
    //             input.classList.add('has-focus');
    //         });
    //         input.addEventListener('blur', function () {
    //             input.classList.remove('has-focus');
    //         });
    //     });
    // }(document, window, 0));
</script>

<style scoped>
    .upload-btn {
        font-family: sans-serif!important;
        font-style: normal;
        width: 120px;
        height: 50px;
        border: none;
        background-color: #1875F0;
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #fff;
        border-radius: 4px;
        margin-right: 10px;
        text-transform: uppercase;
    }

    .upload-methods {
        display: none;
        max-width: 255px;
        max-height: 120px;
        margin-top: 7px;
        background: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    }

    .upload-methods .from-computer, .upload-methods .from-disk {
        padding: 0;
        margin: 0;
        max-width: 255px;
        width: 100%;
        background: #fff;
        border: none;
        text-align: left;
        font-family: sans-serif!important;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 60px;
        color: #999999;
    }

    .from-computer-form {
        max-height: 62px;
    }

    .upload-methods .from-computer svg {
        min-width: 30px;
        min-height: 30px;
        padding: 0;
        margin: 0;
    }

    .upload-methods .from-computer {
        border-bottom: 2px solid #F5F5F5;
    }

    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .inputfile + label {
        max-width: 80%;
        font-size: 1.25rem;
        /* 20px */
        font-weight: 700;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        padding: 0.625rem 1.25rem;
        /* 10px 20px */
    }

    .inputfile:focus + label,
    .inputfile.has-focus + label {
        outline: 1px dotted #000;
        outline: -webkit-focus-ring-color auto 5px;
    }

    .inputfile + label * {
        /* pointer-events: none; */
        /* in case of FastClick lib use */
    }

    .inputfile + label svg {
        width: 1em;
        height: 1em;
        vertical-align: middle;
        fill: currentColor;
        margin-top: -0.25em;
        /* 4px */
        margin-right: 0.25em;
        /* 4px */
    }

    /* style 1 */

    .inputfile-1 + label {
        color: #fff6fe;
        background-color: #3e51d3;
    }
</style>
