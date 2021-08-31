import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/search'
	},
	{
		path: '/search',
		name: 'Search',
		component: Search
	},
	{
		path: '/history',
		name: 'History',
		component: History
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
