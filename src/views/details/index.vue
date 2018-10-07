<template>
    <div id="details" class="top-nav-height">
    	<top-nav title="商品详情" :back="true" :fenlei="true"></top-nav>
        <div class="details-box">
        	<img :src="details['商品主图']" class="big-img" />
        	<div class="item">
        		<p class="name">{{ details['商品名称'] }}</p>
        		<div class="shop-name">
        			<div class="left">店铺：{{ details['店铺名称'] }}</div>
        			<div class="right" v-if="details['商品月销量']">月销量：{{ details['商品月销量'] }}</div>
    			</div>
    			<div class="price-box">
	        		<s class="old-price">原价：￥{{ details['商品价格(单位：元)'] }}</s>
					<p class="new-price">卷后价：{{ details['优惠券面额'] | newPrice(details['商品价格(单位：元)']) }}</p>
				</div>
        	</div>
        	<div class="explain">
        		<p class="explain-title"><span>说明</span></p>

        		<div class="explain-main">
        			<p class="explain-title-2">强烈推荐先领优惠卷再去购买</p>

        			<div class="explain-item browser" v-if="!isWeiXin">
	        			<div class="explain-item-title">淘宝浏览器专区</div>
	        			<div>
	        				<a @click="getCoupon" v-if="details['优惠券短链接(300天内有效)']" class="explain-btn" href="javascript:;">去领优惠券</a>
	        				<a @click="buyHandle" v-if="details['淘宝客短链接(300天内有效)']" class="explain-btn" href="javascript:;">去购买</a>
	        			</div>
        			</div>
        			<div class="explain-item">
	        			<div class="explain-item-title">淘宝APP专区</div>
	        			<div v-if="details['淘口令(30天内有效)']">
	        				商品淘口令：<span>{{ details['淘口令(30天内有效)'] }}</span>
	        				&nbsp;
	        				<a class="explain-btn" href="javascript:;" v-clipboard:copy="details['淘口令(30天内有效)']" v-clipboard:success="onCopy" v-clipboard:error="onCopyError">复制</a>
        				</div>
	        			<div v-if="details['优惠券淘口令(30天内有效)']">
	        				领卷淘口令：<span>{{ details['优惠券淘口令(30天内有效)'] }}</span>
	        				&nbsp;
	        				<a class="explain-btn" href="javascript:;" v-clipboard:copy="details['优惠券淘口令(30天内有效)']" v-clipboard:success="onCopy" v-clipboard:error="onCopyError">复制</a>
        				</div>
        			</div>
        		</div>
        	</div>

        	<ul class="bottom-btn-box">
        		<li class="more">
        			<a href="javascript:;" class="bottom-btn" @click="moreHandle">更多详情</a>
        		</li>
        		<li class="buy">
        			<a href="javascript:;" @click="buyHandle" class="bottom-btn">去购买</a>
        		</li>
        	</ul>
        </div>

        <!-- 更多详情 -->
        <more @updataData="updataData" v-if="showMore" :isWeiXin="isWeiXin" :details="details"></more>
    </div>
</template>

<script>
	import {mapActions, mapState} from 'vuex';
	import topNav from '@/components/topNav';
	import more from './more';

	export default {
		components: { topNav, more },
		computed: {
			...mapState(['detailsData'])
		},
		data(){
			return {
				details: {},
				showMore: false,
				isWeiXin: false
			}
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
		created(){
			if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
				this.isWeiXin = true;
			}

			if(!Object.keys(this.detailsData).length) this.$router.push('/lists/nvzhuang');

			this.details = this.detailsData;
		},
		methods: {
			updataData(callback){
				callback && callback(this);
			},
			moreHandle(){
				this.goTaobao();
				setTimeout(() => {
					this.showMore = true;
					this.globalNoScrol();
				}, 300);
			},
			onCopy(e){
				let url = '';
				// 判断是否复制优惠券
				if(e && e.text == this.details['优惠券淘口令(30天内有效)']){
					url = this.details['优惠券短链接(300天内有效)'];
				}
				this.goTaobao(url);
				setTimeout(() => {
					alert("复制成功，请打开淘宝APP即可使用");
				}, 300);
			},
			onCopyError(e){
				alert("复制失败，请手动进行复制");
			},
			buyHandle(){
				const r = confirm("建议先领优惠券再去购买");

				if(r){
					if(this.isWeiXin){
						this.showMore = true;
					}else{
						this.goTaobao();
						setTimeout(() => {
							window.open(this.details['淘宝客短链接(300天内有效)']);
						}, 300);
					}
				}
			},
			getCoupon(){
				this.goTaobao(this.details['优惠券短链接(300天内有效)']);
				setTimeout(() => {
					window.open(this.details['优惠券短链接(300天内有效)']);
				}, 300);
			},
			goTaobao(url){
				const newUrl = url || this.details['淘宝客短链接(300天内有效)'],
					tb = newUrl.replace("http://", "").replace("https://", "");
				window.location = "taobao://" + tb;
			}
		}
	}
</script>

<style lang="less">
	.details-box {
		padding-bottom: 88px;
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
		.explain {
			border-top: 20px solid #f5f5f5;

			.explain-title-2 {
				color: #e4393c;
				font-size: 32px;
				margin-bottom: 20px;
			}
			.explain-title {
				position: relative;
				line-height: 80px;
				font-size: 32px;
				text-align: center;

				span {
					position: relative;
					z-index: 2;
					background: #FFF;
					padding: 0 20px;
				}
				&:before {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					height: 1PX;
					width: 5rem;
					background: #999;
					transform: translate(-50%,-50%);
				}
			}
			.explain-main {
				padding: 20px;
				padding-top: 0;

				.explain-item {
					margin-bottom: 20px;
					& > * {
						padding: 5px 0;
					}
					&.browser {
						a {
							margin-right: 20px;
						}
					}
				}
				.explain-item-title {
					font-size: 28px;
				}
			}
			.explain-btn {
				display: inline-block;
				padding: 1px 10px;
				color: #f60;
				border: 1PX solid #f60;
				border-radius: 5px;
			}
		}
		.bottom-btn-box {
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 5;
			display: flex;
			width: 100%;
			height: 88px;
			line-height: 88px;
			text-align: center;
			font-size: 32px;

			li {
				flex: 1;
			}
			.more {
				background: #f60;
			}
			.buy {
				background: #e4393c;
			}
			.bottom-btn {
				display: block;
				color: #FFF;
			}
		}
	}
</style>
