import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  	category: [
			{
				name: '女装',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t18544/26/1952502036/6690/15b4ae4c/5ae06227N98bd13c4.png',
				href: 'nvzhuang'
			},
			{
				name: '男装',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t17803/169/1530358935/12101/d01c64c8/5acdc644N509e3ae3.png',
				href: 'nanzhuang'
			},
			{
				name: '鞋包',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t17989/84/2013323368/7072/e0a973da/5ae06232Nab1597b5.png',
				href: 'xiebao'
			},
			{
				name: '珠宝配饰',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t19948/66/3191014/6800/7429b1fd/5ae0629dN6ea95c15.png',
				href: 'peishi'
			},
			{
				name: '运动户外',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t19957/358/3216993/6100/3abf816a/5ae06259N29275358.png',
				href: 'yundong'
			},
			{
				name: '美妆',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t17569/222/1962890348/5757/a9d42ee3/5ae06168N529944f3.png',
				href: 'meizhuang'
			},
			{
				name: '母婴',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t18520/178/1994777059/5840/9e7c8a06/5ae061c8Nc18efc1c.png',
				href: 'muying'
			},
			{
				name: '食品',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t19510/99/1997173036/5986/e640aaee/5ae06136N2f38f602.png',
				href: 'shipin'
			},
			{
				name: '内衣',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t19102/69/1987169084/6757/e53b7760/5ae06242Nc044c906.png',
				href: 'neiyi'
			},
			{
				name: '数码',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t18859/148/1985801887/5540/79c57f95/5ae0605bN31eb138b.png',
				href: 'shuma'
			},
			{
				name: '家装',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t20113/188/1953566/6389/fae1eb1/5ae061a5Nf8b362d4.png',
				href: 'jiazhuang'
			},
			{
				name: '家具用品',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t19744/311/2046639069/6087/71926b4c/5ae061b2Nd8c5e06b.png',
				href: 'yongpin'
			},
			{
				name: '家电',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t19129/11/1997624184/4584/f1b38046/5ae06098N0fd3a5ac.png',
				href: 'jiadian'
			},
			{
				name: '汽车',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t19726/325/2005987992/6401/2075e896/5ae06206N8412b247.png',
				href: 'qiche'
			},
			{
				name: '生活服务',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t17443/206/2024826859/5801/907d0843/5ae06199Nd92cdfe3.png',
				href: 'shenghuo'
			},
			{
				name: '图书音像',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t19120/326/2015194654/5703/bb2c7da9/5ae060d7N7a921d20.png',
				href: 'tushu'
			},
			/*
			{
				name: '游戏话费',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t17578/67/1465648027/6136/d89a19c4/5acc58feNeaa2c0ce.png',
				href: 'youxi'
			},
			*/
			{
				name: '其他',
				img: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t1/5087/19/9144/6283/5bab5954E98fe0327/4b0a41a4a444e0b8.png',
				href: 'qita'
			}
		],
		detailsData: {}
	},
	mutations: {
		saveDetails(state, data){
			state.detailsData = data;
		}
	},
	actions: {
		setDetails({commit}, data){
			commit('saveDetails', data);
		}
	}
})
