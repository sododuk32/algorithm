
const util = require('util');

class Node {
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }

}


let first = new Node("hi")

first.next = new Node("there");

first.next.next = new Node("how")

first.next.next.next = new Node("are")

first.next.next.next = new Node("you")


// head, tail , length, node를 가짐
// 노드는 반드시 다음 노드를 가리키거나 리스트가 null이여야함 
// 마지막 node는 tail에 저장됨
// 현재 node는 head에 저장됨. 
// 
class SinglyLinkedList {

    constructor(val){
        this.length = 0;
        this.head = null;
        this.tail = null;

        // head와 tail은 전체 노드의 현재 상태를 출력하는거임
        // length는 객체 깊이떄문에 length를 의도적으로 추적하는거 처럼 보임
    }
    /**
    *    val을 받아서 새 node 생성 val에 받은값 삽입
    *    head가 null이라면 빈 리스트라는거고, head,tail 둘다 이 노드를 가리키도록함
    *    리스트가 null이 아니라면 마지막 노드의 next를 이 새 node를 가리키도록함.
    * @param {*} val 
    */
    push(val)
    {
        const newOne = new Node(val);
            
        if(!this.head)
        {
        this.head=newOne;
        this.tail = newOne;
        }
        else {
            this.tail.next = newOne; 
            this.tail = newOne;
        }
        this.length += 1; 
        return this;
    }

    
    pop()
    {
       if(!this.head) return undefined
       let current = this.head;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next;
        }

       if(prev)
       {
        prev.next=null;
        this.tail=prev;
       }
       else {
        this.head= null;
        this.tail=null;
       }
       if (this.length > 0) this.length -= 1; 
       return current;
    }

}

// let sList = new SinglyLinkedList

// sList.push("hello");
// sList.push("good bye");
// sList.push("see ya");

// console.log(sList);
// console.log(JSON.stringify(sList, (key, value) => (key === 'next' ? value : value), 2));

// console.log(util.inspect(sList, { depth: null, colors: true }));




let sList = new SinglyLinkedList();

sList.push("Node 1");
sList.push("Node 2");
sList.push("Node 3");

console.log("Before pop:");
console.log(sList);
console.log("00000000000000000000000000000000000000000000")

sList.pop();

console.log("After one pop:");
console.log(sList);


