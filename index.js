function linkedList() {
  function append(value) {
    const newNode = node(value);
    if (this.size == 0) {
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.nextNode != null) {
        current = current.nextNode;
      } else {
        current.nextNode = newNode;
      }
    }

    //     codevolutions solution :
    // while(curr.nextNode) {
    // curr = curr.nextNode
    // }
    //     curr.nextNode = newNode
    // }
    this.size++;
    return;
  }

  function prepend(value) {
    const newNode = node(value);
    if (this.size == 0) {
      this.head = newNode;
      this.size++;
      return;
    }
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  let size = 0;
  let head = null;
  let tail = null;

  function at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    if (!current) return "Doesnt exist";
    return current;
  }
  function pop() {
    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
    this.size--;
  }
  function contains(value) {
    let current = this.head;
    if (current.value == value) return true;
    while (current.nextNode) {
      if (current.value == value) return true;
      current = current.nextNode;
    }
    return false;
  }
  function find(value) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value == value) return i;
      current = current.nextNode;
    }
    return null;
  }
  function toString() {
    let current = this.head;
    let string = "";
    do {
      string += current.value + " => ";
      current = current.nextNode;
    } while (current);
    string += "null";
    return string;
  }

  return {
    prepend,
    append,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString
  };
}

function node(value = null, nextNode = null) {
  return { value, nextNode };
}
const list = linkedList();
list.append("second");
list.append("third");
list.append("last");
list.prepend("first");
list.append("real last");
list.pop();
console.log(list.contains("second"));
console.log(list.find("first"));
console.log(list.toString());
