<template>
    <div id="lists" class="top-nav-height" v-infinite-scroll="getData" infinite-scroll-disabled="busy" infinite-scroll-distance="200">
    	<top-nav :title="title" :back="true" :menu="true" @menuHandle="menuHandle"></top-nav>
        <ul class="lists-box">
        	<li v-for="(list,index) in lists">
        		<a href="javascript:;" @click="jump(list)" class="line">
        			<i class="juan" v-if="list.reserve_price - list.zk_final_price">{{ parseFloat(list.reserve_price - list.zk_final_price).toFixed(2) }}元卷</i>
        			<div class="img-box">
        				<img v-lazy="list['pict_url']" class="img" />
    				</div>
        			<div class="info bBor">
        				<p class="name">{{ list['title'] }}</p>
        				<div class="price-box">
        					<s class="old-price">原价：￥{{ list['reserve_price'] }}</s>
        					<p class="new-price">卷后价：￥{{ list['zk_final_price'] }}</p>
        					<p class="amount">月销量：{{ list['volume'] }}</p>
        				</div>
        				<p class="btn">立即领卷</p>
        			</div>
        		</a>
        	</li>
        </ul>
        <loading v-if="showLoad" />

        <details-item v-if="showDetails"></details-item>
        <menu-app v-if="showMenu" @menuHandle="menuHandle"></menu-app>
    </div>
</template>

<script>
	import loading from '@/components/loading';
	import topNav from '@/components/topNav';
	import detailsItem from '@/views/details/';
	import menuApp from '@/components/menu';
	import {mapActions, mapState} from 'vuex';

	export default {
		name: 'lists',
		components: { loading, topNav, detailsItem, menuApp },
		computed: {
			...mapState(['showDetails'])
		},
		data(){
			return {
				lists: [],
				showLoad: true,
				title: '',
				showMenu: false,
				busy: false,
				page: 1
			}
		},
		created(){
			this.getCategory();
		},
		methods: {
			...mapActions(['setDetails', 'setShowDetails']),
			getData(){
				this.busy = true;
				this.axios.get(`${this.apiUrl}/search?key=${this.title}`, {params: { page: this.page }}).then((res) => {
					if(res.data && Object.prototype.toString.call(res.data.data) == '[object Array]' && res.data.data.length){
						this.lists = this.lists.concat(res.data.data);
						this.page++;
						this.busy = false;
					}else{
						this.showLoad = false;
					}					
				});
			},
			getCategory(){
				this.title = this.$route.params.id;
			},
			jump(data){
				this.setDetails(data);
				this.setShowDetails(true);
			},
			menuHandle(){
				this.showMenu = !this.showMenu;
			}
		}
	}
</script>

<style lang="less">
	.lists-box {
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
</style>
