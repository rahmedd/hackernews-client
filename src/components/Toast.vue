<template lang="pug">
	div.toast(v-if="show" :class="color")
		p {{ message }}
</template>

<script>

export default {
	name: 'Toast',
	props: {
		message: String,
		color: String,
		duration: Number // in seconds
	},
	data: () => {
		return {
			show: true
		}
	},
	methods: {},
	mounted: function () {
		setInterval(() => {
			this.show = false
			this.$emit('deleteToast')
		}, this.duration * 1000)
	}
}
</script>

<style scoped lang="scss">
.toast {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 64px;
	border-radius: 8px;
}

.primary {
	background: #F3F6FF;
	color: #2952CC;
	border: 1px solid #3366FF;
}
.success {
	background: #F5FBF8;
	color: #317159;
	border: 1px solid #52BD95;
}
.warning {
	background: #FFFAF2;
	color: #996A13;
	border: 1px solid #FFB020
}
.danger {
	background: #FDF4F4;
	color: #A73636;
	border: 1px solid #D14343;
}

</style>
