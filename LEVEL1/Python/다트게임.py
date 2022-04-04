def solution(dartResult):
    answer = []
    k = []
    
    for i in range(1, len(dartResult)):
        if dartResult[i - 1].isnumeric():
            n = int(dartResult[i - 1])
            if i < 3:
                if n == 0 and i == 2:
                    n += 10
            else:
                if n == 0 and dartResult[i - 2].isnumeric():
                    n += 10
        
        if dartResult[i] == 'S':
            n = n ** 1
            k.append(n)
        elif dartResult[i] == 'D':
            n = n ** 2
            k.append(n)
        elif dartResult[i] == 'T':
            n = n ** 3
            k.append(n)

    dartResult += 'a'
    
    for i in range(1, len(dartResult) - 1):
        if dartResult[i] == 'S' or dartResult[i] == 'D' or dartResult[i] == 'T':
            tmp = k[len(answer)]
            if dartResult[i + 1] == '#':
                tmp *= (-1)
            elif dartResult[i + 1] == '*':
                tmp *= 2
                if len(answer) > 0:
                    answer.append((answer.pop() * 2))
            answer.append(tmp)            
    
    return sum(answer)