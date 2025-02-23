class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;   
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
  get(index) {
        if(index < 0 || index >= this.length )
        {
            return undefined;
        }
        let counter = 0;
          let curNode;
        
        if(index  >= this.length/ 2)
        {
            curNode = this.tail;
            counter = this.length -1;
            while(counter !==index)
            {
            curNode = curNode.prev;
            counter--;
            }
            
        }
        else {
            curNode = this.head;
            counter = 0;
            while(counter !==index)
            {
            curNode =curNode.next;
            counter++;
            }
        }
        return curNode;
    }
}


var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.get(0).val); // 5
console.log(doublyLinkedList.get(1).val); // 10
console.log(doublyLinkedList.get(2).val); // 15
console.log(doublyLinkedList.get(3).val); // 20
console.log(doublyLinkedList.get(4)); // null

