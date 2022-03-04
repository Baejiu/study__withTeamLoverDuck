// Linked list의 node를 생성하는 Class
// - value를 받아서 {value, next:null} 반환
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked list를 생성하는 Class
// - value를 받아서 {head:value값을가진 node, tail: value값을가진 node, length:1} 반환
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //리스트 뒤에 추가하기
  // - 리스트에 노드가 없을 경우 head,tail에 추가함
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //리스트 뒤 추출하기(리스트에서 삭제되고 반환)
  // - 마지막 요소 전 값을 찾기 위해 head부터 순회
  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //리스트 앞 추가하기
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //리스트 앞 추출하기
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //index로 해당 위치의 node 반환
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  //index에 해당하는 노드 값 변경
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    } else {
      return false;
    }
  }

  //index에 해당 값을 가진 노드를 추가하기(중간에 추가)
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    if (index < 0 || index > this.length) {
      return false;
    }
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  //index로 해당 위치의 노드 삭제하기(중간에 삭제)
  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index > this.length) {
      return false;
    }
    const pre = this.get(index - 1);
    const temp = pre.next;
    pre.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  //리스트 뒤집기(A->B->C 를 C->B->A)
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let pre = null;
    let next = temp.next;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = pre;
      pre = temp;
      temp.next;
    }
  }
}
