import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		pastSearches: []
	},
	getters: {
		lastSearch: state => state.pastSearches[state.pastSearches.length - 1]
	},
	mutations: {
		addQuery (state, query) {
			state.pastSearches.push(query)
		}
	},
	actions: {
		addQuery ({ commit }, query) {
			commit('addQuery', query)
		}
	},
	modules: {
	}
})
