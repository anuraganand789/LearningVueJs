import { useUserStore } from "@/stores/user";
import { createPinia, setActivePinia } from "pinia";

describe("state", () => {
	beforeEach(() => {
		const pinia = createPinia();
		setActivePinia(pinia);
	});

	it("keeps track of if user is logged in", () => {
		const state = useUserStore();
		expect(state.isLoggedIn).toBe(false);
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
});