class Node{
    constructor(value, next){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
    }
    push(value){
        const node = new Node(value);

        if(!this.top){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        return this
    }

    pop(){
        if(!this.top) return false;
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp; 
    }

    peek(){
        console.log( this.top.value)
        return this.top.value
    }
    isEmpty(){
        console.log(this.top === null);
        return this.top === null;
    }
    print(){
        let temp = this.top;
        while(temp){
            console.log(temp.value)
            temp = temp.next
        }
    }
}

const s = new Stack();
[1,2,3,4,5,6,78,9,].forEach(ele => s.push(ele));
// s.isEmpty()
s.pop()
s.pop()
s.pop()
s.pop()
s.peek()

s.print()