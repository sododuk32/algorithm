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
    get(index)
    {
        if (index < 0 || index >= this.length) {
            return undefined; 
        }
        let counter = 0;
        let currentsNode;
        if(index > this.length/2)
        {
            currentsNode = this.tail;
            counter = this.length - 1;
            while(counter !== index)
            {
                currentsNode= currentsNode.prev;
                counter--;
            }
     
        }
        else {
            currentsNode = this.head;
            while(counter !== index)
            {
                currentsNode= currentsNode.next;
                counter++;
            }
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
    
        if (index === this.length) {
            return this.push(nodes); // 리스트의 끝에 삽입
        }
        if (index === 0) {
            return this.unshift(nodes); 
        }
    
        const newNode = new Node(nodes);
        const prev = this.get(index - 1);
        const nextNode = prev.next;
    
        prev.next = newNode; 
        newNode.next = nextNode;
        newNode.prev = prev; 
    
        if (nextNode) {
            nextNode.prev = newNode; // 다음 노드가 존재하면, 그 노드의 prev를 새 노드로 설정
        }
    
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
    
        if (index === 0) {
            return this.shift(); // 첫 번째 노드를 제거
        }
    
        if (index === this.length - 1) {
            return this.pop(); // 마지막 노드를 제거
        }
    
        const prev = this.get(index - 1); // 삭제할 노드의 이전 노드
        const curNode = prev.next; // 삭제할 노드
        const nextNode = curNode.next; // 삭제할 노드의 다음 노드
    
        prev.next = nextNode; // 이전 노드의 next를 삭제할 노드의 next로 설정
        if (nextNode) {
            nextNode.prev = prev; // 삭제할 노드의 다음 노드의 prev를 이전 노드로 설정
        }
    
        curNode.next = null; // 삭제할 노드의 next를 null로 설정
        curNode.prev = null; // 삭제할 노드의 prev를 null로 설정
        this.length--;
        return curNode; // 삭제된 노드 반환
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
dll1.printList(); 


dll1.unshift("13");
dll1.printList(); 

dll1.shift();
dll1.printList();  

