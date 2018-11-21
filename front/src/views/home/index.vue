<template>
    <div id="index">
    	<div class="search-box">
    		<router-link to="/search" class="input">输入您需要的商品名称</router-link>
    		<a href="javascript:;" class="menu-icon iconfont icon-caidan" @click="menuHandle"></a>
    	</div>

    	<top-list :data="topListData"></top-list>

		<slider class="slider-box" ref="slider" :options="options">
			<slideritem v-for="(item,index) in pages" :key="index" :style="item.style"></slideritem>
		</slider>

		<div class="nav-box">
			<a href="javascript:;" @click="jump(list.href)" :to="list.href" v-for="list in nav" class="nav-list">
				<img v-lazy="list.img" class="nav-img" />
				<p  class="nav-text">{{ list.name }}</p>
			</a>
		</div>

		<div class="module" v-if="goodList.length">
			<div class="title-box">
				<div class="left">好卷直播</div>
				<div class="right">今日已为用户省钱<span class="active">
					{{ parseInt(Date.parse(new Date()) / 10000000) }}</span>元
				</div>
			</div>
			<ul class="list-box">
				<li v-for="(list,index) in goodList">
	        		<a href="javascript:;" @click="openDetails(list)" class="line">
	        			<i class="juan" v-if="list.coupon_amount">{{ list.coupon_amount }}元卷</i>
	        			<div class="img-box">
	        				<img v-lazy="list['pict_url']" class="img" />
	    				</div>
	        			<div class="info bBor">
	        				<p class="name">{{ list['title'] }}</p>
	        				<div class="price-box">
	        					<s class="old-price">原价：￥{{ parseFloat(list.coupon_amount) + parseFloat(list['zk_final_price']) }}</s>
	        					<p class="new-price">卷后价：￥{{ list['zk_final_price'] }}</p>
	        					<p class="amount">月销量：{{ list['volume'] }}</p>
	        				</div>
	        				<p class="btn">立即领卷</p>
	        			</div>
	        		</a>
	        	</li>
			</ul>
		</div>
		<loading v-if="Object.prototype.toString.call(goodList) == '[object Array]' && !goodList.length"></loading>

		<a href="https://mo.m.taobao.com/optimus/jhspt2c?pid=mm_214670079_146000351_44748650142" class="bottom-banner-box">
			<img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/10/17/178/15397591947752.jpg" class="bottom-banner" />
		</a>

		<div class="module" v-if="brandList.length">
			<div class="title-box">
				<div class="left">品牌卷</div>
				<div class="right"><span class="active">
					{{ parseInt(Date.parse(new Date()) / 100000000)*2 }}</span>次实时领卷
				</div>
			</div>
			<ul class="list-box">
				<li v-for="(list,index) in brandList">
	        		<a href="javascript:;" @click="openDetails(list)" class="line">
	        			<i class="juan" v-if="list.coupon_amount">{{ list.coupon_amount }}元卷</i>
	        			<div class="img-box">
	        				<img v-lazy="list['pict_url']" class="img" />
	    				</div>
	        			<div class="info bBor">
	        				<p class="name">{{ list['title'] }}</p>
	        				<div class="price-box">
	        					<s class="old-price">原价：￥{{ parseFloat(list.coupon_amount) + parseFloat(list['zk_final_price']) }}</s>
	        					<p class="new-price">卷后价：￥{{ list['zk_final_price'] }}</p>
	        					<p class="amount">月销量：{{ list['volume'] }}</p>
	        				</div>
	        				<p class="btn">立即领卷</p>
	        			</div>
	        		</a>
	        	</li>
			</ul>
		</div>
		<loading v-if="Object.prototype.toString.call(brandList) == '[object Array]' && !brandList.length"></loading>

		<details-item v-if="showDetails"></details-item>
		<menu-app v-if="showMenu" @menuHandle="menuHandle"></menu-app>
    </div>
</template>

<script>
	import { slider, slideritem } from 'vue-concise-slider'
	import menuApp from '@/components/menu';
	import topList from '@/components/topList';
	import {mapActions, mapState} from 'vuex';
	import loading from '@/components/loading';
	import detailsItem from '@/views/details/';

	export default {
		name: 'home',
		components: { slider, slideritem, menuApp, topList, loading, detailsItem },
		computed: {
			...mapState(['showDetails', 'material'])
		},
		data(){
			return {
				pages: [
					{
						style: {
             				background:'url(https://gw.alicdn.com/imgextra/i3/122/O1CN011ClumwLUB5eA0iI_!!122-0-lubanu.jpg)'
						}
					},
					{
						style: {
             				background:'url(https://gw.alicdn.com/imgextra/i2/39/O1CN011C9tuuM7wmUPD7t_!!39-0-lubanu.jpg)'
						}
					},
					{
						style: {
             				background:'url(https://img.alicdn.com/tps/i4/TB1WepikxYaK1RjSZFnSuu80pXa.jpg)'
						}
					},
					{
						style: {
             				background:'url(https://gw.alicdn.com/imgextra/i3/151/O1CN011CzCH2JMWFioHtG_!!151-0-lubanu.jpg)'
						}
					}
				],
				options: {
					autoplay: 3000,//自动滚动[ms]
					loop: true,//循环滚动
					direction: 'horizontal'
        		},
        		showMenu: false,
        		nav: [
        			{
        				name: '好卷直播',
        				href: '/good/3756',
        				img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png'
        			},
        			{
        				name: '品牌券',
        				href: '/brand/3786',
        				img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png'
        			},
        			{
        				name: '聚划算拼团',
        				href: 'https://mo.m.taobao.com/optimus/jhspt2c?pid=mm_214670079_146000351_44748650142',
        				img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png'
        			},
        			{
        				name: '母婴主题',
        				href: '/baby/4040',
        				img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png'
        			},
        			{
        				name: '有好货',
        				href: '/goods/4092',
        				img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png'
        			},
        			{
        				name: '潮流范',
        				href: '/trend/4093',
        				img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png'
        			},
        			{
        				name: '特惠',
        				href: '/preferential/4094',
        				img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png'
        			},
        			{
        				name: '更多分类',
        				href: '/category',
        				img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png'
        			}
        		],
        		topListData: [],
        		goodList: [],
        		brandList: []
			}
		},
		created(){
			this.getGood();
			this.getBrand();
		},
		mounted(){
			for(let i in this.material['good']){
				this.topListData.push({
					name: this.material['good'][i].name,
					href: `/good/${this.material['good'][i].id}`,
					active: this.material['good']['3756'].name
				});
			}
		},
		methods: {
			...mapActions(['setDetails', 'setShowDetails']),
			menuHandle(){
				this.showMenu = !this.showMenu;
			},
			jump(l){
				if(l.indexOf('http') != -1) {
					location.href = l;
				}else{
					this.$router.push(l);
				}
			},
			getGood(){
				this.axios.get(`${this.apiUrl}/material?id=3756`, {params: { noalert: 1, page: 1 }}).then((res) => {
					if(res.data && Object.prototype.toString.call(res.data.data) == '[object Array]' && res.data.data.length){
						this.goodList = res.data.data;
					}else{
						this.goodList = '';
					}					
				});
			},
			getBrand(){
				this.axios.get(`${this.apiUrl}/material?id=3786`, {params: { noalert: 1, page: 1 }}).then((res) => {
					if(res.data && Object.prototype.toString.call(res.data.data) == '[object Array]' && res.data.data.length){
						this.brandList = res.data.data;
					}else{
						this.brandList = '';
					}					
				});
			},
			openDetails(data){
				data.reserve_price = parseFloat(data.coupon_amount) + parseFloat(data['zk_final_price']);
				this.setDetails(data);
				this.setShowDetails(true);
			}
		}
	}
</script>

<style lang="less">
	#index {
		.search-box {
			display: flex;
			width: 100%;
			padding: 20px;
			background-color: #fafaf9;
			.input {
				display: block;
				flex: 1;
				height: 70px;
				padding: 0 20px;
				line-height: 70px;
				border: 1PX solid #ccc;
				border-radius: 50px;
				font-size: 26px;
				color: #98989f;
				background-color: #f3f4f5;
				opacity: .8;
			}
			.menu-icon {
				display: flex;
				width: 60px;
				margin-left: 20px;
				text-align: center;
				font-size: 60px;
			    align-items: center;
		        justify-items: center;
			}
		}
		.slider-box {
			height: 300px;
			.slider-item {
				background-size: cover !important;
				background-position: center !important;
			}
		}
		.nav-box {
			display: block;

			* {
				display: inline-block;
				text-align: center;
			}
			.nav-list {
				width: 25%;
				padding: 20px;
			}
			.nav-img {
				width: 1.8rem;
				height: 1.8rem;
			}
			.nav-text {
				font-size: 28px;
				margin-top: 10px;
			}
		}
		.bottom-banner-box {
			display: block;
		}
		.bottom-banner {
			display: block;
			width: 100%;
			border-top: 15px solid #F5F5F5;
		}
		.module {
			border-top: 15px solid #F5F5F5;
			.title-box {
				display: flex;
				width: 100%;
				padding: 0 20px;
				line-height: 80px;
				font-size: 30px;

				.left {
					position: relative;
					flex: 1;
					padding-left: 20px;
					&:after {
						content: "";
						position: absolute;
						width: 4px;
						height: 30px;
						left: 0;
						top: 50%;
						margin-top: -18px;
						background: #f60;
					}
				}
				.right {
					color: #aaa;
					font-size: 24px;
				}
				.active {
					color: #f60;
					font-size: 30px;
					margin: 0 10px;
				}
			}
			.list-box {
				li {
					
				}
				.line {
					position: relative;
					display: flex;
					width: 100%;
				}
				.juan {
		            position: absolute;
		            top: 20px;
		            left: 20px;
		            padding: .1rem 0.2rem;
		            background: #f60;
		            color: #FFF;
		            box-shadow: 1px 1px 10px #FFF;	
		        }
				.img-box {
					padding: 20px;
				}
				.img {
					display: block;
					width: 220px;
					min-height: 220px;
				}
				.info {
					flex: 1;
					padding: 20px 0;
					padding-right: 20px;
				}
				.name {
					line-height: .5rem;
					font-size: 28px;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.price-box {
					margin: 10px 0;
					font-size: 24px;
				}
				.old-price {
					color: #999;
				}
				.new-price {
					color: #F60;
				}
				.btn {
					height: .7rem;
					line-height: .7rem;
					font-size: 28px;
					border: 1PX solid #F60;
					color: #F60;
					border-radius: 5px;
					text-align: center;
				}
			}
		}
	}
</style>
