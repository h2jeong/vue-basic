<template>
    <table>
        <tr-component 
            v-for="(rowData, idx) in tableData" 
            :row-index="idx" 
            :key="idx">
        </tr-component>
    </table>
</template>

<script>
    import TrComponent from './TrComponent.vue';
    
    export default {
        name: 'TableComponent',
        components: { TrComponent },
        // props: {
        //     tableData: Array
        // },
        computed: {
            tableData() {
                return this.$store.state.tableData;
            },
            turnMessage() {
                return this.$store.getters.turnMessage;
            }
        }
    }
</script>
