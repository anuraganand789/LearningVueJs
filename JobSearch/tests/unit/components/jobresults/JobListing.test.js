import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/jobresults/JobListing.vue";

const renderJobListing = (props) => {
	render(JobListing, {
		global	:	{
			stubs	:	{
				RouterLink	: RouterLinkStub,
			}
		},
		props,
	});
};

describe("JobListing", () => {
	it("renders job title", () => {
		renderJobListing({title : "Vue Developer "})
		expect(screen.getByText("Vue Developer")).toBeInTheDocument();
	});
	
	it("renders job organization", () => {
		renderJobListing({ organization : "Thekla"})
		expect(screen.getByText("Thekla")).toBeInTheDocument();
	});

	it("renders job locations", () => {
		const jobProps	=	{
			locations	:	["Orlando", "Jacksonville"],
		};

		renderJobListing({ ...jobProps });
		expect(screen.getByText("Orlando")).toBeInTheDocument();
		expect(screen.getByText("Jacksonville")).toBeInTheDocument();
	});

	it("renders job qualifications", () => {
		const jobProps	=	{
			minimumQualifications	:	["BTech", "MBA"],
		};

		renderJobListing({ ...jobProps });
		expect(screen.getByText("BTech")).toBeInTheDocument();
		expect(screen.getByText("MBA")).toBeInTheDocument();
	});
})