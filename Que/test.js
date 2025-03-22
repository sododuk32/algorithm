import { QueueNode} from "./ret.js"

class QueueTest {
    constructor(){
        this.first=null;
        this.last=null;
        this.size=null;

    }

    /**
     * QUEUE 는 FIFO
     * sudo code
     * 0번째 노드에 삽입.
     * 1. 예외 처리 ( 비어있을때 enqueue 시  ) , 전체 노드가 1개일땐 last 와 first가 동일해도됨. 
     * 2. first 를 보관 후 삽입된 노드로 지정 
     * 3. 보관한first node와 삽입된 노드를 연결 해줌 
     * @param {*} node 
     */
    enqueue(node){
        const temp = this.first;
        if(!this.first) {
            this.first = node;
            this.last = node;
        }else {
            const prev = this.first;
            this.first = node;
            this.first.next = prev;
        }
        this.size++;
        return temp
    }
    /**
     * 0번째 노드를 삭제함.
     */
    dequeue(){

        const temp = this.first;
        if(!this.first){
            console.log("dequeue 할 노드가 없습니다.")
            return null;
        }else {
            const newFirst = this.first?.next;
            if(this.first === this.last){
                this.last = newFirst
            }
            this.first = newFirst;
          
        }
        this.size--;
        return temp
    }
}


function excution(){
    const queue = new QueueTest();
    queue.enqueue(new QueueNode(10));
    queue.enqueue(new QueueNode(20));
    queue.enqueue(new QueueNode(30));
    
    console.log(queue.dequeue()); // 10
    console.log(queue.dequeue()); // 20
    console.log(queue.dequeue()); // 30
    console.log(queue.dequeue());
    
    
}

excution();