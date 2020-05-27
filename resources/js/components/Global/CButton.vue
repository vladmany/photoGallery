<template>
    <div class="button-wrapper">
        <button :class="type + (state ? '' : ' disabled')" @click="action">{{text}}</button>
    </div>
</template>

<script>
    export default {
        name: "СButton",
        props: {
            action: {
                type: Function
            },
            type: {
                type: String,
                default: 'primary',
                validator: function (value) {
                    return ['primary', 'secondary'].indexOf(value) !== -1
                }
            },
            text: {
                type: String,
                default: 'Продолжить'
            },
            state: {
                type: Boolean,
                default: true
            }
        },
    }
</script>

<style scoped>
    .button-wrapper {
        width: 100%;
        max-width: 155px;
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
    button {
        font-family: 'Roboto', sans-serif;
        padding-left: 10px;
        padding-right: 10px;
        height: 50px;
        border: none;
        text-transform: uppercase;
        width: 100%;
        border-radius: 4px;
    }

    button:not(.disabled):not(.secondary):hover {
        opacity: 0.9;
    }

    button.primary {
        background-color: #1875F0;
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #fff;
        margin-right: 10px;
        border: 2px solid #F5F5F5;
    }

    button.primary.disabled {
        background-color: rgba(24, 117, 240, 0.62);
        pointer-events: none;
    }

    button.secondary {
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #B3B3B3;
        background-color: #ffffff;
        border: 2px solid #F5F5F5;
    }

    button.secondary:hover {
        filter: brightness(0.9);
        transition: all 0.3s;
    }

    button.secondary.disabled {
        color: rgb(225, 225, 225);
        pointer-events: none;
    }
</style>
