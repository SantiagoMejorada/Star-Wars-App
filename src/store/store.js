import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'

const store = createStore({
  state:state,
  mutations: mutations,
  actions: actions
})

export default store
