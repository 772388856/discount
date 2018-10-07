<template>
	<div class="top-nav bBor">
		<div class="left-box icon-box">
			<a href="javascript:;" @click="backHandle" v-if="back" class="left-icon top-icon iconfont icon-xiangzuojiantou"></a>
			<a href="javascript:;" @click="closeHandle" v-if="close" class="close-icon left-icon top-icon iconfont icon-guanbi"></a>
		</div>
		<p class="title">{{ title }}</p>
		<div class="right-box icon-box">
			<router-link v-if="fenlei" to="/category" class="left-icon top-icon iconfont icon-fenlei"></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'topNav',
		props: {
			title: {
				default(){
					return ''
				}
			},
			back: {
				default(){
					return false
				}
			},
			fenlei: {
				default(){
					return false
				}
			},
			close: {
				default(){
					return false
				}
			}
		},
		methods: {
			backHandle(){
				window.history.length > 1
		        ? this.$router.go(-1)
		        : this.$router.push('/')
			},
			closeHandle(){
				this.$emit('closeHandle');
			}
		}
	}
</script>

<style lang="less">
	.top-nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 88px;
		line-height: 88px;
		font-size: 32px;
		background: #FFF;

		.title {
			height: 88px;
			text-align: center;
		}
		.icon-box {
			position: absolute;
			top: 0;
			display: flex;
			height: 88px;
		}
		.left-box {
			left: 0;
		}
		.right-box {
			right: 0;
		}
		.top-icon {
			width: 88px;
			text-align: center;
			font-size: 40px;
			color: #000;
		}
		.close-icon {
			font-size: 50px;
		}
	}
</style>