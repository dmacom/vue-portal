import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Btn from "@/components/Btn.vue";
import Logo from "@/components/Logo.vue"
import Social from "@/components/Social.vue"

Vue.component("Btn", Btn)
Vue.component("Logo", Logo)
Vue.component("Social", Social)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
