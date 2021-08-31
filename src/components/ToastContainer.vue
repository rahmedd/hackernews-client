<template lang="pug">
	div.toast-container(v-if="queue.length > 0")
		template(v-for="(toast, idx) in queue")
			Toast(
				:message="toast.message"
				:color="toast.color"
				:duration="toast.duration"
				@deleteToast="deleteToast(idx)"
			)
</template>

<script>
import Toast from './Toast.vue'

export default {
	name: 'ToastContainer',
	components: {
		Toast
	},
	data: () => {
		return {
			queue: [],
			show: false
		}
	},
	methods: {
		deleteToast (idx) {
			this.queue.splice(idx, 1)
		}
	},
	mounted: function () {
		this.$root.$on('toast', (message, color = 'primary', duration = 1) => {
			this.queue.push({
				message: message,
				color: color,
				duration: duration
			})
		})
	}
}
</script>

<style scoped lang="scss">
.toast-container {
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	z-index: 1000;
	width: 300px;
}

.toast-container > .toast {
	margin-bottom: 8px;
}

</style>
