function solution(board, moves) {
  let answer = 0;
  const tmp = [];

  moves.forEach((v) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][v - 1]) {
        tmp.push(board[i][v - 1]);
        board[i][v - 1] = 0;
        break;
      }
    }
    if (tmp.length > 1) {
      if (tmp[tmp.length - 2] === tmp[tmp.length - 1]) {
        answer += 2;
        tmp.pop();
        tmp.pop();
      }
    }
  });

  return answer;
}
