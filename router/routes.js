import Vue from 'vue';
import VueRouter from 'vue-router';
import LottoGenerator from '../js/LottoGenerator'
import NumberBaseball from '../js/NumberBaseball'
import ResponseCheck from '../js/ResponseCheck'
import RockScissorsPaper from '../js/RockScissorsPaper'
import GameMatcher from './GameMatcher'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // 기본은 hash(브라우저만 알아서) 라우터는 history 
    routes: [
        { path: '/lotto-generator', component: LottoGenerator },
        { path: '/number-baseball', component: NumberBaseball },
        { path: '/rock-scissors-paper', component: RockScissorsPaper },
        { path: '/response-check', component: ResponseCheck },
        { path: '/game/:name', component: GameMatcher }
    ]
})