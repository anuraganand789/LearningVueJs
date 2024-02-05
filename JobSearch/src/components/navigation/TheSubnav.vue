<template>
    <div class="w-full h-16 border-b border-solid border-brandGray1 bg-white">
        <div class="flex items-center h-full px-8">
            <div v-if="onJobResultsPage">
                <font-awesome-icon :icon="['fas', 'search']" class="mr-3"/>
                <span> <span class="text-brandGreen1"> 3434 </span> jobs matched</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name    :   "TheSubnav",
    computed	:	{
			onJobResultsPage() {
				console.log(this.$route.name);
				return this.$route.name === "JobResults";
			}
		}
};
</script>