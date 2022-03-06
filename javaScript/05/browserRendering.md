# 브라우저 렌더링의 이해

브라우저의 URL을 통해 웹사이트에 접근을 하면 브라우저는 아래의 순서로 작동합니다.

- requests/response : 서버에게 HTML파일을 요청
- loading : 받아온 파일을 로딩해 코드를 해석
- scripting : DOM/CSSOM으로 변환
- rendering : 랜더링 트리 생성
- layout : 크기,위치 계산
- painting : 계산된 요소를 구분해 나누어 그림을 그린 뒤(레이어별로)
  브라우저가 출력됩니다.
