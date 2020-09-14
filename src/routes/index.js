import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Home from '@/components/home/Home.vue';
import Books from '@/components/books/Books.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Books',
    path: '/books',
    component: Books
  },
]

const router = new VueRouter({ mode: 'history', routes })

export default router