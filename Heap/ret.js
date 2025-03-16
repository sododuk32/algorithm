// import {BinaryNode} from "../BST/ret.js";

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
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(idx > 0)
        {
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx + 2;
            let leftChild; 
            let rightChild;
            let swap = null; 

            if(leftChildIdx < length)
            {
                leftChild = this.values[leftChildIdx]
                if(leftChild > element)
                {
                    swap = leftChildIdx
                }
            }
            if(rightChild < length)
            {
                rightChild = this.values[rightChildIdx]
                if( (swap === nuill && rightChild > element) ||
                    (swap !== null && rightChild > leftChild) )
                {
                    swap = rightChildIdx
                }
            }

            if(swap == null) break; 
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

                // 변화없으면 루프 중단
            
        }
    }
}





export function MaxInit(){

    const mbh = new MaxBinaryHeap();

    mbh.initVal([1,2,3,4,60,70,80,90,91,100].reverse())
    console.log("before")
    console.log(mbh) 
    console.log("--- ")
    console.log("insert 5 ")
    console.log("--- ")

    mbh.insert(71);
    console.log("after")
    console.log(mbh)

    console.log("--- ")
    console.log("max heap ")
    console.log("--- ")


    mbh.insert(72);
    console.log("after max")
    mbh.extractMax();
    mbh.extractMax();


    console.log(mbh)
}

// MaxInit

MaxInit()