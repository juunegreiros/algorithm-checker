export const removeZeroes = (input) => {
  let count = 0;
  const output = [];

  while (count < input.length) {
    if (input[count] !== 0) {
      output.push(input[count]);
    }
    count += 1;
  }

  return output;
}