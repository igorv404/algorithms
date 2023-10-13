function quick(array: number[]) {
  if (array.length <= 1) {
    return array;
  }
  const pivotIndex = Math.floor(array.length / 2);
  const lowerValues: number[] = [];
  const biggerValues: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < array[pivotIndex]) {
      lowerValues.push(array[i]);
    } else {
      biggerValues.push(array[i]);
    }
  }
  return [...quick(lowerValues), array[pivotIndex], ...quick(biggerValues)];
}
