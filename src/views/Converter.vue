<template>
    <div class="converter">
        <div class="converter__container">
            <card-dinamic-component/>
            <button @click="swapValute()"></button>
            <card-static-component/>
        </div>
    </div>
</template>

<script>
import CardStatic from '../components/CardStatic.vue'
import CardDinamic from '../components/CardDinamic.vue'
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
    
        }
    },
    components: {
        'card-dinamic-component': CardDinamic,
        'card-static-component': CardStatic,
    },
    methods: {
        ...mapMutations(['UPDATE_VALUES_COMPONENT', 'UPDATE_RESULT']),
        swapValute() {
            this.UPDATE_VALUES_COMPONENT();
            this.UPDATE_RESULT();
        },
    }
}
</script>