import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeCard: Object
  },
  mutations: {
    setNewActiveCard(state, card) {
      state.activeCard = card;
    }
  },
  actions: {
    async fetchCards() {
      localStorage.setItem('cards', null);
      let cards = [
        {
          fullName: "Mathias Bjerkhede",
          cardNumber: "1324 6547 8521 74569",
          bankName: "SEB"
        },
        {
          fullName: "Markus Bjerkhede",
          cardNumber: "4324 6547 8521 74569",
          bankName: "n00b bank"
        },
        {
          fullName: "Frida Bjerkhede",
          cardNumber: "4324 6547 8521 1337",
          bankName: "1337 bank"
        }
      ];
      localStorage.setItem('cards', JSON.stringify(cards));
      return await JSON.parse(localStorage.getItem('cards'));
    },
    async fetchSelectedCard() {
      return await JSON.parse(localStorage.getItem('card'));
    },
    async updateActiveCard(ctx, card) {
      localStorage.setItem('card', JSON.stringify(card));
      ctx.commit("setNewActiveCard", card);
    },
    async setActiveCard(ctx, card) {
      ctx.commit("setNewActiveCard", card);
    },
  },
  getters: {
    activeCard: state => {
      return state.activeCard;
    },
  },
})
