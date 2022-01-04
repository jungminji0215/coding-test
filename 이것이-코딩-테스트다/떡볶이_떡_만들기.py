def binary_search(start, end, target, array):
    while start <= end:
        hight_sum = 0
        mid = (start + end) // 2

        for i in array:
            if i - mid < 0:
                continue
            else:
                hight_sum += (i - mid)

        if hight_sum >= target:
            start = mid + 1
        else:
            end = mid - 1
    return end

N, M = map(int,input().split())
H_list = list(map(int,input().split()))

end = max(H_list)

print(binary_search(0, end, M, H_list))
