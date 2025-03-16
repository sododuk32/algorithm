// import { BinaryNode } from "../BST/ret.js";

// 우선순위큐는 탐색목적이 아님. 그건 이진탐색 트리가 훨씬나음.
// 힙의 한 종류가 이진힙임. 
// 힙은 그리고 트리의 한 종류임. 
// 2진힙은 다른 자료 구조로 변경이 용이함. 
// 이진힙은 최대,최소이진힙으로 나뉨 
// 노드는 2개의 자식이고, 자식노드들은 각각 부모보다 크거나 같다는 규칙만 지키면되서
// 밸런스있게 노드가 분배됨. 
// 저장시 배열로 저장한다음 사용가능한게 매우 편리함. 
// n ,logN의 복잡도라 ㄱㅊ 

export class HeapNode {

    constructor(p=null,v=null){
    this.priority= p;
    this.value= v;
    }
}

class MinPriorityQueue {
constructor() {
this.values = [];
}

    initVal(value)
    {
    this.values = values
    }
    Enqueue(priority, value) {
        const newNode = new HeapNode(priority, value);
        this.values.push(newNode);
        this.bubbleUp();
    }
    Dequeue(){
        const min = this.values[0];
        const ends = this.values.pop();
        this.values[0] = ends;
        this.bubbleDown();

        return ends;
        
    }
    bubbleUp(){
        let idx = this.values.length-1;
        while(idx > 0)
        {
            console.log("while")
            const parentsIdx = Math.floor((idx -1 )/2);
            const parentsNode = this.values[parentsIdx];

            if(parentsNode.priority <= this.values[idx].priority)
            {
                break;
            }

            if(parentsNode.priority > this.values[idx].priority)
            {
                this.values[parentsIdx] = this.values[idx];
                this.values[idx] = parentsNode;
                idx = parentsIdx;
            }
        }
    }
    bubbleDown(){
        const first = this.values[0]; 
        // 위치시켜야할 value ;
        let idx = 0;
        const lengths = this.values.length;

        while(true)
        {
            const leftIdx =2*idx +1;
            const rightIdx = 2*idx +2;
            let leftVal,rightVal ;
            let swap = null;

            if(leftIdx < lengths)
            {
                leftVal = this.values[leftIdx].priority;

                if(leftVal < this.values[idx].priority)
                {
                    swap = leftIdx
                }

            }

            if (rightIdx < lengths) {
                if (
                    (swap === null && this.values[rightIdx].priority < this.values[idx].priority) ||  
                    (swap !== null && this.values[rightIdx].priority < this.values[swap].priority) 
                ) {
                    swap = rightIdx;
                }
            }

            
            if(swap === null) break;

            [this.values[idx],this.values[swap]] = [this.values[swap],this.values[idx]];
            idx = swap;
        }
    }
}

class MaxBinaryHeap {

    constructor(){
        this.values = [];
        this.root=null;
    }
    initVal(value)
    {
        this.values = value;
    }
        // left child: 2n -1 , right  child:  2n -2  ; 
        // parents :  index -1  / 2 

        /**
         * 1. 루프시작시 마지막 노드를 전달받음
         * 2. 마지막 노드의 index를 받아서 bublleUp 루프 시작함. 
         * 3. base condition은 현재 index가 1보다 작거나 같을떄임. 
         *  함수형이 아니라
         * @param {*} index 
         */ 
        // function bubbleUp (index) {
        // let thisVal = this.values;
        //     const parents =Math.floor(( index -1 ) / 2);

        //     if(index > 0)
        //     {
        //         if (thisVal[parents] < thisVal[index])
        //         {
        //             // bubbleup logic 
        //             const save = thisVal[parents];
        //             thisVal[parents] = thisVal[index]
        //             thisVal[index] = save;
        //         }


        //        return bubbleUp(parents);


        //     }
        //         return thisVal;
        // }

    insert(elements)
    {
        this.values.push(elements);
        this.bubbleUp();
    }

    // 최댓값을 루트로 만들고 삭제. 
    // 그다음 큰값을 루트로 만듬.     
    extractMax()
    {
        const maxValue = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0)
        {
            this.values[0] = end;
            this.sinkDown();
        }


        return maxValue;
    }
    bubbleUp() {

        let idx = this.values.length -1; 
        //삽입한 값의 index 
        //삽입된 값 

        while(idx > 0)
        {
            const parentsIdx =Math.floor(( idx -1 ) / 2);
            if (this.values[parentsIdx] >= this.values[idx]) {
                break;  // 부모가 더 크거나 같으면 힙  > 종료
            }
            let temp = this.values[parentsIdx];
            this.values[parentsIdx] = this.values[idx];
            this.values[idx] = temp;
            idx = parentsIdx;
        }
    }
    extractMax(){
        const max =this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        // heapyfi같은거임
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(idx && idx < length)
        {
            let childLeft = 2*idx + 1;
            let childRight = 2*idx + 2;
            let childValLeft ,childValRight;
            let swap =null;

            // 더이상 자식 노드가 없으면 이 length를 벗어남.
            // 그렇게될경우 elements는 leaf임으로 교환 작업이 이뤄지면안됨.
            if(childLeft < length)
            {
                childValLeft = this.values[childLeft];

                if(childValLeft >element)
                {
                    swap = childLeft;
                }
                
            }
            if(childRight < length)
            {
                childValRight = this.values[childRight];
                if(
                    (swap === null && childValRight > element) ||
                    (swap !== null && childValRight > childValLeft) 
                  )
                    {
                        swap = childRight;
                    }
            }
            if(swap === null) break;
            // swap이 이뤄지지않는게 base condition임. 
            const cur =  this.values[idx];
            this.values[idx] = this.values[swap];
            this.values[swap] = cur;
            idx = swap;

        }
    }
}

function prio () {
    const pq = new MinPriorityQueue();
    pq.Enqueue(5, "d");
    pq.Enqueue(55, "c");
    pq.Enqueue(4, "b");
    pq.Enqueue(1, "a");
    


    console.log(pq);
    console.log("------");

    pq.Dequeue();
    console.log(pq);

}



export function MaxInit(){

    const mbh = new MaxBinaryHeap();

    mbh.initVal([55,39,41,18,27,12,33])
    // console.log("before")
    // console.log(mbh) 
    // console.log("--- ")
    // console.log("insert 5 ")
    // console.log("--- ")

    console.log(mbh.values)
    console.log(" --- ")
    console.log(mbh.extractMax() );
    console.log(mbh.values)

}

prio();

// MaxInit()