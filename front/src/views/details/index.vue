<template>
	<topSlideIn>
		<fullLayer>
		    <div id="details" class="top-nav-height">
		    	<!-- 标题 -->
		    	<top-nav title="商品详情" @closeHandle="closeHandle" :close="true"></top-nav>

		        <div class="details-box">
		        	<!-- 商品信息 -->
		        	<div class="info-box">
		        		<!-- 图片 -->
			        	<img v-lazy="details['pict_url']" class="big-img" />
			        	<!-- 信息 -->
			        	<div class="item">
			        		<p class="name">
			        			{{ details['title'] }}
		        			</p>
			        		<div class="shop-name">
			        			<div class="left" v-if="details['shop_title']">店铺：{{ details['shop_title'] }}</div>
			        			<div class="right" v-if="details['volume']">月销量：{{ details['volume'] }}</div>
			    			</div>
			    			<div class="price-box">
				        		<s class="old-price">
				        			原价：￥{{ details['reserve_price'] }}
			        			</s>
								<p class="new-price">卷后价：￥{{ details['zk_final_price'] }}</p>
							</div>
			        	</div>
		        	</div>

		        	<!-- 猜你喜欢 -->
		        	<recommend class="modular—box" :cat="details.level_one_category_id"></recommend>

		        	<!-- 详情说明 -->
		        	<div v-if="details && details.small_images && details.small_images.string && details.small_images.string.length" class="modular—box describe-box">
		        		<div class="modular—title">宝贝详情</div>
		        		<img v-lazy="list" v-for="list in details.small_images.string" class="describe-img" />
		        	</div>

		        	<!-- 底部浮层 -->
		        	<ul class="bottom-btn-box">
		        		<li class="buy">
		        			<a href="javascript:;" @click="buyHandle" class="bottom-btn">去领卷</a>
		        		</li>
		        	</ul>
		        </div>

		        <!-- 右上角浏览器打开 -->
		        <div class="right-top-open" v-if="rightTopOpen" @click="rightTopOpen = false"></div>
		    </div>
	    </fullLayer>
    </topSlideIn>
</template>

<script>
	import {mapActions, mapState} from 'vuex';
	import topNav from '@/components/topNav';
	import fullLayer from '@/components/fullLayer';
	import topSlideIn from '@/components/transition/topSlideIn';
	import recommend from '@/components/recommend';

	export default {
		components: { topNav, fullLayer, topSlideIn, recommend },
		computed: {
			...mapState(['detailsData'])
		},
		data(){
			return {
				details: {},
				isWeiXin: false,
				rightTopOpen: false
			}
		},
		created(){
			if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
				this.isWeiXin = true;
			}

			if(Object.keys(this.detailsData).length){
				this.details = this.detailsData;
			}
		},
		methods: {
			...mapActions(['setShowDetails']),
			updataData(callback){
				callback && callback(this);
			},
			buyHandle(){
				if(this.isWeiXin){
					this.rightTopOpen = true;
					return false;
				}
				window.location = this.details['coupon_share_url'];
			},
			closeHandle(){
				this.setShowDetails(false);
			}
		}
	}
</script>

<style lang="less">
	.details-box {
		padding-bottom: 88px;
		
		.modular—box {
			border-top: 16px solid #F5F5F5;
		}
		.modular—title {
			height: 88px;
			line-height: 88px;
			font-size: 32px;
			text-align: center;
		}
		.info-box {
			.big-img {
				display: block;
				width: 100%;
			}
			.item {
				padding: 20px;
			}
			.name {
				font-size: 28px;
				line-height: .5rem;
			}
			.shop-name {
				display: flex;
				width: 100%;
				margin-top: 10px;
				color: #666;

				.left {
					flex: 1;
				}
				.right {
					text-align: right;
				}
			}
			.price-box {
				margin-top: 10px;
				.old-price {
					color: #999;
				}
				.new-price {
					color: #F60;
					font-size: 28px;
				}
			}
		}
		.describe-box {
			.describe-img {
				display: block;
				width: 100%;
			}
		}
		.bottom-btn-box {
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 5;
			display: flex;
			width: 100%;
			height: 100px;
			line-height: 100px;
			text-align: center;
			font-size: 32px;

			li {
				flex: 1;
			}
			.buy {
				background: #e4393c;
				box-shadow: 0 0 10px #F60;
			}
			.bottom-btn {
				display: block;
				color: #FFF;
			}
		}
	}
	.right-top-open {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 100%;
		background: #000 url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541611868162&di=334805c7f67ad1726cbc1a5a14a96e92&imgtype=0&src=http%3A%2F%2Fwww.quanlaoda.com%2Fstatic%2Fteam%2F2014%2F0719%2F14057596743654.jpg) no-repeat;
		background-size: 100%;
	}
</style>
