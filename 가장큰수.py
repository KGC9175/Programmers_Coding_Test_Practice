def solution(numbers):
    answer = ''
    
    for i in range(len(numbers)):
        numbers[i] = str(numbers[i])
    
    numbers.sort(key = lambda x : x*3, reverse = True)
    
    for j in range(len(numbers)):
        answer += numbers[j]
    
    answer = str(int(answer))
    
    return answer