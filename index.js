class Node{
    constructor(data,next=null){
        this.data = data;
        thiis.next  = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

let list = new LinkedList();

LinkedList.prototype.insertStart = function(data){
    let newNode = new Node(data)

    newNode.next = this.head;

    this.head = newNode;
}

