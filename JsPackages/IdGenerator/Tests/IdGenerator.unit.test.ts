import { generateId } from "../Src/IdGenerator";

test("test generateId", () => {
    expect(generateId()).toBeGreaterThan(0);
});
