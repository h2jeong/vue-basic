<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
    import EventBus from './EventBus';

    export default {
        name: 'TdComponent',
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number
        },
        methods: {
            onClickTd() {
                // console.log(this.$root.$data)
                // console.log(this.$parent.$data)

                // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
                // this.$set(this.$root.$data.tableData[this.rowIndex], this.cellIndex, this.$root.$data.turn);

                if (this.cellData) return;

                EventBus.$emit('clickTd', this.rowIndex, this.cellIndex)

            //     const rootData = this.$root.$data;
            //     let win = false;

            //     this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
            //     // 가로줄 검사
            //     if (rootData.tableData[this.rowIndex][0] === rootData.turn && 
            //         rootData.tableData[this.rowIndex][1] === rootData.turn && 
            //         rootData.tableData[this.rowIndex][2] === rootData.turn
            //     ) {
            //         win = true;
            //     }
            //     // 세로줄 검사
            //     if (
            //         rootData.tableData[0][this.cellIndex] === rootData.turn &&
            //         rootData.tableData[1][this.cellIndex] === rootData.turn &&
            //         rootData.tableData[2][this.cellIndex] === rootData.turn
            //     ) {
            //         win = true;
            //     }
            //     // 대각선 검사
            //     if (
            //         rootData.tableData[0][0] === rootData.turn &&
            //         rootData.tableData[1][1] === rootData.turn &&
            //         rootData.tableData[2][2] === rootData.turn
            //     ) {
            //         win = true;
            //     }
            //     if (  
            //         rootData.tableData[0][2] === rootData.turn &&
            //         rootData.tableData[1][1] === rootData.turn &&
            //         rootData.tableData[2][0] === rootData.turn
            //     ) {
            //         win = true;
            //     }
                
            //     if (win) { // 이긴경우 3줄 달성
            //         rootData.winner = rootData.turn;
            //         rootData.turn = 'O';
            //         rootData.tableData =  [
            //             ['','',''], 
            //             ['','',''], 
            //             ['','','']
            //         ];
            //     } else { // 비긴 경우
            //         let all = true; // 무승부

            //         rootData.tableData.forEach((row) => {
            //             row.forEach((cell) => {
            //                 if (!cell) all = false;
            //             });
            //         })
            //         if (all) { // 무승부
            //             rootData.winner = '';
            //             rootData.turn = 'O';
            //             rootData.tableData =  [
            //                 ['','',''], 
            //                 ['','',''], 
            //                 ['','','']
            //             ];
            //         } else {
            //             rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
            //         }
            //     }
            }
        }
    }
</script>
