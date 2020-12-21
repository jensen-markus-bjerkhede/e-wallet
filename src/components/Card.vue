<template>
  <section class="cardWrapper">
    <p>{{bankName}}</p>
    <p>{{fullName}}</p>
    <p>{{cardNumber}}</p>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardNumber: String,
    fullName: String,
    bankName: String
  }
}
</script>
<style lang="scss">
  .cardWrapper {
    font-size: 22px;
    font-weight: bold;
    border: 2px solid black;
    padding: 2rem 10rem;
    border-radius: 8px;
  }
</style>
