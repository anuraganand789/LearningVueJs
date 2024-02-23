import { defineStore } from "pinia";
import getJobs from "@/api/GetJobs";
import { useUserStore } from "@/stores/user";

export const FETCH_JOBS 												= "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS 							= "UNIQUE_ORGANIZATIONS";
export const FILTERED_JOBS											=	"FILTERED_JOBS";
export const UNIQUE_JOB_TYPES 									= "UNIQUE_JOB_TYPES";

export const useJobStore = defineStore("jobs", {
	state	:	() => ({
		jobs : [],
	}),
	actions	: {
		async [FETCH_JOBS]() {
			const jobs = await getJobs();
			this.jobs = jobs;
		}
	},
	getters	: {
		[UNIQUE_ORGANIZATIONS](state) {
			const uniqueOrganizations = new Set();
			state.jobs.forEach(
				(job) => uniqueOrganizations.add(job.organization)
				);
			
				return uniqueOrganizations;
		},
			[UNIQUE_JOB_TYPES](state){
				const uniqueJobTypes = new Set(state.jobs.map(job => job.jobType));
				return uniqueJobTypes;
			},
			[FILTERED_JOBS](state) {
				const filters = [];
				const userStore = useUserStore();

				if(userStore.selectedJobTypes.length > 0) {
					filters.push(job => userStore.selectedJobTypes.includes(job.jobType));
				}

				if(userStore.selectedOrganizations.length > 0) {
					filters.push(job => userStore.selectedOrganizations.includes(job.organization));
				}

				if(filters.length < 1) {
					return state.jobs;
				}

				return filters.reduce( (jobs, filter) => jobs.filter(filter), state.jobs);
			},
		},
	});


