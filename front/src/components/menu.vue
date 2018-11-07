<template>
    <div class="app-menu">
        <div class="bg" @click="close"></div>
        <leftSlideIn>
	        <ul class="main" v-if="showMenu">
	        	<li v-for="(list, index) in lists">
	        		<router-link :to="list.href" class="bBor" :class="{tBor: index == 0}">{{ list.name }}</router-link>
	        	</li>
	        </ul>
        </leftSlideIn>
    </div>
</template>

<script>
	import leftSlideIn from '@/components/transition/leftSlideIn';

    export default {
        name: 'appMenu',
        components: { leftSlideIn },
        data(){
            return {
            	lists: [
            		{
            			href: '/',
            			name: '首页'
            		},
            		{
            			href: '/search',
            			name: '搜索'
            		},
            		{
            			href: '/category',
            			name: '分类'
            		}
            	],
            	showMenu: false
            }
        },
        mounted(){
        	this.showMenu = true;
        },
        methods: {
        	close(){
        		this.showMenu = false;
        		setTimeout(() => {
        			this.$emit('menuHandle');
        		}, 400);
        	}
        }
    }
</script>

<style lang="less">
    .app-menu {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 101;
        width: 100%;
        height: 100%;
        height: 100vh;

        .bg {
        	position: absolute;
        	top: 0;
        	left: 0;
        	width: 100%;
        	height: 100%;
        	height: 100vh;
        	background: rgba(0,0,0,.6);
        	cursor: pointer;
        }
        .main {
        	position: absolute;
        	top: 0;
        	right: 0;
        	z-index: 2;
        	width: 5rem;
        	height: 100%;
        	height: 100vh;
        	padding: 100px 0;
        	background: #FFF;
        	font-size: 28px;
        	a {
        		display: block;
        		padding: 0 30px;
        		line-height: 100px;
        	}
        }
    }
</style>