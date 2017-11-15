import { generateId } from "IdGenerator";

test("test generateId", () => {
    expect(generateId()).toBeGreaterThan(0);
});
