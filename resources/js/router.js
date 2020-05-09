import Vue from 'vue'
import VueRouter from 'vue-router'

import SetEvent from './view/SetEvent.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   mode : 'history',
   routes : [
      {
         path: '/event-app',
         name : 'home',
         component : SetEvent
      }
   ]
})

export default router
