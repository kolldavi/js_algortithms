function mergeSort(arr, direction) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(
    mergeSort(left, direction),
    mergeSort(right, direction),
    direction
  );
}
function merge(left, right, direction) {
  let sortedArr = [];

  while (left.length >= 1 && right.length >= 1) {
    if (direction === "desc" ? left[0] >= right[0] : left[0] <= right[0]) {
      sortedArr.push(left[0]);
      left.shift();
    } else {
      sortedArr.push(right[0]);
      right.shift();
    }
  }
  while (right.length >= 1) {
    sortedArr.push(right[0]);
    right.shift();
  }
  while (left.length >= 1) {
    sortedArr.push(left[0]);
    left.shift();
  }

  return sortedArr;
}

function greedyChange(coins, amount) {
  let sortedCoins = mergeSort(coins, "desc");
  let i = 0;
  let totalCoins = 0;
  while (amount > 0) {
    if (amount - sortedCoins[i] >= 0) {
      amount -= sortedCoins[i];
      totalCoins++;
    } else {
      i++;
    }
  }
  return totalCoins;
}

function bruteForce(coins, value) {
  if (value === 0) return 0;
  let minCoins;

  coins.forEach(coin => {
    if (value - coin >= 0) {
      let currVal = bruteForce(coins, value - coin);

      if (minCoins === undefined || currVal < minCoins) {
        minCoins = currVal;
      }
    }
  });
  return minCoins + 1;
}

function memoCache(cb) {
  let cache = {};
  return (coins, value) => {
    if (cache[value]) {
      return cache[value];
    }
    cache[value] = cb(coins, value);
    console.log("cache", cache);
    return cache[value];
  };
}
function dynamicMakeChange(coins, value) {
  let minCoins = -1;

  coins.forEach(coin => {
    if (value - coin >= 0) {
      let currMinCoin = dynamicMakeChange(coins, value - coin);

      if (minCoins === -1 || currMinCoin < minCoins) {
        minCoins = currMinCoin;
      }
    }
  });

  return minCoins + 1;
}
const coins = [1, 6, 10];
const coins2 = [1, 6, 10, 22];
const dynamicMakeChangeWithCache1 = memoCache(dynamicMakeChange);
//console.log(coins);
console.log("---------coins arr:", coins);
console.log("Make change for 12");
console.log("Greedy min change:", greedyChange(coins, 12));
console.log("Brute force min change:", bruteForce(coins, 12));
console.log(
  "dynamicMakeChange min change:",
  dynamicMakeChangeWithCache1(coins, 12)
);

console.log("-------coins arr:", coins);
console.log("Make change for 22");
console.log("Greedy min change:", greedyChange(coins, 22));
console.log("Brute force min change:", bruteForce(coins, 22));
console.log(
  "dynamicMakeChange min change:",
  dynamicMakeChangeWithCache1(coins, 22)
);
const dynamicMakeChangeWithCache2 = memoCache(dynamicMakeChange);
console.log("---------coins arr:", coins2);
console.log("Make change for 12");
console.log("Greedy min change:", greedyChange(coins2, 12));
console.log("Brute force min change:", bruteForce(coins2, 12));
console.log(
  "dynamicMakeChangemin change:",
  dynamicMakeChangeWithCache2(coins2, 12)
);
console.log("-------coins arr:", coins2);
console.log("Make change for 18");
console.log("Greedy min change:", greedyChange(coins2, 18));
console.log("Brute force min change:", bruteForce(coins2, 18));
console.log(
  "dynamicMakeChange min change:",
  dynamicMakeChangeWithCache2(coins2, 18)
);
