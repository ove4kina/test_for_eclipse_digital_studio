<template>
    <div class="card">
        <h2 class="card__title" v-for="(elem, index) in this.VALUES_COMPONENT_STATIC" :key="index">{{elem.Name}}</h2>
        <div class="card__description">
            <select v-model="valute" @change="valuteStatic(this.valute); convertionValute(this.value)">
                <option v-for="item in this.ALL_CURRENCY" 
                :key="item.Id" 
                :name="item.Name"
                :selected="valuteUpdate"
                >{{item.CharCode}}</option>
            </select>
            <input :value="this.VALUTE_RESULT" disabled/>
        </div>
    </div>
</template>
<script>



import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    data() {
        return {
            value: '',
            valute: '',
            selected: '',
            name: '',
        }
    },
    computed: {
        ...mapGetters(['ALL_CURRENCY', 'VALUTE_RESULT', 'VALUES_COMPONENT_STATIC', 'VALUTE_STATIC']),
        valuteUpdate() {
            this.valute = this.VALUTE_STATIC;
        }
    },
    methods: {
        ...mapActions(['FETCH_CURRENCY']),
        ...mapMutations(['UPDATE_RESULT', 'UPDATE_VALUTE_STATIC']),
        valuteStatic(valute) {
            this.UPDATE_VALUTE_STATIC(valute);
        },
        convertionValute() {
            this.UPDATE_RESULT();
        },
    },
    async mounted() {
        this.FETCH_CURRENCY();
    },
}
</script>