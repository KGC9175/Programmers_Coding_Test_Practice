def solution(s, n):
    answer = []
    arr = list(s)

    for i in range(len(arr)):
        if arr[i] == ' ':
            answer.append(' ')
        elif arr[i].isupper():
            answer.append(chr((ord(s[i]) - ord('A') + n) % 26 + ord('A')))
        elif arr[i].islower():
            answer.append(chr((ord(s[i]) - ord('a') + n) % 26 + ord('a')))

    return ''.join(answer)