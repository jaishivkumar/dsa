// class Graph{
//     constructor(){
//         this.adjencyList = new Map();
//     }
//     addVertex(vertex){
//         this.adjencyList.set(vertex , []);
//     }
//     addEdge(vertex , sourc){
//         this.adjencyList.get(vertex).push(sourc);
//         this.adjencyList.get(sourc).push(vertex);
//     }
//     bfs(vertex,visited={}){
//         let q = [];
//         q.push(vertex);
//         visited[vertex] = true;

//         while(q.length !== 0){
//             let temp = q.shift();
//             console.log(temp);
//             for(let ele of this.adjencyList.get(temp)){
//                 if(!visited[ele]){
//                     q.push(ele);
//                     visited[ele] = true;
//                 }
//             }
//         }

//     }
//     dfs(vertex,visited={}){
//         visited[vertex] = true;
//         console.log(vertex);
//         for(let key of this.adjencyList.get(vertex)){
//             if(!visited[key]){
//                 this.dfs(key , visited);
//             }
//         }
//     }
//     bft(){
//         let visited = {};
//         let count = 0;
//         for(let key of this.adjencyList.keys()){
//             if(!visited[key]){
//                 visited[key] = true;
//                 count++;
//                 this.bfs(key , visited)
//             }
//         }
//         console.log(`diconect Graph using BFS-> ${count}`);
//     }
//     dft(){
//         let visited = {};
//         let count = 0;
//         for(let key of this.adjencyList.keys()){
//             if(!visited[key]){
//                 visited[key] = true;
//                 count++;
//                 this.dfs(key ,visited);
//             }
//         }
//         console.log(`diconect Graph using DFS-> ${count}`);
//     }
//     printGraph(){
//         for(let [key , value] of this.adjencyList){
//             console.log(key , '->   ' ,value);
//         }
//     }
// }
// let graph = new Graph();
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addVertex('E')
// graph.addVertex('K')
// graph.addVertex('P')

// graph.addEdge('A', 'B')
// graph.addEdge('A', 'C')
// graph.addEdge('A', 'E')
// graph.addEdge('B','E')
// graph.addEdge('D','E')

// // graph.printGraph();
// // graph.bfs("K");
// // graph.dfs("A");
// // graph.bft();
// // graph.dft();












class Graph{
    constructor(){
        this.adjencylist = new Map();
    }
    addvartex(vertex){
        this.adjencylist.set(vertex,[]);
    }
    addegde(vertex , sourc){
        this.adjencylist.get(vertex).push(sourc)
        this.adjencylist.get(sourc).push(vertex)
    }
    bfs(vertex,visited={}){
        let q = [];
        q.push(vertex);
        visited[vertex] = true;
        while(q.length !== 0){
            let curr = q.shift();
            console.log(curr);
            for(let value of this.adjencylist.get(curr)){
                if(!visited[value]){
                    q.push(value);
                    visited[value] = true;
                }
            }
        }
    }
    dfs(vertex , visited = {}){
        console.log(vertex);        
        visited[vertex] = true;
        for(let value of this.adjencylist.get(vertex)){
            if(!visited[value]){
                visited[value] = true;
                this.dfs(value , visited);
            }
        }
    }
}

let graph = new Graph();
graph.addvartex("A");
graph.addvartex("B");
graph.addvartex("C");
graph.addvartex("D");
graph.addvartex("R");
graph.addvartex("E");


graph.addegde("A",'B');
graph.addegde("A",'D');
graph.addegde("A",'C');
graph.addegde("C",'D');
graph.addegde("C",'A');
graph.addegde("C",'E');
graph.addegde("E",'A');
graph.addegde("E",'C');

graph.bfs("A")


