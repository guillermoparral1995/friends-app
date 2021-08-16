import Vue from 'vue';
import AppComponent from './index.vue'

const vm = new Vue({
    el: "#app-container",
    render: (createElement) => createElement(AppComponent)
})