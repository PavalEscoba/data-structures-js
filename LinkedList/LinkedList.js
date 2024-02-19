class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;  
  }

  toString(callback){
    return  callback ? callback(this.value) : `${this.value.toString()}`;
  }
};

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value){
    const newNode = new LinkedListNode(value);

    if(!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  toArray(){
    const nodes = [];
    let currentNode = this.head;
    
    while(currentNode){
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(){
    return this.toArray().map(node => node.toString()).toString();
  }
}

const list = new LinkedList();
list.append(111);
list.append(222);
list.append(333);
list.append(444);
list.append(555);
console.log('list', list.toArray()); 
console.log('list', list.toString()); 


