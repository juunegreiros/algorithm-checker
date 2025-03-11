import { sumPairs } from "../../algorithms/humanResourceMachine/06";

describe("06 - Rainy Summer", () => {
  it("For each two items, they should be addd together", () => {
    const input = [3, 0, 5, 5, -6, 6, 0, -2];
    const expectedOutput = [3, 10, 0, -2];
    const output = sumPairs(input);
    expect(output).toEqual(expectedOutput);
  });
});
