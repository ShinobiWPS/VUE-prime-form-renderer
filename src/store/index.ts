import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
	state: () => ({
		debug: import.meta.env.MODE === 'development',

		isInitialized: false,
		count: 0,
	}),

	actions: {
		initApp() {
			this.isInitialized = true
			console.log('it works!')
		},
	},

	getters: {
		isReady: (state) => {
			return !state.isInitialized
		},
	},
})
