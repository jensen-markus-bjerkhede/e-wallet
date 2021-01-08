<template>
  <section>
    <section v-for="card in cards" :key="card.cardNumber">
      <Card :cardNumber="card.cardNumber" :fullName="card.fullName" :bankName="card.bankName"/>
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
  }

</script>
<style lang="scss">
  // .cardWrapper {
  //   font-size: 22px;
  //   font-weight: bold;
  //   border: 2px solid black;
  //   padding: 2rem 10rem;
  //   border-radius: 8px;
  // }
</style>
