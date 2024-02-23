<template>
	<CollapsibleAccordion header="Organizations">
				<div class="mt-5">
					<fieldset>
						<ul class="flex flex-row flex-wrap">
							<li 
								class="h-8 w-1/2" 
								v-for="org in UNIQUE_ORGANIZATIONS" 
								:key="org"
							>
								<input 
									type="checkbox" 
									:name="org" :id="org" 
									class="mr-3" 
									:value="org"
									v-model="selectedOrganizations" 
									@change="selectOrganization"
								/>
								<label :for="org">{{ org }}</label>
							</li>
						</ul>
					</fieldset>
				</div>
			</CollapsibleAccordion>
</template>

<script>
import { mapState, mapActions, } from "pinia";
import { useJobStore, UNIQUE_ORGANIZATIONS } from "@/stores/jobs";
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from "@/stores/user";
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';

export default {
	name				:	"JobFiltersSidebarOrganizations",
	components	:	{ CollapsibleAccordion },
	data() {
		return {
			selectedOrganizations	:	[],
		};
	},
	computed: {
		...mapState(useJobStore, [UNIQUE_ORGANIZATIONS]),
	},
	methods: {
		...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
		selectOrganization() {
			this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
		},
	},
};

</script>