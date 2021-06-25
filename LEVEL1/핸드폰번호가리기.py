def solution(phone_number):
    answer = ''
    arr = list(phone_number)
    
    for _ in range(len(arr) - 4):
        answer += '*'
    for i in range(len(arr) - 4, len(arr)):
        answer += str(arr[i])
    
    return answer