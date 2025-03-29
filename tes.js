function solution(A,B){
    var answer = 0;
    let total; 
    const AA = A.sort((a,b)=> a - b);
    const BB = B.sort((a,b)=> b - a);

    for(let i = 0; i < A.length ;i++)
        {
            answer+=  AA[i] * BB[i]
        }

    return answer;
}

function solution2(s) {
    let result;
    let curString = s;
    let counter =0
    let zeroes  =0
    while(curString !== "1")
        {
            zeroes += (curString.match(/0/g) || []).length;
            console.log("제거할 0의 개수 "	+zeroes)
            let strs = curString.replaceAll("0","");
            console.log("0 제거 후 길이	 " + strs.length)

            result = Number(strs.length).toString(2);
            console.log("이진 변환 결과  " + result)


            counter++;
            curString = result;
        }
    return [counter,zeroes];
}


// console.log(solution([1, 4, 3], [5, 4, 3]));
console.log(solution2("1111111"));
