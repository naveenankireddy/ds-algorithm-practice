//datastructures

//singly linked list creat, insert and delete
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

let list = new LinkedList();

LinkedList.prototype.insertStart = function (data) {
  let newNode = new Node(data);

  newNode.next = this.head;

  this.head = newNode;
  return this.head;
};

LinkedList.prototype.insertEnd = function (data) {
  let newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  let tail = this.head;
  while (tail.next != null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
};

// A helper function getAt() is used to define particular postion

LinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};

//the insert at function is used to define at given index

LinkedList.prototype.insertAt = function (data, index) {
  //if the list is to be empty ie head = null
  if (!this.head) {
    this.head = new node(data);
    return;
  }
  // if the new node is inserted at the front of the list that means before the head
  if (index === 0) {
    this.head = new Node(data, this.head);
    return;
  }


  //we can use getAt() to find the previous node

  const previous = this.getAt(index - 1);
  let newNode = new Node(data);
  newNode.next = previous.next;
  previous.next = newNode;
  return this.head;
};

// deleting the first node

LinkedList.prototype.deleteStart = function (data) {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
};

//deleting last node
LinkedList.prototype.deleteEnd = function (data) {
  if (!this.head) {
    return null;
  }

  //contains only one node

  if (!this.head.next) {
    this.head = null;
    return;
  }

  let previous = this.head;
  let tail = this.head.next;
  while (tail.next !== null) {
    previous = tail;
    tail = tail.next;
  }

  previous.next = null;
  return this.head;
};

//delete node ramdom that mean anywhere we want

LinkedList.prototype.deleteRandom = function (index) {
  // when list is empty i.e head = null
  if (!this.head) {
    this.head = new Node(index);
    return;
  }

  // delete node at first of the node
  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  //we can use getAt() to find previous node

  const previous = this.getAt(index - 1);

  if (previous || previous.next) {
    return;
  }
  previous.next = previous.next.next;
  return this.head;
};



//stack mainly works on L-I-F-O principle last-in-first-out

class Stack {
  constructor(){
      this.data = [];
      this.top = 0;
  }
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }
 length() {
    return this.top;
 }
 peek() {
    return this.data[this.top-1];
 }
 isEmpty() {
   return this.top === 0;
 }
 pop() {
  if( this.isEmpty() === false ) {
     this.top = this.top -1;
     return this.data.pop(); // removes the last element
   }
 }
 print() {
    var top = this.top - 1; // because top points to index where new    element to be inserted
    while(top >= 0) { // print upto 0th index
        console.log(this.data[top]);
         top--;
     }
  }
  reverse() {
     this._reverse(this.top - 1 );
  }
  _reverse(index) {
     if(index != 0) {
        this._reverse(index-1);
     }
     console.log(this.data[index]);
  }
}

