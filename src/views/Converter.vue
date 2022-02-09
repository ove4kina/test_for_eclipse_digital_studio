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
        swapValute() {

        }
    }
}
</script>