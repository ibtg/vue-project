import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import lightbox from 'vlightbox';

Vue.use(lightbox);


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
