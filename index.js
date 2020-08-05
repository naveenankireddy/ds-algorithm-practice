//datastructures

//singly linked list creat, insert and delete
class Node {
  constructor(data, next = null) {
    this.data = data;
    thiis.next = next;
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
