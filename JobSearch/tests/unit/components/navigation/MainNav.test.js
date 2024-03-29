import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import {RouterLinkStub} from "@vue/test-utils";
import {createTestingPinia} from '@pinia/testing';
import MainNav from "@/components/navigation/MainNav.vue";
import { useUserStore } from "@/stores/user";

const $route = { name : "Home"};

const pinia = createTestingPinia( {
	// stubActions : false,
});

const renderMainNav = () => {
    render(MainNav, {
        global	: {
					plugins	:	[pinia],
					mocks	: {
						$route,
					},
					stubs	:	{
										FontAwesomeIcon : true,
										RouterLink	:	RouterLinkStub,
									}, 
					},
    });
};


describe("Main Nav", () => {
    it("Displays compnay's name", () => {
        renderMainNav();
        const companyName = screen.getByText("Bobo Careers");
        expect(companyName).toBeInTheDocument();
    });

    it("displays menu items for navigation", () => {
        renderMainNav();
        const navigation = screen.getAllByRole("listitem");
        const textContents = navigation.map(item => item.textContent);
        expect(textContents).toEqual([
            'Teams',
            'Locations',
            'Life at Bobo Corp',
            'How We hire',
            'Students',
            'Jobs'
          ]);
    });
});

describe("Profile Picture Display On LogIn And LogOut", () => {

    describe("when then user is not logged in", () => {
        it("does not display user profile picture", async () => {
            renderMainNav();
            let profileImage = screen.queryByRole("img", {
                name    :   /User Profile Image/i,
            }
            );
            
            expect(profileImage).not.toBeInTheDocument();
        });
    });

    describe("when then user is logged in", () => {
        it("displays user profile picture", async () => {
            renderMainNav();
						const userStore = useUserStore();

            const loginButton = screen.getByRole("button", { name: /Sign In/i });

						userStore.isLoggedIn = true;
            await userEvent.click(loginButton);
            
            const profileImage = screen.queryByRole("img", {
                name    :   /User Profile Image/i,
            });
            
            expect(profileImage).toBeInTheDocument();
        })
    });
});
