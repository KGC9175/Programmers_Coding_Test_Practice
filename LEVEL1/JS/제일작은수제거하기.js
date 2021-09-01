function solution(arr) {
  let arr_copy = arr.slice();
  
  let n = arr.indexOf(arr_copy.sort(function(a, b) {
      return b - a;
  })[arr.length - 1]);
  
  arr.splice(n, 1);
  
  return arr.length ? arr : [-1];
}