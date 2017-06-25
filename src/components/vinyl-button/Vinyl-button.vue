<template lang="html">
	<button class="vinyl-button">
		<span><i v-bind:class="icon"></i></span>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'vinyl-button',
	props: ['text', 'icon']
}
</script>

<style lang="scss" scoped>
@import '~global/settings';

@media screen and (min-width: 1280px) {
	.vinyl-button {
		color: transparent !important;
		line-height: 50px !important;
		padding: 0px !important;
		min-width: 0px !important;
		width: 50px !important;
		height: 50px !important;
		animation: 3s spin linear infinite;
		&:hover {
			animation: none;
			width: calc(50% + 15px) !important;
			color: $primary !important;
			span {
				background: none;
			}
	    }
		span {
			background-color: red;
			color: $primary !important;
			width: 26px;
			height: 26px;
			position: absolute;
			left: 12px;
			top: 12px;
			border-radius: 50px;
			font-size: 20px;
			i {
				display: flex;
				position: absolute;
				top: 2px;
				left: 7px;
			}
		}
	}
}

.vinyl-button {
	display: block;
	margin: 0 auto;

	position: relative;
	top: 0px;

	min-width: 50%;
	height: 50%;

	font-family: 'Open Sans';
	font-size: 13px;
	font-weight: 600;
	color: $primary;

	transition: 0.2s all ease-in-out;

	background-color: rgba(0, 0, 0, 0.9);

	box-shadow: none;

	border-radius: 50px;
	border: none;

	&:hover {
		top: -5px;
		box-shadow: 5px 5px 3px rgba(29, 29, 29, 0.43);
	}
}

</style>
