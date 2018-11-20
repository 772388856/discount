import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  	detailsData: {},
	  	showDetails: false,
	  	// 物料
	  	material: {
	  		// 好卷直播
	  		good: {
	  			'3756': {
	  				id: '3756',
	  				name: '综合'
	  			},
	  			'3762': {
	  				id: '3762',
	  				name: '鞋包配饰'
	  			},
	  			'3760': {
	  				id: '3760',
	  				name: '母婴'
	  			},
	  			'3767': {
	  				id: '3767',
	  				name: '女装'
	  			},
	  			'3763': {
	  				id: '3763',
	  				name: '美妆个护'
	  			},
	  			'3761': {
	  				id: '3761',
	  				name: '食品'
	  			},
	  			'3758': {
	  				id: '3758',
	  				name: '家居家装'
	  			},
	  			'3764': {
	  				id: '3764',
	  				name: '男装'
	  			},
	  			'3766': {
	  				id: '3766',
	  				name: '运动户外'
	  			},
	  			'3759': {
	  				id: '3759',
	  				name: '数码家电'
	  			},
	  			'3765': {
	  				id: '3765',
	  				name: '内衣'
	  			}
	  		},
	  		// 品牌卷
	  		brand: {
	  			'3786': {
	  				id: '3786',
	  				name: '综合'
	  			},
	  			'3796': {
	  				id: '3796',
	  				name: '鞋包配饰'
	  			},
	  			'3789': {
	  				id: '3789',
	  				name: '母婴'
	  			},
	  			'3788': {
	  				id: '3788',
	  				name: '女装'
	  			},
	  			'3794': {
	  				id: '3794',
	  				name: '美妆个护'
	  			},
	  			'3791': {
	  				id: '3791',
	  				name: '食品'
	  			},
	  			'3792': {
	  				id: '3792',
	  				name: '家居家装'
	  			},
	  			'3790': {
	  				id: '3790',
	  				name: '男装'
	  			},
	  			'3795': {
	  				id: '3795',
	  				name: '运动户外'
	  			},
	  			'3793': {
	  				id: '3793',
	  				name: '数码家电'
	  			},
	  			'3787': {
	  				id: '3787',
	  				name: '内衣'
	  			}
	  		},
	  		// 母婴主题
	  		baby: {
	  			'4040': {
	  				id: '4040',
	  				name: '备孕'
	  			},
	  			'4041': {
	  				id: '4041',
	  				name: '0至6个月'
	  			},
	  			'4044': {
	  				id: '4044',
	  				name: '4至6岁'
	  			},
	  			'4042': {
	  				id: '4042',
	  				name: '7至12个月'
	  			},
	  			'4043': {
	  				id: '4043',
	  				name: '1至3岁'
	  			},
	  			'4045': {
	  				id: '4045',
	  				name: '7至12岁'
	  			}
	  		},
	  		// 有好货
	  		goods: {
	  			'4092': {
	  				id: '4092'
	  			}
	  		},
	  		// 潮流范
	  		trend: {
	  			'4093': {
	  				id: '4093'
	  			}
	  		},
	  		// 特惠
	  		preferential: {
	  			'4094': {
	  				id: '4094'
	  			}
	  		}
	  	}
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
