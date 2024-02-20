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

  toArray(){
    const nodes = [];
    let currentNode = this.head;
    
    while(currentNode){
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(cb){
    return this.toArray().map(node => {
      return cb ? node.toString(cb) : node.toString();
    }).toString();
  }

  append(value){
    const newNode = new LinkedListNode(value);
  
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value){
    const newNode = new LinkedListNode(value, this.head);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.head = newNode;
  }

  find(value){
    if(!this.head){
      return null;
    }

    let currentNode = this.head;

    while(currentNode){
      if(currentNode.value === value){
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value){
    if(!this.head){
      return null;
    }

    let deletedNode = null;
    while(this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if(currentNode !== null){
      while(currentNode.next){
        if(currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if(this.tail?.value === value){
      this.tail = currentNode
    }
    return deletedNode;
  }

  insertAfter(value, prevNode){
    if(prevNode === null){
      return this;
    }
    const newNode = new LinkedListNode(value);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if(newNode.next === null) {
      this.tail = newNode;
    }
    return this;
  }
}

const list = new LinkedList();
// list.append({value: 111, name: "Pavel"});
list.append(111 );
list.append(222);
list.append(333);
list.append(444);
list.append(555);
list.append(555);
list.append(555);
list.append(555);
list.prepend(666)
list.prepend(666)
list.prepend(666)
// console.log('list', list.toString(JSON.stringify)); 
list.delete(444);
console.log('list', list.toArray()); 
console.log('list tail', list.tail); 


module.exports = {LinkedList};


