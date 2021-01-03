<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component></table-component>
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import store from './store';
    import TableComponent from './TableComponent.vue';

    export default {
        store,
        components: {
            TableComponent,
        },
        // data() {
        //     return {
        //         data: 1,
        //     }
        // },
        computed: {
            // winner() {
            //     return this.$store.state.winner;
            // },
            // turn() {
            //     return this.$store.state.turn;
            // }
            // ...mapState({
            //     winner: state => state.winner,
            //     turnState: 'turn',
            // })
            // ...mapState({
            //     winner(state) {
            //         return state.winner + this.data; // 가공 가능하도록. 화살표함수는 안됨.
            //     }
            // })
            ...mapState(['winner', 'turn'])
        }
    }
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>
