# 모의고사
# Level : 1
# Category : 완전탐색
'''
answers = list(map(int, input().split()))
one = [1, 2, 3, 4, 5]
two = [2, 1, 2, 3, 2, 4, 2, 5]
three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
count_1, count_2, count_3 = 0, 0, 0
answer = []

for i in range(len(answers)):
    if one[i] == answers[i]:
        count_1 += 1
    if two[i] == answers[i]:
        count_2 += 1
    if three[i] == answers[i]:
        count_3 += 1

count = [count_1, count_2, count_3]
# print(count)

for i in range(3):
    if count[i] == max(count):
        answer.append(i + 1)

print(answer)
'''
def solution(answers):
    one = [1, 2, 3, 4, 5]
    two = [2, 1, 2, 3, 2, 4, 2, 5]
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    count_1, count_2, count_3 = 0, 0, 0
    answer = []
    
    for i in range(len(answers)):
        if one[(i%5)] == answers[i]:
            count_1 += 1
        if two[(i%8)] == answers[i]:
            count_2 += 1
        if three[(i%10)] == answers[i]:
            count_3 += 1
    
    count = [count_1, count_2, count_3]
    
    for i in range(3):
        if count[i] == max(count):
            answer.append(i + 1)
    
    return answer

