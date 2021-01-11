<template>
  <section>
    <Top msg= "Add a new bank card"/>
    <label for="card-number">
      CARD NUMBER
    </label>
    <input type="text"
           v-model="cardNumber"
           id="card-number"
           class="full"
    >

    <label for="cardholder-name">
      CARDHOLDER NAME
    </label>
    <input type="text"
           v-model="cardHolder"
           id="cardholder-name"
           class="full"
    >
    <section class="addCard"> <button @click="addCardToStack">Add a new card</button></section>
  </section>

</template>

<script>
  import Top from "@/components/Top.vue";

  export default {
    name: "Home",
    components: {
      Top,
    },
    data() {
      return {

        cardNumber: '',
        cardHolder: '',
        // validDate: {Month:'', Year: ''},
        // cvv: '',
        // bank: '',
        // logo: 'Bitcoin',
        // theme: '',
        //valid: false,
        // validate: {
        //   cardNumber: true,
        //   cardHolder: true,
        //   month: true,
        //   year: true,
        //   bank: true,
        //   cvv: true
        // }

      }
    },
    methods: {
      async addCardToStack() {
        console.log('sdfdsf')
        let card = {
          cardNumber: this.cardNumber,
          bankName: "BANK",
          fullName: this.cardHolder
        };
        await this.$store.dispatch("addCard", card);
        await this.$router.push('/');
      }
    }
  };
</script>

<style lang="scss" scoped>
  form {
    margin-top: 3rem;

    label {

      font-family: PT Mono;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 13px;
      display: flex;

      color: rgba(0, 0, 0, 0.8);
    }

    input {
      margin: 0 0 1rem 0;
    }

    .full {

      width: 22rem;
      height: 3.5rem;

      border: 1px solid rgba(0, 0, 0, 0.8);
      box-sizing: border-box;
      border-radius: 8px;


    }
    .half {

      width: 10rem;
      height: 3.5rem;

      border: 1px solid rgba(0, 0, 0, 0.8);
      box-sizing: border-box;
      border-radius: 8px;


    }

    .half-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .wrapper{
      width: 10rem;

      .date {
        margin: 0;
        width: 45%;
        height: 95%;
        border: 0;
      }
    }
    .add-card {

      margin-top: 2.5rem;
      width: 22rem;
      height: 3.5rem;
      background: #000000;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-family: PT Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 25px;

        color: #FFFFFF;
      }
    }
    .missing-input {
      border: 3px solid red;
    }
  }

</style>