<!--Layout da pagina de booklis-->
<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <h1 class="font-weight-caption">Livros</h1>
            </v-col>
        </v-row>

        <book-list />
    </v-container>
</template>

<script>
    import BookList from './BookList.vue';

    export default {
        name: 'BookListPage',
        components: { BookList },
    };
</script>

<style scoped></style>
