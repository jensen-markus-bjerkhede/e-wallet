<template>
  <section class="cardWrapper">
    <article>
      <img src="@/assets/blipNchip.svg" class="blip" alt="">
      <img  :src="bankName" class="bank-name" alt="">
      <p>{{bankName}}</p>
      <p>{{fullName}}</p>
      <p>{{cardNumber}}</p>
    </article>
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
    display: flex;
    justify-content: center;
    margin-bottom: 7rem;
  }
  article {
    background-color: lightgray;
    width: 22rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid black;
    padding: 0.1rem 0.25rem;
    border-radius: 8px;
  }

  .blip {
    margin: 15px 0 0 20px;;
  }

  .bank-name {
    margin: 28px 25px 0 auto
  }
  .addCard {
    margin-top: 20rem;
  }
</style>
