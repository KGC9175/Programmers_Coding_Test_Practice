from collections import deque

def solution(priorities, location):
    array = deque()
    for i in range(len(priorities)):
        array.append((i, priorities[i]))
    
    priorities.sort()
    count = 0
    answer = len(priorities)
    
    while array:
        x = array.popleft()
        if x[1] == priorities[-1]:
            priorities.pop()
            count += 1
            if x[0] == location:
                answer = count
                break
        else:
            array.append(x)
    
    return answer