function mergeSort(list) {
  let leftSorted = [];
  let rightSorted = [];

  const n = list.length;
  const mid = Math.floor(n / 2);

  //if 1 element already sorted
  if (n < 2) {
    return list;
  }
  //split array half
  const left = list.slice(0, mid);
  const right = list.slice(mid);

  //recursivly call mergeSort on left side
  leftSorted = mergeSort(left);
  //console.log("left in mergeSort:", leftSorted);
  //after left is done recursivly call mergeSort on right side
  rightSorted = mergeSort(right);
  //console.log("right in mergeSort:", rightSorted);
  return merge2(leftSorted, rightSorted);
}
function merge(a, b) {
  //   console.log("MERGE");
  //   console.log("a:", a);
  //   console.log("b:", b);

  //ARRAY THAT RETURNS SORTED LIST
  let arr = [];
  //CHECK IF A AND B HAVE ITEMS IN THEM
  while (a.length >= 1 && b.length >= 1) {
    if (a[0] <= b[0]) {
      arr.push(a[0]);
      a.shift();
    } else if (a[0] > b[0]) {
      arr.push(b[0]);
      b.shift();
    }
  }
  //IF A HAS ITEMS PUSH THEM ALL INTO THE ARRAY
  while (a.length >= 1) {
    arr.push(a[0]);
    a.shift();
  }
  //IF B HAS ITEMS PUSH THEM ALL INTO THE ARRAY
  while (b.length >= 1) {
    arr.push(b[0]);
    b.shift();
  }
  console.log("arr", arr);
  return arr;
}
function merge2(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  //console.log("result", result);

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
const test1 = [2, 5, 1, 8, 6];
const test2 = [9, 3, 6, 12, 3];
console.log("---------test!-------", mergeSort(test1));
console.log("==========test2============", mergeSort(test2));
console.log(
  "~~~~~~~~test3~~~~~~~~~~~~",
  mergeSort([2, 5, 1, 3, 7, 2, 3, 8, 6, 3])
);
