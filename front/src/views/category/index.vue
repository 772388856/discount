<template>
    <div id="category" class="top-nav-height">
    	<top-nav title="分类" :back="true" :menu="true" @menuHandle="menuHandle"></top-nav>
        <div class="category-box">
        	<div class="left-item">
        		<a class="list-item" @click="activeIndex = index" href="javascript:;" :class="{active: activeIndex == index}" v-for="(list, index) in category">{{ list.name }}</a>
        	</div>
        	<div class="right-item">
        		<template v-for="(list, index) in category" v-if="activeIndex == index">
        			<router-link :to="`/lists/${list.name}`" class="title">
        				<div class="bBor">
        					{{ list.name }}
        					<i class="icon iconfont icon-xiangyoujiantou"></i>
    					</div>
        			</router-link>
	        		<ul class="right-list-box">
	        			<li class="right-list" v-for="item in list.lists">
	        				<router-link :to="`/lists/${item.name}`">
	        					<img :src="item.img" />
	        					<p>{{ item.name }}</p>
	        				</router-link>
	        			</li>
	        		</ul>
        		</template>
        	</div>
        </div>
        <menu-app v-if="showMenu" @menuHandle="menuHandle"></menu-app>
    </div>
</template>

<script>
	import topNav from '@/components/topNav';
	import menuApp from '@/components/menu';

	export default {
		name: 'category',
		components: { topNav, menuApp },
		data(){
			return {
				category: [
					{
					    "name": "女装",
					    "lists": [
					    {
					        "id": 1,
					        "name": "连衣裙",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2A7ERuL9TBuNjy1zbXXXpepXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "半身裙",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2SXy3u_JYBeNjy1zeXXahzVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "T恤",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2lCpEgHZnBKNjSZFrXXaRLFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "衬衫",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2goYMvNSYBuNjSspjXXX73VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "雪纺衫",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2CcCCvMmTBuNjy1XbXXaMrVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "防晒衣",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2u0RboiOYBuNjSsD4XXbSkFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "针织衫|毛衣  ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2WEMvk5OYBuNjSsD4XXbSkFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "牛仔裤",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2zD.LtXmWBuNjSspdXXbugXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "休闲裤",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2xitHgTqWBKNjSZFxXXcpLpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "阔腿裤",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2Pib3gCYTBKNjSZKbXXXJ8pXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "套装",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2wcqxtDlYBeNjSszcXXbwhFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 12,
					        "name": "情侣装",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2HcJEtv5TBuNjSspmXXaDRVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 13,
					        "name": "妈妈装",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2WIBBtx1YBuNjy1zcXXbNcXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 14,
					        "name": "礼服|婚纱",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2_7GCtCBYBeNjy0FeXXbnmFXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 1
					},
					{
					    "name": "美食",
					    "lists": [
					    {
					        "id": 1,
					        "name": "休闲食品",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2zFk9k8mWBuNkSndVXXcsApXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "坚果果干",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2LQ9utx1YBuNjy1zcXXbNcXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "糕点饼干",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2cxKstA9WBuNjSspeXXaz5VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "糖果巧克力  ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2FHfDwCtYBeNjSspkXXbU8VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "方便速食",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2gO5rtr1YBuNjSszhXXcUsFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "营养代餐  ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2mPVSwrGYBuNjy0FoXXciBFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "生鲜水果  ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB22X0WwuGSBuNjSspbXXciipXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "饮品",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB27SJFtv9TBuNjy0FcXXbeiFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "酒类",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2OKyNtER1BeNjy0FmXXb0wVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "精品茗茶",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2VfWQtxGYBuNjy0FnXXX5lpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "粮油副食",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2U5uHtxSYBuNjSspjXXX73VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 12,
					        "name": "火锅",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2aHN8trGYBuNjy0FoXXciBFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 13,
					        "name": "大礼包",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2RXqituSSBuNjy0FlXXbBpVXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 2
					},
					{
					    "name": "美妆",
					    "lists": [
					    {
					        "id": 1,
					        "name": "基础护肤",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB26D9ytAOWBuNjSsppXXXPgpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "底妆",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2JWkEhBjTBKNjSZFDXXbVgVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "眼妆",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB27y9stA9WBuNjSspeXXaz5VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "眉妆",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2uF0llndYBeNkSmLyXXXfnVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "唇妆",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2B8tFtpmWBuNjSspdXXbugXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "美容工具",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2NXCltuGSBuNjSspbXXciipXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "香氛美甲",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2wJsZk5CYBuNkSnaVXXcMsVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "高光修容",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB20YQKk2iSBuNkSnhJXXbDcpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "护肤套装",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2ga6OtCtYBeNjSspkXXbU8VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "洗发护发",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2lD8Ftv9TBuNjy0FcXXbeiFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "沐浴用品  ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2DljVvH9YBuNjy0FgXXcxcXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 12,
					        "name": "眼部护理",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2sHWxtv5TBuNjSspmXXaDRVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 13,
					        "name": "防晒品  ",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2oKRdwpmWBuNjSspdXXbugXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 14,
					        "name": "卸妆品",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2X61HtxSYBuNjSspjXXX73VXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 3
					},
					{
					    "name": "居家日用",
					    "lists": [
					    {
					        "id": 1,
					        "name": "日用百货",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2sE22tCtYBeNjSspaXXaOOFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "清洁用品",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2wlFTtAKWBuNjy1zjXXcOypXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "厨房烹饪",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2tN1otuuSBuNjSsziXXbq8pXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "厨房用品",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2Ngratv1TBuNjy0FjXXajyXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "收纳神器",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2Io22tCtYBeNjSspaXXaOOFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "驱蚊用品",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2hq1wtpuWBuNjSspnXXX1NVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "衣物护理",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB23G1wtpuWBuNjSspnXXX1NVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "衣物晾晒",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2yjWgtpuWBuNjSszbXXcS7FXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "医药保健",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2qBd7tqSWBuNjSsrbXXa0mVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "宠物用品",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2fO9jtruWBuNjSszgXXb8jVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "绿植园艺",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2Zp8qliOYBuNjSsD4XXbSkFXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 4
					},
					{
					    "name": "男装",
					    "lists": [
					    {
					        "id": 1,
					        "name": "T恤",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2zKt7gOMnBKNjSZFzXXc_qVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "POLO衫 ",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2l.Oiwv5TBuNjSspmXXaDRVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "衬衫",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2nW87trGYBuNjy0FoXXciBFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "背心/马甲",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2yfKMwuySBuNjy1zdXXXPxFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "外套",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2Z9uxtAOWBuNjSsppXXXPgpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "运动裤",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2vmipwxSYBuNjSspjXXX73VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "牛仔裤",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2JvWPtxGYBuNjy0FnXXX5lpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "休闲裤",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2rrG8tASWBuNjSszdXXbeSpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "爸爸装 ",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2dW6vtCBYBeNjy0FeXXbnmFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "套装",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB211mvnvuSBuNkHFqDXXXfhVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "商务装",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2ziGqtr1YBuNjSszhXXcUsFXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 5
					},
					{
					    "name": "鞋品",
					    "lists": [
					    {
					        "id": 1,
					        "name": "凉鞋",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB27NQstDJYBeNjy1zeXXahzVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "高跟鞋",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2jl0ZwpuWBuNjSszbXXcS7FXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "单鞋",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2DRVQtrSYBuNjSspiXXXNzpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "运动鞋",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2VRBUtAKWBuNjy1zjXXcOypXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "帆布鞋",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2jApBlm8YBeNkSnb4XXaevFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "拖鞋 ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2Z36ivHGYBuNjy0FoXXciBFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "懒人鞋",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB27SSXtxSYBuNjSsphXXbGvVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "皮鞋",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2IyVGtpmWBuNjSspdXXbugXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "老北京布鞋",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB29t5ewr1YBuNjSszeXXablFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "老人鞋",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB27HwInZyYBuNkSnfoXXcWgVXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 6
					},
					{
					    "name": "数码家电",
					    "lists": [
					    {
					        "id": 1,
					        "name": "手机配件",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB233bHvQ9WBuNjSspeXXaz5VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "生活家电",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2d20KgHZnBKNjSZFhXXc.oXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "小家电",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB21fmctr1YBuNjSszeXXablFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "数码电子",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2av9XtuuSBuNjSsplXXbe8pXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "数据线",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2ANVUtAKWBuNjy1zjXXcOypXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "手机壳",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2mbW4tx9YBuNjy0FfXXXIsVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "耳机",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2AWDVk5CYBuNkHFCcXXcHtVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "手机支架 ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2I6yltuGSBuNjSspbXXciipXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "充电宝",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2r8z3tCtYBeNjSspaXXaOOFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "电风扇",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2F6PHvKOSBuNjy0FdXXbDnVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "电吹风",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2LoQKk8yWBuNkSmFPXXXguVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 12,
					        "name": "榨汁机 ",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2qQw9k8mWBuNkSndVXXcsApXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 13,
					        "name": "电饭锅",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2cGBDwpGWBuNjy0FbXXb4sXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 14,
					        "name": "剃须刀",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2QBg.n2uSBuNkHFqDXXXfhVXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 7
					},
					{
					    "name": "母婴",
					    "lists": [
					    {
					        "id": 1,
					        "name": "婴童服饰",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2iceituSSBuNjy0FlXXbBpVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "婴童鞋靴",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2jCoCgBnTBKNjSZPfXXbf1XXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "喂养洗护",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2iFuztAOWBuNjSsppXXXPgpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "宝宝用品",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB20ZtYtpGWBuNjy0FbXXb4sXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "营养辅食  ",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2qQMibeUXBuNjt_XBXXXeDXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "玩具乐器",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2ODGutx1YBuNjy1zcXXbNcXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "出行用品",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2ZuKxtr9YBuNjy0FgXXcxcXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "婴幼书籍",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2WfOLtuuSBuNjy1XcXXcYjFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "孕妈用品",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2zH9wtr5YBuNjSspoXXbeNFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "尿不湿",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2tBaHtxSYBuNjSspjXXX73VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "奶瓶奶嘴",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2w8OotuuSBuNjSsziXXbq8pXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 12,
					        "name": "婴童湿巾",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB260KWtrSYBuNjSspfXXcZCpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 13,
					        "name": "口水巾",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2NPq3tx9YBuNjy0FfXXXIsVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 14,
					        "name": "安抚牙胶",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2W.07tqSWBuNjSsrbXXa0mVXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 8
					},
					{
					    "name": "箱包",
					    "lists": [
					    {
					        "id": 1,
					        "name": "女包",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2B12SvNSYBuNjSspjXXX73VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "男包",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2E4FGtpmWBuNjSspdXXbugXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "钱包",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2weIjtDtYBeNjy1XdXXXXyVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "旅行箱包",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB29lWltuGSBuNjSspbXXciipXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "双肩包",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2qqYatxWYBuNjy1zkXXXGGpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "单肩包",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2Aa1snDdYBeNkSmLyXXXfnVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "手提包",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2qnGFnyOYBuNjSsD4XXbSkFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "斜挎包",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2aw1knBmWBuNkSndVXXcsApXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "小方包",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2Yybun5CYBuNkHFCcXXcHtVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "胸包",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2yK0bogKTBuNkSne1XXaJoXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "零钱包  ",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2H7Mwn2iSBuNkSnhJXXbDcpXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 9
					},
					{
					    "name": "文娱车品",
					    "lists": [
					    {
					        "id": 1,
					        "name": "办公文具",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2N7VllndYBeNkSmLyXXXfnVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "图书音像",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB24A0llndYBeNkSmLyXXXfnVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "车饰车品 ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2khNBlm8YBeNkSnb4XXaevFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "艺术礼品",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2pt1ttA9WBuNjSspeXXaz5VXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "考试必备",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2Ok0llndYBeNkSmLyXXXfnVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "书写工具",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2SACltuGSBuNjSspbXXciipXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "画具画材",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2LgtmonXYBeNkHFrdXXciuVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "笔记本",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2onZZk5CYBuNkSnaVXXcMsVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "车载电器",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2wRCwtr5YBuNjSspoXXbeNFXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 10
					},
					{
					    "name": "配饰",
					    "lists": [
					    {
					        "id": 1,
					        "name": "帽子丝巾",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2Y8Oxtr9YBuNjy0FgXXcxcXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "项链耳环",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2z8EZk5CYBuNkSnaVXXcMsVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "手饰",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB22hOXtxSYBuNjSsphXXbGvVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "眼镜墨镜",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB21ygJuFGWBuNjy0FbXXb4sXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "发饰",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2XEEPk4uTBuNkHFNRXXc9qpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "发带发箍  ",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB236jun5CYBuNkHFCcXXcHtVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "手表",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2TsEstDJYBeNjy1zeXXahzVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "皮带",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2RAPwtCBYBeNjy0FeXXbnmFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "太阳镜",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2iybFaHAaBuNjt_igXXb5ApXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "棒球帽",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2SJGwtACWBuNjy0FaXXXUlXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "其他饰品",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2vlF8trGYBuNjy0FoXXciBFXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 11
					},
					{
					    "name": "内衣",
					    "lists": [
					    {
					        "id": 1,
					        "name": "文胸",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2YQuxtr9YBuNjy0FgXXcxcXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "内裤",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2OyP3tCtYBeNjSspaXXaOOFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "家居服",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB23CCrtAyWBuNjy0FpXXassXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "吊带背心",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2jkCwtpuWBuNjSspnXXX1NVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "袜子",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2_CGrtAyWBuNjy0FpXXassXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "丝袜",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2vvdUtAKWBuNjy1zjXXcOypXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "抹胸",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2NLXUtAKWBuNjy1zjXXcOypXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "打底塑身",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2Q14Gtv9TBuNjy0FcXXbeiFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "文胸套装",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2iZqwtACWBuNjy0FaXXXUlXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "情侣睡衣",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2U2s7kZuYBuNkSmRyXXcA3pXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 12
					},
					{
					    "name": "家装家纺",
					    "lists": [
					    {
					        "id": 1,
					        "name": "床上用品",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2goMYk5CYBuNkSnaVXXcMsVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "家具|家装",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB2OCahtuSSBuNjy0FlXXbBpVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "家居饰品 ",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2.roPk4uTBuNkHFNRXXc9qpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "卫浴用品 ",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB251ratv1TBuNjy0FjXXajyXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "四件套",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2YIrUk5CYBuNkHFCcXXcHtVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "靠枕抱枕",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2ajBPtrSYBuNjSspiXXXNzpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "摆件",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2mwKbtr1YBuNjSszeXXablFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "墙纸贴饰",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2vxN6wuSSBuNjy0FlXXbBpVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "装饰品",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB29kOetv5TBuNjSspcXXbnGFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 10,
					        "name": "凉席  ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2AIzGvL5TBuNjSspmXXaDRVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 11,
					        "name": "蚊帐",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2pc9gwx1YBuNjy1zcXXbNcXXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 12,
					        "name": "空调被",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2XaYun5CYBuNkHFCcXXcHtVXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 13
					},
					{
					    "name": "户外运动",
					    "lists": [
					    {
					        "id": 1,
					        "name": "游泳装备",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2.W1vtr5YBuNjSspoXXbeNFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 2,
					        "name": "健身装备 ",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB27Bmltv9TBuNjy1zbXXXpepXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 3,
					        "name": "户外装备",
					        "img": "https://img.alicdn.com/imgextra/i2/2053469401/TB2jEdstwmTBuNjy1XbXXaMrVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 4,
					        "name": "瑜伽用品",
					        "img": "https://img.alicdn.com/imgextra/i1/2053469401/TB21gaMtER1BeNjy0FmXXb0wVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 5,
					        "name": "健身服装",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2jkxwlnXYBeNkHFrdXXciuVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 6,
					        "name": "球迷用品",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2zphywqSWBuNjSsrbXXa0mVXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 7,
					        "name": "泳衣",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2O0u8tASWBuNjSszdXXbeSpXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 8,
					        "name": "泳镜",
					        "img": "https://img.alicdn.com/imgextra/i3/2053469401/TB2cbv2tCtYBeNjSspaXXaOOFXa-2053469401.png_310x310.jpg"
					    },
					    {
					        "id": 9,
					        "name": "瑜伽垫",
					        "img": "https://img.alicdn.com/imgextra/i4/2053469401/TB2rSl_tuuSBuNjSsplXXbe8pXa-2053469401.png_310x310.jpg"
					    }],
					    "id": 14
					}
				],
				activeIndex: 0,
				showMenu: false
			}
		},
		methods: {
			menuHandle(){
				this.showMenu = !this.showMenu;
			}
		}
	}
</script>

<style lang="less">
	#category {
		height: 100%;
		height: 100vh;

		.category-box {
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			width: 100%;
			height: 100%;
			height: 100vh;
			padding-top: 88px;
			overflow: hidden;
		}
		.left-item {
			width: 160px;
			background: #F4F4F4;
			font-size: 26px;
			overflow: auto;

			.list-item {
				position: relative;
				display: block;
				line-height: 90px;
				text-align: center;
			}
			.active {
				background: #FFF;
				color: #f60;
				&:after {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 3px;
					height: 100%;
					background: #f60;
				}
			}
		}
		.right-item {
			flex: 1;
			overflow: auto;

			.title {
				display: block;
				line-height: 80px;
				padding-left: 20px;
				margin-bottom: 30px;
				font-size: 26px;

				.icon {
					position: absolute;
					right: 20px;
					font-size: 24px;
				}
				div {
					padding-left: 20px;
				}
			}
			.right-list-box {
				display: flex;
				width: 100%;
				flex-wrap: wrap;
			}
			.right-list {
				width: 33.3333%;
				text-align: center;

				a {
					display: block;
					padding-bottom: 50px;
				}
				img {
					display: block;
					width: 110px;
					height: 110px;
					margin: 0 auto;
				}
				p {
					margin-top: 15px;
				}
			}
		}
	}
</style>
