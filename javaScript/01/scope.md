# 스코프

스코프는 변수와 함수, 객체들의 생명주기와 접근성 등을 결정하는 아주 중요한 요소입니다.
유효 범위로써 변수와 매개변수가 어디까지 유효한지 나타냅니다.

스코프는 현재 실행되는 컨텍스트를 말하며, 값과 표현식이 표현되거나 참조될 수 있음을 의미합니다. 스코프는 계층적인 구졸르 가지기 때문에 하위 스코프는 상위 스코프에 접근할 수 있지만, 반대는 불가합니다.

자바스크립트 엔진은 스코프를 활용하여 어떤 변수를 참조해야할 지 결정합니다. 스코프는 식별자 검색 시 활용되는 규칙이라도고 할 수 있습니다.

## 스코프의 종류

- 스코프는 전역과 지역으로 구분이 가능합니다.
- 코드의 가장 바깥 영역에서 선언된 변수는(전역 실행 컨텍스트에 저장) 어디서든 활용이 가능합니다.
- 지역 스코프는 예를 들어 함수 실행문 내부에서 생성된 변수는 외부에서 활용이 불가능하고, 함수 실행문 내부에서만 참조할 수 있습니다.

## 스코프체인

- 중첩 함수가 가능하기 때문에 스코프도 중첩 스코프가 생성될 수 있습니다.
- 전역 - outer() - inner() 함수가 실행이 된 경우 각각의 스코프영역을 가지며, 내부슬롯을 통해 연결되어 있습니다.
- inner에서 변수를 찾을 때 inner를 확인 후 없으면 outer, outer에 없으면 전역 .. 전역의 scope는 null이므로 변수가 없음, 방향으로 식별자를 찾습니다.
- 스코프 체인은 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결된 것입니다.

## 렉시컬 스코프

렉시컬 스코프는 내부 함수가 상위 스코프에 접근할 수 있는 능력입니다. 함수를 어디에 정의했는지에 따라 함수의 상위 스코프를 결정하는 방식을 렉시컬 스코프라고 합니다.

자바스크립트 엔진은 함수가 호출된 위치가 아닌 정의된 위치에 따라 상위 스코프를 결정합니다.