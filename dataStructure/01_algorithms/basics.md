# 1. 컴퓨터 과학 이해

- 입력 -> [ ] -> 출력
- 컴퓨터 과학에서 가장 중요한 요소는 문제 해결.
- 문제:입력 , 해결: 출력

---

## 컴퓨터의 표현

- 컴퓨터가 이해하는 언어는 이진법
- 1bit를 하나로 수를 세는 것이 아니라 패턴을 이용해 더 많은 수를 셀 수 있다.
- 1bit는 0과 1로 2개의 상태를 표현할 수 있다.
- 1111 = (2^3) + (2^2) + (2^1) + (2^0) = 8 + 4 + 2 + 1 = 15
- 00000000 ~ 11111111 256가지 경우를 나타낼 수 있다.
- 컴퓨터는 이진수를 이해한다. 사람이 사용하는 문자, 색상 등을 컴퓨터가 이해할 수 있게 변환해주는 작업을 추상화라고 한다.
  - ASCII : 문자를 숫자로 기억하는 것. (예. 72 = 1001000 = H)
  - RGB : 색상
  - UTF-8 : 한글

---

## 알고리즘

- 문제해결을 위한 단계를 순서대로 표현한 것
- 예) 책에서 원하는 단어를 찾을 때 여러 방법이 있다.
  1. 책 전체를 순차적으로 찾기(1~100) : n에 비례한다
  2. 2페이지씩 넘기며 찾기(1, 3, 5,..99) : 2/n에 비례한다
  3. 반씩 나눠서 찾기(50, (전후확인), 25, (전후확인), 12, .. ) : log n
- 소요시간을 Big O Notation(n^2, n, log n, 1)으로 표현할 수 있다.

---

## pseudocode

- 문제해결을 위한 단계를 순서대로 작성, 기록하는 것
  1. 문자로 작성
  2. 순서대로 코드 작성