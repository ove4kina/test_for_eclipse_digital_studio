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
    // watch: {
    //     valueUpdate() {
    //         // this.value = this.VALUE_STATIC;
    //         console.log(1)
    //     }
    // },
    computed: {
        ...mapGetters(['ALL_CURRENCY', 'VALUTE_RESULT', 'VALUES_COMPONENT', 'VALUES_COMPONENT_STATIC', 'VALUTE_STATIC', 'VALUE_STATIC']),
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