<template lang="pug">
	div.history
		h1 History
		template(v-if="pastSearches.length > 0")
			div.entry
				h4 Date
				h4 Search query
			template(v-for="entry in pastSearches")
				div.entry
					p {{ entry.dateTime.toLocaleString() }}
					p {{ entry.query }}
		h4(v-else) No results found.
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'History',
	components: {},
	computed: {
		...mapState(['pastSearches'])
	}
}
</script>

<style lang="scss" scoped>
.history {
	height: 100%;
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
}

.history > p {
	font-size: 16px;
	margin: 8px;
}

.entry {
	display: flex;
	justify-content: space-between;
}
</style>
