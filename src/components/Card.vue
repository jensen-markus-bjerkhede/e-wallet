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
    width: 22rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    border: 2px solid black;
    padding: 2rem 5rem;
    border-radius: 8px;
  }
   .blip {
                margin: 15px 0 0 20px;;
            }

            .bank-name {
                margin: 28px 25px 0 auto
            }
            
</style>
