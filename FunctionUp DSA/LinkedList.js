class Node{
    constructor(value,next){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    push(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    };
    pop(){
        if(!this.head) return false;
        if(this.head === this.tail) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp;
        }
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = pre.next;
        }
        this.tail = pre;
        this.tail.next = null
        return temp;
    };
    unshift(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        return this;
    };
    shift(){
        if(!this.head) return false;

        if(this.head === this.tail){
            let temp = this.head;
            this.head = null;
            this.tail = null;
            return temp;
        } 
        let temp = this.head;
        this.head = temp.next;
        temp .next = null;
        return temp;
    };
    get(index){
        if(index < 0 ) return false;

        let temp = this.head;

        for(let i = 0; i < index; i++){
            temp = temp.next
        }
        return temp;
    };
    set(value, index){
        if(index < 0 ) return false;

        let temp = this.head;

        for(let i = 0; i < index; i++){
            temp = temp.next
        }
        temp.value = value;
        return this;
    };
    remove(index){
        if(!this.head) return false;

        if(index == 0) this.shift;

        let temp = this.get(index-1);

        let pre = temp.next;
        temp.next = pre.next;
        pre.next = null;
        return pre;
        
    };
    reverse(){
        
        let temp = this.head;
        this.head = this.tail
        this.tail = temp;
        let pre = null;
        let next = null;

        while(temp){
            next = temp.next
            temp.next = pre;
            pre = temp;
            temp = next;
        }
        return this;
    
    }
    print(){
        let temp = this.head;
        while(temp){
            console.log(temp.value)
            temp = temp.next;
        }
    };
}

const ll = new LinkedList();

let data = [1,2,3,4,5,6,7,8,9];
data.forEach(ele => {
    ll.push(ele);
})
// ll.pop()
// let ans = ll.remove(3)
// console.log(ans)



// ll.print();
console.log('____________________ reverse');
// ll.reverse()
// ll.print();
// ll.pop();
ll.print();


// console.log(ll);
