export default {
    state: {
        currency: [],
        result: null,
        valuteDinamic: '',
        valuteStatic: '',
        valuteDinamicObj: [],
        valuteStaticObj: [],
        componentDinamic: [],
        componentStatic: [],
        valueDinamic: null,
        valueStatic: null,
        // value: null,
    },
    mutations: {
        UPDATE_CURRENCY(state, currency) {
            state.currency = currency;
        },
        UPDATE_VALUTE_DINAMIC(state, valute, value) {
            state.valuteDinamic = valute;
            state.componentDinamic = Object.values(state.currency).filter(item => item.CharCode === state.valuteDinamic);
        },
        UPDATE_VALUTE_STATIC(state, valute) {
            state.valuteStatic = valute;
            state.componentStatic = Object.values(state.currency).filter(item => item.CharCode === state.valuteStatic);
        },
        UPDATE_RESULT(state) {
            state.valuteDinamicObj = Object.values(state.currency).filter(item => item.CharCode === state.valuteStatic);
            state.valuteStaticObj = Object.values(state.currency).filter(item => item.CharCode === state.valuteDinamic);
            let valueDinamic = Object.values(state.valuteDinamicObj).map(item => item.Value);
            let valueStatic = Object.values(state.valuteStaticObj).map(item => item.Value);
            console.log(state.valueDinamic)
            let total = valueDinamic*Number(state.valueDinamic) / valueStatic;
            state.result = total.toFixed(4);
            console.log(state.result)
            // state.valueStatic = state.result;
        },
        UPDATE_VALUES_COMPONENT(state) {
            let decomposition = state.valuteDinamic;
            let decomp = state.componentDinamic;
            state.valuteDinamic = state.valuteStatic;
            state.componentDinamic = state.componentStatic;
            state.valuteStatic = decomposition;
            state.componentStatic = decomp;
        },
        UPDATE_VALUE(state, value) {
            state.valueDinamic = value;
        }
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
        VALUES_COMPONENT_DINAMIC(state) {
            return state.componentDinamic;
        },
        VALUES_COMPONENT_STATIC(state) {
            return state.componentStatic;
        },
        VALUTE_DINAMIC(state) {
            return state.valuteDinamic;
        },
        VALUTE_STATIC(state) {
            return state.valuteStatic;
        },
        VALUE_DINAMIC(state) {
            return state.valueDinamic;
        },
        // VALUE_STATIC(state) {   
        //     console.log(state.valueStatic)
        //     return state.valueStatic;
        // }
    }
}