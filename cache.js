function addTen(n) {
  return n + 10;
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
