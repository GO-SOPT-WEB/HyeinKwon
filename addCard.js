const tags = document.querySelector(".tag");
const imgs = document.querySelector(".image");
//,로 구분

const obj = {};

//이미지 미리보기
function loadImg(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    const preview = document.getElementById("preview");

    reader.onload = (e) => {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}

function saveIn() {
  const { value: menu } = document.querySelector("#menuInput");
  const { value: tags } = document.querySelector("#tagInput");
  const { value: category } = document.querySelector("#selectInput");

  const tagsArray = tags.split(",");

  obj = {
    menu,
    tagsArray,
  };

  localStorage.setItem("category", category);
}

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function () {
  location.href = "./salad.html";
  saveIn();
});
