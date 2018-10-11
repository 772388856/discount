import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import './registerServiceWorker'

Vue.use(VueClipboard);
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.apiUrl = ''

Vue.prototype.globalNoScrol = function(){
	document.querySelector('body').classList.add('global-no-scroll');
	document.querySelector('body').style.height = window.screen.height + 'px';
}
Vue.prototype.closeGlobalNoScrol = function(){
	document.querySelector('body').classList.remove('global-no-scroll');
	document.querySelector('body').style.height = 'auto';
}

router.afterEach((to, from) => {
  document.documentElement.scrollTop = 0;
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
