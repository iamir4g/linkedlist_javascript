console.log("amir")
class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function insert(head, value) {
    const newNode = new Node(value, head);
    return newNode;
  }
  
  function insertList(head, value) {
    if (head === null) {
      return new Node(value);
    }
  
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
  
    current.next = new Node(value);
    return head;
  }
  
  function size(head) {
    let count = 0;
    let current = head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
  
  function at(head, index) {
    let count = 0;
    let current = head;
    while (current !== null && count < index) {
      count++;
      current = current.next;
    }
  
    if (current === null) {
      return null;
    }
  
    return current.value;
  }
  
  function join(head, separator) {
    if (head === null) {
      return "";
    }
  
    let result = head.value;
    let current = head.next;
    while (current !== null) {
      result += separator + current.value;
      current = current.next;
    }
  
    return result;
  }
  
  function map(head, callback) {
    if (head === null) {
      return null;
    }
  
    const newNode = new Node(callback(head.value));
    const mappedList = map(head.next, callback);
    newNode.next = mappedList;
    return newNode;
  }
  
  function filter(head, predicate) {
    if (head === null) {
      return null;
    }
  
    const filteredList = filter(head.next, predicate);
    if (predicate(head.value)) {
      const newNode = new Node(head.value);
      newNode.next = filteredList;
      return newNode;
    } else {
      return filteredList;
    }
  }
  
  function find(head, predicate) {
    if (head === null) {
      return null;
    }
  
    if (predicate(head.value)) {
      return head.value;
    }
  
    return find(head.next, predicate);
  }
  const head = new Node('a');
//   const head = insertList(head, 'b');
//   const head = insertList(head, 'c');
  insertList(head,'b');
  insertList(head, 'c');
  console.log(size(head)); // 3
  console.log(at(head, 1)); // b
  console.log(join(head, ', ')); // a, b, c
  const mappedList = map(head, (value) => value.toUpperCase());
  console.log(join(mappedList, ', ')); // A, B, C
  const filteredList = filter(head, (value) => value.length === 1);
  console.log(join(filteredList, ', ')); // a