import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { createTestingPinia } from "@pinia/testing";

import JobFiltersSidebarOrganizationsVue from "@/components/jobresults/jobfilterssidebar/JobFiltersSidebarOrganizations.vue";
import { useJobStore } from "@/stores/jobs";
import { useUserStore} from "@/stores/user";

describe("JobFilterSidebarOrganizations", () => {
	it("renders unique list of organizatoins from jobs", async () => {
		const pinia			= createTestingPinia();
		const jobStore	= useJobStore();

		jobStore.UNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon"]);

		render(JobFiltersSidebarOrganizationsVue, {
			global : {
				plugins	: [ pinia ],
				stubs	: 	{
					FontAwesomeIcon	: true,
				},
			},
		});

		const button = screen.getByRole("button", { name	:	/organizations/i });
		await userEvent.click(button);

		const organizationListItem = screen.getAllByRole("listitem");
		const organizations = organizationListItem.map(
			node => node.textContent
		);

		expect(organizations).toEqual(["Google", "Amazon"]);
	});

	it("communicates that user has selected checkbox for organization", async () => {
		const pinia = createTestingPinia();
		const userStore = useUserStore();
		const jobStore = useJobStore();
		jobStore.UNIQUE_ORGANIZATIONS = new Set([ "Google", "Amazon" ]);

		render(JobFiltersSidebarOrganizationsVue, {
			global	:	{
				plugins	:	[pinia],
				stubs	: {
					FontAwesomeIcon :	true,
				},
			},
		});

		const button = screen.getByRole("button", { name : /organizations/i });
		await userEvent.click(button); 

		const googleCheckbox = screen.getByRole("checkbox", { name : /google/i });
		await userEvent.click(googleCheckbox);

		expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith([ "Google" ]);
	});
});

