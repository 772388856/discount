<template>
    <div id="lists" class="top-nav-height">
    	<top-nav :title="title" :back="true" :fenlei="true"></top-nav>
    	<loading v-if="showLoad" />
        <ul class="lists-box">
        	<li v-for="list in lists">
        		<a href="javascript:;" @click="jump(list)" class="line">
        			<div class="img-box">
        				<img :src="list['商品主图']" class="img" />
    				</div>
        			<div class="info bBor">
        				<p class="name">{{ list['商品名称'] }}</p>
        				<div class="price-box">
        					<s class="old-price">原价：￥{{ list['商品价格(单位：元)'] }}</s>
        					<p class="new-price">卷后价：{{ list['优惠券面额'] | newPrice(list['商品价格(单位：元)']) }}</p>
        					<p class="amount">月销量：{{ list['商品月销量'] }}</p>
        				</div>
        				<p class="btn">立即领卷</p>
        			</div>
        		</a>
        	</li>
        </ul>
    </div>
</template>

<script>
	import {mapActions, mapState} from 'vuex';
	import loading from '@/components/loading';
	import topNav from '@/components/topNav';

	export default {
		name: 'lists',
		components: { loading, topNav },
		data(){
			return {
				lists: [],
				showLoad: true,
				title: ''
			}
		},
		computed: {
			...mapState(['category'])
		},
		created(){
			this.getCategory();
			this.getData();
		},
		filters: {
			newPrice(e, price){
				let ne = e,
					np = parseFloat(price);

				if(!ne) return ne;

				const pArr = e.replace(/[满|元]/ig,"").split('减');

				if(pArr.length > 1 && np){
					ne = np - pArr[1];
					ne = ne.toFixed(2);
				}
				return '￥' + ne;
			}
		},
		methods: {
			...mapActions(['setDetails']),
			getData(){
				this.axios.get(`${this.apiUrl}/api/lists/${this.$route.params.id}`).then((res) => {
					this.lists = res.data;
					this.showLoad = false;
				});
			},
			getCategory(){
				this.category.forEach((list, index) => {
						if(list.href == this.$route.params.id){
						this.title = list.name;
					}
				});

				if(!this.title) location.href = '/lists/nvzhuang';
			},
			jump(data){
				this.setDetails(data);
				this.$router.push('/details');
			}
		}
	}
</script>

<style lang="less">
	.lists-box {
		li {
			
		}
		.line {
			display: flex;
			width: 100%;
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
