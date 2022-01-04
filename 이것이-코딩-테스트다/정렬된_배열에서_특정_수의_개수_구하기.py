def first(array, target, start, end):
    if start > end:
        return None

    mid = (start + end) // 2

    if(mid == 0 or target > array[mid -1]) and array[mid] == target:
        return mid
    elif array[mid] >= target:
        return first(array, target, start, mid - 1)
    else:
        return first(array, target, mid + 1, end)

def last(array, target, start, end):
    if start > end:
        return None

    mid = (start + end) // 2

    if(mid == n - 1 or target < array[mid + 1]) and array[mid] == target:
        return mid
    elif array[mid] > target:
        return last(array, target, start, mid - 1)
    else:
        return last(array, target, mid + 1, end)

n, x = map(int,input().split())
array = list(map(int,input().split()))
end = len(array) - 1

first = first(array, x, 0, end)
last = last(array, x, 0, end)

if first == None or last == None:
    print(-1)
else:
    print(last - first + 1)
