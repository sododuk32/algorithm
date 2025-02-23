export class Node {
    constructor(val)
    {
        this.val = val;
        this.next = null;

    }

}

export class SLL2 {

    constructor(val)
    {
        this.length = 0; 
        this.head=null;
        this.tail=null;
    }

    push(val)
    {
        const newNode = new Node(val);
        if(!this.head)
        {
            this.tail = newNode;
            this.head = newNode;

        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1; 
        return this;

    }
    pop()
    {
        if(!this.head)
        {
            return null
        }
          /**
         * 보기엔 이쪽이 더 좋음.
         */
        // if(this.head === this.tail)
        // {
        //     const popped = this.head;
        //     this.head = null;
        //     this.tail = null;
        //     this.length--;
        //     return popped;
        // }
        if(!this.head.next)
        {
            const popped = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return popped;
        }


        let currentNode=this.head;
        let prev;

        
        while(currentNode.next)
        {
            prev = currentNode;
            currentNode = currentNode.next
        }
        prev.next = null; 

        if(prev)
        {
            this.tail = prev;
        }
        this.length--;

        return currentNode;
    }
    shift()
    {
        if(!this.head)
        {
            return undefined;
        }
        let removedNode = this.head;

        if(!this.head.next)
        {
            this.tail =null;
            this.head =null;
        }
        else {
            this.head = this.head.next;
        }  
        this.length--;
        
        return removedNode;
    }
    unshift(addNodes)
    {
        const newOne = new Node(addNodes);
        if(!this.head)
        {
            this.head = newOne;
            this.tail =newOne;
        }
        else {
            newOne.next = this.head;
            this.head = newOne;
        }

        this.length++;
        return this
    }
    get(index)
    {
        if (index < 0 || index >= this.length) {
            return undefined; 
        }
        let counter = 0;
        let currentsNode = this.head;
        while(index !== counter)
        {
            currentsNode= currentsNode.next;
            counter++;
        }
        return currentsNode;
    }
    set(index,nodes)
    {
        let foundedNode = this.get(index);
        if(foundedNode)
        {
            foundedNode.val= nodes
            return true
        }
        
        return false
        
    }
    insert(index,nodes)
    {
        if (index < 0 || index > this.length) {
            return undefined; 
        }

        if(index===1 || index===this.length)
        {
            return this.push(nodes)
        }
        if(index===0)
        {
            return this.unshift(nodes)
        }
     
        if(index >=2)
        {
            const newOne = new Node(nodes);
            let prev =  this.get(index-1)
            let temp = prev.next;
            prev.next = newOne;
            newOne.next = temp;  
            this.length++;
            return true;
        }
        // let counter = 0;
        // let currentsNode = this.head;
        // let prev = null;
        // const newOne = new Node(nodes);

        // if(index===0)
        // {
        //     newOne.next = this.head;
        //     this.head = newOne;
        // }
        // else {
        //     while(index !==counter)
        //         {
        //             prev = currentsNode;
        //             currentsNode = currentsNode ? currentsNode.next : null;
        //             counter++
        //         }
        //         prev.next = newOne;
        //         newOne.next = currentsNode;  
        // }
        // this.length++;
    }

    remove(index)
    {
        if (index < 0 || index >= this.length) {
            return undefined; 
        }
        if(index === this.length - 1)
        {
            
           return this.pop();
        }
        if(index===0)
        {
            return this.shift();
        }
        if(index>=2)
        {
            let prev = this.get(index-1)
            let nextNode = this.get(index);

            prev.next = nextNode.next;
            nextNode.next = null;

            this.length--
            return nextNode;
        }

    }
    reverse()
    {
        if (this.length <2) {
            return this.head; 
        }
        let prev = null;
        let current = this.head;
        let next = null;
        
        while (current !== null) {
            next = current.next; 
            current.next = prev; 
            // 끊어낼 노드값을  먼저 보관 후 노드의 연결지점을 재 연결 함.  
            prev = current;      
            current = next;       
        }
    
        // 마지막에 prev가 새로운 head가 됨
        this.head = prev;
        this.tail = current;


        // 이하는 내가 처음에 그림보고 짜본거. 
        // let counter = this.length;
        // let newHead = this.tail;
   
        // let newNext = get(counter -1);
        // newHead.next = newNext;

        // let newCur;
        // while(counter-1 !== 0 && counter -1 >-1)
        // {
            
        //     newCur = get(counter-2);
        //     newNext.next= newCur;

        // }
        // if(counter-1 === 0)
        // {
        //     newNext.next = null;
        //     this.tail = newNext;
        // }
    }

     money() {
        const m = 3000;  // 원금
        const l = 1.22;  // 월 22% 이자율 (1.22배 증가)
        let re = m;  // 첫 달은 원금 그대로 시작
        let wol =1;
        for (let i = 1; i < 24; i++) {
            re = re * l;  // 매달 1.22배씩 증가
            if(i>12 && wol >=1)
            {
               wol= wol -1;
               re = re - 1500;
            }
        }
    
        return re;
    }
    // 모든 메서드는 슈도코드를 떠올리며 재작성 해야함. 
    // 연결리스트는 효용성 보단 자료구조의 node 라는 개념을 다루고 이해한다는 생각으로 접근해야함.
}

function getArrayFromList(list) {
    const arr = [];
    let current = list.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }


// const list1 = new SLL2();
// console.log("Initially:", getArrayFromList(list1));    
// // → []

// console.log("Shift from empty:", list1.shift());       
// // → undefined

// console.log("After shift:", getArrayFromList(list1));  
// // → []

// // 2) 노드 하나만 있는 리스트에서 shift()
// const list2 = new SLL2();
// list2.push("A");
// console.log("\nSingle-node list:", getArrayFromList(list2)); 
// // → ["A"]

// console.log("Shift once:", list2.shift()?.val);        
// // → "A"

// console.log("After shift:", getArrayFromList(list2));  
// // → []

// console.log("Shift again (empty):", list2.shift());    
// // → undefined

// // 3) 노드 여러 개가 있는 리스트에서 shift() 여러 번
// const list3 = new SLL2();
// list3.push("X").push("Y").push("Z");
// console.log("\nMulti-node list:", getArrayFromList(list3));   
// // → ["X", "Y", "Z"]

// console.log("Shift 1:", list3.shift()?.val);  
// // → "X"

// console.log("After shift 1:", getArrayFromList(list3)); 
// // → ["Y", "Z"]

// console.log("Shift 2:", list3.shift()?.val);  
// // → "Y"

// console.log("After shift 2:", getArrayFromList(list3)); 
// // → ["Z"]

// console.log("Shift 3:", list3.shift()?.val);  
// // → "Z"

// console.log("After shift 3:", getArrayFromList(list3)); 
// // → []

// console.log("Shift on empty list again:", list3.shift()); 
// // → undefined

// console.log("After shift:", getArrayFromList(list3));   
// // → []


const list = new SLL2();
list.push("A").push("B").push("C").push("D");

console.log("Get element at index 4:", getArrayFromList(list)[4]);  // 

list.insert(2,"insertedNode");
console.log("insertedNode List as array:", getArrayFromList(list));  
// 1) get 테스트
console.log("Get element at index 0:", getArrayFromList(list)[0]);  // "A"
console.log("Get element at index 2:", getArrayFromList(list)[2]);  // "C"
console.log("Get element at index 3:", getArrayFromList(list)[3]);  // "D"
console.log("Get element at index 1:", getArrayFromList(list)[1]);  // 
console.log("Get element at index 4 after set:", getArrayFromList(list)[4]);  // 

// 2) 리스트 상태 확인
console.log("List as array:", getArrayFromList(list));  // ["A", "B", "C", "D"]

list.shift();
list.shift();
list.shift();
list.shift();
list.set(-1,"no")
console.log("List as array:", getArrayFromList(list));  

const usd_to_krw = 1450;
const final_krw = (list.money() * usd_to_krw) - ((list.money() * usd_to_krw -250)*0.22 );


console.log(final_krw);
