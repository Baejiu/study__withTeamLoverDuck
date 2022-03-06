# REST API

REST는 HTTP를 기반으로 클라이언트가 서버에 리소스를 접근하는 방식을 규정한 아키텍쳐입니다.
데이터를 주고받는 웹 상에서의 통신 체계에 있어서 범용적인 스타일을 규정한 것입니다.

API는 기존에 있는 응용 프로그램을 통해서 데이터를 제공받거나 기능을 사용하고자 할 때 사용하는 인터페이스 및 규격을 말합니다.

따라서 REST API는 REST 원칙을 적용하여 서비스 API를 설계한 것을 말합니다.

## REST API의 구성

REST는 자원, 행위, 표현으로 구성되어 있으며 REST API만으로 HTTP요청의 내용을 이해할 수 있게 해줍니다.

- 자원 : 자원 자체를 뜻하며 URI(Uniform Resource Identifier)의 엔드포인트로 표현됩니다.
- 행위 : 자원에 대한 행위로 HTTP요청 메서드로 표현됩니다. GET, POST, PATCH, PUT, DELETE 등이 있습니다.
- 표현 : 자원에 대한 행위의 구체적 내용으로 페이로드로 표현됩니다.

## REST API 설계 원칙

1. URI는 리로스를 표현해야 한다.
   - 리로스를 식별할수 있는 이름으로 동사보다는 명사를 사용합니다.
2. 행위에 대한 정의는 HTTP 요청메서드를 통해 해야한다.
   HTTP요청 메서드는 클라이언트가 서버에게 요청의 종류와 리소스에 대한 행위를 알리는 방법입니다. 따라서 리소스에 대한 행위는 HTTP요청 메서드를 통해 표현해야 합니다. - GET : 리소스 조회 - POST : 리소스 생성 - PUT : 리소스 교체 - PATCH : 리소스 일부 수정 - DELETE : 리소스 삭제