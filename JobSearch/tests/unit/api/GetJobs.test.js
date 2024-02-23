import axios from 'axios';
import getJobs from '@/api/GetJobs';

vi.mock("axios");
const jobs = [
	{ id: 1, title : "Java Engineer", }
]; 

describe("getJobs", () => {
	beforeEach(() => {
		axios.get.mockResolvedValue({
			data: jobs,
		});
	});

	it("fetches jobs that candidate can apply to", async() => {
		await getJobs();
		expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs")
	});

	it("extracts jobs from response", async () => {
		const jobs = await getJobs();
		expect(jobs).toEqual(jobs)
	});
});


