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
    async addCard(ctx, card) {
      let cards = await JSON.parse(localStorage.getItem('cards'));
      if (cards === null) {
        cards = [];
      }
      cards.push(card);
      localStorage.setItem('cards', JSON.stringify(cards));
    },
    async fetchCards() {
      let cards = await JSON.parse(localStorage.getItem('cards'));
      if (cards === null) {
        cards = [
          {
            fullName: "Markus Bjerkhede",
            cardNumber: "1324654785217469",
            bankName: "Ninja",
            validThru: '12/12',
            CCV: '456',
            cardColor: 'black'
          },
        ];
        localStorage.setItem('cards', JSON.stringify(cards));
      }
      return cards;
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
