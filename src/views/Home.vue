<template>
  <section class="home">
    <h1>E-WALLET</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="addNewCard">Add a new card</button>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    addNewCard() {
      this.$router.push("/addcard");
    },
  },
};
</script>
<style lang="scss">
button {
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid black;
  padding: 2rem 10rem;
  border-radius: 8px;
}
button:hover {
  background-color: black;
  color: white;
}
</style>