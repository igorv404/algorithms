function selection(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let currentMin = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (currentMin > array[j]) {
        currentMin = array[j];
        array[j] = array[i];
        array[i] = currentMin;
      }
    }
  }
  return array;
}
