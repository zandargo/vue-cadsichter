import Vue from 'vue'
import Vuex from 'vuex'
//_ import { createStore } from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

// export default new Vuex.Store({    //Alterado para permitir funções de carregamento automático (https://youtu.be/dGlTmR5DzP8)
const store = new Vuex.Store({
	modules,
	plugins: [
		// createPersistedState(),    //Dando erro no Electron
		// createSharedMutations(),   //Dando erro no Electron
	],
	strict: process.env.NODE_ENV !== 'production',
})

export default store
