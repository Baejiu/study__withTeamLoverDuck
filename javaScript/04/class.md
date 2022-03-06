# Class

자바스크립트에서는 ES6부터 클래스 키워드로 객체를 생성할 수 있도록 제공합니다.

클래스를 이용해 객체 인스턴스를 생성할 수 있으며, 클래스 내부에 constructor, 메서드, static 메서드, 클래스필드 등을 작성할 수 있습니다.

상속을 이용해 클래스 확장이 가능하고 상속은 extends키워드와 super 메서드를 이용해 할 수 있습니다.

```
class Person {
	  #weight; //privite
    isAlive = true;
    constructor(name) {
        this.name = name;
    }

    sayHi() {
    	console.log(`[${this.name}]: 안녕하세요!`);
    }
    static verson = 2022;
    static sayGoodnight() {
        console.log(`[공지]: 안녕히 주무세요!`);
    }
    get introduce() {
        console.log(`나는 ${this._name}입니다.`);
    }
    set name(name) {
        this._name = name
    }
}

const mom = new Person("엄마");
mom.name //"엄마"
```
