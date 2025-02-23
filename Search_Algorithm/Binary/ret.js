/**
 * Binary search algorithm 
 * 이진 탐색은 분류가 되어있어야 원하는 시간복잡도 내로 동작함. 
 * ordered 되지않은 집합은 사용의미없음. 즉 분류 조건이 정해져야함.
 * 왼쪽 오른쪽 포인터를 지정한다음 탐색값이 중간값보다 크냐 작냐로 범위를 좁힘. 
 * 이또한 재귀적 방법이 유요하게 동작함. 만약 수가 많다면 재귀적 동작 이전에 범위를 좁힐 방법을 구해야할것임. 
 */

//슈도 코드 예상 

// input 이 middle 보다 클 경우 left를 움직임 
// 비교값인 mid는 재귀하며 비교했으니 mid보다 한칸 크거나 작은 index로 이동시켜야함. 
// 문자열 탐색시 정확한 값을 탐색하는건 숫자 알고리즘과 동일하지만, 유사도가 높은 범위를 가진 결과를 얻으려면
// 비교 시 조금 더 많은 알고리즘을 사용해야하며, 검색엔진, 엘라스틱 탐색과 같은 다른 방법을 생각하는게 더 나음. 

function caseNumber(array,input)
{
    const lengA = array.length ;
    let left = 0;
    let right = lengA -1 ;

    while(left <= right )
    {
        let mid = Math.floor((right+left) / 2)
        if(input > array[mid])
        {
            left = mid+1;
        
        }
        else if (input <  array[mid]){
            right = mid-1;
        
        }
        else if (input ===  array[mid]) {
            return array[mid]
        }
    }

    return -1
}
 
// function caseNumber(array,input)
// {
//     const lengA = array.length;
//     const start = array[0];
//     const end = array[lengA-1];
//     let middle = array[lengA/2];
// }

function BinarySearch(array, input, type) {
    let results;
    switch(type) {
        case "number":
            results = caseNumber(array, input);
            break;
        // case "number":
        //     results = caseNumber(array, input); // caseNumber 함수 구현 필요
        //     break;
        default:
            results = caseNumber(array, input);
            break;
    }
    console.log(results)
    return results;
}



try {

    const testArray = [1,2,3,4,5,6,7,8,9,100,123123,255];
    console.log(BinarySearch(testArray, 100, "number"));    
} catch (error) {
    console.log(error)
}
