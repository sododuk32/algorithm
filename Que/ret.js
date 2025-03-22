export class Queue {
constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    }

    enqueue(value){
        let nodes = new QueueNode(value);

        if(!this.first) {
            this.first = nodes;
            this.last = nodes;
        }
        else {
            this.last.next = nodes;
            this.last = nodes;
        }
        this.size++;
    }
    dequeue(){
        
        if(!this.first) return undefined;
        
        const output = this.first;
        this.first =  this.first.next;

        if(!this.first) this.last = null;
            
    
        return output.value;
    }

}

export class QueueNode{
constructor(value)
{
    this.value = value;
    this.next = null;
}

}


function excution(){
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    
    console.log(queue.dequeue()); // 10
    console.log(queue.dequeue()); // 20
    console.log(queue.dequeue()); // 30
    console.log(queue.dequeue());
    
    
}

// excution();
