<template>
    <div class="card">
        <h2 class="card__title">{{this.valute}}</h2>
        <div class="card__description">
            <select v-model="valute" @change="valuteDinamic(this.valute)">
                <option v-for="item in this.ALL_CURRENCY" :key="item.Id" :name="item.Name">{{item.CharCode}}</option>
            </select>
            <input type="text" v-model="value" @input="convertionValute(this.value)">
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
            name: '',
            currency: [
                {title: 'title1', code: 'code1', id: 1,},
                {title: 'title2', code: 'code2', id: 2,},
                {title: 'title3', code: 'code3', id: 3,},
            ],
        }
    },
    computed: mapGetters(['ALL_CURRENCY', 'VALUTE_RESULT']),
    methods: {
        ...mapActions(['FETCH_CURRENCY']),
        ...mapMutations(['UPDATE_RESULT', 'UPDATE_VALUTE_DINAMIC']),
        convertionValute(value) {
            this.UPDATE_RESULT(value);
        },
        valuteDinamic(valute) {
            this.UPDATE_VALUTE_DINAMIC(valute);
        }
    },
    async mounted() {
        this.FETCH_CURRENCY();
    },
}
</script>


<style lang="scss">
.converter {
    &__container {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
    }
}
.card {
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  max-width: 37%;
}

.card__title {
    color: #ccc;
    font-size: 16px;
    font-weight: 500;
}

.card__description {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
}
select, input {
    outline: none;
    border: none;
}
input {
    border-bottom: 2px solid #ccc;
    max-width: 100px;
    &:focus {
        border-color: royalblue;
    }
}
button {
    border-radius: 50%;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
        content: '\e902';
        font-family: 'icon';
        color: royalblue;
    }
}
</style>