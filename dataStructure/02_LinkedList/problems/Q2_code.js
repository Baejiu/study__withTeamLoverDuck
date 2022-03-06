// 스스로 먼저 풀어본 것.
// left의 수가 1과 같거나 작은 경우 에러가 나서 조건을 앞에 입력해줬다
var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }
  if (left <= 1) {
    let curr = head;
    let reHaed = head;
    let prev = null;
    let temp = null;
    let index = 1;
    let reTail = curr;
    let nextNode = curr.next;
    curr.next = temp;

    do {
      temp = curr;
      curr = nextNode;
      nextNode = curr.next;
      curr.next = temp;
      index++;
    } while (right !== index);
    if (!nextNode) {
      return curr;
    }
    if (!prev) {
      head.next = nextNode;
      return curr;
    }
    reHead.next = curr;
    reTail.next = nextNode;
    return head;
  }

  let curr = head;
  let prev = null;
  let temp = null;
  let index = 1;

  while (left !== index) {
    prev = curr;
    curr = curr.next;
    index++;
  }
  let reHead = prev;
  let reTail = curr;
  let nextNode = curr.next;
  curr.next = temp;

  do {
    temp = curr;
    curr = nextNode;
    nextNode = curr.next;
    curr.next = temp;
    index++;
  } while (right !== index);

  reHead.next = curr;
  reTail.next = nextNode;
  return head;
};

//강의 솔루션!
var reverseBetween = function (head, left, right) {
  let currentPosition = 1;
  let curr = head;
  let rHead = head;

  while (currentPosition < left) {
    rHead = curr;
    curr = curr.next;
    currentPosition++;
  }

  let temp = null;
  let rTail = curr;

  while (currentPosition >= left && currentPosition <= right) {
    const nextNode = curr.next;
    curr.next = temp;
    temp = curr;
    curr = nextNode;
    currentPosition++;
  }

  rHead.next = temp;
  rTail.next = curr;

  if (left > 1) {
    return head;
  } else {
    return temp;
  }
};
