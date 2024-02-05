import {queryAllByAltText, render, screen} from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import JobSearchForm from "@/components/jobsearch/JobSearchForm.vue";

describe("Job Search Form", () => {
	describe("when user submits form", () => {
		it("directs user to job results page, with user's search parameter", 
		async () => {
			const push			= vi.fn();
			const $router		=	{ push };

			render(JobSearchForm, {
				global	:	{
					stubs	: {
						FontAwesomeIcon : true,
					},
					mocks	: {
						$router,
					},
				},
			});

			const roleInput			= screen.getByRole("textbox", { name	:	/Role/i });
			const locationInput = screen.getByRole("textbox", {	name	:	/Where/i });

			await userEvent.type(roleInput, 		"Java Dev");
			await userEvent.type(locationInput, "Noida");

			const actionButton	= screen.getByRole("button", { name	:	/search/i });
			await userEvent.click(actionButton);

			expect(push)
			.toHaveBeenCalledWith(
				{ 
					name	:	"JobResults", 
					query	:	{	role	:	"Java Dev", location	:	"Noida" } 
				});

		});
	});
});