import TODO_LIST from "./data.js";

const todoWrapper = document.getElementById("wrapper");
const todoContainer = document.getElementById("todoContainer");

function showCategory() {
  TODO_LIST.map((data) => {
    const categoryList = document.createElement("li");
    categoryList.classList.add("category");
    categoryList.draggable = true;

    categoryList.innerText = data.category;
    todoContainer.appendChild(categoryList);
  });
}

showCategory();

function dragCategory() {
  let categoryArray = todoContainer.childNodes;
  console.log(categoryArray);

  categoryArray.forEach((element) => {
    todoContainer.append(element);
  });
}
todoContainer.addEventListener("click", dragCategory);
