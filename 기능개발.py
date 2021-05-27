import math

progresses = [93, 30, 55]
speeds = [1, 30, 5]

answer = []
lst = []
tmp = []

for i in range(len(progresses)):
    lst.append(math.ceil((100 - progresses[i]) / speeds[i]))

tmp.append(lst[0])
for j in range(1, len(lst)):
    if tmp[0] < lst[j]:
        answer.append(len(tmp))
        tmp = [lst[j]]
    else:
        tmp.append(lst[j])

if len(tmp) > 0:
    answer.append(len(tmp))

print(answer)