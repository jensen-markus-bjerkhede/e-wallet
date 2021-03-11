<template>
  <section class="cardWrapper">
    <article
      class="style-wrapper"
      v-bind:style="{ backgroundColor: cardColor }"
    >
      <img src="@/assets/blipNchip.svg" class="blip" alt="" />
      <img :src="getImgUrl" class="bank-name" :alt="bankName" />
      <p class="card-number">
        {{ sliceCardNumber() }}
      </p>
      <span class="card-holder">CARDHOLDER NAME</span>
      <span class="valid-date">VALID THRU </span>
      <p class="fullName">{{ fullName }}</p>
      <p>{{ validThru }}</p>
      <!-- <p>{{ CCV }}</p> -->
    </article>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardNumber: String,
    fullName: String,
    bankName: String,
    validThru: String,
    CCV: String,
    cardColor: String,
  },
  computed: {
    getImgUrl() {
      if (this.bankName) {
        return require(`@/assets/${this.bankName.toLowerCase()}.svg`);
      } else {
        return require("@/assets/bitcoin.svg");
      }
    },
  },
  methods: {
    sliceCardNumber() {
      console.log("kolla", this.cardNumber);
      if (this.cardNumber) {
        return (
          this.cardNumber.slice(0, 4) +
          " " +
          this.cardNumber.slice(4, 8) +
          " " +
          this.cardNumber.slice(8, 12) +
          " " +
          this.cardNumber.slice(12, 16)
        );
      }
    },
  },
};
</script>
<style lang="scss">
.cardWrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  height: 15rem;
}
.style-wrapper {
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
  margin: 15px 0 0 20px;
}

.bank-name {
  margin: 28px 25px 0 auto;
}
.card-number {
  margin: 0;
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 4px;
}
.addCard {
  margin-top: 5rem;
}
.card-holder,
.valid-date {
  font-size: 12px;
  line-height: 13px;
  height: 1rem;
}

.card-holder {
  width: 15rem;
  text-align: start;
}
.fullName {
  width: 18rem;
  text-align: start;
}
.valid-date,
.date {
  width: 6rem;
  text-align: end;
}
</style>
