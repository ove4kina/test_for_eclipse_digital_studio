export default {
    state: {
        currency: [],
        result: null,
        valuteDinamic: '',
        valuteStatic: '',
        valuteDinamicObj: [],
        valuteStaticObj: [],

    },
    mutations: {
        UPDATE_CURRENCY(state, currency) {
            state.currency = currency;
        },
        UPDATE_VALUTE_DINAMIC(state, valute) {
            state.valuteDinamic = valute;
            console.log(state.valuteDinamic)
        },
        UPDATE_VALUTE_STATIC(state, valute) {
            state.valuteStatic = valute;
            console.log(state.valuteStatic)
        },
        UPDATE_RESULT(state, value) {
            state.valuteStaticObj = Object.values(state.currency).filter(item => item.CharCode === state.valuteDinamic);
            state.valuteDinamicObj = Object.values(state.currency).filter(item => item.CharCode === state.valuteStatic);
            let result = Object.values(state.valuteStaticObj).map(item => item.Value);
            let result2 = Object.values(state.valuteDinamicObj).map(item => item.Value);
            let total = result*Number(value) / result2;
            state.result = total.toFixed(4);
        },
    },
    actions: {
        async FETCH_CURRENCY(ctx) {
            const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            const currency = await response.json();
            ctx.commit('UPDATE_CURRENCY', currency.Valute);
        },
    },
    getters: {
        ALL_CURRENCY(state) {
            return state.currency;
        },
        VALUTE_RESULT(state) {
            return state.result;
        },
    }
}