import { Node } from "../linkedList/ret";

/**
 * LIFO
 * 처음들어온게 스택 가장 하단부에 쌓임
 * 
 */
class TestStack{

    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = null;
    }

    push(node){
        if(!this.top){
            this.top = node;
            this.bottom = node;
        }else {
            node.next = this.top;
            this.top = node;

        }
        this.size++;
    }
    pop(){
        if(!this.top){
            console.log("pop 할게 없음")
            return null
        }
        else {
            const popped = this.top;
            if(this.top === this.bottom){
                this.top = null;
                this.bottom = null;
            }else {
                this.top =this.top.next;
            }
            this.size--;


            return popped
        }
    }
}