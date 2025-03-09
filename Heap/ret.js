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
    insert(val)
    {
        let thisVal = this.values;
        /**
         * 1. 루프시작시 마지막 노드를 전달받음
         * 2. 마지막 노드의 index를 받아서 bublleUp 루프 시작함. 
         * 3. base condition은 현재 index가 1보다 작거나 같을떄임. 
         * 
         * @param {*} index 
         */
        
        function bubbleUp (index) {

            const parents =Math.floor(( index -1 ) / 2);

            if(index >= 0)
            {
                if (thisVal[parents] < thisVal[index])
                {
                    // bubbleup logic 
                    const save = thisVal[parents];
                    thisVal[parents] = thisVal[index]
                    thisVal[index] = save;
                }


               return bubbleUp(parents);


            }
            else {
                return thisVal;
            }
   
        }

        this.values.push(val);
        const ends = this.values.length -1; 

        const maxHeapTree = bubbleUp(ends);

        this.values = maxHeapTree;
        return maxHeapTree;


    }
}





export function MaxInit(){

    const mbh = new MaxBinaryHeap();

    mbh.initVal([1,2,3,4,60,70,80,90,90,100].reverse())
    console.log("before")
    console.log(mbh) 
    console.log("--- ")
    console.log("insert 150 ")
    console.log("--- ")

    mbh.insert(150);
    console.log("after")
    console.log(mbh)
}

// MaxInit

MaxInit()