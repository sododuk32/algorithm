import { Queue } from "../Que/ret.js";


class BSTree {

    constructor() { 

        this.root = null;
     

    }
    insert(nodes) {

        // 삽입시 필요한 조건. 
        //  root.value 비어있으면 root에 노드 삽입 
        // root.value 가 존재한다면 비교 후 좌우노드 포인터의 value 와 비교 
        // 

        if(!this.root)
        {
            this.root = nodes;
            console.log("nothing in the tree")
            return undefined;
        }
        else {
            let middle = this.root;

            while(middle)
            {
                if(middle.value > nodes.value)
                {

                    if(!middle.left)
                    {
                        middle.left = nodes
                        return this;
                    }
                    middle = middle.left
                }
                else if (middle.value < nodes.value)
                {

                    if(!middle.right)
                    {
                        middle.right = nodes
                        return this;
                    }
                    middle = middle.right
                }
                // value 가 동일한 case 
                else {
                    console.log("is not unique value")
                    return this;
                }
            }
        }
    }
    find(value) {
        if (!this.root) {
          console.log("can't find any node in tree");
          return undefined;
        } else {
          let middle = this.root;
          while (middle) {
            if (middle.value > value) {
              middle = middle.left;
            } else if (middle.value < value) {
              middle = middle.right;
            } else {
              console.log("we found the value");
              return middle;
            }
          }
          console.log("can't find value in tree");
          return undefined;
        }
      }
      
    // find(values) {
    //     if(!this.root)
    //         {
    //             console.log("can't find any node in tree")
    //             return undefined;
    //         }
    //         else {
    //             let middle = this.root;
    //             while(middle)
    //             {
    //                 if(middle.value > values)
    //                 {
    //                     middle = middle.left;
    //                 }   
    //                 else if (middle.value < values)
    //                 {
    //                     middle = middle.right
    //                 }
    //                 else {
    //                     console.log("we found the value");
    //     return middle;
    //                 }
    //                 console.log("can't find value in tree");
    //                 return undefined;
                  
    //             }
    //         }
    // }
    BFS(targets){
      let searchQue = new Queue();
      let visitedList = [];

      if(!this.root)
      {
        console.log("threr is no root value")
        return this
      }
      searchQue.enqueue(this.root) 

      // base condition 으로 array.length 도 가능
      while(Math.floor(searchQue.size) > 0)
      {
        
        let currentNode = searchQue.dequeue();  

        if (!currentNode) continue;


        let currentValue = currentNode.value;  
        visitedList.push(currentValue);

 
          if(currentValue !== targets ){
          // 모든 노드 순회임으로 동적 프로그래밍 사용해도됨. 근대 여긴 노드 2개라 left right 만 체크 
            
            if(currentNode.left){
            searchQue.enqueue(currentNode.left)  
            }
            if(currentNode.right) {
              searchQue.enqueue(currentNode.right)
            }
            
          }
          else { 
          console.log("found target");
          console.log(currentNode)
          return currentValue;
          }
      }
      return visitedList;

    }
    DFSPreOrder() {
      let data = [];
      function traverse(node)
      {
        // root node를 순회전 , 순회후 , 순회 중간에 순회리스트에 넣냐로
        // 순회 방향성이 달라짐. 
        // 이 3개는 각각 다른 목적을 가지고 사용될 수 있음. 
        
        data.push(node.value)
        node.left && traverse(node.left)
        node.right && traverse(node.right)
      }
      traverse(this.root);
      return data
    }
    DFSPostOrder() {
      let data = [];
      function traverse(node)
      {
        node.left && traverse(node.left)
        node.right && traverse(node.right)
        data.push(node.value)

      }
      traverse(this.root);
      return data
    }
    DFSInOrder() {
      let data = [];
      function traverse(node)
      {
        node.left && traverse(node.left)
        data.push(node.value)
        node.right && traverse(node.right)
      }
      traverse(this.root);
      return data
    }


}

export  class BinaryNode { 

    constructor(values){
        
    this.value=values;
    this.left=null;
    this.right=null;

    }
}

function getRandomInt(min, max) {
    // min과 max를 포함한 범위의 정수 반환
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  


  export function BSTInit() 
  {
    const Btree = new BSTree();


    const rootNode = new BinaryNode("5000")
    const rnum = new BinaryNode(getRandomInt(0,10000)).value;
    
    Btree.root = rootNode;
    Btree.insert( new BinaryNode(getRandomInt(0,10000)))
    Btree.insert(new BinaryNode(getRandomInt(0,10000)))
    Btree.insert(new BinaryNode(getRandomInt(0,10000)))
    Btree.insert(new BinaryNode(rnum))
    
    
    console.log(JSON.stringify(Btree.root, null, 2));
    
    console.log(Btree) 
    
    Btree.find("5000");
    
    console.log("------------------------")
    console.log("looking for theses " + rnum)
    console.log(Btree.find(rnum))
    
    console.log("------------------------")
    
    Btree.BFS("5000")

  }


  // BSTInit();