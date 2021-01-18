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

    <label for="fullName">
      CARDHOLDER NAME
    </label>
    <input type="text"
           v-model="fullName"
           id="fullName"
           class="full"
    >
  <label for="validThru">
      validThru
    </label>
    <input type="text"
           v-model="validThru"
           id="validThru"
           class="full"
    >  <label for="CCV">
      CCV
    </label>
    <input type="text"
           v-model="CCV"
           id="CCV"
           class="full"
    >
    <label>
      <select v-model="bank">
        <option disabled value="">Please select one</option>
        <option>Bitcoin</option>
        <option>Evil</option>
        <option>Ninja</option>
        <option>Chain</option>
      </select>
    </label>

    <Card :cardNumber="cardNumber" :fullName="fullName" :bankName="bank" :validThru="validThru" :CCV="CCV"/>

    <section class="addCard"> <button @click="addCardToStack">Add a new card</button></section>
  </section>

</template>

<script>
  import Top from "@/components/Top.vue";
  import Card from "../components/Card";


  export default {
    name: "Home",
    components: {
      Top,
      Card
    },
    data() {
      return {
        bank: '',
        cardNumber: '',
        fullName: '',
        validThru: '',
        CCV: '',

      }
    },
    methods: {
      async addCardToStack() {
        let card = {
          cardNumber: this.cardNumber,
          bankName: this.bank,
          fullName: this.fullName
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