import "../style/todo.css";
import "../javascript/todo.js";

function TodoPage($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = `
    <header><h1>WEB TO DO MATE</h1></header>
    <main>
      <section id="calendar">
        <time class="mon">월</time>
        <time class="tue">화</time>
        <time class="wed">수</time>
        <time class="thr">목</time>
        <time class="fri">금</time>
        <time class="sat">토</time>
        <time class="sun">일</time>
        <span class="todo">3</span>
        <span class="todo">6</span>
        <span class="todo">5</span>
        <span class="todo">3</span>
        <span class="todo">4</span>
        <span class="todoing"></span>
        <span class="todo">3</span>
        <span class="date">4</span>
        <span class="date">5</span>
        <span class="date">6</span>
        <span class="date">7</span>
        <span class="date">8</span>
        <span class="here">9</span>
        <span class="date">10</span>
      </section>
      <div class="hidden modal">
        <input class="addInput" type="text" />
        <button class="addBtn">추가</button>
      </div>

      <section class="whattodo"></section>
    </main>

    <footer>
      <a href="/">
        <div class="footer_btn" id="homeBtn">
          <img id="home" src="../assets/home.png" />달력
        </div>
      </a>
      <a href="./mycategory.html">
        <div class="footer_btn" id="myBtn">
          <img id="home" src="../assets/user.png" />MY
        </div></a
      >
    </footer>
    <script type="module" src="../javascript/todo.js" defer></script>
    `;
  };
  this.render();
}
export default TodoPage;
