/**
 * Binary search algorithm 
 * 이진 탐색은 분류가 되어있어야 원하는 시간복잡도 내로 동작함. 
 * ordered 되지않은 집합은 사용의미없음. 즉 분류 조건이 정해져야함.
 * 왼쪽 오른쪽 포인터를 지정한다음 탐색값이 중간값보다 크냐 작냐로 범위를 좁힘. 
 * 이또한 재귀적 방법이 유요하게 동작함. 만약 수가 많다면 재귀적 동작 이전에 범위를 좁힐 방법을 구해야할것임. 
 */

//슈도 코드 예상 

// input 이 middle 보다 클 경우 left를 움직임 

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
