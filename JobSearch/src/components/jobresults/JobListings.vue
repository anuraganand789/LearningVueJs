<template>
	<main class="flex-auto bg-brandGray2 p-8">
		<ol>
			<JobListing  v-for="job of displayJobs" :key="job.id" v-bind="job"/>
		</ol>

		<div class="mx-auto mt-8">
			<div class="flex flex-row flex-nowrap">
				<p class="flex-grow text-sm">
					Page {{  currentPage }}
				</p>

				<div class="flex items-center justify-center">
					<RouterLink v-if="previousPage" 
					:to="{name : 'JobResults', query: { page : previousPage}}"
					class="mx-3 text-sm font-semibold text-brandBlue1"
					role="link"
					> Previous {{ previousPage }}
				</RouterLink>
					
					<RouterLink v-if="nextPage" 
					:to="{name : 'JobResults', query: { page : nextPage}}"
					class="mx-3 text-sm font-semibold text-brandBlue1"
					role="link"
					> Next {{ nextPage }}
				</RouterLink>

				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { mapActions, mapState } from "pinia";
import JobListing from "@/components/jobresults/JobListing.vue";
import { useJobStore, FETCH_JOBS, FILTERED_JOBS } from '@/stores/jobs';

export default {
	name	:	"JobListings",
	components	:	{ JobListing },
	data() {
		return {
			firstPage : 1,
			pageSize : 10,
		}
	},
	async mounted() {
		this.FETCH_JOBS();
	},
	computed: {
		currentPage() {
			return Number.parseInt(this.$route.query.page || "1");
		},
		previousPage() {
			const previousPage = this.currentPage - 1;
			return previousPage >= this.firstPage ?  previousPage : undefined;
		},
		...mapState(useJobStore, {
			FILTERED_JOBS,
			nextPage() {
				const nextPage = this.currentPage + 1;
				const maxPage = Math.ceil(this.FILTERED_JOBS.length / this.pageSize);
				return nextPage <= maxPage ? nextPage : undefined ;
			},
			displayJobs() {
				const pageNumber = this.currentPage;
	
				const lastJobIndex	= pageNumber * this.pageSize;
				const firstJobIndex = lastJobIndex - this.pageSize;
	
				return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
			},
		}),
	},
	methods: {
		...mapActions(useJobStore, [FETCH_JOBS]),
	}
}
</script>