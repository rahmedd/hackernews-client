<template lang="pug">
	div.search
		h1 Search
		SearchField(label='hackernews' :value="query" @input="query = $event")
		div.results(v-if="results.length > 0")
			small {{ resultsFound }} results found.
			template(v-for="story in results")
				a(v-if="story.title" :href="story.url") {{ story.title }}
		//- else if
		template(v-else)
			h4(v-if="dirtyField") No results found.
</template>

<script>
import axios from 'axios'
import SearchField from '../components/SearchField.vue'
import { debounce } from '../helpers'
import { mapGetters } from 'vuex'

export default {
	name: 'Search',
	components: {
		SearchField
	},
	data: () => {
		return {
			dirtyField: false, // if the user has interacted with the input
			query: '',
			results: [],
			resultsFound: 0,
			page: 0
		}
	},
	methods: {
		async search () {
			const encodedQuery = this.query.replaceAll(' ', '%20') // replaces spaces with %20 (+ does not work!)

			try {
				const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${encodedQuery}`)
				this.results = response.data.hits
				this.resultsFound = response.data.nbHits
			}
			catch (ex) {
				console.warn(ex)
				this.$root.$emit('toast', ex, 'danger', 10)
			}
		}
	},
	watch: {
		query: debounce(async function () {
			if (this.query) {
				this.$store.dispatch('addQuery', {
					query: this.query,
					dateTime: new Date()
				})
				await this.search()
				this.dirtyField = true
			}
		}, 500)
	},
	computed: {
		...mapGetters(['lastSearch'])
	},
	mounted: function () {
		// if a query was previously made, repeat that query instead of showing a blank page
		if (this.lastSearch) {
			this.query = this.lastSearch.query
		}
	}
}
</script>

<style lang="scss" scoped>
.search {
	display: flex;
	flex-flow: column;
	height: 100%;
	width: 512px;
}

.search > h1 {
	margin-top: 0;
	margin-bottom: 16px;
}

.search > .search-field {
	margin-bottom: 8px;
}

.results {
	height: 100%;
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
}

.results > small {
	color: lightgrey;
	margin-left: 8px;
	margin-bottom: 8px;
}

.results > a {
	text-decoration: none;
	font-size: 16px;
	margin: 8px;
}

@media only screen and (max-width: 600px) {
	.search {
		width: 256px;
	}
}
</style>
