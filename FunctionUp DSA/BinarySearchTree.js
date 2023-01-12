// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     };
//     insert(value){
//         const node = new Node(value);
//         if(!this.root){
//             this.root = node;
//             return this;
//         }else{
//             let temp = this.root;
//             while(true){
//                 if(value == temp.value) return false;
//                 if(temp.value > value){
//                     if(!temp.left){
//                         temp.left = node;
//                         return;
//                     }else {
//                         temp = temp.left
//                     }
//                 }else{
//                     if(!temp.right){
//                         temp.right = node;
//                         return;
//                     }else {
//                         temp = temp.right;
//                     }
//                 }
//             }
//         }
//     }

//     insertRec(root ,value ){
//         if( root === null) {
//             root = new Node(value);
//             return root;
//         }

//         if(root.value > value){
//             this.insertRec(root.left ,value)
//         }else{
//             this.insertRec(root.right , value)
//         }
//         return root;
//     }

//     inOder(root){
//         if(!root) return null;

//         this.inOder(root.left);
//         console.log(root.value);
//         this.inOder(root.right);
//     }

//     search(root , value){ // time compleity O(H) => H -> hight
//         if(root == null ){
//             return false;
//         }
//         if(root.value > value){
//             return this.search(root.left , value);
//         }else if(root.value == value) return true;
//         else{
//            return this.search(root.right , value);
//         }
//     }

//     inoderSucceer(root){
//         while(root.left !== null){
//             root = root.left;
//         }
//         return root;
//     }

//     deleteNode(root,value){
//         if(root.value > value){
//             this.deleteNode(root.left ,value);
//         }else if(root.value < value){
//             this.deleteNode(root.right ,value)
//         }else{ //case I

//             if(root.left == null && root.right == null){
//                 return null;
//             }

//             // case II
//             if(root.right == null){
//                 return  root.left
//             }else if(root.left == null){
//                 return root.right;
//             }
//             //case III
//             let Is = this.inoderSucceer(root.right);
//             root.value = Is.value
//             root.right = this.deleteNode(root.right ,Is.value)
//         }
//         return root;
//     }
// }

// let bst = new BinarySearchTree();
// // bst.insert(4);
// // bst.insert(2);
// // bst.insert(3);
// // bst.insert(1);
// // bst.insert(5);
// // bst.insert(6);
// [4,2,3,1,5,6].forEach(ele => bst.insert( ele))
// bst.inOder(bst.root)
// console.log('')
// bst.deleteNode(bst.root , 1)
// bst.inOder(bst.root)
// // console.log(bst.search(bst.root,1));

// // console.log(bst);


//__________________________________________________;
// once more;

class Node{
    constructor(value,left,right){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
 
    insertNode(value){
        this.root = this.insertNodeRecursiv(this.root , value)
        // const node = new Node(value)
        // if(!this.root){
        //     this.root = node;
        // }else{
        //     while(true){
        //         let temp = this.root;
        //         if(temp.value < value){
        //             if(temp.right !== null){
        //                 temp = temp.right;
        //             }
        //             temp.right = node;
        //             return;
        //         }else{
        //             if(temp.left !== null){
        //                 temp = temp.left
        //             }
        //             temp.left = node;
        //             return;
        //         }
        //     }
        // }
    }
    insertNodeRecursiv(root ,value){
        if(!root){
            const node = new Node(value);
            return node;
        }

        if(root.value > value){
            root.left = this.insertNodeRecursiv(root.left ,value)
        }else{
            root.right = this.insertNodeRecursiv(root.right ,value)
        }
        return root
    }
    inOder(root){
        if(!root) return;

        this.inOder(root.left)
        console.log(root.value);
        this.inOder(root.right)
    }
    preOder(root){
        if(!root) return;

        this.preOder(root.left)
        console.log(root.value);
        this.preOder(root.right)
    }
    postOder(root){
        if(!root) return;

        this.postOder(root.left)
        console.log(root.value);
        this.postOder(root.right)
    }
    search(root ,value){
        if(!root) return null;

        if(root.value > value) {
            return this.search(root.left,value);
        }else if(root.value < value){
            return this.search(root.right,value);
        }
         return root;
    }
    findMaxNode(root){
        if(!root) return null;
        if(root.right === null) return root;
        return this.findMaxNode(root.right);
    }
    findMinNode(root){
        if(!root) return null;
        if(root.left == null) return root;
        return this.findMinNode(root.left);
    }

}
const bst = new BinarySearchTree();
bst.insertNode(6)
bst.insertNode(4)
bst.insertNode(10)
bst.insertNode(3)
bst.insertNode(1)
bst.insertNode(5)
bst.insertNode(7)       
bst.insertNode(12)
bst.insertNode(9)
bst.insertNode(8)
// console.log(bst.root);
console.log(bst.search(bst.root ,6));
// console.log(bst.findMinNode(bst.root));

// bst.postOder(bst.root);