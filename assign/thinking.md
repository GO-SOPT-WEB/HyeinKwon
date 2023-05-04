- React에서 상태관리는 왜 필요한가?
  => 각 컴포넌트의 props는 서로가 부모-자식 관계일 때 전달하고, 받을 수 있다. 하지만 두 컴포넌트가 서로 부모-자식 관계가 아니라면,
  props를 전달하기 위해서 큰 노력과 시간이,,든다 (`props drilling`)
  각 컴포넌트 간 데이터 연결이 많아지게 되면 어떤 컴포넌트가 어떤 props를 어디로 어떻게 넘겨주고 있는지에 관해 추적하기에 매우 힘이 들 것이다. 따라서, React에서 상태 관리가 필요하게 된다.

=> state는 리액트 컴포넌트 내부에서 바뀌는 값이다. 이때 state(상태)가 변경되면, 컴포넌트가 리렌더링되고 이때 자식 컴포넌트에게 이 state를 props로 물려주게 된다. 하지만, 프로젝트가 복잡해지고 공유해야 하는 state가 증가할 수록 매번 전달 과정을 거쳐야 하는 상황에 직면하게 된다. 따라서, state 값이 어디에서 변하는 지, 이후 이 작업으로 인해 어떤 업데이트가 발생했는 지 알아내기 힘들다

- 관리 해야 하는 상태에 대한 기준은 무엇인가?
  => 상태의 종류
  ->로컬 상태: 특정 컴포넌트 안에서만 관리
  ->지역 상태: state가 몇몇에 국한되어 영향
  ->전역 상태: 전체 혹은 여러 컴포넌트가 동시에 걸쳐 관리되는 경우
  대체로 전역 상태로 관리해야 한다 (ex, 테마 설정, 언어 설정 등, 외에도 props를 동시에 갖는 여러 경우들)
  전역 상태를 사용할 경우: 전역상태가 바뀔 때마다 리렌더가 일어날 수 있음, 변화가 잦지 않고 서비스 전반에 걸친 경우 `전역 상태` 이용

- 어떤 상태관리 라이브러리를 어떤 상황에서 사용해야 할까?
  ( 장단점 또는 간단 비교 분석 )
  =>Redux: 상태 관리를 위한 JS 라이브러리, Flux 아키텍쳐를 따르며 단반향 데이터 흐름 모델을 통해 상태 관리, 확장성을 늘려줌
  장점: 상태 예측 가능, 유지 보수 용이, 디버깅이 쉬움, 한 곳에서 관리
  단점: 코드의 중량, 읽기 전용으로 만들어 주지 않음, 연결성(`mapStateToProps`와 같은 메서드 필요)

=> MobX: functional reactive programming을 투명하게 적용
장점: 객체 지향적, 깔끔하게 구성, 캡슐화(메서드를 통해서만 state 변경)
단점: 불편한 디버깅(`console.log`이용), 함수형 구성이라면 데코레이터를 사용하기 위해 `useContext`를 사용해야 하며, 연결을 위해 `hoc`로 랩핑해야 함, 레퍼런스 부족

=> Context API:
장점: 접근성이 낮음, 러닝 커브가 낮고 간결함
단점: rendering(value값이 변할 경우 컴포넌트 또한 리랜더링) 관심사에 따라 모두 분리해서 관리해야 함

=>Recoil: meta에서 만든 상태관리 라이브러리로 기존 context의 문제, 코드 분활의 어려움을 해결하고자 만듦
장점: 간단한 인터페이스, 증분 및 분산, 컴포넌트 비수정
단점: 레퍼런스 부족, 호환성

- React에서 렌더링을 효과적으로 관리하는 방법은 무엇이 있을까?
  => state 선언 위치(컴포넌트 최상위 컴포넌트)
  => 객체 타입의 state는 최대한 분할하기
  => hooks에서 shouldComponentUpdate 대체(`React.memo`)
  => `React.memo`
  => map함수 사용시 index로 key값 사용하지 않기
  => `useMemo`: 종속 변수들이 변하지 않으면 함수를 굳이 다시 호출하지 않도록 하여 시간과 리렌더링 방지
  =>`useCallback` : 종속 변수들이 변하지 않으면 굳이 함수를 재생성하지 않고 하위 컴포넌트에 props로 전달하기

- 이를 위해 어떤 식으로 비즈니스 설계를 진행해야 할까
  => 컴포넌트 구조를 명확하고 직관적이고 최소화하기!
  또한 state의 적절한 설계!!
  컴포넌트를 `재사용성`과 `범용성`에 맞추어서 설계