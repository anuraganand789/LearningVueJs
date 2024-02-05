import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
    const list = ["A", "B", "C", "D", "E"];
    
    it("locates element in list and return the next element in list", () => {
        const value = "C";

        const result = nextElementInList(list, value);

        expect(result).toBe("D");
    });

    it("locates next element at start of list", () => {
        const result = nextElementInList(list, "E");
        expect(result).toBe("A");
    })
});