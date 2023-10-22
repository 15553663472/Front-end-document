<template>
	<span class="bg-strong">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: "bg-strong",
}
</script>

<style scoped>
.bg-strong {
	background: #ffee00;
}
</style>
