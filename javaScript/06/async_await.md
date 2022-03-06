# async/await

async와 await는 ES8에서 등장했으며, 비동기 처리를 동기처럼 동작하도로 구현할 수 있습니다.
기본적으로 Promise를 기반으로 동작합니다.

```
const getData = async () => {
  return await getDataAPI()
}
```

코드를 실행하면 await가 처리될 때 까지 기다린 뒤 반환합니다.
than, catch를 이용하지 않아도 되고, 코드도 직관적입니다.

async로 함수를 감싸서 Promise를 만들어줄 수 있고, await는 async 함수 내에서만 사용 가능합니다.
