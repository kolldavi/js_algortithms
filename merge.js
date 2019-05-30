function mergeSort(list) {
  let middle = Math.floor(list.length / 2);

  if (list.length < 2) {
    return list;
  }
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedList = [];

  while (left.length >= 1 && right.length >= 1) {
    if (left[0] <= right[0]) {
      sortedList.push(left[0]);
      left.shift();
    } else {
      sortedList.push(right[0]);
      right.shift();
    }
  }

  while (left.length >= 1) {
    sortedList.push(left[0]);
    left.shift();
  }

  while (right.length >= 1) {
    sortedList.push(right[0]);
    right.shift();
  }
  return sortedList;
}

console.log(mergeSort([4, 1, 4, 2, 4, 3]));
