import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/login/LoginPage.vue';
import BookListPage from './components/book/BookListPage.vue';
import BookDetailPage from './components/book/BookDetailPage.vue';
import LibraryListPage from './components/library/LibraryListPage.vue';

Vue.use(Router);

const routes = [
    { path: '/', name: 'login', component: LoginPage },
    { path: '/book', name: 'booklist', component: BookListPage },
    { path: '/book/:id', name: 'bookdetail', component: BookDetailPage },
    { path: '/library', name: 'librarylist', component: LibraryListPage },
];

export default new Router({
    routes,
});
