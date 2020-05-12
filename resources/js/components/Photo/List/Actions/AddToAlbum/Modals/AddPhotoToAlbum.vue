<template>
    <modal-window
        v-if="this.$store.state.isAddPhotoToAlbum"
        title="Добавить в альбом"
        :close-action="() => {
            this.$store.commit('hideAddPhotoToAlbum')
        }">
        <template v-slot:content>
            <div class="content">
                <label>Выбрать альбом</label>
                <div class="select">
                    <input class="select__input" type="hidden" name="">
                    <div @click="selectHead" class="select__head"><span>Выберите</span></div>
                    <ul class="select__list" style="display: none;">
                        <li v-for="album in albums" @click="selectItem" class="select__item"><span :album-id="album.id">{{ album.name }}</span></li>
                    </ul>
                </div>
            </div>
        </template>
        <template class="buttons" v-slot:buttons>
                <c-button
                    text="Добавить фото"
                    :action="addToAlbum"
                />
                <c-button
                    text="Отмена"
                    type="secondary"
                    :action="close"
                />
        </template>
    </modal-window>
</template>

<script>
    import ModalWindow from "../../../../../Global/ModalWindow";
    import CButton from "../../../../../Global/CButton";
    export default {
        name: "AddPhotoToAlbumModal",
        components: {ModalWindow, CButton},
        methods: {
            close() {
                this.$store.commit('hideAddPhotoToAlbum')
            },
            selectHead(e) {
                if ($(e.target).hasClass('open')) {
                    $(e.target).removeClass('open');
                    $(e.target).next().slideUp(100);
                } else {
                    $('.select__head').removeClass('open');
                    $('.select__list').slideUp(100);
                    $(e.target).addClass('open');
                    $(e.target).next().slideDown(100);
                }
            },
            selectItem(e) {
                $('.select__head').removeClass('open');
                $(e.target).parent().slideUp(100);
                $(e.target).parent().prev().html($(e.target).html());
                $(e.target).parent().prev().prev().val($(e.target).val());
            }
        },
        created() {
            this.$store.dispatch('ListAlbum/getAlbums')
            document.addEventListener('click', function (e) {
                if (!$(e.target).closest('.select').length) {
                    $('.select__head').removeClass('open');
                    $('.select__list').slideUp(100);
                }
            });
        },
        computed: {
            albums: function() {
                return this.$store.state.ListAlbum.albums

            },
            selectedPhotos: function() {
                return (this.$store.getters.selectedPhotos.length > 0) ? 'available' : ''
            }
        },
    }
</script>

<style scoped>
    .content {
        display: flex;
        flex-direction: column;
        max-width: 380px;
        width: 100%;
        margin-top: 33px;
        margin-bottom: 33px;
    }
    .content label {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        color: #808080;
    }
    .select {
        position: relative;
        display: block;
        min-width: 220px;
        width: 100%;
        max-width: 400px;
        margin-bottom: 20px;
    }

    .select span {
        pointer-events: none;
        color: #808080;
    }


    .select__head {
        border: 2px solid #F5F5F5;
        box-sizing: border-box;
        border-radius: 4px;
        height: 50px;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        color: #808080;
        padding: 10px 15px;
    }

    .select__head::after {
        width: 10px;
        height: 6px;
        background: #FFF url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.50495 5.78413L0.205241 1.25827C-0.0684138 0.970375 -0.0684138 0.503596 0.205241 0.215836C0.478652 -0.0719461 0.922098 -0.071946 1.19549 0.215837L5.00007 4.22052L8.80452 0.215953C9.07805 -0.0718292 9.52145 -0.0718292 9.79486 0.215953C10.0684 0.503736 10.0684 0.970492 9.79486 1.25839L5.49508 5.78425C5.35831 5.92814 5.17925 6 5.00009 6C4.82085 6 4.64165 5.928 4.50495 5.78413Z' fill='%23D8D8D8'/%3E%3C/svg%3E%0A") no-repeat center / cover;
        position: absolute;
        right: 20px;
        bottom: 50%;
        transform: translateY(50%);
        content: '';
        display: block;
        transition: .2s ease-in;
    }

    .select__head.open::after {
        transform: translateY(50%) rotate(180deg);
    }

    .select__list {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        border: 2px solid #F5F5F5;
        border-top: none;
        margin-top: 5px;
        max-height: 205px;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 100;
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #424348;
        scrollbar-color: dark;
        scrollbar-width: thin;
        overscroll-behavior: contain;
    }

    .select__list::-webkit-scrollbar {
        width: 7px;
        background-color: #F8F9FA;
        padding: 5px;
    }

    .select__list::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #D9D9D9;
    }

    .select__list .select__item {
        position: relative;
        border-top: 1px solid rgba(224, 229, 231, 0.5);
        padding: 10px 15px;
        cursor: pointer;
        list-style-type: none;
    }

    .select__list .select__item:hover {
        background-color: rgba(224, 229, 231, 0.5);
    }
</style>
