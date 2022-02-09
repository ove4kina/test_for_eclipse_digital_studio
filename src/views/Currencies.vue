<template>
    <div class="currency">
        <input type="text" placeholder="Введите валюту" v-model="value">
        <div class="currency__list" >
            <div class="currency__item" v-for="item in searchResult()" :key="item.Id">
                <h2 class="currency__title">{{item.Name}}</h2>
                <div class="currency__information">
                    <div class="currency__description">
                        <p class="currency__code">{{ item.Nominal + ' ' + item.CharCode}}</p>
                        <p class="currency__value">{{ item.Value + ' ' + 'RUB' }}</p>
                    </div>
                    <p class="currency__previous" :class="toggleClass(item.Value, item.Previous)">
                        {{ floorPrevious(item.Value, item.Previous) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            value: '',
            arrowStyle: false,
        }
    },
    name: "currency",
    computed: mapGetters(['ALL_CURRENCY']),
    methods: {
        ...mapActions(['FETCH_CURRENCY']),
        searchResult() {
            return Object.values(this.ALL_CURRENCY).filter(item => 
                item.Name.toLowerCase().includes(this.value.toLowerCase()) 
                || item.CharCode.toLowerCase().includes(this.value.toLowerCase()));
        },
        floorPrevious(value, previous) {
            let result = +(value - previous).toFixed(4);
            if (result < 0) {
                return result * -1;
            } else {
              return result;
            }
        },
        toggleClass(value, previous) {
          let result = +(value-previous);
          if (result < 0) {
            this.arrowStyle = true;
            return {red: this.arrowStyle}
          }
        },
    },
    async mounted() {
        this.FETCH_CURRENCY();
    }
}
</script>


<style lang="scss" scoped>
@font-face {
  font-family: 'icon';
  src: url('../../src/assets/icon/fonts/icomoon.ttf');
}

input {
    margin-bottom: 30px;
    width: 100%;
    max-width: 30%;
    padding: 16px;
    border-radius: 5px;
    outline: none;
    border: none;
}

.currency {
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  &__item {
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    max-width: 30%;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  &__title {
    color: #ccc;
    font-size: 16px;
    font-weight: 500;
  }
  &__information {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 16px;
  }
  &__description {
    display: flex;
  }
  &__code {
    margin-right: 8px;
  }
  &__value {
    display: flex;
    align-items: center;
    &::before {
      content: '\e901';
      font-family: 'icon';
      display: block;
      color: #ccc;
      font-size: 10px;
      margin-right: 8px;
    }
  }
  &__previous {
    color: #42b983;
    &.red {
      color: red;
      &::before {
        content: '\e904';
        transform: rotateX(180deg);
      }
    }
    &::before {
      content: '\e903';
      font-family: 'icon';
      color: inherit;
      margin-right: 8px;
    }
  }

}

</style>