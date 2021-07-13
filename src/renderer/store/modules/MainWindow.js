const state = {
	winStatus: 'normal',
}

const mutations = {
	SET_MAXIMIZED(state) {
		state.winStatus = 'maximized'
	},
	SET_MINIMIZED(state) {
		state.winStatus = 'minimized'
	},
	SET_RESTORED(state) {
		state.winStatus = 'normal'
	},
}

const actions = {
	someAsyncTask({ commit }) {
		// do something async
		commit('SET_RESTORED')
	},
}

export default {
	state,
	mutations,
	actions,
}
