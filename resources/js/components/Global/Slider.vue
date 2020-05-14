<template>
    <div class="slider">
        <transition-group name="fade" tag="div" class="photo-wrapper">
            <div v-for="i in [currentIndex]" :key="i" class="d-flex">
                <img class="img-fluid one-photo" :src="currentImg" />
            </div>
        </transition-group>
        <div class="arrows">
            <span class="prev" @click="prev">&#10094;</span>
            <span class="next" @click="next">&#10095;</span>
        </div>
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
    .one-photo {
        max-height: 500px;
    }
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

    .photo-wrapper {
        /*max-width: 700px;*/
        /*width: 100%;*/
        /*max-height: 602px;*/
        /*height: 100%;*/
        margin-right: auto;
        margin-left: auto;
        justify-content: center;
    }

    .photo-wrapper div {
        margin-right: auto;
        margin-left: auto;
    }

    img {
        /*max-width: 700px;*/
        /*width: 100%;*/
        /*max-height: 602px;*/
        /*height: 100%;*/
    }

    .arrows {
        display: flex;
        position: absolute;
        top: 50%;
        flex-direction: row;
        justify-content: space-between;
        max-width: 800px;
        width: 100%;
    }

    .prev, .next {
        cursor: pointer;
        /*position: absolute;*/
        /*top: 50%;*/
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
        /*right: 133px;*/
    }

    .prev {
        /*left: 133px;*/
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
        display: flex;
        justify-content: center;
    }
</style>
