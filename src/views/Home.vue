<template>
  <section class="home">
    <Top msg="E-Wallet"/>
    <Card :cardNumber="cardNumber" :fullName="fullName" :bankName="bankName"/>
    <section class="stackedCards" v-for="card in cards" :card="card">
      <Card :cardNumber="card.cardNumber" :fullName="card.fullName" :bankName="card.bankName"/>
    </section>
    <button @click="addNewCard">Add a new card</button>
  </section>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
    Top,
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
    console.log(cards);
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