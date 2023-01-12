class Node{
    constructor(value,next,pre){
        this.value = value;
        this.next = null;
        this.pre = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(value){
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }else{
            node.pre = this.tail; 
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }
    unshift(value){
        const node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.pre = node;
            this.head = node;
        }
    }
    pop(){
        if(!this.head) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp;
        }else{
            let temp = this.tail.pre;
            this.tail = temp;
            this.tail.next = null;
            return temp;
        }
    }
    shift(){
        if(!this.head){
            this.head = null;
            this.tail = null;
        };
        this.head = this.head.next 
        this.head.pre = null;
    }
    splice(value , index){
        let node = new Node(value)
        let temp = this.head;
        
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }

        temp.next.pre = node;
        temp.pre.next = node;
        node.next = temp.next;
        node.pre = temp.pre;
        /**
         * let pre = temp.pre;
         * pre.next = node;
         * node.next = temp.next;
         * temp.pre = node;
         * node.pre = pre;
         **/
        

    }
    print(){
        let temp = this.head;
        while(temp){
            console.log(temp.value)
            temp = temp.next;
        }
    }
}
let dll = new DoublyLinkedList();
[8,89,2,9,8,5,9,5,9,].forEach(ele => dll.push(ele))
// dll.shift()
// dll.unshift(100)
dll.splice(121212,3)
// dll.pop()
dll.print();