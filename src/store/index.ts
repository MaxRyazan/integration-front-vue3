import { createStore } from 'vuex'
import Shop from "@/ts/classes";
import actions from '@/ts/actions'
import getters from '@/ts/getters'

export default createStore({
  state: {
    shops: [{} as Shop]
  },
  getters: getters,
  mutations: {
  },
  actions: actions,
  modules: {
  }
})
