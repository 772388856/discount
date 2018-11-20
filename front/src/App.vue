<template>
	<div>
		<router-view/>
		<vue-ins-progress-bar></vue-ins-progress-bar>
	</div>
</template>

<script>
	export default {
		name: 'app',
		mounted(){
			this.$insProgress.finish()
		},
		created(){
			this.$insProgress.start()
			this.$router.beforeEach((to, from, next) => {
				this.$insProgress.start()
				next()
		    })
		    this.$router.afterEach((to, from) => {
				this.$insProgress.finish()
			})
		}
	}
</script>

<style lang="less">
    @import "./assets/css/common/common";
</style>
