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
}


let first = new Node("14");

let second = new Node("15")

let third = new Node("16")

const dll1 = new doubleLinkList();

dll1.push(first);
dll1.push(second);
dll1.push(third);

console.log(dll1)

dll1.pop();
console.log("pop------------------------")
console.log(dll1)

