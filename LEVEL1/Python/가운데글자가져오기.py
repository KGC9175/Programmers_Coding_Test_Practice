def solution(s):
    lst = list(s)
    n = len(lst)
    
    if n % 2 == 0:
        answer = lst[(n // 2) - 1] + lst[n // 2]
    else:
        answer = lst[n // 2]
    
    return answer