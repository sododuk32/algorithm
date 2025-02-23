/**
 * 선형 검색의 경우 내장 메서드로 대체가능함. 단 자료형이 array 이여야함. 
 * 평소에 쓰던 indexof find findIndex 등 이 있음. 
 * o(n)
 * 특정 문자열을 검색할때 utf 8 로 변환후 찾는것도 있지만 boyer moore 알고리즘 으로 분할정복 하는 방법도 존재함. 
 */

// indexOf랑 같은 LinearSearchFromArray
// base 가 존재하는 재귀적 선형탐색
function LinearSearchFromArray (input,array) {

    let count = 0;
    while(count < array.length -1 &&input !== array[count])
    {
        count++;
      
    }
    
  
    if(input !== array[count])
    {
        return -1
    }
    return count

}

const testAr = [4,5,3,6,7,8,33683647,"sdf"]


try {
    console.log(LinearSearchFromArray(3,testAr))    
} catch (error) {
    console.log(error)
}
