<template>
    <div class="app-fullLayer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'appFullLayer',
        data(){
            return {}
        },
    }
</script>

<style lang="less">
    .app-fullLayer {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        height: 100vh;
        background: #FFF;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }
</style>