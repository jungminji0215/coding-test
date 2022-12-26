class Solution{
    var answer = 0
    fun solution(numbers: IntArray, target: Int): Int {
        dfs(numbers,0,0,target)
        return answer
    }

    fun dfs(numbers: IntArray, depth: Int, sum: Int, target: Int){
        if(depth == numbers.size){
            if(sum == target){
                answer += 1
            }
            return
        }else{
            dfs(numbers, depth + 1, sum + numbers[depth], target)
            dfs(numbers, depth + 1, sum - numbers[depth], target)
        }
    }
}
