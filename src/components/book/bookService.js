// mixins
export default {
    name: 'bookService',
    methods: {
        goToPreview(book) {
            window.open(book.volumeInfo.previewLink, '_blank'); // "_blank" renderiza pra nova aba
        },
    },
};
