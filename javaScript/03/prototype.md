# 프로토타입(Prototype)

자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어입니다.  
프로토타입이의 사전적인 의미는 원래의 형태, 또는 전형적이 예, 기초 또는 표준이라고 되어있습니다. 자바스크립트에서 프로토타입은 객체간의 상속, 부모 역할을 하는 객체가 갖고있는 프로퍼티들을 자식 객체들이 활용할 수 있게 해주는 기능을 구현하기 위해 사용됩니다.

## [[Prototype]]

자바스크립트의 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지고 있습니다. [[Prototype]]이라는 내부 슬롯은 자기 자신의 원형이 되는 객체를 가리킵니다.
프로토타입의 원형이 되는 객체도 자신의 프로토타입이 되는 객체를 가리키고, Object객체에서 null값으로 끝나게 됩니다.
이 내부 슬롯을 통해 스코프처럼 원형이 되는 객체와 단방향으로 연결되어 있습니다.

프로토타입은 생성자 함수를 생성하게 되면 생성자함수를 위한 prototype도 함께 생성됩니다.
prototype객체의 constructor항목을 통해 생성자함수를 가리키고 있으며 서로를 참조하고 있습니다.

생성자함수에서 메서드를 등록하게 되면 prototype의 프로퍼티로 등록이 되고, 자식 객체 인스턴스들이 사용 가능합니다.

## 프로토타입 체인

스코프처럼 원형이 되는 객체로 단방향 연결되어있는 것을 뜻합니다.
스코프가 식별자를 찾는 것처럼 프로토타입객체에 등록된 메서드를 찾을 때 이용됩니다.

## non-constructor

축약표현으로 생성된 함수나 화살표 함수로 정의된 함수는 prototype 프로퍼티가 존재하지 않습니다. 즉, prototype 객체는 constructor 함수만 가지고 있는 프로퍼티입니다.

## 객체 리터럴의 prototype은?

자바스크립트가 객체를 생성하는 방법은 객체 리터럴, new Object(), 생성자 함수, 사용자정의 생성자 함수, 클래스, Object.create메서드 5가지가 있습니다.
각 생성 방식에는 차이가 있으나 자바스크립트 엔진은 객체를 생성할 때 추상연산에 의해 생성된다는 공통점이 있습니다. 추상연산은 자신이 생성할 객체를 인수로 받고 전달받은 값이 있으면 그 데이터의 Prototype객체, 없으면 {} 빈 객체를 할당하고 Object.prototype을 등록합니다. 이 추상연산을 통해 객체 리터럴도 Object의 기능을 상속받을 수 있습니다.