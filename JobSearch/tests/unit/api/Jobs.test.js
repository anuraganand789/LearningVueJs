import {createPinia, setActivePinia } from 'pinia';
import axios from 'axios';
import { useJobStore } from '@/stores/jobs';
import { useUserStore } from "@/stores/user";

vi.mock("axios");

describe("state", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it("stores job listings", () => {
		const store = useJobStore();
		expect(store.jobs).toEqual([]);
	})
})

describe("actions", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	describe("FETCH_JOBS", () => {
		it("makes API request and store received jobs", async () => {
			const fakeJobs = ["Job 1", "Job 2"];
			axios.get.mockResolvedValue({
				data	:	fakeJobs,
			});

			const store = useJobStore();
			await store.FETCH_JOBS();
			expect(store.jobs).toEqual(fakeJobs);
		});
	});
});

describe("getters", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	describe("UNIQUE_ORGANIZATIONS", () => {
		it("finds unique organizations from list of jobs", () => {
			const store = useJobStore();
			store.jobs = [
				{ organization : "Google" }, 
				{ organization : "Amazon" },
				{	organization : "Google" },
		 ];

		 const result = store.UNIQUE_ORGANIZATIONS;
		 expect(result).toEqual(new Set(["Google", "Amazon" ]));
		});
	});

	describe("UNIQUE_JOB_TYPES", () => {
		it("finds unique job types from list of jobs", () => {
			const store = useJobStore();
			store.jobs = [
				{ jobType : "Full-time" },
				{ jobType : "Temporary" },
				{ jobType : "Full-time" },
			];

			const result = store.UNIQUE_JOB_TYPES;
			expect(result).toEqual(new Set(["Full-time", "Temporary"]));
		});
	});
});
