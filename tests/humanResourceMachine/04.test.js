import { invertArray } from "../../algorithms/humanResourceMachine/04";

describe("04 - Scrambler Handler", () => {
  test("for each 2 items in the array, they should be in the reversed order", () => {
    const input = [9, 2, "a", "b", 7, "c"];
    const expectedOutput = [2, 9, "b", "a", "c", 7];
    const output = invertArray(input);

    expect(expectedOutput).toEqual(output);
  });
});
