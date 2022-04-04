def solution(board, moves):
    arr = []
    count = 0
    
    for i in range(len(moves)):
        n = moves[i]
        for j in range(len(board[0])):
            if board[j][n - 1] > 0:
                arr.append(board[j][n - 1])
                board[j][n - 1] = 0
                break
        
        if len(arr) > 1:
            if arr[len(arr) - 2] == arr[len(arr) - 1]:
                count += 1
                arr.pop()
                arr.pop()

    return count * 2