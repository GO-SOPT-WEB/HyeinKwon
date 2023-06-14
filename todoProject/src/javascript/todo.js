import TODOs from "./data.js";

const DONE_CLASSNAME = "done";
let clickCategoryId;

function initToDO() {
  const section = document.querySelector(".whattodo");

  //   할 일 카테고리 보이기
  TODOs.map(({ category, todos }) => {
    const article = document.createElement("article");
    article.className = "todo_wrapper";
    section.appendChild(article);

    const title = document.createElement("button");
    title.id = category;
    title.className = "list";
    article.appendChild(title);
    title.innerText = category;

    title.addEventListener("click", function (event) {
      clickCategoryId = event.target.id;
      openModal();
    });
    const ul = document.createElement("ul");
    article.appendChild(ul);

    // 할 일 리스트 보이기
    todos.forEach(({ todo, done }) => {
      const li = document.createElement("li");
      li.innerText = `
      ${todo}
      `;
      ul.append(li);

      if (!done) {
        li.classList.add("not_done");
      } else {
        li.classList.add("done");
      }

      li.addEventListener("click", function () {
        if (li.classList.contains("not_done")) {
          li.classList.add("done");
          li.classList.remove("not_done");
          innerHeart();
          notDoneNum();
        } else if (li.classList.contains("done")) {
          li.classList.remove("done");
          li.classList.add("not_done");
          innerHeart();
          notDoneNum();
        }
      });
    });
  });
}

//렌더링
initToDO();
innerHeart();

//미완료 할 일 갯수 세는 함수
function notDoneNum() {
  const leftTodo = document.querySelectorAll(".not_done"); //안 끝낸 것
  const heart = document.querySelector(".todoing");

  let count = [];

  //끝난 부분 계산
  leftTodo.forEach((spanData) => {
    if (spanData.classList.contains(DONE_CLASSNAME)) {
      count.push(spanData);
    }
  });
  heart.innerText = leftTodo.length - count.length;
}

//하트 안에 있는 숫자 구현
function innerHeart() {
  const leftTodo = document.getElementsByClassName("not_done"); //안 끝낸 것
  const leftTodoList = Array.from(leftTodo);
  const heart = document.querySelector(".todoing");

  heart.innerText = leftTodoList.length;
}

//모달
const modal = document.querySelector(".modal");
const addBtn = modal.querySelector(".addBtn");

addBtn.addEventListener("click", function () {
  closeModal();
  addToDo();
});

function openModal() {
  modal.classList.remove("hidden");
  const newToDo = modal.querySelector(".addInput");
  newToDo.focus();
  newToDo.value = null;
}

function closeModal() {
  modal.classList.add("hidden");
}

//Todo 추가
function addToDo() {
  const newToDo = modal.querySelector(".addInput").value;
  const clickArticle = document.querySelector(`#${clickCategoryId}`).parentNode;

  const span = document.createElement("span");
  clickArticle.appendChild(span);
  span.innerHTML = `
    ${newToDo}
    `;
  span.classList.add("not_done");
  innerHeart();

  span.addEventListener("click", function () {
    span.classList.toggle(DONE_CLASSNAME);
    notDoneNum();
  });

  console.log(clickArticle.parentNode);
}
