import {render, screen} from "@testing-library/vue";
import TheSubnav from "@/components/navigation/TheSubnav.vue";

describe("TheSubnav", () => {
	const renderTheSubnav = (routeName) => {
		render(TheSubnav, {
				global: {
						mocks: {
							$route : { name : routeName },
						},
						stubs:  {
								FontAwesomeIcon : true,
						},
				},
			}
		);
	}
	describe("when user is on job page", () => {
		it("displays job count", () => {
			renderTheSubnav("JobResults");	
			const jobCount = screen.getByText("3434");
			expect(jobCount).toBeInTheDocument();
		})
	});
    
    describe("when user is not on job page", () => {
			it("does not displays job count", () => {
				renderTheSubnav("Home");	
				const jobCount = screen.queryByText("3434");
				expect(jobCount).not.toBeInTheDocument();
			});
    });
})