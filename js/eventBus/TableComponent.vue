<template>
    <table>
        <tr-component 
            v-for="(rowData, idx) in tableData" 
            :row-data="rowData" 
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
        props: {
            tableData: Array
        },
        data() {
            return {
                
            }
        }
    }
</script>
