<template>
  <div id="nav">
    <router-link to="/">Список валют</router-link> |
    <router-link to="/converter">Конвертор</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">

body {
  background-color: #2697FF;
  
}
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555555;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #555555;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>
