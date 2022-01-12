module.exports = function reverse (n) {
  let mod = Math.abs(n);
  let str = String(mod);
  let arr = str.split ('');
  let reverseArr = arr.reverse();
  let joinArr = reverseArr.join('');
  let num = Number(joinArr);
  return(num);

  
}
