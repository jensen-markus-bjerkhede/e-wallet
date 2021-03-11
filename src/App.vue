<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'PT Mono', monospace;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  font-size: 22px;
  font-weight: bold;
  border: 2px solid black;
  padding: 2rem 7rem;
  border-radius: 8px;
}
button:hover {
  background-color: black;
  color: white;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
