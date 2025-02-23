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
}

class Node { 

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
  


const Btree = new BSTree();


const rootNode = new Node("5000")
const rnum = new Node(getRandomInt(0,10000)).value;

Btree.root = rootNode;
Btree.insert( new Node(getRandomInt(0,10000)))
Btree.insert(new Node(getRandomInt(0,10000)))
Btree.insert(new Node(getRandomInt(0,10000)))
Btree.insert(new Node(rnum))


console.log(JSON.stringify(Btree.root, null, 2));

console.log(Btree) 

Btree.find("5000");

console.log("------------------------")
console.log("looking for theses " + rnum)
console.log(Btree.find(rnum))