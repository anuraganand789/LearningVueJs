import { render, screen } from '@testing-library/vue';
import HeaderContainer from "@/components/shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
	it("allows parent component to provide title content", () => {
		const title = "Some Title";

		render(HeaderContainer, {
			slots : {
				title : `<h2>${title}</h2>`,
			},
		});

		expect(screen.getByText(title)).toBeInTheDocument();
	});

	it("allows parent component to provide subtitle content", () => {
		const subTitle = "Some subTitle";

		render(HeaderContainer, {
			slots: {
				subTitle : `<h3>${subTitle}</h3>`,
			},
		});

		expect(screen.getByText(subTitle)).toBeInTheDocument();
	});
});

