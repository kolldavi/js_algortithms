function fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  return n * fibonacci(n - 1);
}

function memoCache(cb) {
  let cache = {};

  return n => {
    if (!cache[n]) {
      console.log(`${n} added to cache`);
      cache[n] = cb(n);
    }
    console.log(`got answer from cache (${n}! = ${cache[n]})`);
    console.log("current cache:", cache);

    return cache[n];
  };
}

const fibWithCache = memoCache(fibonacci);

fibWithCache(3);
fibWithCache(5);
fibWithCache(3);
fibWithCache(17);
fibWithCache(17);
