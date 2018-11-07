import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  	detailsData: {},
	  	showDetails: false
	},
	mutations: {
		saveDetails(state, data){
			state.detailsData = data;
		},
		showDetails(state, data){
			state.showDetails = data;
		}
	},
	actions: {
		setDetails({commit}, data){
			commit('saveDetails', data);
		},
		setShowDetails({commit}, data){
			commit('showDetails', data);
		}
	}
})
