<template>
	<top-slide-in>
		<div id="detailsMore" class="pop-inner top-nav-height">
			<top-nav title="更多详情" @closeHandle="closeHandle" :close="true" :fenlei="true"></top-nav>
			<template v-if="!isWeiXin">
				<loading v-if="showLoad"></loading>
				<iframe id="show-iframe" :style="`width: 100%; height: ${iframeHeight}px`" frameborder=0 :src="details['淘宝客短链接(300天内有效)']"></iframe>
			</template>
			<div class="other" v-else>
				<div class="title">由于微信限制淘宝链接，复制淘口令到淘宝APP即可查看或者购买，或者使用右上角功能在浏览器打开。</div>
    			<div class="item" v-if="details['淘口令(30天内有效)']">
    				商品淘口令：<span>{{ details['淘口令(30天内有效)'] }}</span>
    				&nbsp;
    				<a class="explain-btn" href="javascript:;" v-clipboard:copy="details['淘口令(30天内有效)']" v-clipboard:success="onCopy" v-clipboard:error="onCopyError">复制</a>
				</div>
    			<div class="item" v-if="details['优惠券淘口令(30天内有效)']">
    				领卷淘口令：<span>{{ details['优惠券淘口令(30天内有效)'] }}</span>
    				&nbsp;
    				<a class="explain-btn" href="javascript:;" v-clipboard:copy="details['优惠券淘口令(30天内有效)']" v-clipboard:success="onCopy" v-clipboard:error="onCopyError">复制</a>
				</div>
			</div>
		</div>
	</top-slide-in>
</template>

<script>
	import topNav from '@/components/topNav';
	import topSlideIn from '@/components/transition/topSlideIn';
	import loading from '@/components/loading';

	window.iframeLoad = function(){
		alert(1)
		document.querySelector('#detailsLoad') && (document.querySelector('#detailsLoad').style.display = 'none');
	}

	export default {
		components: { topNav, topSlideIn, loading },
		props: ['details', 'isWeiXin'],
		data(){
			return {
				iframeHeight: 0,
				showLoad: true
			}
		},
		created(){
			this.iframeHeight = window.screen.height - document.querySelector('.top-nav').offsetHeight;
		},
		mounted(){
			let n = 0;
			this.$nextTick(() => {
				document.getElementById('show-iframe') && (document.getElementById('show-iframe').onload = () => {
					n && (this.showLoad = false);
					n++;
				})
			});
		},
		methods: {
			closeHandle(){
				this.$emit('updataData', (obj) => {
					obj.showMore = false;
				})
			},
			onCopy(){
				this.$emit('updataData', (obj) => {
					obj.onCopy();
				})
			},
			onCopyError(){
				this.$emit('updataData', (obj) => {
					obj.onCopyError();
				})
			}
		}
	}
</script>

<style lang="less">
	#detailsMore {
		.other {
			padding: 20px;
			padding-top: 50px;
			.title {
				color: #F60;
				font-size: 28px;
				margin-bottom: .4rem;
			}
			.item {
				margin-bottom: 10px;
			}
			a {
				display: inline-block;
				padding: 1px 10px;
				color: #f60;
				border: 1PX solid #f60;
				border-radius: 5px;
			}
		}
	}
</style>