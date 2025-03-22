import { Node } from "../linkedList/ret";

class Stacks{

    constructor(){
        this.first=null;
        this.last=null;
        this.size= 0;

    }

    push(node) {
        if(!this.first)
        {
            this.first = node;
            this.last = node;
        }
        else if(!this.first.next) {
            this.first.next = node;
            this.last = node
        }
        else {

            this.last.next = node;
            this.last = node;

        }

        this.size++;
        return this
    }
    pop(){
        if(!this.first) return null;

        const removed = this.first;

        this.first = this.first.next;

        if(!this.first) this.last = null;
        this.size --;
        return removed;
    }
}


const Stacks = new Stacks();

