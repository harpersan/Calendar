require('./bootstrap');
import Router from './router.js'
import moment from 'moment'
import Vue from 'vue'

import App from  './view/App.vue'

const app = new Vue({
   el : '#app',
   router : Router,
   render : h => h(App),
});

export default app;