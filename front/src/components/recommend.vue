<template>
    <div class="app-recommend" v-if="lists.length">
        <div class="title">猜你喜欢</div>
        <ul class="recommend-box">
            <li v-for="list in lists">
                <a href="javascript:;" @click="jump(list)">
                    <i class="juan" v-if="list.reserve_price - list.zk_final_price">{{ parseFloat(list.reserve_price - list.zk_final_price).toFixed(2) }}元卷</i>
                    <img v-lazy="list.pict_url" class="img" />
                    <div class="info">
                        <p class="name">{{ list.short_title || list.title }}</p>
                        <div class="p1 item">
                            <div class="left">原价￥{{ list.reserve_price }}</div>
                            <div class="right">已售{{ list.volume }}</div>
                        </div>
                        <div class="p2 item">
                            <div class="left">卷后价￥<b>{{ list.zk_final_price }}</b></div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default{
        name: 'recommend',
        props: {
            cat: {
                default(){
                    return ''
                }
            }
        },
        data(){
            return {
                lists: [],
            }
        },
        mounted(){
            this.getData();
        },
        methods: {
            ...mapActions(['setDetails', 'setShowDetails']),
            getData(){
                if(!this.cat) return false;

                this.axios.get(`${this.apiUrl}/recommend?cat=${this.cat}`, {params: { noalert: 1 }}).then((res) => {
                    this.lists = res.data.data;
                });
            },
            jump(data){
                this.setDetails(data);
                this.setShowDetails(false);
                setTimeout(() => {
                    this.setShowDetails(true);
                }, 100);
            }
        }
    }
</script>

<style lang="less">
    .app-recommend {
        .title {
            height: 88px;
            line-height: 88px;
            font-size: 32px;
            text-align: center;
        }
        .recommend-box {
            display: flex;
            flex-direction: row;
            padding: 20px 10px;
            padding-top: 0;
            overflow: auto;
            -webkit-overflow-scrolling: touch;

            li {
                padding: 0 10px;
            }
            a {
                position: relative;
                display: block;
                width: 4rem;
            }
            .juan {
                position: absolute;
                top: 0;
                left: 0;
                padding: .1rem 0.2rem;
                background: #f60;
                color: #FFF;
                box-shadow: 1px 1px 10px #FFF;  
            }
            .img {
                display: block;
                width: 4rem;
                height: 4rem;
            }
            .info {
                margin-top: 10px;
            }
            .name {
                margin-bottom: .1rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                line-height: .45rem;
                height: .9rem;
            }
            .item {
                display: flex;
                width: 100%;

                &.p1 {
                    color: #888;
                }
                &.p2 {
                    color: #f60;
                }
                .left {
                    flex: 1;
                }
                .right {

                }
                b {
                    font-size: 30px;
                }
            }
        }
    }
</style>