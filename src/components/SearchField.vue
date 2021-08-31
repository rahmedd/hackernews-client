<template lang="pug">
	div.search-field
		input(:placeholder="`Search ${label}`" :value="value" @input="$emit('input', $event.target.value)")
</template>

<script>

export default {
	name: 'SearchField',
	props: {
		label: String,
		value: String
	}
}
</script>

<style scoped lang="scss">
input {
	width: 100%;
	padding: 8px;
	padding-left: 16px;
	font-size: 24px;
	outline: none;
	border: none;
	border-bottom: 2px solid #D7D7D7;
	border-radius: 10px;
	font-family: Raleway, Helvetica, Arial, sans-serif;
	background: whitesmoke;
}
</style>
