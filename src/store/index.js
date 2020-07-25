import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS = {
  save(data){
    localStorage.setItem('Hot-tag',JSON.stringify(data)) 
  },
  load(){
    return JSON.parse(localStorage.getItem('Hot-tag') || '[]')
  }
}

export default new Vuex.Store({
  strict:true,
  state: {
    tagCounterIndex:[]
  },
  getters:{
    counterIndex(state){
      return state.tagCounterIndex
    }
  },
  mutations: {
    set_index(state,data){
      state.tagCounterIndex = data;
      LS.save(state.tagCounterIndex);
    },
    save_index(state,data){
      state.tagCounterIndex =[];

      state.tagCounterIndex = JSON.parse(data)

      LS.save(state.tagCounterIndex);
    },
    counter_index(state,index){
      state.tagCounterIndex[index].counter++
      LS.save(state.tagCounterIndex)
    }
  },
  actions: {
    init_index({commit}){
      commit('set_index',LS.load())
    }
  },
})
