<template>
    <div class="currency">
        <input type="text" placeholder="Введите валюту" v-model="value">
        <div class="currency__list" >
            <div class="currency__item" v-for="item in searchResult()" :key="item.id">
                <h2 class="currency__title">{{item.title}}</h2>
                <p class="currency__code">{{item.code}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            currency: [
                {title: 'title1', code: 'code1', id: 1,},
                {title: 'title2', code: 'code2', id: 2,},
                {title: 'title3', code: 'code3', id: 3,},
            ],
            value: '',
        }
    },
    name: "currency",
    computed: mapGetters(['ALL_CURRENCY']),
    methods: {
        ...mapActions(['FETCH_CURRENCY']),
        searchResult() {
            return this.currency.filter(item => item.title.toLowerCase().includes(this.value.toLowerCase()) || item.code.toLowerCase().includes(this.value.toLowerCase()));
        },
    },
    async mounted() {
        this.FETCH_CURRENCY();
    }
}
</script>
