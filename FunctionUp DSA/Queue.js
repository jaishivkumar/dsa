class Node{
    constructor(value, next){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.top = null;
        this.last = null;
    }
    push(value){
        const node = new Node(value)
        if(!this.top){
            this.top = node;
            this.last = node;
        }else{
            this.last.next = node
            this.last = node;
        }
    }

    pop(){
        if(!this.top) return false

        if(this.top === this.last) {
            let temp = this.top
            this.top = null;
            this.last = null;
            return temp;
        }else{
            let temp = this.top
            this.top = this.top.next;
            temp.next = null;
            return temp;
        }
    }

    isEmpty(){
        return this.top === null;
    }

    print(){
        let temp = this.top;
        while(temp){
            console.log(temp.value);
            temp = temp.next
        }
    }
}

module.exports = Queue;

// const queue = new Queue();

// [1,2,3,4,5,20,6,7,8,9].forEach(ele => queue.push(ele))

// queue.pop();
// queue.pop();
// queue.pop();
// queue.pop();
// console.log(queue.isEmpty());
// queue.print();