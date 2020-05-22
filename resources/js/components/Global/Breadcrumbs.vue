<template>
    <div>
        <p>
            <span v-for="key in Object.keys(crumbs)">
                <span class="crumb-delimiter"
                    v-if="key !== Object.keys(crumbs)[0]"
                > &#10095; </span>
                <router-link v-if="crumbs[key] !== 'none'" :to="crumbs[key]" >{{ key }}</router-link>
                <span v-else class="crumb-title">{{ key }}</span>
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumbs",
        props: {
            crumbs: {      // { tile1: 'link1', title2: 'link2'} - что будет передаваться
                required: true
            }
        },
        // computed: {
        //     retStr() {
        //         let breadStr = '';
        //         let i = 0;
        //         let keys = Object.keys(this.crumbs);
        //         for(let key of keys) {
        //             breadStr += key;
        //             if (i !== (keys.length-1)) {
        //                 breadStr += ' &#10095; '
        //             }
        //             i++;
        //
        //
        //                             // здесь наращиваешь крошки
        //                             // (ссылки(this.crumbs[key]) с титлам(key))
        //                             // c разделителем
        //         }
        //
        //         return breadStr;
        //     }
        // }
    }
</script>

<style scoped>
    p {
        margin-top: 30px;
        margin-bottom: 0;
    }
    a {
        font-size: 13px;
        line-height: 30px;
        color: #CCCCCC;
    }
    .crumb-delimiter {
        padding-right: 5px;
        padding-left: 5px;
    }
    p span:last-child .crumb-title {
        /*font-weight: bold;*/
        /*color: #aaaaaa;*/
    }
    /*span span .crumb-title:last-child {*/
    /*    font-weight: bold;*/
    /*}*/
</style>
