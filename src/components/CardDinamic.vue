<template>
    <div class="card">
        <h2 class="card__title" v-for="(elem, index) in this.VALUES_COMPONENT_DINAMIC" :key="index">{{elem.Name}}</h2>
        <div class="card__description">
            <select v-model="valute" @change="valuteDinamic(this.valute, this.value); convertionValute(this.value)">
                <option v-for="item in this.ALL_CURRENCY" 
                :key="item.Id" 
                :name="item.Name"
                :selected="valuteUpdate"
                >{{item.CharCode}}</option>
            </select>
            <input type="number" v-model.number="value" @input="valueSave(); convertionValute() ">
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
            name:'',
        }
    },
    computed: {
        ...mapGetters(['ALL_CURRENCY', 'VALUES_COMPONENT_DINAMIC', 'VALUTE_DINAMIC', 'VALUE_DINAMIC']),
        valuteUpdate() {
            this.valute = this.VALUTE_DINAMIC;
        },
        valueUpdate() {
            this.value = this.VALUE_DINAMIC;
        }
    },
    methods: {
        ...mapActions(['FETCH_CURRENCY']),
        ...mapMutations(['UPDATE_RESULT', 'UPDATE_VALUTE_DINAMIC', 'UPDATE_VALUE']),
        convertionValute() {
            this.UPDATE_RESULT();
        },
        valuteDinamic(valute, value) {
            this.UPDATE_VALUTE_DINAMIC(valute, value);
        },
        valueSave() {
            this.UPDATE_VALUE(this.value);
        },
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
        width: 70%;
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
  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  &__title {
    color: #ACACAC;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
  }
  &__description {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
  }
}

select, input {
    outline: none;
    border: none;
}
select {
    cursor: pointer;
}
input {
    border-bottom: 2px solid #ccc;
    max-width: 100px;
    &:focus {
        border-color: #44A5FF;
    }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
button {
    border-radius: 50%;
    background-color: #fff;
    width: 41px;
    height: 41px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &::before {
        content: '\e902';
        font-family: 'icon';
        color: #2697FF;
    }
}
</style>