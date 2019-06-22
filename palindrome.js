function palindrome(str) {

  const newstr = str.replace(/[^A-Z0-9]+/ig, '').toLowerCase();
  console.log(newstr);
  return newstr ==newstr.split('').reverse().join('');
}

