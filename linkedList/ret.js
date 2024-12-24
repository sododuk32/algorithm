class Node {
    constructor(val)
    {
        this.val = val;
        this.next = null;

    }

}

class SLL2 {

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
    get(numb)
    {
        if (numb < 0 || numb >= this.length) {
            return undefined; 
        }
        let counter = 0;
        let currentsNode = this.head;
        while(numb !== counter)
        {
            currentsNode= currentsNode.next;
            counter++;
        }
        return currentsNode;
    }
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

// 1) get 테스트
console.log("Get element at index 0:", getArrayFromList(list)[0]);  // "A"
console.log("Get element at index 2:", getArrayFromList(list)[2]);  // "C"
console.log("Get element at index 3:", getArrayFromList(list)[3]);  // "D"
console.log("Get element at index 1:", getArrayFromList(list)[1]);  // 
console.log("Get element at index 4:", getArrayFromList(list)[4]);  // 

// 2) 리스트 상태 확인
console.log("List as array:", getArrayFromList(list));  // ["A", "B", "C", "D"]