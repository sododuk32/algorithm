// 가중:각 꼭지점 간의 선(간선)을 이을때의 간선에 가중치가 존재하는걸 가중 그래프 라 칭함
// 방향: 각 꼮지점 간의 선(간선)이 방향성을 가질때 방향 그래프라 칭함.

// 그래프 ,그래프탐색,그래프 정렬 등 배워야할듯. 
// 그래프 노드는 방향,무방향 그래프,
// 가중,비가중 그래프가 존재하며 방향 속성과 가중 속성은 
// 따로 관리되는 개념이라 봐면된다. 


/**
 * 인접 행렬 ,인접 리스트
 * 그래프를 노드 기준의 행렬로 표현이 가능함. 
 * 노드 1개가 행렬 1줄이 되는것.
 * 행열 구조를 통해 표현가능, key-value의 hash map으로 표현도 가닝 
 * 
 * 특징: 
 * 행열의 경우 특정 간선 탐색이 월등히 빠름. ( 리스트의 경우 인접한 내부 요소가 많으면 탐색속도가 느려짐. )
 * 행열의 경우 빈공간 또한 간선이 없다는 정보를 저장해야해서 공간이 더 커짐. 즉 탐색대상이 많아짐.
 *   
 * 리스트의 경우 있는 값만 저장하는 구조이기때문에 특정 간선 탐색을 제외한 빅o가 작음. 
 * 
 */

class VertaxNode {
    constructor(){

    }
}

class GraphList { 

    constructor(){
        this.adjacencyList = {}
    }
    // 노드추가
    addVertex(keyName){
      if(!this.adjacencyList[keyName])
      {
        this.adjacencyList[keyName] = [];
      }
    }
    // 간선 추가
    addEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1] &&  this.adjacencyList[vtx2] )
        {
            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);
        }else {
            if(!this.adjacencyList[vtx1])
            {
                this.addVertex(vtx1)
            }
            if(!this.adjacencyList[vtx2])
            {
                this.addVertex(vtx2)
            }
            this.addEdge(vtx1,vtx2)
        }
    }
    removeEdge(vtx1,vtx2){
        if(this.adjacencyList[vtx1] &&  this.adjacencyList[vtx2] ) 
            {
                this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter((v) => v !== vtx2);
                this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter((v) => v !== vtx1);

            // 아랫쪽은 내가짠거. 강의는 윗쪽이였음. 
            //   const v1 =  this.adjacencyList[vtx1].indexOf(vtx2);
            //   const v2 =  this.adjacencyList[vtx2].indexOf(vtx1);

            //   this.adjacencyList[vtx1].splice(v1,1);
            //   this.adjacencyList[vtx2].splice(v2,1);

            }
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex])
            {
                Object.keys(this.adjacencyList).forEach((v)=>{

                    const isTrue = this.adjacencyList[v].indexOf(vertex);
                    if(isTrue !== -1)
                        {
                            this.adjacencyList[v].splice(isTrue,1);

                        } 
                })

              delete this.adjacencyList[vertex];

            }
    }
    DepthSearch(start){
        let results = [];
        let visitedList = {};
        const adjacList = this.adjacencyList;
        function helperDfsRecursive(vtx){
            if(!vtx)
            {
                return null
            }
            visitedList[vtx] = true;
            results.push(vtx);
            adjacList[vtx].forEach((node)=>{
                if(!visitedList[node])
                {
                   return helperDfsRecursive(node)
                }
                
            })
        }

        helperDfsRecursive(start);
        return results;
    }
    DepthSearchIterative(start){
        const stack = [start];
        // 방문 예정 노드 
        const result= [];
        const visited = {};
        // 방문한 노드.
        visited[start] =true;
        let currentVertex;

        while(stack.length)
        {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach((node)=>{
                if( !visited[node])
                {
                    visited[node]=true;
                    stack.push(node)
                }
            }) // 인접 노드 배열.

        }
        console.log(result)

        return result;
    }
    BreadthSearch(start)
    {
        let queue = [start];
        // 방문예정 노드 관리

        let result = [];
        // 탐색순서 관리 

        let visited = new Set();
        // 이미 방문한 노드

        visited.add(start)
        while(queue.length > 0)
        {
            const poped = queue.shift();
            result.push(poped);

            this.adjacencyList[poped].forEach((node)=>{
            
            if(!visited.has(node))
            {
                visited.add(node);
                queue.push(node);
            }
          })
     

        }
        return result;
    }
}

// const Gra = new GraphList();

// Gra.addVertex("first");
// Gra.addVertex("secon2");

// Gra.addEdge("first","secon2");
// Gra.addEdge("third","secon2");
// Gra.removeEdge("third","secon2");
// console.log(Gra)

// 그래프 생성
const Gra = new GraphList();

// 정점 추가
Gra.addVertex("A");
Gra.addVertex("B");
Gra.addVertex("C");
Gra.addVertex("D");
Gra.addVertex("E");

// 간선 추가
Gra.addEdge("A", "B");
Gra.addEdge("A", "C");
Gra.addEdge("B", "D");
Gra.addEdge("C", "D");
Gra.addEdge("D", "E");

// 그래프 상태 확인 (삭제 전)
// console.log("🟢 삭제 전 그래프:", JSON.stringify(Gra.adjacencyList, null, 2));

// // 정점 삭제 테스트
// Gra.removeVertex("D"); // D 제거 → B, C, E에서도 제거되어야 함

// // 결과 확인 (D가 제거되었는지 확인)
// console.log("🔴 D 제거 후 그래프:", JSON.stringify(Gra.adjacencyList, null, 2));

// // 추가 삭제 테스트
// Gra.removeVertex("A"); // A 제거 → B, C에서도 제거되어야 함

// // 최종 결과 확인
// console.log("🔵 A 제거 후 그래프:", JSON.stringify(Gra.adjacencyList, null, 2));

console.log(Gra.DepthSearch("A"));
console.log("---")
console.log(Gra.BreadthSearch("A")); 


