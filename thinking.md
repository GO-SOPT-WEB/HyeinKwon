<aside>
💟 React 프로젝트의 폴더구조는 어떻게 설계하는것이 좋을까???

- **Presentation Component - Container Component ↔ Custom hook ↔ Atomic를 비교해보자**

## Presentation Component 
1.  사용자가 직접 보고 조작하는 컴포넌트(ui)
2.  state 직접 조작이 아닌, container component가 내려준 prop의 함수에 의해 state 변경!
3.  재사용성이 뛰어남, `this.props.children`
4.  가능한 작게 만들어야 하며, 필요시 visual 바꿈

## Container Component
1. 어떻게 동작하는 지, 어떤 로직을 수행하는 지
2. markup 구조나 style을 사용하지 않음!
3. present component에 데이터와 데이터 조작을 제공
4. props 자유롭게 받을 수 있음
5. db에 CRUD 요청 등 side effects만들 수 있음

## Presentaion & Container 사용시 장점
### 재사용성이 높고, 의존도가 낮다
### 구조에 대한 이해가 올라가고, 마크업 작업이 편하다

## Custion Hook
1. 메인 로직이 커스텀 훅(Hook)으로 전달, 사용자가 접근 할 수 있음
2. 컴포넌트의 제어가 쉬워짐
3. 로직 재사용 가능
## 장, 단점
### 구현 복잡: 로직, 렌더링 부분의 분리로 이를 연결해 주어야 함
### 제어권 부여: 사용자 훅과 JSX 컴포넌트 사이에 로직 추가하여 기본 동작 바꿀 수 있음! 


## Atomic
1. Atom: 더 이상 분해할 수 없는 기본 컴포넌트, (기본 HTML element, 글꼴, 애니메이션, 컬러 팔레트, 레이아웃)
2. Molecule: atom 결합, 고유한 특징 가짐, **한 가지 일을 함**
3. Organism: 서비스에서 표현될 수 있는 명확한 영억, 특정 컨텍스트
4. Template: page를 만들 수 있도록 organism, molecule로 구성 가능
5. Page: 유저가 볼 수 있는 실제 콘텐츠 
## Atomic 장,단점 생각
### 디자인 단위를 나누는 기준이 매우 주관적이다.
### 중복 컴포넌트가 생길 수 있다(compound 컴포넌트로 해결)
### 의존성과 복잡도가 까다롭다 
### 재사용 가능한 설계 시스템이며, 디자인 수정이 쉽다
### 페이지 레이아웃의 이해가 오래 감



- **어떤 방식을 언제 택해야 좋은 것일까?**
-> 각 팀원들의 이해도와 프로젝트에 따라 다를 것 같다. 프로젝트와 개발 팀원들을 고려하여 어떤 패턴을 도입하는 게 좋은 것인지 고민하는 시간이 있어야 효율적으로 진행이 가능하다고 생각한다. 
사실, 개발에 있어서 디자인 패턴에 대해서 깊게 생각해본 적이 없었는데 이 계기로 여러 디자인 패턴이 존재하고 각 디자인 패턴에 따라 장, 단점이 명확하게 보이며 어떻게 사용하느냐에 따라 득이 될 수도 독이 될 수도 있다는 걸 깨달았다,,,


- 프론트엔드에게 디자인 패턴이란 어떤 존재일까?
-> 옛날부터 설계하고 만들어진 패턴들은 모두 이유가 있다고 생각한다.
폴더와 파일의 효율적 관리와 재사용성, 유지보수에 있어서 모두 이득이 되는 것이기 때문이다(잘 사용한다면)
[관련 자료를 더 찾아보았다!]("https://velog.io/@teo/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C-MV-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94")

</aside>