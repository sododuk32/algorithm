// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(prog, spds) {
    var answer = [];
    const days = prog.map((per, sp) => Math.ceil((100 - per) / spds[sp]));
 
    
    let currentDay = days[0];
    let count = 1;
    for(let i=0;i < days.length ; i++)
        {          
            if(days[i] <= currentDay)
                {
                    count++;
                }
            else {
                answer.push(count)
                count = 1;
                currentDay = days[i];
            }
         
        }


    return answer;
}




console.log(solution([93, 30, 55], [1, 30, 5]));
