import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeCard: []
  },
  mutations: {
    updateActiveCard(card) {
      this.activeCard = card;
    }
  },
  actions: {
    async fetchCards() {
      localStorage.clear();
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
        }
      ];
      localStorage.setItem('cards', JSON.stringify(cards));
      return await JSON.parse(localStorage.getItem('cards'));
    },
  },
  getters: {
    activeCard: async state => {
      return state.activeCard;
    }
  },
})
