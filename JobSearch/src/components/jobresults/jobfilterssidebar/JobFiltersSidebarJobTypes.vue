<template>
	<CollapsibleAccordion header="Job Types">
				<div class="mt-5">
					<fieldset>
						<ul class="flex flex-row flex-wrap">
							<li 
								class="h-8 w-1/2" 
								v-for="jobType in UNIQUE_JOB_TYPES" 
								:key="jobType"
							>
								<input 
									type="checkbox" 
									class="mr-3" 
									:name="jobType" :id="jobType" 
									:value="jobType"
									v-model="selectedJobTypes" 
									@change="selectJobType"
								/>
								<label :for="jobType">{{ jobType }}</label>
							</li>
						</ul>
					</fieldset>
				</div>
			</CollapsibleAccordion>
</template>

<script>
import { mapState, mapActions, } from "pinia";
import { useJobStore, UNIQUE_JOB_TYPES } from "@/stores/jobs";
import { useUserStore, ADD_SELECTED_JOB_TYPES } from "@/stores/user";
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';

export default {
	name				:	"JobFiltersSidebarOrganizations",
	components	:	{ CollapsibleAccordion },
	data() {
		return {
			selectedJobTypes	:	[],
		};
	},
	computed: {
		...mapState(useJobStore, [UNIQUE_JOB_TYPES]),
	},
	methods: {
		...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
		selectJobType() {
			this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
		},
	},
};

</script>