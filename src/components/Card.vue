<template>
  <section class="cardWrapper">
    <article v-bind:style="{ backgroundColor: cardColor }">
      <img src="@/assets/blipNchip.svg" class="blip" alt="">
      <img :src="getImgUrl" class="bank-name" :alt="bankName">
      <p>{{fullName}}</p>
      <p>{{cardNumber}}</p>
      <p>{{validThru}}</p>
      <p>{{CCV}}</p>
    </article>
  </section>

</template>

<script>
  export default {
    name: 'Card',
    props: {
      cardNumber: String,
      fullName: String,
      bankName: String,
      validThru: String,
      CCV: String,
      cardColor: String
    },
    computed: {
      getImgUrl() {
        if(this.bankName) {
          return require(`@/assets/${this.bankName.toLowerCase()}.svg`);
        } else {
          return require("@/assets/bitcoin.svg");
        }
      }
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
    .ch-name, .valid-date {
                font-size: 12px;
                line-height: 13px;
                height: 1rem;
            }
            
            .ch-name, .cardholder {
                width: 13rem;
                margin-left: 16px;
                text-align: start;
            }
            .valid-date, .date {
                width: 6rem;
                
                text-align: end;
            }
</style>
