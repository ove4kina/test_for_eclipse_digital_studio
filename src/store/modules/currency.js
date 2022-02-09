export default {
    state: {
        currency: [],
    },
    mutations: {
        UPDATE_CURRENCY(state, currency) {
            state.currency = currency;
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
    }
}