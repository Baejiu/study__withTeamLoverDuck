# DOM

- Document Object Model의 약어
- 브라우저 렌더링 시 HTML을 받아서 파싱해 브라우저가 이해할 수 있는 구조로 메모리에 등록시켜야 합니다.
- DOM은 트리형태로 이루어져 있습니다.
- 텍스트와 주석도 DOM트리에 포함됩니다.

자바스크립트에서는 DOM을 다루기 위해 `getElementsById`, `querySelector` 등과 같이 브라우저가 제공하는 DOM API를 사용해 접근할 수 있습니다.

# CSSOM

스타일시트를 참조해 브라우저가 이해할 수 있는 방식으로 변환하고 DOM과 같이 트리 구조로 구현됩니다.

- 트리구조인 이유는 페이지에 있는 객체의 최종 스타일을 계산할 때 브라우저는 하향식으로 규칙을 적용하는 방식으로 계산된 스타일을 세분화합니다.

# Rendering Tree

CSSOM 및 DOM 트리를 결합하여 렌더링 트리를 형성합니다.