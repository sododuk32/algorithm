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
}

// MaxInit

MaxInit()