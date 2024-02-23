import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { createTestingPinia } from "@pinia/testing";

import JobFiltersSidebarJobTypes from "@/components/jobresults/jobfilterssidebar/JobFiltersSidebarJobTypes.vue";
import { useJobStore } from "@/stores/jobs";
import { useUserStore} from "@/stores/user";

describe("JobFilterSidebarJobType", () => {
	it("renders unique list of job types from jobs", async () => {
		const pinia			= createTestingPinia();
		const jobStore	= useJobStore();

		jobStore.UNIQUE_JOB_TYPES = new Set([ "Temporary", "Part-time" ]);

		render(JobFiltersSidebarJobTypes, {
			global : {
				plugins	: [ pinia ],
				stubs	: 	{
					FontAwesomeIcon	: true,
				},
			},
		});

		const button = screen.getByRole("button", { name	:	/job types/i });
		await userEvent.click(button);

		const jobTypesList = screen.getAllByRole("listitem");
		const jobTypes = jobTypesList.map( node => node.textContent );

		expect(jobTypes).toEqual(["Temporary", "Part-time"]);
	});

	it("communicates that user has selected checkbox for jobtypes", async () => {
		const pinia = createTestingPinia();
		const userStore = useUserStore();
		const jobStore = useJobStore();

		jobStore.UNIQUE_JOB_TYPES = new Set([ "Temporary", "Part-time" ]);

		render(JobFiltersSidebarJobTypes, {
			global	:	{
				plugins	:	[pinia],
				stubs	: {
					FontAwesomeIcon :	true,
				},
			},
		});

		const button = screen.getByRole("button", { name : /job types/i });
		await userEvent.click(button); 

		const jobTypeCheckbox = screen.getByRole("checkbox", { name : /temporary/i });
		await userEvent.click(jobTypeCheckbox);

		expect(userStore.ADD_SELECTED_JOB_TYPES).toHaveBeenCalledWith([ "Temporary" ]);
	});
});

