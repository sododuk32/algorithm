class Node {
 constructor(val){
 this.val = val;
 this.prev = null;
 this.next =null;

 }   
}

class doubleLinkList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    push(Newnode){
    

        if(this.length === 0)
        {
            this.head = Newnode;
            this.tail = Newnode;
        }
        else {
            this.tail.next = Newnode;
            Newnode.prev = this.tail;
            this.tail = Newnode;
        }
        this.length +=1;
        return this;
    }

    pop(){
   
        if(!this.tail)
        {
            return undefined
        }
        let popedNode = this.tail;
        if(this.length===1)
        {
            this.head = null;
            this.tail = null;

        }
        else {
            this.tail = popedNode.prev;
            this.tail.next = null;
        }

       this.length--;
       return popedNode;


    }
    shift(){
        // 노드가 0개일떄
        if(!this.head)
        {
            return undefined;
        }
        let removeNode = this.head;
        // 노드가 1개일떄
        if(!this.head.next)
        {
            this.head = null;
            this.tail = null;
        }
        else {
            
            this.head = this.head.next;
            this.head.prev = null;

        }
        this.length--;
        return removeNode;
        // 제거한 노드를 리턴
    }
    unshift(nodeInfo){
         // 노드가 0개일떄
         const newNode = new Node(nodeInfo);
         if(!this.head)
            {
            this.head = newNode;
            this.tail = newNode;
            }
            else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
            this.length++;
            return this;
    }

    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result.join(' <-> '));  // <->로 연결된 형태로 출력
    }

}
let first = new Node("14");
let second = new Node("15");
let third = new Node("16");

const dll1 = new doubleLinkList();

dll1.push(first);
dll1.push(second);
dll1.push(third);

dll1.printList();  // 순차적으로 노드를 출력

dll1.pop();
dll1.printList();  // pop 후 출력


dll1.unshift("13");
dll1.printList();  // unshift 후 출력

dll1.shift();
dll1.printList();  // shift 후 출력

