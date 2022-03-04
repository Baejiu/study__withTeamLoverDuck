//1차시도
// 리스트를 복사하고, filter로 순회하며 indexOf를 통해 존재유무를 확인하고 없는 경우 리턴,
// 있으면 복사된 리스트에서 삭제한다(splice)
// - 결과 실패: 시간 초과
// - 알고리즘에 대한 이해도 없이 접근함
// - 복제 O(n) * indexOf O(1) * 복제된 리스트에서 삭제 O(n) ,, = O(n^2)
function solution(participant, completion) {
  var answer = '';
  const completionList = [...completion];
  answer = participant.filter((person) => {
    let index = completionList.indexOf(person);
    if (index == -1) {
      return person;
    } else {
      completionList.splice(index, 1);
    }
  });
  return answer[0];
}

//2차시도
//- 두 배열을 모두 정렬한 뒤 순서대로 비교, 다르면? 그 위치가 바로 다른 한명!
//- 결과는 성공
// - 정렬 O(n) + 정렬 O(n) + 반복문 O(n) = O(3n)
function solution(participant, completion) {
  var answer = '';
  participant.sort();
  completion.sort();
  let index = 0;
  while (participant[index] == completion[index]) {
    index++;
  }
  answer = participant[index];
  return answer;
}

//스터디 강의  solution
//  해시맵 활용하기
// - 자바스크립트 객체를 만든다
// - 완주한 사람의 이름을 해당 객체의 키로, 값은 몇명이 있는지 체크해준다
// - 참가한 사람의 이름으로 루프를 돌린다
// -   완주한 사람 이름으로 만든 객체에, 참가한 사람의 이름을 제거한다
// -   만약 객체에 참가한 사람의 이름이 없다면, 반환한다
function solution(participant, completion) {
  const completedRunnerMapper = {};
  completed.forEach((runner) => {
    completedRunnerMapper[runner] = completedRunnerMapper[runner] + 1 || 1;
    participants.forEach((runner) => {
      if (completedRunnerMapper[runner]) {
        completedRunnerMapper[runner] - 1;
      } else {
        return runner;
      }
    });
  });
}
