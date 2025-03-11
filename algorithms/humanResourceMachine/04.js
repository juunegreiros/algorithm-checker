export const invertArray = (arr) => {
  const output = [];
  let count = 0;

  while (count < arr.length) {
    output.push(arr[count + 1]);
    output.push(arr[count]);
    count += 2;
  }

  return output;
};
