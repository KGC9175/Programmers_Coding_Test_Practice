def solution(n, arr1, arr2):
    answer = []
    
    for i in range(n):
        arr1[i] = list(format(arr1[i], 'b'))
        arr2[i] = list(format(arr2[i], 'b'))
        
        while len(arr1[i]) < n:
            arr1[i].insert(0, 0)
        while len(arr2[i]) < n:
            arr2[i].insert(0, 0)
        
        for j in range(n):
            if int(arr1[i][j]) != int(arr2[i][j]):
                arr1[i][j] = 1
        
        a = ''        
        for k in range(n):
            if int(arr1[i][k]) > 0:
                a += '#'
            else:
                a += ' '
        answer.append(a)

    return answer