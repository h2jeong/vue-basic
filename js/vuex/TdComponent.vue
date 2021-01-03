<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
    import { mapState } from 'vuex';
    import { CHANGE_TURN, CLICK_CELL, NO_WINNER, RESET_GAME, SET_WINNER } from './store';

    export default {
        name: 'TdComponent',
        props: {
            // cellData: String,
            cellIndex: Number,
            rowIndex: Number
        },
        computed: {
            // tableData() {
            //     return this.$store.state.tableData;
            // },
            // turn() {
            //     return this.$store.state.turn;
            // },
            // cellData() {
            //     return this.$store.state.tableData[this.rowIndex][this.cellIndex];
            // }
            ...mapState({
                tableData: state => state.tableData,
                turn: state => state.turn,
                cellData(state) {
                    return state.tableData[this.rowIndex][this.cellIndex]
                }
            })
        },
        methods: {
            onClickTd() {
                if (this.cellData) return;

                // const rootData = this.$root.$data;
                let win = false;

                // this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
                this.$store.commit('CLICK_CELL', { row: this.rowIndex, cell: this.cellIndex})

                // 가로줄 검사
                if (this.tableData[this.rowIndex][0] === this.turn && 
                    this.tableData[this.rowIndex][1] === this.turn && 
                    this.tableData[this.rowIndex][2] === this.turn
                ) {
                    win = true;
                }
                // 세로줄 검사
                if (
                    this.tableData[0][this.cellIndex] === this.turn &&
                    this.tableData[1][this.cellIndex] === this.turn &&
                    this.tableData[2][this.cellIndex] === this.turn
                ) {
                    win = true;
                }
                // 대각선 검사
                if (
                    this.tableData[0][0] === this.turn &&
                    this.tableData[1][1] === this.turn &&
                    this.tableData[2][2] === this.turn
                ) {
                    win = true;
                }
                if (  
                    this.tableData[0][2] === this.turn &&
                    this.tableData[1][1] === this.turn &&
                    this.tableData[2][0] === this.turn
                ) {
                    win = true;
                }
                
                if (win) { // 이긴경우 3줄 달성
                    // rootData.winner = rootData.turn;
                    this.$store.commit(SET_WINNER, this.turn)

                    // rootData.turn = 'O';
                    // rootData.tableData =  [
                    //     ['','',''], 
                    //     ['','',''], 
                    //     ['','','']
                    // ];
                    this.$store.commit(RESET_GAME);

                } else { // 비긴 경우
                    let all = true; // 무승부

                    this.tableData.forEach((row) => {
                        row.forEach((cell) => {
                            if (!cell) all = false;
                        });
                    })
                    if (all) { // 무승부
                        // rootData.winner = '';
                        this.$store.commit(NO_WINNER);

                        // rootData.turn = 'O';
                        // rootData.tableData =  [
                        //     ['','',''], 
                        //     ['','',''], 
                        //     ['','','']
                        // ];
                        this.$store.commit(RESET_GAME)
                    } else {
                        // rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
                        this.$store.commit(CHANGE_TURN)
                    }
                }
            }
        }
    }
</script>
