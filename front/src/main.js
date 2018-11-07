import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'

const img = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540715371848&di=428f80876f49639f5378036bb6cb9bee&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Fbmiddle%2F5ffb33dcjw1dv21flm2nog.gif';
Vue.use(VueLazyLoad, {
	error: img,
    loading: img
})
Vue.use(infiniteScroll)

axios.create({
	timeout: 30000
})
// 响应拦截
axios.interceptors.response.use(
	res => {
		const code = res.data.code
		if (code === '00') {
			// 正常
		} else if (code === '001') {
			// 未登录
		} else if (code == '-1') {
			if(res.config && res.config.params && res.config.params.noalert){

			}else{
				alert('服务器出现异常，请刷新页面');
			}
		} else {
			// 错误提示
			alert(res.data.message);
		}
		return res
	},
	err => {
		if (err.response) {
			if (err.response.status === 0) {
				alert('服务器出现异常，请刷新页面');
			}
		} else if (navigator.onLine) {
			alert('请保持网络畅通');
		}
		return Promise.reject(err)
	}
)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.apiUrl = 'http://127.0.0.1:3000/api'

router.afterEach((to, from) => {
	document.documentElement.scrollTop = 0;
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
