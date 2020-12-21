<template>
  <section class="home">
    <Top msg="E-Wallet"/>
    <Card :cardNumber="cardNumber" :fullName="fullName" :bankName="bankName"/>
    <StackedCards :cards="cards"/>
    <button @click="addNewCard">Add a new card</button>
  </section>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import StackedCards from "@/components/StackedCards.vue";

export default {
  name: "Home",
  components: {
    Card,
    Top,
    StackedCards
  },
  data() {
    return {
      cards: [],
      cardNumber: 'String',
      bankName: 'String',
      fullName: 'String'
    }
  },
  async beforeMount() {
    let cards = await this.$store.dispatch("fetchCards");
    this.cards = cards;
    this.populateCard(this.cards[0]);
  },
  methods: {
    populateCard(card) {
      this.cardNumber = card.cardNumber;
      this.bankName = card.bankName;
      this.fullName = card.fullName;
    },
    addNewCard() {
      this.$router.push("/addcard");
    },
  },
};
</script>
<style lang="scss">
</style>