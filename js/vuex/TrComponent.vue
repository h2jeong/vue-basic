<template>
    <tr>
        <td-component
            v-for="(cellData, idx) in rowData" 
            :cell-index="idx"
            :row-index="rowIndex"  
            :key="idx">
        </td-component>
    </tr>
</template>

<script>
    import TdComponent from './TdComponent.vue';

    export default {
        name: 'TrComponent',
        components: { TdComponent },
        props: {
            // rowData: Array,
            rowIndex: Number
        },
        data() {
            return {
               parent: '내가 니 애비다', 
            }
        },
        computed: {
            rowData() {
                return this.$store.state.tableData[this.rowIndex];
            }
        },
    }
</script>
