import { removeZeroes } from "../../algorithms/humanResourceMachine/07";

describe("07 - Zero Exterminator", () => {
  test("should return array with 0s removed", () => {
    const input = [6, 0, 8, "B", 0, 0, -1, 0];
    const expectedOutput = [6, 8, "B", -1];
    const output = removeZeroes(input);

    expect(expectedOutput).toEqual(output);
  });
});
