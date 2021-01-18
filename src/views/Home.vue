<template>
  <section class="home">
    <Top msg="E-Wallet"/>
    <Card :cardNumber="activeCard.cardNumber" :fullName="activeCard.fullName" :bankName="activeCard.bankName" :cardColor="activeCard.cardColor"/>
    <StackedCards :cards="cards" v-if="cards.length > 1"/>
    <section class="addCard"> <button @click="addNewCard">Add a new card</button></section>
  </section>
</template>

<script>
  import Top from "@/components/Top.vue";
  import Card from "@/components/Card.vue";
  import StackedCards from "../components/StackedCards";

  export default {
  name: "Home",
  components: {
    StackedCards,
    Card,
    Top,
  },
  data() {
    return {
      cards: [],
    }
  },
  async beforeMount() {
    this.cards = await this.$store.dispatch("fetchCards");
    let card = JSON.parse(localStorage.getItem('card'));
    if (!card) {
      await this.$store.dispatch("updateActiveCard", this.cards[0]);
    } else {
      await this.$store.dispatch("setActiveCard", card);
    }
  },
  methods: {
    addNewCard() {
      this.$router.push("/addcard");
    },
  },
    computed: {
      activeCard() {
        return this.$store.getters.activeCard;
      }
    }
};
</script>
<style lang="scss">
</style>