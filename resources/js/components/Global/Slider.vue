<template>
    <div class="slider">
        <transition-group name="fade" tag="div" class="one-slide">
            <img v-for="i in [currentIndex]" :key="i"
                 class="img-fluid one-photo" :src="currentImg"
                 :style="myStyle"
            />
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
            },
            isCorrect: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                timer: null,
                myStyle: '',

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
            },
            save() {
                let ret = {};
                ret['photo_id'] = this.$store.getters['correctPhotoId'];
                let corrects = this.$store.getters['cssAttrs'];
                for(let key of Object.keys(corrects)) {
                    ret[key] = corrects[key]
                }
                this.$store.dispatch('saveCorrectedImage', ret)
                this.$store.dispatch('getCorrects')
                // this.$store.dispatch('ListPhoto/getPhotos')
            },
            makeAction(curInd) {
                // console.log('cur', this.currentIndex)
                this.$store.dispatch('changeCorrectPhotoId', this.realPhotoInd(curInd));

                if(this.isCorrect) {
                    this.save()
                }
                // let id = this.$store.getters.correctPhotoId;
                this.$store.dispatch('setSccAttrsById', this.realPhotoInd(curInd))
            },
            realPhotoInd(curInd) {
                let realIndex = curInd
                if(curInd < 0) {
                    realIndex = Math.abs(this.images.length-Math.abs(curInd)) % this.images.length
                }
                if(curInd > (this.images.length-1)) {
                    realIndex = curInd % this.images.length
                }

                // console.log(this.images[realIndex], this.images)

                let id = this.images[realIndex].id
                // console.log(id)
                return id
            },
        },

        computed: {
            slideImages() {
                let ret = []
                for(let im of this.images) {
                    ret.push(im.url + '?' + new Date().getTime())
                }

                return ret;
            },
            currentImg() {
                return this.slideImages[Math.abs(this.currentIndex) % this.slideImages.length];
            },
            cssStyle() {
                if(this.isCorrect) {

                    this.$store.dispatch('makeCssFilter')
                    let filter = this.$store.getters.cssFilter;
                    // console.log(filter);

                    return filter;
                }

                return ''
            },

            rotAngle() {
                return this.$store.getters.rotAngle;
            }
        },
        watch: {
            currentIndex(newVal, oldVal) {
                // this.$store.dispatch('ListPhoto/getPhotos')
                // console.log(newVal, oldVal)
                this.makeAction(newVal)
                let angle = this.$store.getters.rotWithId(this.realPhotoInd(newVal)) || 0;
                this.$store.dispatch('setAngle', angle);
            },
            cssStyle(newVal, oldVal) {
                this.myStyle = newVal;
            },
            rotAngle(newVal, oldVal) {
                // console.log(newVal)
                let id = this.realPhotoInd
                this.$store.dispatch('changeRotStyle', id)
                let angle = this.$store.getters.rotWithId(id)
                let cssStyle = `transform: rotate(${angle}deg)`
                // console.log(cssStyle)
                this.myStyle = cssStyle
            }
        },
        created() {
            let id = this.$store.getters.correctPhotoId;
            // console.log(id);
            if(id === 0) {
                this.$store.state.correctPhotoId = id = this.realPhotoInd(this.currentIndex)
                // console.log(this.$store.state.correctPhotoId);
            }
            if(this.isCorrect) {
                this.$store.dispatch('setSccAttrsById', id)
                // console.log(this.$store.getters.cssAttrs)
                this.myStyle = this.cssStyle;
            }
        },
        beforeMount() {
            // this.$store.commit('initialiseStore');
            // console.log(this.$store.state)
        },
    };
</script>

<style scoped>
    .one-slide > .one-photo {
        max-height: 400px;
        vertical-align: middle;
    }
    .one-slide {
        /*min-height: 400px;*/
        /*line-height: 400px;*/
        text-align: center;
    }
    .fade-enter-active,
    .fade-leave-active {
        visibility: visible;
    }

    .fade-enter,
    .fade-leave-to {
        /*transition: visibility 0.02s ease;*/
        visibility: hidden;
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
        user-select: none;
        background-color: rgba(0,0,0,0.2);
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.9);
    }

    .slider {
        margin-top: 30px;
        position: relative;
        display: flex;
        justify-content: center;
    }
</style>
