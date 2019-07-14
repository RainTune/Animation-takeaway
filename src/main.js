console.log('ok');
import Vue from 'vue';
import app from './App.vue';

//引入swiper
import 'swiper/dist/css/swiper.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);



var vm = new Vue({
    el: "#app",
    render: c => c(app)
});