<template>
    <div>
        <mine-form />
        <div>{{timer}}</div>
        <table-component />
        <div>{{result}}</div>    
    </div>
</template>

<script>
    import store, { INCREMENT_TIMER } from './store';
    import TableComponent from './TableComponent.vue';
    import MineForm from './MineForm.vue'
    import { mapState } from 'vuex';

    let interval;
    export default {
        store,
        components: { TableComponent, MineForm },
        computed: {
            ...mapState(['timer', 'result', 'halted'])
        },
        methods: {},
        watch: {
            halted(nv, ov) {
                if (nv === false) {
                    interval = setInterval(() => {
                        this.$store.commit(INCREMENT_TIMER)
                        // new Date() 정확한 시간 체크하려면 
                    }, 1000)
                } else {
                    clearInterval(interval);
                }
            }
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