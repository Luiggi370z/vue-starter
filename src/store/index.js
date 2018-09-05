import Vue from 'vue';
import Vuex from 'vuex';
import helloWorld from './helloWorld';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    helloWorld
  }
});
