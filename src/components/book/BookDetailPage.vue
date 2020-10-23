<template>
    <v-container fluid>
        <v-row justify="end">
            <v-col
                cols="12"
                md="2"
            >
                <v-btn
                    text
                    block
                    @click="goBack"
                >
                    Voltar
                </v-btn>
            </v-col>
        </v-row>
        <v-row v-if="book && book.volumeInfo">
            <v-col
                v-if="
                    book.volumeInfo.imageLinks &&
                        book.volumeInfo.imageLinks.smallThumbnail
                "
                cols="12"
                md="3"
                class="text-center"
            >
                <img :src="book.volumeInfo.imageLinks.smallThumbnail">
            </v-col>
            <v-col
                cols="12"
                md="9"
            >
                <h4 class="display-1">{{ book.volumeInfo.title }}</h4>
                <h5 class="headline">
                    {{ book.volumeInfo.subtitle || "Sem descrição" }}
                </h5>
                <p class="mt-2">{{ book.volumeInfo.description }}</p>
                <div>
                    <v-subheader><strong>Autores</strong></v-subheader>
                    <v-chip
                        v-for="(author, i) in book.volumeInfo.authors"
                        :key="i"
                        pill
                        class="mr-3"
                    >
                        <v-avatar
                            left
                            color="primary white-text"
                        >
                            {{ author.substring(0, 1) }}
                        </v-avatar>
                        {{ author }}
                    </v-chip>
                </div>
                <div
                    v-if="book.volumeInfo.categories && book.volumeInfo.categories.length"
                    class="text"
                >
                    <v-subheader><strong>Categorias</strong></v-subheader>
                    <v-divider> class="mb-2"</v-divider>
                    <v-chip
                        v-for="(category, i) in book.volumeInfo.categories"
                        :key="i"
                        class="ma-2"
                    >
                        {{ category }}
                    </v-chip>
                </div>

                <!-- <div
                    v-if="book.volumeInfo.pageCount"
                    class="text"
                >
                    <v-subheader><strong>Páginas</strong></v-subheader>
                    <v-divider> class="mb-2"</v-divider>
                    <v-chip
                        v-for="(page, i) in book.volumeInfo.pageCount"
                        :key="i"
                        class="ma-2"
                    >
                        {{ page.length }}
                    </v-chip>
                </div> -->

                <div
                    v-if="book.volumeInfo.previewLink"
                    class="mt-4"
                >
                    <v-btn
                        text
                        color="black"
                        @click="goToPreview(book)"
                    >
                        Ver Preview
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import bookService from './bookService';
    import api from '../api/api';

    export default {
        name: 'BookDetailPage',
        mixins: [bookService, api],
        data() {
            return {
                book: {},
            };
        },
        created() {
            this.get(`/volumes/${this.$route.params.id}`).then((response) => {
                this.book = response.data;
            });
        },
        methods: {
            goBack() {
                this.$router.push('/book/');
            },
        },
    };
</script>
