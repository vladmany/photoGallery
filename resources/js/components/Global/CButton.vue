<template>
    <div>
        <button :class="type" @click="action">{{text}}</button>
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
            }
        },
    }
</script>

<style scoped>
    button {
        font-family: 'Roboto', sans-serif;
        padding-left: 10px;
        padding-right: 10px;
        height: 50px;
        border: none;
        text-transform: uppercase;
    }

    button.primary {
        background-color: #1875F0;
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #fff;
        border-radius: 4px;
        margin-right: 10px;
    }

    button.secondary {
        font-weight: 900;
        font-size: 12px;
        line-height: 50px;
        color: #B3B3B3;
        background-color: #ffffff;
    }
</style>
