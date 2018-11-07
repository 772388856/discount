<template>
	<transition name="leftSlideIn">
		<slot></slot>
	</transition>
</template>

<script>
	export default {
		name: 'leftSlideIn',
		data(){
			return {}
		},
	}
</script>

<style lang="less">
	.leftSlideIn-enter-active, .leftSlideIn-leave-active {
		transition: .4s;
		transform: translate3d(0,0,0);
	}
	.leftSlideIn-enter, .leftSlideIn-leave-active{
		transition: .4s;
		transform: translate3d(100%,0,0);
	}
</style>