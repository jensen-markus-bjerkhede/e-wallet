<template>
  <section>
    <Top msg="Add a new bank card" />
      <Card
      :cardNumber="cardNumber"
      :fullName="fullName"
      :bankName="bank"
      :validThru="validThru"
      :CCV="CCV"
      :cardColor="cardColor"
    />
    <article class="form">
    <label for="card-number"> CARD NUMBER </label>
    <input
      type="text"
      placeholder="xxxx xxxx xxxx xxxx"
      v-model="cardNumber"
      id="card-number"
      class="formlayout"
      minlength="16"
      maxlength="16"
    />

    <label for="fullName"> CARDHOLDER NAME </label>
    <input
      type="text"
      placeholder="John Doe"
      v-model="fullName"
      id="fullName"
      class="formlayout"
    />
    <label for="validThru"> validThru </label>
    <input
      type="text"
      placeholder="xx/xx"
      v-model="validThru"
      id="validThru"
      class="formlayout"
      maxlength="5"
    />
    <label for="CCV"> CCV </label>
    <input
      type="text"
      placeholder="xxx"
      v-model="CCV"
      id="CCV"
      class="formlayout"
      maxlength="3"
    />
    <label> BANK </label>
      <select class="style-wrapper" v-model="bank" @change="updateColor()">
        <option>Bitcoin</option>
        <option>Evil</option>
        <option>Ninja</option>
        <option>Chain</option>
      </select>
   
</article>
  

    <section class="addCard">
      <button @click="addCardToStack">Add a new card</button>
    </section>
  </section>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Top,
    Card,
  },
  data() {
    return {
      bank: "Bitcoin",
      cardNumber: "",
      fullName: "",
      validThru: "",
      CCV: "",
      cardColor: "",
    };
  },
  async beforeMount() {
    this.cardColor = this.getCardColor();
  },
  methods: {
    async addCardToStack() {
      this.cardColor = this.getCardColor();
      let card = {
        cardNumber: this.cardNumber,
        bankName: this.bank,
        fullName: this.fullName,
        cardColor: this.cardColor,
        validThru: this.validThru
      };
      await this.$store.dispatch("addCard", card);
      await this.$router.push("/");
    },
    getCardColor() {
      let color;
      switch (this.bank) {
        case "Bitcoin":
          color = "orange";
          break;
        case "Ninja":
          color = "black";
          break;
        case "Evil":
          color = "red";
          break;
        case "Chain":
          color = "purple";
          break;
        default:
          color = "black";
      }
      return color;
    },
    updateColor() {
      this.cardColor = this.getCardColor();
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin: auto;
  width: 22rem;
}
label {
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
.style-wrapper{
  justify-content: center;
  
}
.formlayout {
  width: 22rem;
  height: 3.5rem;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  border-radius: 8px;
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
}
p {
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 25px;
  color: #ffffff;
}
</style>