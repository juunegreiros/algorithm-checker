export const sumPairs = (input) => {
  let count = 0;
  const output = [];

  while (count < input.length) {
    output.push(input[count] + input[count + 1]);
    count += 2;
  }

  return output;
};
