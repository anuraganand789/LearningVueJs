<template>
	<HeaderContainer > 
		<template #title>
			<h1 class="w-full text-4xl font-normal">Teams</h1>
		</template>
		<template #subTitle>
			<h2 class="my-4 w-full text-base font-light">
				It's awesome working here, why don't you come join us?
			</h2>
		</template>
	</HeaderContainer>
</template>

<script>
import HeaderContainer from "@/components/shared/HeaderContainer.vue";

export default {
	name	:	"TeamsView",
	components	:	{ HeaderContainer },
}
</script>
