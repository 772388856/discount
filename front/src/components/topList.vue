<template>
    <ul class="top-list" v-if="data && data.length" ref="tList">
        <li v-for="list in data">
        	<a href="javascript:;" ref="list" @click="jump(list.href)" :class="{active: list.active == list.name}">{{ list.name }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
    	name: 'topList',
    	props: ['data'],
    	mounted(){
    		this.$nextTick(() => {
    			this.$refs.list && this.$refs.list.forEach((list, index) => {
    				if(list.classList.contains('active')){
    					this.$refs.tList.scrollTo(list.offsetLeft,0);
    				}
    			});
    		});
    	},
    	methods: {
    		jump(href){
    			if(href){
    				this.$router.push(href);
    			}
    		}
    	}
    }
</script>

<style lang="less">
    .top-list {
    	display: flex;
	    flex-direction: row;
	    width: 100%;
        overflow-x: auto;
        background-color: #f9f9fa;

	    li {
	    	white-space: nowrap;
	    }
	    a {
	    	position: relative;
	    	padding: 20px 38px;
	    	display: block;
	    	font-size: 30px;
	    	&.active {
	    		color: #F60;
	    		&:after {
	    			content: "";
	    			position: absolute;
	    			left: 0;
	    			right: 0;
	    			bottom: 0;
	    			height: 4px;
	    			background: #F60;
	    		}
	    	}
	    }
    }
</style>