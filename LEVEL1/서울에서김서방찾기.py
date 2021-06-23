def solution(seoul):
    
    for i in range(len(seoul)):    
        if seoul[i]=='Kim':
            ex = i
            break

    return '김서방은 ' + str(ex) + '에 있다'