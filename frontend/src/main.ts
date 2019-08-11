import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

//import vueCustomElement from 'vue-custom-element'
import Items from "./components/Items.vue"

Vue.config.productionTip = false

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { default: wrap } = require("@vue/web-component-wrapper")
// ?shadow を使って Shadow DOM での Scoped CSS を有効化するのでこう読む
//const { default: Bacteria } = require('./components/Bacteria.vue?shadow')
window.customElements.define("my-items", wrap(Vue, Items))

new Vue({
  router,
  store,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render: h => h(App),
}).$mount("#app")
