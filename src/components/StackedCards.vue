<template>
  <section>
    <section class="stack-wrapper" v-for="card in cards" :key="card.cardNumber">
      <section @click="changeCard(card)">
        <Card :cardNumber="card.cardNumber" :fullName="card.fullName" :bankName="card.bankName" :cardColor="card.cardColor"/>
      </section>
    </section>
  </section>
</template>

<script>
  import Card from "@/components/Card.vue";
  export default {
    name: 'StackedCards',
    components: {
      Card
    },
    props: {
      cards: Array
    },
    methods: {
      changeCard(card) {
        this.$store.dispatch('updateActiveCard', card);
      }
    },
  }

</script>
<style lang="scss">
  .stack-wrapper {
    height: 3rem;
    transition: height  1s ease;
    cursor: pointer;

    &:last-child {
      margin-bottom: 12rem;
    }
    &:hover {
      height: 10rem;
    }
    &:last-child:hover {
      height: 3rem;
    }
  }
</style>
