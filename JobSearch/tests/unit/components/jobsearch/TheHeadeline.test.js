import {nextTick} from "vue";
import { render, screen } from "@testing-library/vue";
import TheHeaderLine from "@/components/jobsearch/TheHeadline.vue";

describe("The Headline Component", () => {

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("displays introductory action verb", () => {
        render(TheHeaderLine);
        const actionPhrase = screen.getByRole("heading", {
            name    :   /build for everyone/i,
        });

        expect(actionPhrase).toBeInTheDocument();
    });

    it("changes action verb at a constant interval", () => {
        const mockSetInterval = vi.fn();
        vi.stubGlobal("setInterval", mockSetInterval);
        render(TheHeaderLine);
        expect(mockSetInterval).toHaveBeenCalled();
        vi.unstubAllGlobals();
    });

    it("swaps action verb after interval", async () => {
        render(TheHeaderLine);

        vi.advanceTimersToNextTimer();
        
        await nextTick();

        const actionPhrase = screen.getByRole("heading", {
            name : /create for everyone/i,
        });

        expect(actionPhrase).toBeInTheDocument();

    });

    it("removes iterval when component is removed", () => {
        const originalClearInterval = clearInterval;
        const mockClearInterval = vi.fn();
        vi.stubGlobal("clearInterval", mockClearInterval);

        const { unmount } = render(TheHeaderLine);
        unmount();

        expect(mockClearInterval).toHaveBeenCalled();

        vi.unstubAllGlobals();
        window.clearInterval = originalClearInterval;
    })
})

