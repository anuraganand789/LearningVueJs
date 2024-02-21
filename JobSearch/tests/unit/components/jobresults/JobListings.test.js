import axios from "axios";
import { RouterLinkStub } from "@vue/test-utils";
import { render, screen } from "@testing-library/vue";
import JobListings	from "@/components/jobresults/JobListings.vue";

vi.mock("axios");

describe("JobListings", () => {
	const createRoute = (queryParams = {}) => ({
		query: {
			page: "5",
			...queryParams,
		}
	});
	const renderJobListings = ($route) => {
		render(JobListings, {
			global: {
				mocks: {
					$route
				},
				stubs: {
					RouterLink: RouterLinkStub,
				},
			}
		})
	};

	it("Fetches Job", () => {
		axios.get.mockResolvedValue({ data: []});
		
		renderJobListings(createRoute());
		
		expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");

	});

	it("displays maximum of 10 jobs", async () => {
		axios.get.mockResolvedValue({ data: Array(100).fill({}) });
		
		renderJobListings(createRoute());
		
		expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
		
		const allListItem = await screen.findAllByRole("listitem");
		expect(allListItem).toHaveLength(10);
	});

	describe("when params exclude page number", () => {
		it("displays page number 1", () => {
			const queryParams = { page : undefined };
			const $route = createRoute(queryParams);
			renderJobListings($route);

			expect(screen.getByText("Page 1")).toBeInTheDocument();
		});
		
		describe("when params include page number", () => {
			it("displays page number", () => {
					
				const queryParams = { page : "3" };
				const $route = createRoute(queryParams);
				renderJobListings($route);

				expect(screen.getByText("Page 3")).toBeInTheDocument();
			})
		});
	});

	describe("when user is on first page", async () => {
		it("does not show link to previous page", async () => {
			axios.get.mockResolvedValue({ data : []});
			const queryParams = { page : "1" };
			const $route = createRoute(queryParams);
			renderJobListings($route);

			const previousLink = screen.queryByRole("link", {name: /previous/i });
			const nextLink = screen.queryByRole("link", { name : /next/i });

			expect(nextLink).not.toBeInTheDocument();
			expect(previousLink).not.toBeInTheDocument();
		});

		it("shows link to next page", async () => {
			axios.get.mockResolvedValue({ data : Array(15).fill({}) });
			const queryParams = { page : "1" };
			const $route = createRoute(queryParams);

			renderJobListings($route);

			await screen.findAllByRole("listitem");
			const nextLink = screen.queryByRole("link", { name : /next/i });
			expect(nextLink).toBeInTheDocument();
		});
	});

	describe("when user is on the last page", () => {
		it("does not show link to next page", async () =>{
			const pageSize = 10;
			const data = Array(15).fill({});
			const lastPage = Math.ceil(data.length / pageSize);

			axios.get.mockResolvedValue({ data });

			const queryParams = { page : `${lastPage}`};
			const $route = createRoute(queryParams);
			renderJobListings($route);

			await screen.findAllByRole("listitem");
			expect(
				screen.queryByRole("link", { name : /next/i })
			).not.toBeInTheDocument();
		});

		it("show link to previous page", async () => {
			const pageSize = 10;
			const data = Array(15).fill({});
			const lastPage = Math.ceil(data.length / pageSize);

			axios.get.mockResolvedValue({ data });

			const queryParams = { page : `${lastPage}`};
			const $route = createRoute(queryParams);
			renderJobListings($route);

			await screen.findAllByRole("listitem");
			expect(
				screen.queryByRole("link", { name : /previous/i })
			).toBeInTheDocument();
		})
	});
});