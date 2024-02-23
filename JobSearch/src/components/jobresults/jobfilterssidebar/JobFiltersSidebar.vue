<template>
	<div class="flex flex-col border-r border-solid border-brandGray1 bg-white p-4 w-96">
		<section class="pb-5">
			<div class="flex flex-row justify-between">
				<h3 class="my-4 text-base font-semibold">what do you want to do?</h3>
				<div class="flex items-center test-sm">
					<ActionButton text="Clear Filters" type="secondary" />
				</div>
			</div>
			
			<JobFiltersSidebarJobTypes />
			<JobFiltersSidebarOrganizations />

		</section>
	</div>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import JobFiltersSidebarOrganizations from './JobFiltersSidebarOrganizations.vue';
import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue';

export default {
	name				:	"JobFiltersSidebar",
	components	:	{
			ActionButton, 
			CollapsibleAccordion,
			JobFiltersSidebarOrganizations,
			JobFiltersSidebarJobTypes,
		},
}

</script>