import { Queue,QueueNode } from './../Que/ret';

/**
 *  BFS 슈도 코드
* 1. 루트를 기준으로 재귀를 시작한다
* 2. 노드의 자식의 존재유무를 확인한 다음 해당 자식들을 queue에 쌓아둠 ( 다음 탐색 대상 대기 목록 )
* 3. 
*/

class Node {

    constructor(value)
    {
        this.left = null;
        this.right = null;
        this.value = null;
    }
}

class BFS{

    constructor(node)
    {
        this.root = null;
        searchQue = new Queue();
        visitedList = [];

    }

    BreathSearch(value,tree)
    {

    }

}