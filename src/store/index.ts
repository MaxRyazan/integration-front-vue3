import { createStore } from 'vuex'
import Shop from "@/ts/classes";
import actions from '@/ts/actions'
import getters from '@/ts/getters'

export default createStore({
  state: {
    shops: [{} as Shop],
    photosCount: 1
  },
  getters: getters,
  mutations: {
  },
  actions: actions,
  modules: {
  }
})
