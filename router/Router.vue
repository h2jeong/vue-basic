<template>
    <div>
        <div>
            <router-link to="/game/number-baseball">숫자야구</router-link>
            <router-link to="/game/lotto-generator">로또</router-link>
            <router-link to="/game/response-check">반응체크</router-link>
            <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
            <router-link to="/game">게임 매쳐</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import router from './routes';
    
    export default {
        router,
    }
</script>
<style>


</style>
