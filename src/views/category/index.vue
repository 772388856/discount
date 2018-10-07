<template>
    <div id="category" class="top-nav-height">
    	<top-nav title="分类" :back="true"></top-nav>
    	<img src="https://m.360buyimg.com/mobilecms/jfs/t19375/228/2147833578/3539/56b9e876/5ae95f90N06fb6b8e.png" class="category-top-title">
        <ul class="category-box">
        	<li v-for="list in category">
        		<router-link :to="`/lists/${list.href}`" class="category-href">
        			<img :src="list.img" />
        			<p>{{ list.name }}</p>
        		</router-link>
    		</li>
        </ul>
    </div>
</template>

<script>
	import {mapActions, mapState} from 'vuex';
	import topNav from '@/components/topNav';

	export default {
		name: 'category',
		components: { topNav },
		computed: {
			...mapState(['category'])
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="less">
	#category {
		height: 100%;
		height: 100vh;
	}
	.category-top-title {
		display: block;
		width: 100%;
		margin-top: 30px;
	}
	.category-box {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		padding: 10px 30px;

		li {
			flex: 33.33%;
			padding: 20px;
			text-align: center;
		}
		.category-href {
			display: block;
			font-size: 24px;

			img {
				display: block;
				width: 80px;
				height: 80px;
				margin: 0 auto;
			}
			p {
				margin-top: .1rem;
			}
		}
	}
</style>
