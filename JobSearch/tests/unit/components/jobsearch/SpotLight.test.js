import { render, screen } from "@testing-library/vue";
import axios from "axios";
import SpotLight from "@/components/jobsearch/SpotLight.vue";

vi.mock("axios");

describe("Spotlight", () => {
	const firstSpotLight = {
		id	: 	1,
		img : "NoImageUrl",
		title	:	"Some Title",
		description : 	"Some Description",
	};

	const mockSpotLightResponse = () => {
			axios.get.mockResolvedValue({ 
				data	:	[ firstSpotLight ],
			});
	};
	it("provides image to prevent component", async () => {
		mockSpotLightResponse();

		render(SpotLight, {
			slots	: {
				default: `
				<template #default="slotProps">
					<h1> {{ slotProps.img }} </h1>
				</template>
				`,
			},
		});

		const imageContainer = await screen.findByText(firstSpotLight.img);
		expect(imageContainer).toBeInTheDocument();
	});

	it("provides title to parent component", async () => {
		mockSpotLightResponse();

		render(SpotLight, {
			slots	: {
				default: `
				<template #default="slotProps">
					<h1> {{ slotProps.title }} </h1>
				</template>
				`,
			},
		});

		const imageContainer = await screen.findByText(firstSpotLight.title);
		expect(imageContainer).toBeInTheDocument();
	});

	it("provides description to parent component", async () => {
		mockSpotLightResponse();

		render(SpotLight, {
			slots	: {
				default: `
				<template #default="slotProps">
					<h1> {{ slotProps.description }} </h1>
				</template>
				`,
			},
		});

		const imageContainer = await screen.findByText( firstSpotLight.description );
		expect(imageContainer).toBeInTheDocument();
	});
})