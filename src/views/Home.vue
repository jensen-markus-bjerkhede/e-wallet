<template>
  <section class="home">
    <Top msg="E-Wallet"/>
    <button @click="addNewCard">Add a new card</button>
  </section>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";

export default {
  name: "Home",
  components: {
    Top,
  },
  methods: {
    addNewCard() {
      this.$router.push("/addcard");
    },
  },
};
</script>
<style lang="scss">
</style>