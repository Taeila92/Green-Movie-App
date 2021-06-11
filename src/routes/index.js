import { createRouter, createWebHashHistory } from "vue-router"
import Main from './Main'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top : 0 }
  },
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
})