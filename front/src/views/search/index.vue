<template>
    <div class="app-search top-nav-height">
        <top-nav title="搜索" :back="true" :menu="true" @menuHandle="menuHandle"></top-nav>

        <form @submit.prevent="go" class="search-box">
        	<input type="search" autocomplete="off" v-model.trim="val" placeholder="请输入关键词" class="input"  />
        	<input type="submit" value="搜索" class="btn">
        </form>

        <!-- 猜你喜欢 -->
    	<recommend class="modular—box" style="margin-top: 1rem;" cat="16"></recommend>

    	<details-item v-if="showDetails"></details-item>

        <menu-app v-if="showMenu" @menuHandle="menuHandle"></menu-app>
    </div>
</template>

<script>
	import {mapActions, mapState} from 'vuex';
	import topNav from '@/components/topNav';
	import menuApp from '@/components/menu';
	import recommend from '@/components/recommend';
	import detailsItem from '@/views/details/';

	export default {
		name: 'search',
		components: { topNav, menuApp, recommend, detailsItem },
		computed: {
			...mapState(['showDetails'])
		},
		data(){
			return {
				showMenu: false,
				val: '',
				hot: ['耳机','保温杯','面膜','打底裤','手机壳','iPhone'],
			}
		},
		methods: {
			...mapActions(['setDetails', 'setShowDetails']),
			menuHandle(){
				this.showMenu = !this.showMenu;
			},
			go(){
				if(this.val){
					this.$router.push(`/lists/${this.val}`);
				}
			}
		}
	}
</script>

<style lang="less">
	.app-search {
		.search-box {
			display: flex;
			width: 100%;
			padding: 50px 20px;

			.input {
				flex: 1;
				padding: 0 30px;
				line-height: 80px;
				border: none;
				border-radius: 10px;
			    background: #f4f4f4;
			    font-size: 28px;
			}
			.btn {
				margin-left: 20px;
				height: 80px;
				width: 120px;
				border: none;
				border-radius: 10px;
				background: #f4f4f4;
				font-size: 28px;
			}
		}
	}
</style>
