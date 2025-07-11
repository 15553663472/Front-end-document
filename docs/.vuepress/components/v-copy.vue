<template>
	<span
		class="copy"
		:class="{
			success: isSuccess,
		}"
		@click="copyToClipboard"
	>
		<slot></slot>
	</span>
</template>

<script>
export default {
	data() {
		return {
			isSuccess: false,
		}
	},
	methods: {
		copyToClipboard() {
			const el = document.createElement("textarea")
			el.value = this.$slots.default[0].text
			el.setAttribute("readonly", "")
			el.style.position = "absolute"
			el.style.left = "-9999px"
			document.body.appendChild(el)
			const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
			el.select()
			document.execCommand("copy")
			document.body.removeChild(el)
			if (selected) {
				document.getSelection().removeAllRanges()
				document.getSelection().addRange(selected)
			}

			this.isSuccess = true
			setTimeout(() => {
				this.isSuccess = false
			}, 500)
		},
	},
	components: {},
}
</script>

<style scoped>
.copy {
	font-weight: 700;
	color: #3eaf7c;
	cursor: pointer;
	position: relative;
}
.copy::before {
	content: "复制成功";
	position: absolute;
	bottom: 100%;
	left: 50%;
	transform: translateX(-50%);
	font-size: 14px;
	color: #fff;
	background: rgba(0, 0, 0, 0.8);
	padding: 5px 10px;
	border-radius: 5px;
	opacity: 0;
	transition: opacity 0.3s;
	white-space: nowrap;
	font-weight: 400;
}
.copy::after {
	content: "";
	position: absolute;
	/* 画一个向下的三角 */
	border: 6px solid transparent;
	border-top-color: rgba(0, 0, 0, 0.8);
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	opacity: 0;
	transition: opacity 0.3s;
}
.copy.success::before {
	opacity: 1;
}
.copy.success::after {
	opacity: 1;
}
</style>
