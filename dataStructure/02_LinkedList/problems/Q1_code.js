//Map 이용..
var detectCycle = function (head) {
  const map = new Map();
  if (!head || !head.next) {
    return null;
  }

  let index = 0;
  let prev = null;
  let curr = head;
  let val = null;
  let nextVal = null;

  while (true) {
    prev = curr;
    curr = curr.next;
    if (!curr || !curr.next) {
      return null;
    }
    val = prev.val;
    nextVal = curr.val;
    index++;
    if (map.has(nextVal)) {
      let mapArr = map.get(nextVal);
      let getItem = mapArr.filter((item) => {
        return item === curr && item.next === curr.next;
      });
      if (getItem[0]) {
        break;
      } else {
        map.set(val, [...mapArr, prev]);
      }
    } else {
      map.set(val, [prev]);
    }
  }
  return curr;
};

//그렇죠 Node는 고유값이죠.. value가 같아도 next가 다르잖아요?
//강의 진행 중 솔루션 받은 고유값 특성을 이용한 Set! very Good!
var detectCycle = function (head) {
  const set = new Set();
  let curr = head;

  while (!set.has(curr)) {
    if (!curr || !curr.next) {
      return null;
    }

    set.add(curr);
    curr = curr.next;
  }
  return curr;
};
