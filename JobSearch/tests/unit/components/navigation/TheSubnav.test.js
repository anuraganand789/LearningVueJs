import {render, screen} from "@testing-library/vue";
import TheSubnav from "@/components/navigation/TheSubnav.vue";
import { createTestingPinia } from "@pinia/testing";
import { useJobStore } from "@/stores/jobs";

describe("TheSubnav", () => {
	const renderTheSubnav = (routeName, config = {}) => {
		render(TheSubnav, {
				global: {
						mocks: {
							$route : { name : routeName },
						},
						stubs:  {
								FontAwesomeIcon : true,
						},
						...config,
				},
			}
		);
	}

	describe("when user is on job page", () => {
		it("displays job count", () => {
			const pinia			= createTestingPinia();
			const jobStore	= useJobStore();
			const numberOfJobs = 16;
			jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({});

			renderTheSubnav("JobResults", { plugins : [pinia], });
		
			expect(
				screen.getByText(`${numberOfJobs}`)
			).toBeInTheDocument();

		});
	});
    
	describe("when user is not on job page", () => {
		it("does not displays job count", () => {
			const pinia			= createTestingPinia();
			const jobStore	= useJobStore();
			const numberOfJobs = 16;
			jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({});

			renderTheSubnav("Home", { plugins : [pinia] });
			expect(
				screen.queryByText(`${numberOfJobs}`)
			).not.toBeInTheDocument();
			
		});
	});
})