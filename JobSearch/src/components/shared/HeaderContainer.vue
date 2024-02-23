<template>
	<div class="w-full border-b border-solid border-brandGray1">
		<div class="mx-auto my-16 text-center">
			<slot name="title">Sample Title</slot>
			<slot name="subTitle">Sample SubTitle</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "HeaderContainer",
};
</script>