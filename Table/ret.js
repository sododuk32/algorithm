function solution(n) {
    var answer = 0;
    
    let binary = n.toString(2).match(new RegExp("1","g")).length;
    let counter = n+1;
    while(answer ===0)
        {
            const otherBinary = counter.toString(2).match(new RegExp("1","g")).length;
            if(binary === otherBinary)
                {
                    answer=+1;

                }
            else {
                    counter++                    
                }
     
        }

    return counter;
}


function helper(goal)
{
    if(goal <= 2) {
        if(goal === 0) {return 0 }
        if(goal ===1 || goal === 2 ) {return 1}
    }
    if(goal > 2)
        {
            return helper(goal -1) + helper(goal -2 )
        }
}

function fib(n) {
 return helper(n) % 1234567;
 
}

function solution3(n)
{
    let count=0;
    let nn=n;
  while(nn>0)
  {
    if(nn%2 ===1)
    {
        count++;
        nn= nn-1;
    }
    if(nn%2 ===0)
    {
       nn= nn/2
    }
  }
  return count
}

console.log(solution3(5))

// console.log(solution(78))