<template>
    <a href="http://team1-group-project.azurewebsites.net/user/profile">
        {{ user.name }} {{ user.surname }}
        <img v-if="user['avatar_url']" :src="'http://team1-group-project.azurewebsites.net/storage/avatars/' + user['avatar_url']">
        <div v-if="!user['avatar_url']" class="initials">{{ getFirstLetter(user.name) }}{{ getFirstLetter(user['surname']) }}</div>
    </a>
</template>

<script>
    export default {
        name: "User",
        computed: {
            user() {
                let usr = this.$store.getters['user']
                // console.log(usr)
                return usr
            },
        },
        methods: {
            getUser() {
                this.$store.dispatch('getUser')
                // this.name = this.user.name + ' ' + this.user.surname;
                // this.avatar = this.user.avatar;
            },
            getFirstLetter(val) {
                try{ return val.substring(0, 1); }
                catch { return '' }
            },
        },
        created() {
            this.getUser()
        }
    }
</script>

<style scoped>

</style>
