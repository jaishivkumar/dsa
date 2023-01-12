// const Queue = require('./Queue');
// class Node{
//     constructor(value,left,right){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         const node = new Node(value);

//         if(!this.root){
//             this.root = node;
//         }else{
//             let data = [];

//             data.unshift(this.root);

//             while(data.length !== 0){
//                 let temp = data.pop();
//                    if(temp.left){
//                         data.unshift(temp.left)
//                    }else{
//                     temp.left = node; 
//                     return ;
//                    } 
//                    if(temp.right){
//                     data.unshift(temp.right);
//                    }else{
//                     temp.right = node;
//                     return;
//                    }
//             }
//         }

//     }
//     inOder(root){
//         if(root == null){
//             return;
//         }
//         this.inOder(root.left)
//         console.log(root.value)
//         this.inOder(root.right)
//     }
//     preOder(root){
//         if(root == null) return;
//         console.log(root.value)
//         this.preOder(root.left);
//         this.preOder(root.right);
//     }
//     postOder(root){
//         if(root == null) return ;
//         this.postOder(root.left)
//         this.postOder(root.right)
//         console.log(root.value)
//     }
//     countOfNode(root){
//         if(root == null) return 0;
//         let left = this.countOfNode(root.left) ;
//         let right = this.countOfNode(root.right) ;
//         return left + right + 1
//     }
//     sumOfNode(root){
//         if(!root) return 0;
//         let sumOfLeft = this.sumOfNode(root.left)
//         let sumOfRight = this.sumOfNode(root.right)

//         return sumOfLeft + sumOfRight + root.value;
//     }
//     hight(root){
//         if(!root) return 0;

//         let leftHight = this.hight(root.left)
//         let rightHight = this.hight(root.right);

//         let maxHight = Math.max(leftHight , rightHight) +1;

//         return maxHight
//     }
// }


// let bt = new BinaryTree()

// bt.insert(1)
// bt.insert(2)
// bt.insert(3)
// bt.insert(4)
// bt.insert(5)
// bt.insert(6)
// // bt.insert(7)
// // bt.insert(8)
// // bt.insert(9)
// // bt.inOder(bt.root);// data comming in between
// // console.log('___________');
// // bt.preOder(bt.root); // bz of data comming in first 
// // console.log('___________');
// // bt.postOder(bt.root); // data comming in last
// // console.log(bt.countOfNode(bt.root));
// // console.log(bt.sumOfNode(bt.root));
// console.log(bt.hight(bt.root));



// /**
//  *  
//  * const queue = new Queue();

//             queue.push(this.root);

//             while(!queue.isEmpty()){
//                let temp = queue.pop();
//                console.log(temp.left , temp);
//                if(temp.left){
//                     queue.push(temp.left);
//                }else{
//                     temp.left = node;
//                     return ;
//                }
//                if(temp.right){
//                     queue.push(temp.right);
//                }else{
//                     temp.right = node;
//                     return 
//                }
//             }
//  */


//__________________________________________________________________
// once more 🤣🤣🤣🤣;
let nodeCount = 0;

class Node{
    constructor(value,left,right){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null; 
    }
    insertNode(value){
        const node = new Node(value);
        if(this.root == null){
            this.root = node;
        }else{
            let temp = [];
            temp.push(this.root);

            while(temp.length !== 0){
                let curr = temp.shift();

                if(curr.left){
                    temp.push(curr.left);
                }else{
                    curr.left = node;
                    break;
                }
                if(curr.right){
                    temp.push(curr.right);
                }else{
                    curr.right = node;
                    break;
                }
            }
        }
    }

    inOder(root){
        if(!root) return;

        this.inOder(root.left);
        process.stdout.write(`${root.value} `);
        this.inOder(root.right);
    }
    preOder(root){
        if(!root) return;

        process.stdout.write(`${root.value} `);
        this.preOder(root.left);
        this.preOder(root.right);
    }
    postOder(root){
        if(!root) return;

        this.postOder(root.left);
        this.postOder(root.right);
        process.stdout.write(`${root.value} `);
    }
    hightTree(root){
        if(!root) return  0;

        let leftSubTree = this.hightTree(root.left)
        let rightSubTree = this.hightTree(root.right)

        return Math.max(leftSubTree , rightSubTree) + 1;
    }
    searchTree(root ,value){
        if(!root) return ;

        this.searchTree(root.left ,value)
        this.searchTree(root.right ,value)

        if(root.value == value) {
            console.log(`found`);
        }
    }
    leafNode(root){
        if(!root) return;

        this.leafNode(root.left);
        this.leafNode(root.right);
        if(!root.left && !root.right ) nodeCount++;
    }
}

const bt = new BinaryTree();
[1,2,3,4,5,6,7,8].forEach(ele => bt.insertNode(ele));

// bt.inOder(bt.root) // 
// bt.preOder(bt.root) //
// bt.postOder(bt.root) // /
// console.log(bt.hightTree(bt.root));
// console.log(bt.searchTree(bt.root , 78));
bt.leafNode(bt.root)

console.log(nodeCount);

