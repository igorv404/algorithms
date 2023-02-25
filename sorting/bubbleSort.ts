function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      const current = array[j];
      if (current > array[j + 1]) {
        array[j] = array[j + 1];
        array[j + 1] = current;
      }
    }
  }
  return array;
}
