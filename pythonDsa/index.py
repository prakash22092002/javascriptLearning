

arr = [1 , 2 , 3 , 4 , 1 , 1 , 5 , 0 , 9  , 10]
target = 6
k = 3

start = 0
end = 0
total = 0

count = 0
while end < k:
    total += arr[end]
    end+=1

if total == target:
    count += 1

start = 1
for i in range(end , len(arr)):
    total += arr[i]
    total -= arr[start]
    if total == target:
        count += 1
    start += 1
print(count)