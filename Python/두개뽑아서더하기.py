lst = [5, 0, 2, 7]
array = []
answer = []

for i in range(len(lst)):
    for j in range(len(lst)):
        if i == j:
            break
        else:
            array.append(lst[i] + lst[j])

answer = list(set(array))
answer.sort()

print(answer)