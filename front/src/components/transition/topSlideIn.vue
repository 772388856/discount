<template>
	<transition name="topSlideIn">
		<slot></slot>
	</transition>
</template>

<script>
	export default {
		name: 'topSlideIn',
		data(){
			return {}
		},
	}
</script>

<style lang="less">
	.topSlideIn-enter-active, .topSlideIn-leave-active {
		transition: .4s;
		transform: translate3d(0,0,0);
	}
	.topSlideIn-enter, .topSlideIn-leave-active{
		transition: .4s;
		transform: translate3d(0,100%,0);
	}
</style>