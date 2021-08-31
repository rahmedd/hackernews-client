<template>
	<div id="app">
		<ToastContainer/>
		<div id="nav">
			<router-link to="/search">Search</router-link> |
			<router-link to="/history">History</router-link>
		</div>
		<router-view/>
</div>
</template>

<script>
import ToastContainer from './components/ToastContainer.vue'

export default {
	components: {
		ToastContainer
	}
}
</script>

<style lang="scss">

html, body, * {
	box-sizing: border-box;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin: 16px;
}

#nav {
	margin: 16px 0px 16px 0px;

	a {
		text-decoration: none;
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
