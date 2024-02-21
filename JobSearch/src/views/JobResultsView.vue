<template>
	<div class="flex flex-row flex-nowrap w-full ">
		<JobFiltersSidebar />
		<JobListings />
	</div>
</template>

<script>
import JobFiltersSidebar from "@/components/jobresults/jobfilterssidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/jobresults/JobListings.vue";

export default {
    name    :   "JobResultsView",
		components	:	{	JobFiltersSidebar, JobListings	},
}
</script>