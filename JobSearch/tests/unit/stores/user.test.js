import { useUserStore } from "@/stores/user";
import { createPinia, setActivePinia } from "pinia";
import { useSSRContext } from "vue";

describe("state", () => {
	beforeEach(() => {
		const pinia = createPinia();
		setActivePinia(pinia);
	});

	it("keeps track of if user is logged in", () => {
		const state = useUserStore();
		expect(state.isLoggedIn).toBe(false);
	});

	it(
		"stores organizations, that the user would like to filter jobs by",
		() => {
			const store = useUserStore();
			expect(store.selectedOrganizations).toEqual([]);
		}
	);

	it("stores job types that the user would like to filter jobs by", () => {
		const store = useUserStore();
		expect(store.selectedJobTypes).toEqual([]);
	});
});

describe("actions", () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	describe("loginUser", () => {
		it("logs the user in", () => {
			const store = useUserStore();
			store.loginUser();
			expect(store.isLoggedIn).toBe(true);
		});
	});

	describe("ADD_SELECTED_ORGANIZATIONS", () => {
		it(
			"updates organizations the user has chosen to filter jobs by",
			() => {
				const store = useUserStore();
				store.ADD_SELECTED_ORGANIZATIONS(["Org1", "Org2"]);
				expect(store.selectedOrganizations).toEqual([ "Org1", "Org2" ]);
			}
		);
	});

	describe("ADD_SELECTED_JOB_TYPES", () => {
		it("updates job types the user has chosen to filter jobs by", () => {
			const store = useUserStore();
			const selectedJobTypes = ["Full-time", "Part-time"];

			store.ADD_SELECTED_JOB_TYPES(selectedJobTypes);
			
			expect(store.selectedJobTypes).toEqual(selectedJobTypes);
		});
	}); 
});