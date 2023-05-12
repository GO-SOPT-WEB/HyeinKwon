## React에서 Props Drilling을 해결하는 전략들은 무엇이 있을까?
-> 생각나는 거 한 가지! `전역 상태 관리 라이브러리 사용` 
`redux`, `recoil`을 사용해서 해당 값이 필요한 컴포넌트에 직접 불러와 사용

-> `children` 적극 사용하기& 가능한 관련성 높은 곳에 `state` 위치 시키기 
```
export default function App() {
  const content = "Who needs me?";
  return (
    <div className="App">
      <First>
        <Second>
          <Third>
            <Props content={content} />
          </Third>
        </Second>
      </First>
    </div>
  );
}

function First({ children }) {
  return (
    <div>
      <h3>first</h3>;{children}
    </div>
  );
}

function Second({ children }) {
  return (
    <div>
      <h3>second</h3>;{children}
    </div>
  );
}

function Third({ children }) {
  return (
    <div>
      <h3>third</h3>;{children}
    </div>
  );
}

function Props({ content }) {
  return <div>{content}</div>;
}
```

-> 렌더링 될 컴포넌트를 **불필요하게 여러 컴포넌트로 나누지 않는다**

-> `defaultProps` 를 필수 컴포넌트에 사용하지 않는다


- 그렇다면 나는 합동세미나, 솝커톤, 웹잼에서 어떤걸 시도해보고 싶은가?
  👉 또 그이유는 무엇인가?!
-> 사실 `recoil`을 써 보고 싶긴 합니다! (유일하게 경험해 보았던 상태관리라이브러리,,,라서)왜냐하면, 일단 경험을 하긴 했는데 정말 "경험"에 가까워서 제대로 파악을 못 한 거 같아요. 그리고 사용할 당시에 굉장히 흥미로웠던 기억이 남습니다! 
그리고 너무 그냥 쓰는 데에만 급급해서 그냥 참고만 하고 제대로 공부도 안하고
따라하는 코딩이었기 때문에,,, 이번에는 제대로 공부하고 이해해서 제대로 써보고
정말 써봤다! 라는 말을 내뱉을 수 있었으면 좋겠습니다! 