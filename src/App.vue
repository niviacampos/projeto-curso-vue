<template>
    <v-app>
        <app-header />

        <v-main>
            <router-view />
        </v-main>
        <!-- Indica de onde as rotas serão renderizadas -->

        <feedback />
    </v-app>
</template>

<script>
// key api google books: AIzaSyCQh-2odmCiyxLAZezOr7ozhNe3Me33frE
    import AppHeader from './components/header/AppHeader.vue';
    import Feedback from './components/feedback/Feedback.vue';

    export default {
        name: 'App',
        components: { AppHeader, Feedback },
        created() {
            if (window.localStorage.authToken) {
                this.$store.commit('setAuthToken', window.localStorage.authToken);
            } else {
                this.$router.push('/');
            }
        },
    };
</script>
