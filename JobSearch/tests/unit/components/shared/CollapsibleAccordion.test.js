import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';

describe("CollapsibleAccordion", () => {
	const renderCollapsibleAccordion = (config = {}) => {
		render(CollapsibleAccordion, {
			global : {
				stubs : {
					FontAwesomeIcon : true,
				}
			},
			props : {
				header : "My Category",
			},
			slots : {
				default	: "<h3>My Nested Child</h3>",
			},
			...config,
		});
	};

	it("renders child content", async () => {
		renderCollapsibleAccordion();

		expect(screen.queryByText("My Nested Child")).not.toBeInTheDocument();

		const button = screen .getByRole("button", { name: /My Category/i });
		await userEvent.click(button);

		expect(screen.getByText("My Nested Child")).toBeInTheDocument();
	});

	describe("when parent does not provide custom child content", () => {
		it("renders default content", async () => {
			
			renderCollapsibleAccordion({ slots : undefined });

			const button = screen.getByRole("button", { name: /my category/i });
			await userEvent.click(button);

			expect(
				screen.getByText("No Filters")
			).toBeInTheDocument();

		});
	});

});
