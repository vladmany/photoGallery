<template>
    <div class="slider">
        <span class="prev" @click="prev">&#10094;</span>
        <transition-group name="fade" tag="div" class="center-block mx-auto">
            <div v-for="i in [currentIndex]" :key="i" class="text-center">
                <img :src="currentImg" />
            </div>
        </transition-group>
        <span class="next" @click="next">&#10095;</span>
    </div>
</template>
<script>
    export default {
        name: "Slider",
        props: {
            images: {
                required: true,
                type: Array,
            },
            currentIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                timer: null,
            };
        },

        mounted: function() {
            this.startSlide();
        },

        methods: {
            startSlide: function() {
            //     this.timer = setInterval(this.next, 4000);
            },

            next: function() {
                this.currentIndex += 1;
            },
            prev: function() {
                this.currentIndex -= 1;
            }
        },

        computed: {
            currentImg: function() {
                return this.images[Math.abs(this.currentIndex) % this.images.length];
            }
        }
    };
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        /*transition: all 0.9s ease;*/
        overflow: hidden;
        visibility: visible;
        position: absolute;
        width:100%;
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        visibility: hidden;
        width:100%;
        opacity: 0;
    }

    img {
        height:auto;
        width:100%
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 40%;
        width: 40px;
        height: 40px;
        padding: 11px;
        padding-left: 15px;
        padding-top: 9px;
        color: white;
        font-weight: bold;
        font-size: 14px;
        transition: 0.7s ease;
        border-radius: 50%;
        /*text-decoration: none;*/
        user-select: none;
        background-color: rgba(0,0,0,0.2);
    }

    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.9);
    }

    .one-slide {
        width: 200px;
        height: 200px;
    }
    .slider {
        position: relative;
    }
    .center-block {
        /*max-width: 600px;*/
        width: 60%;
    }
</style>
