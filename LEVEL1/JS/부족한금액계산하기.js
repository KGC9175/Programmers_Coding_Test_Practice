function solution(price, money, count) {
  var answer = 0;
  for (let i = 1; i < count + 1; i++) {
    answer += i * price;
  }
  return answer <= money ? 0 : answer - money;
}