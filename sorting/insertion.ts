function insertion(array: number[]) {
  const sortedArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    sortedArray.push(current);
    for (let j = sortedArray.length - 1; j > -1; j--) {
      if (current < sortedArray[j - 1]) {
        sortedArray[j] = sortedArray[j - 1];
        sortedArray[j - 1] = current;
      } else {
        break;
      }
    }
  }
  return sortedArray;
}
