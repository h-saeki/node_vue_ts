import Vue from "vue"
//import BootstrapVue from "bootstrap-vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import UserForm from "./views/UserForm.vue"
import Sample from "./views/Sample.vue"
import Items from "./components/Items.vue"

Vue.use(Router)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/UserEntry",
      name: "UserEntry",
      component: UserForm,
    },
    {
      path: "/Sample",
      name: "Sample",
      component: Sample,
    }
  ],
})
