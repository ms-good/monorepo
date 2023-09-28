# eslint rule 설명

`'no-implicit-coercion': 'error':`

설명: 명시적 형 변환을 사용하지 않도록 강제합니다. 즉, JavaScript에서 자동 형 변환을 피하도록 하는 규칙입니다.

`'no-warning-comments': ['warn', { terms: ['TODO', 'FIXME', 'XXX', 'BUG'], location: 'anywhere' }]:`

설명: 코드에서 주석으로 TODO, FIXME, XXX, BUG와 같은 특정 단어를 사용할 때 경고를 표시합니다. 이렇게 주석을 사용하면 나중에 수정해야 할 부분을 나타낼 수 있습니다.

`'curly': ['error', 'all']:`

설명: if 문, for 문 등과 같은 블록 구조에서 중괄호 {}를 사용하도록 강제합니다. 중괄호를 사용하지 않으면 블록 내부에 단일 문(statement)만 있는 경우에도 코드 가독성과 오류 방지를 위해 경고를 발생시킵니다.

`'eqeqeq': ['error', 'always', { null: 'ignore' }]:`

설명: 비교 연산자 == 대신에 엄격한 비교 연산자 ===를 사용하도록 강제합니다. 또한 null과 undefined를 비교할 때에는 엄격한 비교 연산자를 사용하지 않도록 허용합니다.

`import/extensions`

설명: import 문에서 파일 확장자를 어떻게 다룰지를 제어합니다.

`sort-imports`

설명: import 문을 어떻게 정렬할지를 제어합니다.

`import/order`

설명: import 문을 어떻게 그룹화하고 정렬할지를 제어합니다.

`'@emotion/pkg-renaming': 'error':`

설명: Emotion 라이브러리의 패키지 이름 변경에 대한 규칙을 정의합니다. 이 규칙은 Emotion 라이브러리의 사용 방식에 관한 사항을 검사합니다.

`'react/prop-types': 'off':`

설명: React 컴포넌트에서 PropTypes를 정의하지 않아도 됩니다. 이 규칙은 PropTypes를 사용하지 않도록 설정합니다.
`'react/display-name': 'off':`

설명: React 컴포넌트의 이름 표시(Display Name)를 정의하지 않아도 됩니다. 이 규칙은 컴포넌트의 이름 표시를 사용하지 않도록 설정합니다.

`'react-hooks/exhaustive-deps': 'error':`

설명: React 훅의 의존성 배열(두 번째 매개변수)을 지정할 때, 모든 의존성을 명시해야 합니다. 이 규칙은 의존성 배열을 누락하지 않도록 검사합니다.

`'react/react-in-jsx-scope': 'off':`

설명: React 컴포넌트를 JSX에서 사용할 때, import React from 'react'와 같은 import 문을 추가할 필요가 없습니다. 이 규칙은 React import 문을 사용하지 않도록 설정합니다.

`'react/no-unknown-property': ['error', { ignore: ['css', 'tw'] }]:`

설명: JSX에서 알 수 없는 HTML 속성에 대한 경고를 표시합니다. 이 규칙은 일부 예외 (예: 'css' 및 'tw')를 무시하도록 설정합니다.

`'@typescript-eslint/no-explicit-any': 'warn':`

설명: any 타입의 사용을 경고 수준(warn)으로 허용합니다. 이 규칙은 코드에서 명시적으로 any 타입을 사용하는 경우에 경고를 발생시킵니다.

`'@typescript-eslint/no-use-before-define': 'off':`

설명: 변수나 함수를 선언하기 전에 사용하는 것을 허용합니다. 이 규칙은 변수나 함수를 사용하기 전에 반드시 선언되어야 한다는 규칙을 무시합니다.

`'@typescript-eslint/no-empty-interface': 'off':`

설명: 빈 인터페이스를 허용합니다. 빈 인터페이스는 실제 구현이 없는 인터페이스를 의미하며, 일부 상황에서 유용할 수 있습니다.

`'@typescript-eslint/explicit-function-return-type': 'off':`

설명: 함수의 반환 타입을 명시적으로 지정하지 않아도 됩니다. TypeScript가 타입을 추론할 수 있는 경우에는 함수의 반환 타입을 명시하지 않아도 됩니다.
`'@typescript-eslint/no-parameter-properties': 'off':`

설명: 클래스의 생성자 파라미터를 클래스 프로퍼티로 사용하는 것을 허용합니다. 생성자 파라미터를 클래스 내부에서 별도로 선언하지 않아도 됩니다.

`'@typescript-eslint/no-var-requires': 'warn':`

설명: CommonJS require 문을 경고 수준(warn)으로 허용합니다. 이 규칙은 CommonJS 스타일의 모듈 가져오기를 사용하는 경우에 경고를 발생시킵니다.

`'@typescript-eslint/no-non-null-asserted-optional-chain': 'warn':`

설명: 비어 있지 않은 객체에서 옵셔널 체인 연산자(!.)를 사용하는 것을 경고 수준(warn)으로 허용합니다.

`'@typescript-eslint/no-inferrable-types': 'warn':`

설명: 타입을 명시적으로 지정하지 않아도 타입 추론이 가능한 경우에도 타입을 명시하도록 경고합니다.

`'@typescript-eslint/no-empty-function': 'off':`

설명: 빈 함수(구현이 없는 함수)를 허용합니다. 빈 함수를 사용할 때 경고를 발생시키지 않습니다.

`'@typescript-eslint/naming-convention': [...]:`

설명: 변수, 함수, 인터페이스, 타입 별칭 등의 이름을 지정하는 규칙을 정의합니다. 예를 들어, 변수 이름은 camelCase, 상수 이름은 UPPER_CASE, 인터페이스와 타입 별칭 이름은 PascalCase와 같이 규칙을 지정합니다.

`'@typescript-eslint/explicit-module-boundary-types': 'off':`

설명: 함수의 반환 타입이나 인자 타입을 명시적으로 지정하지 않아도 됩니다. 이 규칙은 모듈의 공개 API에 대한 타입을 명시하는 것을 요구하지 않습니다.

`'@typescript-eslint/array-type': ['error', { default: 'array-simple' }]:`

설명: 배열 타입을 사용할 때 어떤 형식을 사용할지 설정합니다. array-simple 옵션을 사용하여 T[]와 같은 간단한 배열 표기법을 권장합니다.

`'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }]:`

설명: 사용되지 않는 변수를 감지하고 에러로 표시합니다. ignoreRestSiblings: true 옵션을 사용하여 나머지 매개변수(rest parameter)를 무시하도록 설정합니다.

`'@typescript-eslint/member-ordering'`

설명: 클래스의 멤버(member)의 순서를 지정하기 위한 설정입니다. 이 규칙을 통해 클래스 내의 멤버들을 어떤 순서로 작성할지 정할 수 있습니다.
